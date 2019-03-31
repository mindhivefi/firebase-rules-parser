import { ParserRuleContext, Recognizer, Token } from 'antlr4';
import { ParseTreeWalker } from 'antlr4/tree/Tree';

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
  GetExpressionContext,
  LogicalExpressionContext,
  MatcherContext,
  NamespaceContext,
  NullExpressionContext,
  NumberExpressionContext,
  ObjectReferenceContext,
  ObjectReferenceExpressionContext,
  PathVariableContext,
  StringExpressionContext,
  UnaryExpressionContext,
} from '../parser/FirebaseRulesParser';
import { FirebasePathAccessRights } from './FirebasePathAccessRights';
import { defaultFirestoreRequest, MockFirestoreRequest } from './MockFirestoreRequest';
import { defaultFirestoreResource, MockFirestoreResource } from './MockFirestoreResource';
import { MatchPattern } from './utils/patternMatch';

export type AllowKey = 'create' | 'read' | 'write' | 'update' | 'list' | 'delete';

export interface ExecutorContext {
  auth: any;
  resource: any;
}

export interface AllowRule {
  pattern: MatchPattern;
  allowKeys: AllowKey[];
  if: ExpressionCallback;
}

export type ExpressionCallback = (context: ExecutorContext) => any;

export class ExpressionTreeLevel {
  private executor: ExpressionCallback;

  public get count(): number {
    return this._callbacks.length;
  }
  private _callbacks: ExpressionCallback[] = [];

  public get callbacks(): ExpressionCallback[] {
    return this._callbacks;
  }
  constructor(public execute: (treeLevel: ExpressionTreeLevel) => any, public ruleContext?: ParserRuleContext) {}

  public setExecutor(executor: ExpressionCallback) {
    this.executor = executor;
  }
  public getCallback = (index: number): ExpressionCallback => {
    return this._callbacks[index];
  }

  public addExpressionCallback = (callback: ExpressionCallback): void => {
    this._callbacks.push(callback);
  }
}

type ExpressionContextCallback = (callback: ExpressionCallback) => void;

export class ExpressionExecutor {
  private _stack: ExpressionTreeLevel[] = [];

  constructor() {
    const root = new ExpressionTreeLevel(level => level.callbacks[0]);
    this._stack.push(root);
  }

  public pushContext = (treeLevel: ExpressionTreeLevel): void => {
    this._stack.push(treeLevel);
  }
  public popContext = (): void => {
    this._stack.pop();
  }

  public execute = (context: ExecutorContext): any => {
    const callback = this._stack[0].getCallback(0);
    return callback(context);
  }

  public setResult = (callback: ExpressionCallback): void => {
    const leaf = this._stack[this._stack.length - 1];
    leaf.addExpressionCallback(callback);
  }
}

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

interface FunctionDesc {
  callback: (context: ExecutorContext, args: any[]) => any;
  argNames: string[];
}
export class RulesParser extends FirebaseRulesListener {
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

  // private activeExpression: ExpressionExecutor | undefined;

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
  public getRightsForPath = (path: string, context: ExecutorContext): FirebasePathAccessRights => {
    this.closure.self.request = this.request;
    this.closure.self.resource = this.resource;

    for (const allowRule of this.allowRules) {
      if (allowRule.pattern.match(path)) {
        const allowKeys = allowRule.allowKeys;
        const rights: FirebasePathAccessRights = {};

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
    // matcher will only define the place in databse tree where operatation are targeted

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

    // const executor = new ExpressionExecutor();

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

  public exitGetExpression = (ctx: GetExpressionContext) => {
    this.stack.push({
      type: StackItemType.GET,
      debug: ctx.getText(),
      obj: ctx.getText(),
    });
  }

  public enterFunctionCall = (ctx: FunctionCallContext) => {
    const functionName = ctx.getChild(0).getText();

    const argCallbacks: ExpressionCallback[] = [];

    const closure = this.closure;

    this.stack.push({
      type: StackItemType.FUNCTION,
      debug: ctx.getText(),
      obj: argCallbacks,
      callback: context => {
        const fun = this.peekClosureElement(closure, functionName) as FunctionDesc;
        if (!fun) {
          throwError(
            `Function with name ${functionName} was not found. Please, make sure that the function name is correctly spelled and it is available in this scope.`,
            ctx
          );
        }
        const args: any[] = [];
        let index = 0;
        for (const callback of argCallbacks) {
          const value = callback(context);
          args.push(value);
          this.closure.self[fun.argNames[index++]] = value;
        }
        return fun.callback(context, args);
      },
    });
  }

  public exitArg = (ctx: ArgContext) => {
    const expression = this.stack.pop();
    const item = this.stackPeek();

    const argCallbacks = item.obj as ExpressionCallback[];
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

    const funDesc: FunctionDesc = {
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
        const refValue = (value: string | ExpressionCallback) => {
          if (typeof value === 'string') {
            return value;
          }
          return value(context);
        };

        const objectIdentifier = refValue(fieldRefs[0]);
        let obj = this.peekClosureElement(this.closure, objectIdentifier);

        for (let i = 1; i < fieldRefs.length; i++) {
          if (!obj) {
            return undefined;
          }
          const value = refValue(fieldRefs[i]);
          obj = obj[value];
        }
        return obj;
      },
    });
  }

  public exitFieldReferenceWithIdentifier = (ctx: FieldReferenceWithIdentifierContext) => {
    const item = this.stackPeek();
    const fieldName = ctx.getChild(1).getText();
    item.obj.push(fieldName);
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

  private peekClosureElement(closure: Closure, fieldName: string) {
    let c: Closure | undefined = closure;
    do {
      const obj = c.self[fieldName];
      if (obj) {
        return obj;
      }
      c = c.parent;
    } while (c);

    return undefined;
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
