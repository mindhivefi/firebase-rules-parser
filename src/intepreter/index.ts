import { ParserRuleContext, Recognizer, Token } from 'antlr4';
import { ParseTreeWalker } from 'antlr4/tree/Tree';
import * as merge from 'deepmerge';

import { parseFirebaseRulesFromString } from '..';
import { FirebaseRulesListener } from '../parser/FirebaseRulesListener';
import {
  AllowContext,
  AllowKeyContext,
  ArgContext,
  ArgDeclarationContext,
  ArithmeticExpressionContext,
  ArrayExpressionContext,
  BinaryExpressionContext,
  BooleanExpressionContext,
  CompareExpressionContext,
  ExpressionContext,
  FieldReferenceWithIdentifierContext,
  FieldReferenceWithMemberRefContext,
  FirebaseRulesParser,
  FunctionCallContext,
  FunctionDeclarationContext,
  GetPathExpressionVariableContext,
  GetPathVariableContext,
  InExpressionContext,
  LogicalExpressionContext,
  MatcherContext,
  MemberFunctionExpressionContext,
  MemberReferenceExpressionContext,
  NullExpressionContext,
  NumberExpressionContext,
  ObjectReferenceContext,
  PathVariableContext,
  RangeExpressionContext,
  RuleFunctionCallContext,
  ServiceContext,
  StringExpressionContext,
  UnaryExpressionContext,
} from '../parser/FirebaseRulesParser';
import { FirebasePathAccessRights } from './FirebasePathAccessRights';
import { FirebaseRulesContext } from './FirebaseRulesContext';
import { FirestoreRulesClosure } from './FirestoreRuleClosure';
import { defaultFirestoreRequest, MockFirestoreRequest } from './MockFirestoreRequest';
import { defaultFirestoreResource, MockFirestoreResource } from './MockFirestoreResource';
import registerSystemFunctions from './system';
import { MatchPattern } from './utils/patternMatch';

export type AllowKey = 'create' | 'read' | 'write' | 'update' | 'list' | 'delete';

export interface AllowRule {
  pattern: MatchPattern;
  allowKeys: AllowKey[];
  if: ExpressionCallback;
}

export type ExpressionCallback = (context: ExtendedFirebaseRulesContext, closure: FirestoreRulesClosure) => any;

enum StackItemType {
  ALLOW = 'allow',
  ARITHMETIC = 'arithmetic',
  ARRAY = 'array',
  ARRAY_CELL_REF = 'array-cell-ref',
  BINARY = 'binary',
  COMPARE = 'compare',
  CLOSURE = 'closure',
  EXPRESSION = 'expression',
  FUNCTION_CALL = 'function-call',
  FUNCTION_DECLARATION = 'fun-dec',
  GET = 'get',
  MEMBER_FIELD_REF = 'identifier-field-ref',
  LOGICAL = 'logical',
  OBJECT_REFERENCE = 'objectref',
  PARENTHESIS = 'parenthesis',
  RESOLVED = 'resolved',
  UNARY = 'unary',
  VALUE = 'value',
}

type StackItem =
  | StackItemBase
  | ArrayCellRefItem
  | ArrayStackItem
  | MemberFieldRefItem
  | ClosureStackItem
  | FunctionCallStackItem;

interface StackItemBase {
  type: StackItemType;
  callback?: ExpressionCallback;
  debug: string;
  obj?: any;
  // ctx?: any;
}

interface ArrayStackItem extends StackItemBase {
  type: StackItemType.ARRAY;
  callback: ExpressionCallback;
  items: ExpressionCallback[];
}

interface ClosureStackItem extends StackItemBase {
  type: StackItemType.CLOSURE;
  callbacks: ExpressionCallback[];
}

interface FunctionCallStackItem extends StackItemBase {
  type: StackItemType.FUNCTION_CALL;
  argExpressions: ExpressionCallback[];
  callback: ExpressionCallback;
}

interface MemberFieldRefItem extends StackItemBase {
  type: StackItemType.MEMBER_FIELD_REF;
  callback: ExpressionCallback;
}

