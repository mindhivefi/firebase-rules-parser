import { ParserRuleContext, Recognizer, Token } from 'antlr4';
import { ParseTreeWalker } from 'antlr4/tree/Tree';

import { parseFirebaseRulesFromString } from '..';
import { FirebaseRulesListener } from '../parser/FirebaseRulesListener';
import {
  AllowContext,
  AllowKeyContext,
  ArithmeticExpressionContext,
  BinaryExpressionContext,
  BooleanExpressionContext,
  CompareExpressionContext,
  ExpressionContext,
  FirebaseRulesParser,
  FunctionExpressionContext,
  GetExpressionContext,
  LogicalExpressionContext,
  MatcherContext,
  NamespaceContext,
  NullExpressionContext,
  NumberExpressionContext,
  // ParenthesisExpressionContext,
  PathVariableContext,
  StringExpressionContext,
  UnaryExpressionContext,
} from '../parser/FirebaseRulesParser';
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

export class RulesParser extends FirebaseRulesListener {
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
        console.error(msg);
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
        console.error('Ambiguity: ' + ambigAlts);
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
    this._namespace = ctx.getText();
  }

  public enterMatcher = (ctx: MatcherContext) => {
    // matcher will only define the place in databse tree where operatation are targeted

    if (ctx.getChildCount() > 0) {
      const path = ctx.getChild(1);
      const pathElement = this.generatePath(path);
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

  // public enterParenthesisExpression = (ctx: ParenthesisExpressionContext) => {
  //   this.stack.push({
  //     type: StackItemType.PARENTHESIS,
  //     debug: ctx.getText(),
  //     ctx,
  //   });
  // }

  // public exitParenthesisExpression = (ctx: ParenthesisExpressionContext) => {
  //   const items: StackItem[] = [];
  //   do {
  //     const item = this.stack.pop();
  //     if (!item || item.ctx === ctx) {
  //       break;
  //     }
  //     items.push(item);
  //   } while (true);
  //   this.resolveExpressions(ctx, items);
  // }

  // public enterExpression = (ctx: ExpressionContext) => {
  //   // this.activeExpression = this.activeExpression || new ExpressionExecutor();
  //   this.stack.push({
  //     type: StackItemType.EXPRESSION,
  //     debug: ctx.getText(),
  //     ctx,
  //   });
  // }

  // public exitExpression = (ctx: ExpressionContext) => {
  //   const items: StackItem[] = [];

  //   do {
  //     const item = this.stack.pop();
  //     if (!item || item.ctx === ctx) {
  //       break;
  //     }
  //     items.push(item);
  //   } while (true);

  //   this.resolveExpressions(ctx, items);
  // }

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

  // public exitParenthesisExpression = (ctx: ParenthesisExpressionContext) => {
  //   const value = this.stack.pop();
  // }
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

  public exitFunctionExpression = (ctx: FunctionExpressionContext) => {
    // TODO expression
    this.stack.push({
      type: StackItemType.FUNCTION,
      debug: ctx.getText(),
      obj: ctx.getText(),
    });
  }

  public exitNumberExpression = (ctx: NumberExpressionContext) => {
    this.stack.push({
      type: StackItemType.VALUE,
      debug: ctx.getText(),

      callback: () => JSON.parse(ctx.getText()),
    });
  }

  public exitStringExpression = (ctx: StringExpressionContext) => {
    this.stack.push({
      type: StackItemType.VALUE,
      debug: ctx.getText(),

      callback: () => JSON.parse(ctx.getText()),
    });
  }

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

  // private resolveExpressions = (ctx: any, items: StackItem[]) => {
  //   switch (items.length) {
  //     case 1:
  //       this.stack.push({
  //         type: StackItemType.RESOLVED,
  //         callback: items[0].callback,
  //         debug: 'resolved: ' + items[0].debug,
  //       });
  //       break;
  //     case 2:
  //       this.stack.push({
  //         type: StackItemType.RESOLVED,
  //         callback: this.resolveUnaryOperation(items, ctx),
  //         debug: `resolved: ${items[1].obj} ${items[0].debug}`,
  //       });

  //       break;
  //     case 3:
  //       this.stack.push({
  //         type: StackItemType.RESOLVED,
  //         callback: this.resolveBinaryOperationOld(items, ctx),
  //         debug: `resolved: ${items[2].debug} ${items[1].obj} ${items[0].debug}`,
  //       });
  //       break;

  //     default:
  //       // TODO check ternary operation
  //       do {
  //         // operations are resolved from left to right
  //         const firstItems = items.splice(0, 3);
  //         const callback = this.resolveBinaryOperationOld(firstItems, ctx);
  //         items.unshift({
  //           type: StackItemType.RESOLVED,
  //           callback,
  //           debug: `${firstItems[0].debug} ${firstItems[1].debug} ${firstItems[2].debug}`,
  //         });
  //       } while (items.length > 1);

  //       throwError(`Unsupported number of expression arguments ${items.length}`, ctx);
  //   }
  // }

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

  // private resolveBinaryOperationOld = (items: StackItem[], ctx: ExpressionContext): ExpressionCallback => {
  //   const left = items[2];
  //   const right = items[0];

  //   if (!(right && left)) {
  //     throwError(`Internal error`, ctx);
  //   }

  //   return context => {
  //     const leftValue = left.callback!(context);
  //     const rightValue = right.callback!(context);

  //     const operator = items[1].obj;

  //     switch (operator) {
  //       case '<':
  //         return leftValue < rightValue;
  //       case '<=':
  //         return leftValue <= rightValue;
  //       case '==':
  //         return leftValue === rightValue;
  //       case '!=':
  //         return leftValue !== rightValue;
  //       case '>':
  //         return leftValue > rightValue;
  //       case '>=':
  //         return leftValue >= rightValue;
  //       case '+':
  //         return leftValue + rightValue;
  //       case '-':
  //         return leftValue - rightValue;
  //       case '*':
  //         return leftValue * rightValue;
  //       case '/':
  //         return leftValue / rightValue;
  //       case '&&':
  //         return leftValue && rightValue;
  //       case '||':
  //         return leftValue || rightValue;
  //       case '^':
  //         return leftValue ^ rightValue;

  //       default:
  //         throw new Error(`Unidentified operator: ${operator} at line ${ctx.start.line} column ${ctx.start.start}.`);
  //     }
  //   };
  // }

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
