import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ParserInterpreter, ParserRuleContext } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { parseFirebaseRulesFromString } from '..';
import { FirebaseRulesListener } from '../FirebaseRulesListener';
import {
  AllowContext,
  AllowKeyContext,
  ArithmeticOperatorContext,
  BinaryOperatorContext,
  BooleanValueContext,
  CompareOperatorContext,
  ExpressionContext,
  FirebaseRulesParser,
  FunctionContext,
  GetContext,
  LogicalOperatorContext,
  MatcherContext,
  NamespaceContext,
  NullValueContext,
  NumberValueContext,
  ParenthesisExpressionContext,
  StringValueContext,
  UnaryOperatorContext,
} from '../FirebaseRulesParser';
import { FirebasePathAccessRights } from './FirebasePathAccessRights';
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
  GET = 'get',
  LOGICAL = 'logical',
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

export class RulesParser extends AbstractParseTreeVisitor<number> implements FirebaseRulesListener {
  /**
   * Get the namespace used in rules -file
   *
   * @readonly
   * @memberof RulesParser
   */
  public get namespace() {
    return this._namespace;
  }
  private allowRules: AllowRule[] = [];

  // private activeExpression: ExpressionExecutor | undefined;

  private stack: StackItem[] = [];

  private pathElements: string[] = [];
  private _namespace: string;
  private _parser?: FirebaseRulesParser;

  public init = (rulesFile: string): RulesParser => {
    this._parser = parseFirebaseRulesFromString(rulesFile);
    this.mapRulesForPaths(this._parser);
    return this;
  }

  public defaultResult() {
    return 0;
  }

  public getRightsForPath = (path: string, context: ExecutorContext): FirebasePathAccessRights => {
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
    this._namespace = ctx.text;
  }

  public enterMatcher = (ctx: MatcherContext) => {
    // matcher will only define the place in databse tree where operatation are targeted
    if (ctx.children) {
      const path = ctx.children[1];
      const pathElement = path.text;
      this.pathElements.push(pathElement);
      const p = this.getCurrentPath();
    } else {
      throw new Error('Internal error: match -element without child elements.');
    }
  }

  public exitMatcher = (ctx: MatcherContext) => {
    this.pathElements.pop();
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
      debug: ctx.text,
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
    currentAllowRule.allowKeys.push(ctx.text as AllowKey);
  }

  public enterExpression = (ctx: ExpressionContext) => {
    // this.activeExpression = this.activeExpression || new ExpressionExecutor();
    this.stack.push({
      type: StackItemType.EXPRESSION,
      debug: ctx.text,
      ctx,
    });
  }

  public enterParenthesisExpression = (ctx: ParenthesisExpressionContext) => {
    this.stack.push({
      type: StackItemType.PARENTHESIS,
      debug: ctx.text,
      ctx,
    });
  }

  public exitParenthesisExpression = (ctx: ParenthesisExpressionContext) => {
    const items: StackItem[] = [];
    do {
      const item = this.stack.pop();
      if (!item || item.ctx === ctx) {
        break;
      }
      items.push(item);
    } while (true);
    this.resolveExpressions(ctx, items);
  }

  public exitExpression = (ctx: ExpressionContext) => {
    const items: StackItem[] = [];

    do {
      const item = this.stack.pop();
      if (!item || item.ctx === ctx) {
        break;
      }
      items.push(item);
    } while (true);

    this.resolveExpressions(ctx, items);
  }

  public enterBooleanValue = (ctx: BooleanValueContext) => {
    this.stack.push({
      type: StackItemType.VALUE,
      callback: () => JSON.parse(ctx.text),
      debug: ctx.text,
    });
  }

  public enterNullValue = (ctx: NullValueContext) => {
    this.stack.push({
      type: StackItemType.VALUE,
      callback: () => null,
      debug: ctx.text,
    });
  }

  public enterCompareOperator = (ctx: CompareOperatorContext) => {
    this.stack.push({
      type: StackItemType.COMPARE,
      debug: ctx.text,
      obj: ctx.text,
    });
  }

  public enterArithmeticOperator = (ctx: ArithmeticOperatorContext) => {
    this.stack.push({
      type: StackItemType.ARITHMETIC,
      debug: ctx.text,
      obj: ctx.text,
    });
  }