interface ArrayCellRefItem extends StackItemBase {
  type: StackItemType.ARRAY_CELL_REF;
  callback: ExpressionCallback;
}

interface ExtendedFirebaseRulesContext extends FirebaseRulesContext {
  exit: boolean;
  hasAccess: {
    create?: boolean;
    read?: boolean;
    write?: boolean;
    update?: boolean;
    list?: boolean;
    delete?: boolean;
  };
  path: string;
}

export interface FirestoreRulesFunctionDescriptor {
  callback: (context: FirebaseRulesContext, closure: FirestoreRulesClosure, self?: any) => any;
  argNames: string[];
}

export const defaultFirebaseRulesContext: Partial<FirebaseRulesContext> = {
  auth: merge(defaultFirestoreRequest.auth, {}),
  resource: merge(defaultFirestoreResource, {}),
};

interface ClosureContext {
  variables: { [fieldName: string]: any };
  callbacks: ExpressionCallback[];
}
// tslint:disable-next-line: jsdoc-format
/**
 * Create a default firebare rule context to be used when calling rules rights.
 *
 * Function uses deep merge, so you can set needed values in sub objects like,
 *  ```typescript
 * createFirebaseRulesContext({
 *   auth: {
 *     uid: '123'
 *   }
 * });
 * ```
 * This will override only the uid property and will leave other properties intact.
 *
 * @export
 * @param {Partial<FirebaseRulesContext>} [overrides] Values, to be overrided from default values.
 * @param {boolean} authenticated When true, a default mock user info is given for context. Default value is `false`.
 * @returns {FirebaseRulesContext}
 */
export function createFirebaseRulesContext(
  overrides?: Partial<FirebaseRulesContext>,
  authenticated: boolean = false
): FirebaseRulesContext {
  const context = merge(
    defaultFirebaseRulesContext,
    authenticated
      ? {}
      : {
          auth: {
            uid: null,
            email: null,
          },
        }
  );
  return overrides ? merge(context, overrides) : context;
}

/**
 * Firebase Rules Intepreter testing user rights based on rules script
 */
export class FirebaseRulesIntepreter {
  private _parser: _FirebaseRulesIntepreter;

  public get request(): MockFirestoreRequest {
    return this._parser.request;
  }

  public set request(value: MockFirestoreRequest) {
    this._parser.request = value;
  }
  public get resource(): MockFirestoreResource {
    return this._parser.resource;
  }

  public set resource(value: MockFirestoreResource) {
    this._parser.resource = value;
  }
  /**
   * Get the namespace used in rules -file
   *
   * @readonly
   * @memberof RulesParser
   */
  public get namespace() {
    return this._parser.namespace;
  }

  constructor() {
    this._parser = new _FirebaseRulesIntepreter();
  }

  public init = (rulesFile: string): FirebaseRulesIntepreter => {
    this._parser.init(rulesFile);
    return this;
  }

  /**
   * Elaborate access rights for given path within given context
   *
   * @memberof RulesParser
   */
  public hasAccess = (path: string, context: FirebaseRulesContext): FirebasePathAccessRights => {
    return this._parser.hasAccess(path, context);
  }
}

class _FirebaseRulesIntepreter extends FirebaseRulesListener {
  public get request(): MockFirestoreRequest {
    return this._request;
  }

  public set request(value: MockFirestoreRequest) {
    this._request = value;
  }
  public get resource(): MockFirestoreResource {
    return this._resource;
  }

  public set resource(value: MockFirestoreResource) {
    this._resource = value;
  }
  /**
   * Get the namespace used in rules -file
   *
   * @readonly
   * @memberof RulesParser
   */
  public get namespace() {
    return this._namespace;
  }

  private _globalClosure: FirestoreRulesClosure;

  private _request: MockFirestoreRequest = defaultFirestoreRequest;
  private _resource: MockFirestoreResource = defaultFirestoreResource;
  private allowRules: AllowRule[] = [];

  private _stack: StackItem[] = [];
  // private closure: FirestoreRulesClosureContext = new FirestoreRulesClosureContext();

  private pathElements: string[] = [];
  private _namespace: string;
  private _parser?: FirebaseRulesParser;

  constructor() {
    super();
    this.initGlobalClosure();
  }

