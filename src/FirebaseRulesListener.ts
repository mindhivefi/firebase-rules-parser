// Generated from ./src/FirebaseRules.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ServiceContext } from "./FirebaseRulesParser";
import { NamespaceContext } from "./FirebaseRulesParser";
import { NamespaceBlockContext } from "./FirebaseRulesParser";
import { MatchBlockContext } from "./FirebaseRulesParser";
import { AllowKeyContext } from "./FirebaseRulesParser";
import { MatcherContext } from "./FirebaseRulesParser";
import { AllowContext } from "./FirebaseRulesParser";
import { PathVariableReplaceContext } from "./FirebaseRulesParser";
import { PathVariableContext } from "./FirebaseRulesParser";
import { ArgumentsContext } from "./FirebaseRulesParser";
import { FunctionContext } from "./FirebaseRulesParser";
import { ExpressionContext } from "./FirebaseRulesParser";
import { ParenthesisExpressionContext } from "./FirebaseRulesParser";
import { NumberValueContext } from "./FirebaseRulesParser";
import { StringValueContext } from "./FirebaseRulesParser";
import { NullValueContext } from "./FirebaseRulesParser";
import { ObjectRefContext } from "./FirebaseRulesParser";
import { IdentifierRefContext } from "./FirebaseRulesParser";
import { CompareOperatorContext } from "./FirebaseRulesParser";
import { LogicalOperatorContext } from "./FirebaseRulesParser";
import { BinaryOperatorContext } from "./FirebaseRulesParser";
import { ArithmeticOperatorContext } from "./FirebaseRulesParser";
import { UnaryOperatorContext } from "./FirebaseRulesParser";
import { GetContext } from "./FirebaseRulesParser";
import { FunctionCallContext } from "./FirebaseRulesParser";
import { BooleanValueContext } from "./FirebaseRulesParser";
import { GetPathContext } from "./FirebaseRulesParser";
import { MatchPathContext } from "./FirebaseRulesParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `FirebaseRulesParser`.
 */
export interface FirebaseRulesListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.service`.
	 * @param ctx the parse tree
	 */
	enterService?: (ctx: ServiceContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.service`.
	 * @param ctx the parse tree
	 */
	exitService?: (ctx: ServiceContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.namespace`.
	 * @param ctx the parse tree
	 */
	enterNamespace?: (ctx: NamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.namespace`.
	 * @param ctx the parse tree
	 */
	exitNamespace?: (ctx: NamespaceContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.namespaceBlock`.
	 * @param ctx the parse tree
	 */
	enterNamespaceBlock?: (ctx: NamespaceBlockContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.namespaceBlock`.
	 * @param ctx the parse tree
	 */
	exitNamespaceBlock?: (ctx: NamespaceBlockContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.matchBlock`.
	 * @param ctx the parse tree
	 */
	enterMatchBlock?: (ctx: MatchBlockContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.matchBlock`.
	 * @param ctx the parse tree
	 */
	exitMatchBlock?: (ctx: MatchBlockContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.allowKey`.
	 * @param ctx the parse tree
	 */
	enterAllowKey?: (ctx: AllowKeyContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.allowKey`.
	 * @param ctx the parse tree
	 */
	exitAllowKey?: (ctx: AllowKeyContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.matcher`.
	 * @param ctx the parse tree
	 */
	enterMatcher?: (ctx: MatcherContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.matcher`.
	 * @param ctx the parse tree
	 */
	exitMatcher?: (ctx: MatcherContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.allow`.
	 * @param ctx the parse tree
	 */
	enterAllow?: (ctx: AllowContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.allow`.
	 * @param ctx the parse tree
	 */
	exitAllow?: (ctx: AllowContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.pathVariableReplace`.
	 * @param ctx the parse tree
	 */
	enterPathVariableReplace?: (ctx: PathVariableReplaceContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.pathVariableReplace`.
	 * @param ctx the parse tree
	 */
	exitPathVariableReplace?: (ctx: PathVariableReplaceContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.pathVariable`.
	 * @param ctx the parse tree
	 */
	enterPathVariable?: (ctx: PathVariableContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.pathVariable`.
	 * @param ctx the parse tree
	 */
	exitPathVariable?: (ctx: PathVariableContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.parenthesisExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesisExpression?: (ctx: ParenthesisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.parenthesisExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesisExpression?: (ctx: ParenthesisExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.numberValue`.
	 * @param ctx the parse tree
	 */
	enterNumberValue?: (ctx: NumberValueContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.numberValue`.
	 * @param ctx the parse tree
	 */
	exitNumberValue?: (ctx: NumberValueContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.stringValue`.
	 * @param ctx the parse tree
	 */
	enterStringValue?: (ctx: StringValueContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.stringValue`.
	 * @param ctx the parse tree
	 */
	exitStringValue?: (ctx: StringValueContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.nullValue`.
	 * @param ctx the parse tree
	 */
	enterNullValue?: (ctx: NullValueContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.nullValue`.
	 * @param ctx the parse tree
	 */
	exitNullValue?: (ctx: NullValueContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.objectRef`.
	 * @param ctx the parse tree
	 */
	enterObjectRef?: (ctx: ObjectRefContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.objectRef`.
	 * @param ctx the parse tree
	 */
	exitObjectRef?: (ctx: ObjectRefContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.identifierRef`.
	 * @param ctx the parse tree
	 */
	enterIdentifierRef?: (ctx: IdentifierRefContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.identifierRef`.
	 * @param ctx the parse tree
	 */
	exitIdentifierRef?: (ctx: IdentifierRefContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.compareOperator`.
	 * @param ctx the parse tree
	 */
	enterCompareOperator?: (ctx: CompareOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.compareOperator`.
	 * @param ctx the parse tree
	 */
	exitCompareOperator?: (ctx: CompareOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.logicalOperator`.
	 * @param ctx the parse tree
	 */
	enterLogicalOperator?: (ctx: LogicalOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.logicalOperator`.
	 * @param ctx the parse tree
	 */
	exitLogicalOperator?: (ctx: LogicalOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.binaryOperator`.
	 * @param ctx the parse tree
	 */
	enterBinaryOperator?: (ctx: BinaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.binaryOperator`.
	 * @param ctx the parse tree
	 */
	exitBinaryOperator?: (ctx: BinaryOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.arithmeticOperator`.
	 * @param ctx the parse tree
	 */
	enterArithmeticOperator?: (ctx: ArithmeticOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.arithmeticOperator`.
	 * @param ctx the parse tree
	 */
	exitArithmeticOperator?: (ctx: ArithmeticOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	enterUnaryOperator?: (ctx: UnaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	exitUnaryOperator?: (ctx: UnaryOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.get`.
	 * @param ctx the parse tree
	 */
	enterGet?: (ctx: GetContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.get`.
	 * @param ctx the parse tree
	 */
	exitGet?: (ctx: GetContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	enterBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	exitBooleanValue?: (ctx: BooleanValueContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.getPath`.
	 * @param ctx the parse tree
	 */
	enterGetPath?: (ctx: GetPathContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.getPath`.
	 * @param ctx the parse tree
	 */
	exitGetPath?: (ctx: GetPathContext) => void;

	/**
	 * Enter a parse tree produced by `FirebaseRulesParser.matchPath`.
	 * @param ctx the parse tree
	 */
	enterMatchPath?: (ctx: MatchPathContext) => void;
	/**
	 * Exit a parse tree produced by `FirebaseRulesParser.matchPath`.
	 * @param ctx the parse tree
	 */
	exitMatchPath?: (ctx: MatchPathContext) => void;
}

