import { ParserRuleContext, Recognizer, Token } from 'antlr4';
import { ParseTreeWalker } from 'antlr4/tree/Tree';

import { isFlowBaseAnnotation } from '@babel/types';
import * as merge from 'deepmerge';
import { parseFirebaseRulesFromString } from '..';
import { FirebaseRulesListener } from '../parser/FirebaseRulesListener';
import {
  AllowContext,
  AllowKeyContext,
  ArgContext,
  ArgDeclarationContext,
  ArithmeticExpressionContext,
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
  LogicalExpressionContext,
  MatcherContext,
  NamespaceContext,
  NullExpressionContext,
  NumberExpressionContext,
  ObjectReferenceContext,
  PathVariableContext,
  RuleFunctionCallContext,
  StringExpressionContext,
  UnaryExpressionContext,
} from '../parser/FirebaseRulesParser';
import { FirebasePathAccessRights } from './FirebasePathAccessRights';
import { defaultFirestoreRequest, MockFirestoreRequest } from './MockFirestoreRequest';
import { defaultFirestoreResource, MockFirestoreResource } from './MockFirestoreResource';
import { MatchParams, MatchPattern } from './utils/patternMatch';

export type AllowKey = 'create' | 'read' | 'write' | 'update' | 'list' | 'delete';

export interface MockResource {
  data: any;
  id: string;
}
export interface FirebaseRulesContext {
  auth: any;
  resource: any;
  matchParams?: MatchParams;

  /**
   * Called when rule execution will trigger `exists(...)` -call.
   *
   * @memberof ExecutorContext
   * @returns true, if a document exists within a given path
   */
  onExistsCall?: (path: string) => boolean;

  /**
   * Called when rule execution will trigger `get(...)` -call.
   *
   * @memberof ExecutorContext
   * @returns Document
   */
  onGetCall?: (path: string) => undefined | MockResource;
}

export interface AllowRule {
  pattern: MatchPattern;
  allowKeys: AllowKey[];
  if: ExpressionCallback;
}

export type ExpressionCallback = (context: FirebaseRulesContext) => any;

enum StackItemType {
  ALLOW = 'allow',
  ARITHMETIC = 'arithmetic',
  BINARY = 'binary',
  COMPARE = 'compare',
  EXPRESSION = 'expression',
  FUNCTION = 'function',
  FUNCTION_DECLARATION = 'fun-dec',
  GET = 'get',
  LOGICAL = 'logical',
  OBJECT_REFERENCE = 'objectref',
  PARENTHESIS = 'parenthesis',
  RESOLVED = 'resolved',
  UNARY = 'unary',
  VALUE = 'value',
}

interface StackItem {
  type: string;
  callback?: ExpressionCallback;
  debug: string;
  obj?: any;
  ctx?: any;
}

interface Closure {
  self: any;
  parent?: Closure;
}

interface FunctionDescriptor {
  callback: (context: FirebaseRulesContext, args: any[]) => any;
  argNames: string[];
}

export const defaultFirebaseReulesContext: FirebaseRulesContext = {
  auth: merge(defaultFirestoreRequest.auth, {}),
  resource: merge(defaultFirestoreResource, {}),
};

// tslint:disable-next-line: jsdoc-format
/**
 * Create a default firebare rule context to be used when calling rules rights. 
 * 
 * Function uses deep merge, so you can set needed values in sub objects like,
 *  ```typescript
 createFirebaseRulesContext({
  auth: {
    uid: '123'
  }
});
 ```
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
    defaultFirebaseReulesContext,
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

export default class RulesParserFacade {
  private _parser: RulesParser;

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
    this._parser = new RulesParser();
  }

  public init = (rulesFile: string): RulesParserFacade => {
    this._parser.init(rulesFile);
    return this;
  }

  /**
   * Elaborate access rights for given path within given context
   *
   * @memberof RulesParser
   */
  public getRightsForPath = (path: string, context: FirebaseRulesContext): FirebasePathAccessRights => {
    return this._parser.getRightsForPath(path, context);
  }
}