  public init = (rulesFile: string): _FirebaseRulesIntepreter => {
    this._stack = [];

    this._parser = parseFirebaseRulesFromString(rulesFile);
    this._parser.addErrorListener({
      syntaxError: (
        recognizer: Recognizer,
        offendingSymbol: Token,
        line: number,
        column: number,
        msg: string,
        e: any
      ) => {
        // tslint:disable-next-line: no-console
        console.error(`${msg} at line ${line} column ${column}`);
        const source = this.parseSourceToLines(rulesFile);
        // tslint:disable-next-line: no-console
        console.error(source[line - 1]);
        const spaces = ' '.repeat(column - 1);
        // tslint:disable-next-line: no-console
        console.error(spaces + '^');
      },
      reportAmbiguity: (
        recognizer: Recognizer,
        dfa: any,
        startIndex: number,
        stopIndex: number,
        exact: any,
        ambigAlts: any,
        configs: any
      ) => {
        // tslint:disable-next-line: no-console
        console.error(`Ambiguity: ' + ${ambigAlts} at line ${startIndex} column ${stopIndex}`);
      },
      reportAttemptingFullContext: (
        recognizer: Recognizer,
        dfa: any,
        startIndex: number,
        stopIndex: number,
        conflictingAlts: any,
        configs: any
      ) => {
        // tslint:disable-next-line: no-console
        console.error(conflictingAlts);
      },
      reportContextSensitivity: (
        recognizer: Recognizer,
        dfa: any,
        startIndex: number,
        stopIndex: number,
        conflictingAlts: any,
        configs: any
      ) => {
        // tslint:disable-next-line: no-console
        console.error(conflictingAlts);
      },
    });

    this.walkAST(this._parser);
    return this;
  }

  public defaultResult() {
    return 0;
  }

  /**
   * Elaborate access rights for given path within given context
   *
   * @memberof RulesParser
   */
  public hasAccess = (path: string, context: FirebaseRulesContext): FirebasePathAccessRights => {
    const moduleClosure = this.newClosure();

    const internalContext = {
      ...context,
      hasAccess: {},
      exit: false,
      path,
    };

    this._stack[0].callback!(internalContext, moduleClosure);

    return internalContext.hasAccess;
  }

  public enterService = (ctx: ServiceContext) => {
    const callbacks: ExpressionCallback[] = [];
    this._namespace = ctx.getChild(1).getText();

    this._stack.push({
      type: StackItemType.CLOSURE,
      debug: 'service',
      obj: callbacks,
      callback: (context, closure) => this.executeClosure(context, closure, callbacks),
    });
  }

  public enterMatcher = (ctx: MatcherContext) => {
    if (ctx.getChildCount() > 0) {
      const path = ctx.getChild(1);
      const callbacks: ExpressionCallback[] = [];

      const pathElement = this.generatePath(path);

      this._stack.push({
        type: StackItemType.CLOSURE,
        debug: ctx.getText(),
        obj: callbacks,
        callback: (context: ExtendedFirebaseRulesContext, closure: FirestoreRulesClosure) => {
          const newClosure = closure.open();
          newClosure.path = pathElement;

          const matchPattern = new MatchPattern(newClosure.getPath()); // TODO optimize

          const variables = matchPattern.matchPrefix(context.path);
          if (variables) {
            newClosure.addValues(variables);
            this.executeClosure(context, newClosure, callbacks);
          }
        },
      });
    } else {
      throw new Error('Internal error: match -element without child elements.');
    }
  }

  public exitMatcher = (ctx: MatcherContext) => {
    // this.pathElements.pop();
    // this.closure.close();
    const closure = this._stack.pop();

    const parentClosure = this.peek();
    parentClosure.obj.push(closure!.callback);
  }