  public enterLogicalOperator = (ctx: LogicalOperatorContext) => {
    this.stack.push({
      type: StackItemType.LOGICAL,
      debug: ctx.text,
      obj: ctx.text,
    });
  }

  public enterBinaryOperator = (ctx: BinaryOperatorContext) => {
    this.stack.push({
      type: StackItemType.BINARY,
      debug: ctx.text,
      obj: ctx.text,
    });
  }

  public enterUnaryOperator = (ctx: UnaryOperatorContext) => {
    this.stack.push({
      type: StackItemType.UNARY,
      debug: ctx.text,
      obj: ctx.text,
    });
  }

  public enterGet = (ctx: GetContext) => {
    this.stack.push({
      type: StackItemType.GET,
      debug: ctx.text,
      obj: ctx.text,
    });
  }

  public enterFunction = (ctx: FunctionContext) => {
    this.stack.push({
      type: StackItemType.FUNCTION,
      debug: ctx.text,
      obj: ctx.text,
    });
  }
  public enterNumberValue = (ctx: NumberValueContext) => {
    this.stack.push({
      type: StackItemType.VALUE,
      debug: ctx.text,

      callback: () => JSON.parse(ctx.text),
    });
  }

  public enterStringValue = (ctx: StringValueContext) => {
    this.stack.push({
      type: StackItemType.VALUE,
      debug: ctx.text,

      callback: () => JSON.parse(ctx.text),
    });
  }

  private resolveExpressions = (ctx: any, items: StackItem[]) => {
    switch (items.length) {
      case 1:
        this.stack.push({
          type: StackItemType.RESOLVED,
          callback: items[0].callback,
          debug: 'resolved: ' + items[0].debug,
        });
        break;
      case 2:
        this.stack.push({
          type: StackItemType.RESOLVED,
          callback: this.resolveUnaryOperation(items, ctx),
          debug: `resolved: ${items[1].obj} ${items[0].debug}`,
        });

        break;
      case 3:
        this.stack.push({
          type: StackItemType.RESOLVED,
          callback: this.resolveBinaryOperation(items, ctx),
          debug: `resolved: ${items[2].debug} ${items[1].obj} ${items[0].debug}`,
        });
        break;

      default:
        // TODO check ternary operation
        do {
          // operations are resolved from left to right
          const firstItems = items.splice(0, 3);
          const callback = this.resolveBinaryOperation(firstItems, ctx);
          items.unshift({
            type: StackItemType.RESOLVED,
            callback,
            debug: `${firstItems[0].debug} ${firstItems[1].debug} ${firstItems[2].debug}`,
          });
        } while (items.length > 1);

        throwError(`Unsupported number of expression arguments ${items.length}`, ctx);
    }
  }
  private resolveUnaryOperation = (items: StackItem[], ctx: ExpressionContext): ExpressionCallback => {
    const operation = items[1];
    const expression = items[0];

    if (!(expression && operation)) {
      throwError(`Internal error`, ctx);
    }

    return context => {
      const value = expression.callback!(context);

      const operator = items[1].obj;

      switch (operator) {
        case '!':
          return !value;
        case '-':
          return -value;

        default:
          throw new Error(
            `Unidentified operator: ${operator} at line ${ctx.start.line} column ${ctx.start.charPositionInLine}.`
          );
      }
    };
  }

  private resolveBinaryOperation = (items: StackItem[], ctx: ExpressionContext): ExpressionCallback => {
    const left = items[2];
    const right = items[0];

    if (!(right && left)) {
      throwError(`Internal error`, ctx);
    }

    return context => {
      const leftValue = left.callback!(context);
      const rightValue = right.callback!(context);

      const operator = items[1].obj;

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
        case '&&':
          return leftValue && rightValue;
        case '||':
          return leftValue || rightValue;
        case '^':
          return leftValue ^ rightValue;

        default:
          throw new Error(
            `Unidentified operator: ${operator} at line ${ctx.start.line} column ${ctx.start.charPositionInLine}.`
          );
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
}
function throwError(message: string, ctx: CompareOperatorContext): never {
  throw new Error(`${message} at line ${ctx.start.line} column ${ctx.start.charPositionInLine}.`);
}