class RulesParser extends FirebaseRulesListener {
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
  private _request: MockFirestoreRequest = defaultFirestoreRequest;
  private _resource: MockFirestoreResource = defaultFirestoreResource;
  private allowRules: AllowRule[] = [];

  private stack: StackItem[] = [];
  private closure: Closure = {
    self: {},
  };

  private pathElements: string[] = [];
  private _namespace: string;
  private _parser?: FirebaseRulesParser;

  public init = (rulesFile: string): RulesParser => {
    this.stack = [];
    this.closure = {
      self: {},
    };

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

    this.mapRulesForPaths(this._parser);
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
  public getRightsForPath = (path: string, context: FirebaseRulesContext): FirebasePathAccessRights => {
    this.closure.self.request = this.request;
    this.closure.self.resource = this.resource;

    for (const allowRule of this.allowRules) {
      const match = allowRule.pattern.match(path);
      if (match) {
        const allowKeys = allowRule.allowKeys;
        const rights: FirebasePathAccessRights = {};

        context.matchParams = match;

        const hasAccess = allowRule.if ? allowRule.if(context) : true;
        for (const key of allowKeys) {
          rights[key] = hasAccess;
        }
        return rights;
      }
    }
    return {};
  }

  public enterNamespace = (ctx: NamespaceContext) => {
    this._namespace = ctx.getText();
  }

  public enterMatcher = (ctx: MatcherContext) => {
    // matcher will only define the place in database tree where operatation are targeted

    this.closure = {
      self: {},
      parent: this.closure,
    };

    if (ctx.getChildCount() > 0) {
      const path = ctx.getChild(1);
      const pathElement = this.generatePath(path);
      this.pathElements.push(pathElement);
    } else {
      throw new Error('Internal error: match -element without child elements.');
    }
  }

  public exitMatcher = (ctx: MatcherContext) => {
    this.pathElements.pop();
    if (this.closure.parent) {
      this.closure = this.closure.parent;
    } else {
      throwError('Internal error, running out of closure scope', ctx);
    }
  }

  public enterAllow = (ctx: AllowContext) => {
    const path = this.getCurrentPath();
    const pattern = new MatchPattern(path);

    const currentAllowRule = {
      pattern,
      allowKeys: [],
      if: () => false,
    };
    this.stack.push({
      type: StackItemType.ALLOW,
      obj: currentAllowRule,
      debug: ctx.getText(),
    });

    this.allowRules.push(currentAllowRule);
  }

  public exitAllow = (ctx: AllowContext) => {
    const item = this.stack.pop();
    if (!item) {
      throwError('Internal error', ctx);
      return;
    }
    if (item.type !== StackItemType.ALLOW) {
      const allowItem = this.stack.pop();
      if (!allowItem) {
        throwError('Internal error', ctx);
        return;
      }
      allowItem.obj.if = item.callback;
    } else {
      // No expression is give, so allow will treated as true for all values
      item.obj.if = () => true;
    }
  }

  public enterAllowKey = (ctx: AllowKeyContext) => {
    const item = this.stack[this.stack.length - 1];

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
    const value = this.stack.pop();
    // toto undefined
    const operator = ctx.getChild(0).symbol.text;

    this.stack.push({
      type: StackItemType.UNARY,
      debug: ctx.getText(),
      callback: this.resolveUnaryOperation(operator, value!, ctx),
    });
  }

  public enterFunctionCall = (ctx: FunctionCallContext) => {
    const functionName = ctx.getChild(0).getText();

    const argCallbacks: ExpressionCallback[] = [];
    const fieldRefs: any[] = [];
    const closure = this.closure;

    this.stack.push({
      type: StackItemType.FUNCTION,
      debug: ctx.getText(),
      obj: {
        callbacks: argCallbacks,
        fieldRefs,
      },
      callback: context => {
        const fun = this.peekClosureElement(closure, functionName, context) as FunctionDescriptor;
        if (!fun) {
          throwError(
            `Function with name ${functionName} was not found. Please, make sure that the function name is correctly spelled and it is available in this scope.`,
            ctx
          );
        }
        const args: any[] = [];
        let index = 0;
        for (const callback of argCallbacks) {
          const callbackResult = callback(context);
          args.push(callbackResult);
          this.closure.self[fun.argNames[index++]] = callbackResult;
        }
        let value = fun.callback(context, args);

        if (fieldRefs.length > 0) {
          value = this.getFieldValueFromObject(context, value, fieldRefs, 0);
          if (value) {
            return value;
          }
          throwError(`Null value error, field ${ctx.getText()} do not exists`, ctx);
        }

        return value;
      },
    });
  }

  public exitArg = (ctx: ArgContext) => {
    const expression = this.stack.pop();
    const item = this.stackPeek();

    const argCallbacks = item.obj.callbacks as ExpressionCallback[];
    if (!item.obj) {
      throwError('Allow key defined while no allow operation is active.', ctx);
      return;
    }
    argCallbacks.push(expression!.callback!);
  }

  public enterFunctionDeclaration = (ctx: FunctionDeclarationContext) => {
    this.stack.push({
      type: StackItemType.FUNCTION_DECLARATION,
      callback: () => true,
      obj: [],
      debug: '',
    });
  }

  public exitArgDeclaration = (ctx: ArgDeclarationContext) => {
    const item = this.stackPeek();
    item.obj.push(ctx.getText());
  }

  public exitFunctionDeclaration = (ctx: FunctionDeclarationContext) => {
    const item = this.stack.pop();
    const funDec = this.stack.pop();

    const argNames = funDec!.obj;

    if (!item) {
      throwError(`Function not found from stack`, ctx);
      return;
    }
    const functionName = ctx.getChild(1).symbol.text;

    if (this.closure.self[functionName]) {
      throwError(`Function with name ${functionName} already exists`, ctx);
      return;
    }

    const funDesc: FunctionDescriptor = {
      callback: (context: any, args: any[]) => {
        return item.callback!(context);
      },
      argNames,
    };
    this.closure.self[functionName] = funDesc;
  }

  public exitNumberExpression = (ctx: NumberExpressionContext) => {
    this.handleValueExpression(ctx);
  }

  public exitStringExpression = (ctx: StringExpressionContext) => {
    let value = ctx.getText();
    value = value.substr(1, value.length - 2);
    this.stack.push({
      type: StackItemType.VALUE,
      debug: ctx.getText(),
      callback: () => value,
    });
  }

  public exitBooleanExpression = (ctx: BooleanExpressionContext) => {
    this.stack.push({
      type: StackItemType.VALUE,
      callback: () => JSON.parse(ctx.getText()),
      debug: ctx.getText(),
    });
  }

  public exitNullExpression = (ctx: NullExpressionContext) => {
    this.stack.push({
      type: StackItemType.VALUE,
      callback: () => null,
      debug: ctx.getText(),
    });
  }

  public enterObjectReference = (ctx: ObjectReferenceContext) => {
    const identifier = ctx.getChild(0).getText();

    const fieldRefs = [identifier];

    this.stack.push({
      type: StackItemType.OBJECT_REFERENCE,
      obj: fieldRefs,
      debug: ctx.getText(),
      callback: context => {
        const objectIdentifier = this.refValue(context, fieldRefs[0]);
        let obj = this.peekClosureElement(this.closure, objectIdentifier, context);

        obj = this.getFieldValueFromObject(context, obj, fieldRefs, 1);
        if (obj || obj === '') {
          return obj;
        }
        throwError(`Null value error, field ${ctx.getText()} do not exists`, ctx);
      },
    });
  }

  public enterRuleFunctionCall = (ctx: RuleFunctionCallContext) => {
    const functionName = ctx.getChild(0).getText();

    const argCallbacks: ExpressionCallback[] = [];
    const fieldRefs: any[] = [];

    this.stack.push({
      type: StackItemType.FUNCTION,
      debug: ctx.getText(),
      obj: {
        callbacks: argCallbacks,
        fieldRefs,
      },
      callback: context => {
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
          const callbackResult = typeof callback === 'string' ? callback : callback(context);
          path += '/' + callbackResult;
        }
        let value = fun(path);

        if (fieldRefs.length > 0) {
          value = this.getFieldValueFromObject(context, value, fieldRefs, 0);
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
    const expression = this.stack.pop();
    const item = this.stackPeek();

    const argCallbacks = item.obj.callbacks;
    if (!item.obj) {
      throwError('Allow key defined while no allow operation is active.', ctx);
      return;
    }
    argCallbacks.push(expression!.callback!);
  }

  public exitGetPathVariable = (ctx: GetPathVariableContext) => {
    const item = this.stackPeek();
    const value = ctx.getText();
    const argCallbacks = item.obj.callbacks;
    if (!item.obj) {
      throwError('Allow key defined while no allow operation is active.', ctx);
      return;
    }
    argCallbacks.push(value);
  }

  public exitFieldReferenceWithIdentifier = (ctx: FieldReferenceWithIdentifierContext) => {
    const item = this.stackPeek();
    const fieldName = ctx.getChild(1).getText();
    switch (item.type) {
      case StackItemType.OBJECT_REFERENCE:
        item.obj.push(fieldName);
        break;
      case StackItemType.FUNCTION:
        item.obj.fieldRefs.push(fieldName);
        break;
      default:
        throwError(`Unidentified case for field reference ${item.type}`, ctx);
    }
  }

  public exitFieldReferenceWithMemberRef = (ctx: FieldReferenceWithMemberRefContext) => {
    const expression = this.stack.pop();
    if (!expression) {
      throwError('Internal error, no expression found in memberRef', ctx);
      return;
    }
    const item = this.stackPeek();
    item.obj.push(expression.callback);
  }

  private refValue = (context: FirebaseRulesContext, value: string | ExpressionCallback) => {
    if (typeof value === 'string') {
      return value;
    }
    return value(context);
  }

  private getFieldValueFromObject = (
    context: FirebaseRulesContext,
    obj: any,
    fieldRefs: Array<string | ExpressionCallback>,
    startIndex: number
  ) => {
    for (let i = startIndex; i < fieldRefs.length; i++) {
      if (!obj) {
        break;
      }
      const value = this.refValue(context, fieldRefs[i]);
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

    return context => {
      const value = expression.callback!(context);

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

    return context => {
      const leftValue = left.callback!(context);
      const rightValue = right.callback!(context);

      switch (operator) {
        case '<':
          return leftValue < rightValue;
        case '<=':
          return leftValue <= rightValue;
        case '==':
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
  private mapRulesForPaths = (parser: FirebaseRulesParser) => {
    const service = parser.service();

    ParseTreeWalker.DEFAULT.walk(this, service);
  }

  private stackPeek() {
    return this.stack[this.stack.length - 1];
  }

  private peekClosureElement(closure: Closure, fieldName: string, context: FirebaseRulesContext) {
    let c: Closure | undefined = closure;
    do {
      const obj = c.self[fieldName];
      if (obj) {
        return obj;
      }
      c = c.parent;
    } while (c);
    // return a value for match params if found
    return context.matchParams ? context.matchParams[fieldName] : undefined;
  }

  private handleValueExpression(ctx: NumberExpressionContext | StringExpressionContext) {
    const value = JSON.parse(ctx.getText());
    this.stack.push({
      type: StackItemType.VALUE,
      debug: ctx.getText(),
      callback: () => value,
    });
  }

  private handleBinaryOperation(type: StackItemType, ctx: ParserRuleContext) {
    const right = this.stack.pop();
    const left = this.stack.pop();
    const operator = ctx.getChild(1).getText();
    this.stack.push({
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