  public enterAllow = (ctx: AllowContext) => {
    const path = this.getCurrentPath();
    const pattern = new MatchPattern(path);

    const allowKeys: AllowKey[] = [];

    const currentAllowRule = {
      pattern, // TODO remove
      allowKeys,
      if: (context: FirebaseRulesContext, closure: FirestoreRulesClosure) => false,
    };
    this._stack.push({
      type: StackItemType.ALLOW,
      obj: currentAllowRule,
      debug: ctx.getText(),
      callback: (context, closure) => {
        const hasAccess = currentAllowRule.if(context, closure);
        for (const key of allowKeys) {
          context.hasAccess[key] = context.hasAccess[key] || hasAccess;
        }
      },
    });

    // this.allowRules.push(currentAllowRule);
  }

  public exitAllow = (ctx: AllowContext) => {
    const item = this._stack.pop();
    if (!item) {
      throwError('Internal error', ctx);
      return;
    }
    if (item.type !== StackItemType.ALLOW) {
      const allowItem = this._stack.pop();
      if (!allowItem) {
        throwError('Internal error', ctx);
        return;
      }
      allowItem.obj.if = item.callback;

      const closure = this.peek();
      closure.obj.push(allowItem.callback);
    } else {
      // No expression is give, so allow will treated as true for all values
      const closure = this.peek();
      closure.obj.push(() => true);
    }
  }

  public enterAllowKey = (ctx: AllowKeyContext) => {
    const item = this.peek();

    const currentAllowRule = item.obj as AllowRule;
    if (!item.obj) {
      throwError('Allow key defined while no allow operation is active.', ctx);
      return;
    }
    currentAllowRule.allowKeys.push(ctx.getText() as AllowKey);
  }

  public exitCompareExpression = (ctx: CompareExpressionContext) => {
    this.handleBinaryOperation(StackItemType.COMPARE, ctx);
  }

  public exitInExpression = (ctx: InExpressionContext) => {
    this.handleBinaryOperation(StackItemType.ARITHMETIC, ctx);
  }

  public exitArithmeticExpression = (ctx: ArithmeticExpressionContext) => {
    this.handleBinaryOperation(StackItemType.ARITHMETIC, ctx);
  }

  public exitLogicalExpression = (ctx: LogicalExpressionContext) => {
    this.handleBinaryOperation(StackItemType.LOGICAL, ctx);
  }

  public exitBinaryExpression = (ctx: BinaryExpressionContext) => {
    this.handleBinaryOperation(StackItemType.BINARY, ctx);
  }

  public exitUnaryExpression = (ctx: UnaryExpressionContext) => {
    const value = this._stack.pop();
    // toto undefined
    const operator = ctx.getChild(0).symbol.text;

    this._stack.push({
      type: StackItemType.UNARY,
      debug: ctx.getText(),
      callback: this.resolveUnaryOperation(operator, value!, ctx),
    });
  }

  public enterArrayExpression = (ctx: ArrayExpressionContext) => {
    const callback = (context: ExtendedFirebaseRulesContext, closure: FirestoreRulesClosure) => {
      return arrayItem.items.map(expression => expression(context, closure));
    };

    const arrayItem: ArrayStackItem = {
      type: StackItemType.ARRAY,
      debug: ctx.getText(),
      items: [],
      callback,
    };
    this.push(arrayItem);
  }

  public exitArrayExpression = (ctx: ArrayExpressionContext) => {
    const items: ExpressionCallback[] = [];
    while (this.peek().type !== StackItemType.ARRAY) {
      items.unshift(this.pop().callback!);
    }
    const item = this.peek() as ArrayStackItem;
    item.items = items;
  }

  public exitMemberReferenceExpression = (ctx: MemberReferenceExpressionContext) => {
    const expression = this._stack.pop();
    const fieldName = ctx.getChild(2).getText();

    const item: MemberFieldRefItem = {
      type: StackItemType.MEMBER_FIELD_REF,
      debug: ctx.getText(),
      callback: (context, closure) => {
        const value = expression!.callback!(context, closure);
        return value[fieldName];
      },
    };
    this.push(item);
  }

  public exitRangeExpression = (ctx: RangeExpressionContext) => {
    const arrayExpression = this.pop();
    const expression = this.pop();

    const item: ArrayCellRefItem = {
      type: StackItemType.ARRAY_CELL_REF,
      debug: ctx.getText(),
      callback: (context, closure) => {
        const index = arrayExpression!.callback!(context, closure);
        const value = expression!.callback!(context, closure);
        return value[index];
      },
    };
    this.push(item);
  }

  public enterMemberFunctionExpression = (ctx: MemberFunctionExpressionContext) => {
    const functionName = ctx.getChild(2).getText();

    const argCallbacks: ExpressionCallback[] = [];
    // const closure = this.closure.current;

    const itemContext = {
      callbacks: argCallbacks,
      expression: undefined,
    };
    this._stack.push({
      type: StackItemType.FUNCTION_CALL,
      debug: ctx.getText(),
      obj: itemContext,
      callback: (context, closure) => {
        const fun = closure.getValue(functionName) as FirestoreRulesFunctionDescriptor;
        if (!fun) {
          throwError(
            `Function with name ${functionName} was not found. Please, make sure that the function name is correctly spelled and it is available in this scope.`,
            ctx
          );
        }
        const self = (itemContext.expression as any).callback(context, closure);

        // const args: any[] = [];
        let index = 0;

        const funClosure = closure.open();

        for (const callback of argCallbacks) {
          const callbackResult = callback(context, funClosure);
          // args.push(callbackResult);
          funClosure.self[fun.argNames[index++]] = callbackResult;
        }
        const value = fun.callback(context, funClosure, self);

        funClosure.close();

        return value;
      },
    });
  }

  public exitMemberFunctionExpression = (ctx: MemberFunctionExpressionContext) => {
    const expression = this._stack.pop();
    const item = this.peek();
    item.obj.expression = expression;
  }

  public enterFunctionCall = (ctx: FunctionCallContext) => {
    const functionName = ctx.getChild(0).getText();

    const argExpressions: ExpressionCallback[] = [];
    const fieldRefs: any[] = [];

    const functionCallItem: FunctionCallStackItem = {
      type: StackItemType.FUNCTION_CALL,
      debug: ctx.getText(),
      argExpressions,
      callback: (context, closure) => {
        const fun = closure.getValue(functionName) as FirestoreRulesFunctionDescriptor;
        if (!fun) {
          throwError(
            `Function with name ${functionName} was not found. Please, make sure that the function name is correctly spelled and it is available in this scope.`,
            ctx
          );
        }
        let index = 0;

        const funClosure = closure.open();

        for (const callback of argExpressions) {
          const callbackResult = callback(context, closure);
          funClosure.self[fun.argNames[index++]] = callbackResult;
        }

        let value = fun.callback(context, funClosure);

        funClosure.close();

        if (fieldRefs.length > 0) {
          value = this.getFieldValueFromObject(context, value, fieldRefs, 0, closure);
          if (value) {
            return value;
          }
          throwError(`Null value error, field ${ctx.getText()} do not exists`, ctx);
        }

        return value;
      },
    };

    this.push(functionCallItem);
  }

  public exitArg = (ctx: ArgContext) => {
    const expression = this.pop();
    const item = this.peek() as FunctionCallStackItem;
    if (item.type !== StackItemType.FUNCTION_CALL) {
      throw new Error('Expecting a function call but found ' + expression.type);
    }

    const argCallbacks = item.argExpressions;
    argCallbacks.push(expression.callback!);
  }

  public exitMemberArg = (ctx: ArgContext) => {
    const expression = this._stack.pop();
    const item = this.peek(1);

    const argCallbacks = item.obj.callbacks as ExpressionCallback[];
    if (!item.obj) {
      throwError('Allow key defined while no allow operation is active.', ctx);
      return;
    }
    argCallbacks.push(expression!.callback!);
  }

  public enterFunctionDeclaration = (ctx: FunctionDeclarationContext) => {
    this._stack.push({
      type: StackItemType.FUNCTION_DECLARATION,
      callback: () => true,
      obj: [],
      debug: '',
    });
  }

  public exitArgDeclaration = (ctx: ArgDeclarationContext) => {
    const item = this.peek();
    item.obj.push(ctx.getText());
  }

  public exitFunctionDeclaration = (ctx: FunctionDeclarationContext) => {
    const funcBody = this._stack.pop();
    const funDec = this._stack.pop();
    const parentClosure = this.peek();

    const argNames = funDec!.obj;

    if (!funcBody) {
      throwError(`Function not found from stack`, ctx);
      return;
    }
    const functionName = ctx.getChild(1).symbol.text;

    // TODO check from closure item
    // if (this.closure.current.self[functionName]) {
    //   throwError(`Function with name ${functionName} already exists`, ctx);
    //   return;
    // }

    parentClosure.obj.push((context: ExtendedFirebaseRulesContext, closure: FirestoreRulesClosure) => {
      const desc: FirestoreRulesFunctionDescriptor = {
        callback: funcBody.callback!,
        argNames,
      };
      closure.addValues({
        [functionName]: desc,
      });

      return funcBody.callback!(context, closure);
    });
  }

  public exitNumberExpression = (ctx: NumberExpressionContext) => {
    this.handleValueExpression(ctx);
  }

  public exitStringExpression = (ctx: StringExpressionContext) => {
    let value = ctx.getText();
    value = value.substr(1, value.length - 2);
    this._stack.push({
      type: StackItemType.VALUE,
      debug: ctx.getText(),
      callback: () => value,
    });
  }

  public exitBooleanExpression = (ctx: BooleanExpressionContext) => {
    this._stack.push({
      type: StackItemType.VALUE,
      callback: () => JSON.parse(ctx.getText()),
      debug: ctx.getText(),
    });
  }

  public exitNullExpression = (ctx: NullExpressionContext) => {
    this._stack.push({
      type: StackItemType.VALUE,
      callback: () => null,
      debug: ctx.getText(),
    });
  }

  public enterObjectReference = (ctx: ObjectReferenceContext) => {
    const identifier = ctx.getChild(0).getText();

    const fieldRefs = [identifier];

    // const closure = this.closure.current;

    this._stack.push({
      type: StackItemType.OBJECT_REFERENCE,
      obj: fieldRefs,
      debug: ctx.getText(),
      callback: (context, closure) => {
        const objectIdentifier = this.refValue(context, fieldRefs[0], closure);
        let obj = closure.getValue(objectIdentifier);

        obj = this.getFieldValueFromObject(context, obj, fieldRefs, 1, closure);
        if (obj || obj === '') {
          return obj;
        }
        throwError(`Null value error, field ${ctx.getText()} do not exists`, ctx);
      },
    });
  }

  public exitObjectReferenceExpression = (ctx: ObjectReferenceContext) => {
    const fieldName = ctx.getText();

    this._stack.push({
      type: StackItemType.OBJECT_REFERENCE,
      debug: ctx.getText(),
      callback: (context, closure) => {
        const objectIdentifier = this.refValue(context, fieldName, closure);
        return closure.getValue(objectIdentifier);
      },
    });
  }

  public enterRuleFunctionCall = (ctx: RuleFunctionCallContext) => {
    const functionName = ctx.getChild(0).getText();

    const argCallbacks: ExpressionCallback[] = [];
    const fieldRefs: any[] = [];

    // const closure = this.closure.current;

    this._stack.push({
      type: StackItemType.FUNCTION_CALL,
      debug: ctx.getText(),
      obj: {
        callbacks: argCallbacks,
        fieldRefs,
      },
      callback: (context, closure) => {
        let fun;
        switch (functionName) {
          case 'get':
            fun =
              context.onGetCall ||
              (() => {
                // tslint:disable-next-line
                throwError(
                  'get -function called but there is no onGetCall handler degined on context. Please override onGetCall trigger on context.',
                  ctx
                );
              });
            break;

          case 'exists':
            fun =
              context.onExistsCall ||
              // tslint:disable-next-line
              (() => {
                throwError(
                  'exists -function called but there is no onGetCall handler degined on context. Please override onExistCall trigger on context.',
                  ctx
                );
              });
            break;
          default:
            throwError(`Unidentified function ${functionName}`, ctx);
            return;
        }

        let path: string = '';
        for (const callback of argCallbacks) {
          const callbackResult = typeof callback === 'string' ? callback : callback(context, closure);
          path += '/' + callbackResult;
        }
        let value = fun(path);

        if (fieldRefs.length > 0) {
          value = this.getFieldValueFromObject(context, value, fieldRefs, 0, closure);
          if (value) {
            return value;
          }
          throwError(`Null value error, field ${ctx.getText()} do not exists`, ctx);
        }
        return value;
      },
    });
  }

  public exitGetPathExpressionVariable = (ctx: GetPathExpressionVariableContext) => {
    const expression = this._stack.pop();
    const item = this.peek();

    if (!item.obj) {
      throwError('Allow key defined while no allow operation is active.', ctx);
      return;
    }
    const argCallbacks = item.obj.callbacks;
    argCallbacks.push(expression!.callback!);
  }

  public exitGetPathVariable = (ctx: GetPathVariableContext) => {
    const item = this.peek();
    const value = ctx.getText();
    const argCallbacks = item.obj.callbacks;
    if (!item.obj) {
      throwError('Allow key defined while no allow operation is active.', ctx);
      return;
    }
    argCallbacks.push(value);
  }

  public exitFieldReferenceWithIdentifier = (ctx: FieldReferenceWithIdentifierContext) => {
    const fieldName = ctx.getChild(1).getText();
    const expressionItem = this.pop();

    const fieldRefItem: MemberFieldRefItem = {
      type: StackItemType.MEMBER_FIELD_REF,
      debug: ctx.getText(),
      callback: (context, closure) => {
        const value = expressionItem!.callback!(context, closure);
        if (typeof value !== 'object') {
          throwError(`Unidentfied type ${typeof value} for field ref.`, ctx);
          return;
        }
        return value[fieldName];
      },
    };

    this.push(fieldRefItem);
  }

  public exitFieldReferenceWithMemberRef = (ctx: FieldReferenceWithMemberRefContext) => {
    const expression = this._stack.pop();
    if (!expression) {
      throwError('Internal error, no expression found in memberRef', ctx);
      return;
    }
    const item = this.peek();
    item.obj.push(expression.callback);
  }

  private executeClosure = (
    context: ExtendedFirebaseRulesContext,
    closure: FirestoreRulesClosure,
    callbacks: ExpressionCallback[]
  ) => {
    if (context.exit) {
      return;
    }
    const subClosure = closure.open();

    for (const callback of callbacks) {
      callback(context, subClosure);
      if (context.exit) {
        return;
      }
    }
  }

  private refValue = (
    context: ExtendedFirebaseRulesContext,
    value: string | ExpressionCallback,
    closure: FirestoreRulesClosure
  ) => {
    if (typeof value === 'string') {
      return value;
    }
    return value(context, closure);
  }

  private getFieldValueFromObject = (
    context: ExtendedFirebaseRulesContext,
    obj: any,
    fieldRefs: Array<string | ExpressionCallback>,
    startIndex: number,
    closure: FirestoreRulesClosure
  ) => {
    for (let i = startIndex; i < fieldRefs.length; i++) {
      if (!obj) {
        break;
      }
      const value = this.refValue(context, fieldRefs[i], closure);
      obj = obj[value];
    }
    return obj;
  }

  private parseSourceToLines = (source: string): string[] => source.split('\n');

  private generatePath = (path: any): string => {
    let result = '';

    for (let i = 0; i < path.getChildCount(); i++) {
      const child = path.getChild(i);

      if (child instanceof PathVariableContext) {
        for (let j = 0; j < child.getChildCount(); j++) {
          result += child.getChild(j).symbol.text;
        }
      } else {
        result += child.symbol.text;
      }
    }
    return result;
  }

  private resolveUnaryOperation = (
    operation: string,
    expression: StackItem,
    ctx: ExpressionContext
  ): ExpressionCallback => {
    if (!(expression && operation)) {
      throwError(`Internal error`, ctx);
    }

    return (context, closure) => {
      const value = expression.callback!(context, closure);

      switch (operation) {
        case '!':
          return !value;
        case '-':
          return -value;

        default:
          throw new Error(`Unidentified operator: ${operation} at line ${ctx.start.line} column ${ctx.start.start}.`);
      }
    };
  }

  private resolveBinaryOperation = (
    left: StackItem,
    operator: string,
    right: StackItem,
    ctx: ExpressionContext
  ): ExpressionCallback => {
    if (!(right && left)) {
      throwError(`Internal error`, ctx);
    }

    return (context, closure) => {
      const leftValue = left.callback!(context, closure);
      const rightValue = right.callback!(context, closure);

      switch (operator) {
        case '<':
          return leftValue < rightValue;
        case '<=':
          return leftValue <= rightValue;

        case 'in': {
          if (Array.isArray(rightValue)) {
            // List in operator => check if an array has a value
            return rightValue.includes(leftValue);
          }
          if (typeof rightValue === 'object') {
            // Map in operator => check if the object has a key
            return rightValue.hasOwnProperty(leftValue);
          }

          throwError(
            'In operatation must have a list or and map as target, but found type of ' + typeof rightValue,
            ctx
          );
          return false;
        }
        case '==':
          if (Array.isArray(leftValue)) {
            if (Array.isArray(rightValue)) {
              if (leftValue.length !== rightValue.length) {
                return false;
              }
              for (let i = 0; i < leftValue.length; i++) {
                if (leftValue[i] !== rightValue[i]) {
                  return false;
                }
              }
              return true;
            }
            return false;
          }
          if (Array.isArray(rightValue)) {
            return false;
          }
          return leftValue === rightValue;
        case '!=':
          return leftValue !== rightValue;
        case '>':
          return leftValue > rightValue;
        case '>=':
          return leftValue >= rightValue;
        case '+':
          return leftValue + rightValue;
        case '-':
          return leftValue - rightValue;
        case '*':
          return leftValue * rightValue;
        case '/':
          return leftValue / rightValue;
        case '%':
          return leftValue % rightValue;
        case '&&':
          return leftValue && rightValue;
        case '||':
          return leftValue || rightValue;
        case '^':
          return leftValue ^ rightValue;

        default:
          throw new Error(`Unidentified operator: ${operator} at line ${ctx.start.line} column ${ctx.start.start}.`);
      }
    };
  }
  private getCurrentPath = () => {
    let result = '';
    for (const pathElement of this.pathElements) {
      result += pathElement;
    }
    return result;
  }
  /**
   * Map rules in file to paths to be accessed
   *
   * @private
   * @memberof RulesParser
   */
  private walkAST = (parser: FirebaseRulesParser) => {
    const service = parser.service();

    ParseTreeWalker.DEFAULT.walk(this, service);
  }

  private initGlobalClosure = () => {
    this._globalClosure = new FirestoreRulesClosure();
    registerSystemFunctions(this._globalClosure);
  }

  private push(item: StackItem) {
    this._stack.push(item);
  }

  private pop() {
    const item = this._stack.pop() as StackItem;
    return this.stackItemWithType(item);
  }

  private stackItemWithType(item: StackItem) {
    switch (item.type) {
      case StackItemType.FUNCTION_CALL:
        return item as FunctionCallStackItem;
      case StackItemType.CLOSURE:
        return item as ClosureStackItem;
      default:
        return item;
    }
  }

  private newClosure() {
    const closure = new FirestoreRulesClosure(this._globalClosure);
    closure.self.request = this.request;
    closure.self.resource = this.resource;
    return closure;
  }

  private peek(distance: number = 0) {
    return this.stackItemWithType(this._stack[this._stack.length - 1 - distance]);
  }

  private handleValueExpression(ctx: NumberExpressionContext | StringExpressionContext) {
    const value = JSON.parse(ctx.getText());
    this._stack.push({
      type: StackItemType.VALUE,
      debug: ctx.getText(),
      callback: () => value,
    });
  }

  private handleBinaryOperation(type: StackItemType, ctx: ParserRuleContext) {
    const right = this._stack.pop();
    const left = this._stack.pop();
    const operator = ctx.getChild(1).getText();
    this._stack.push({
      type,
      debug: operator,
      callback: this.resolveBinaryOperation(left!, operator, right!, ctx),
    });
  }
}

function throwError(message: string, ctx: ParserRuleContext): never {
  throw new Error(
    `${message} at line ${ctx.start.line} column ${ctx.start.start}. ${ctx.getSourceInterval().toString()}`
  );
}
