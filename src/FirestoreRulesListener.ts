// Generated from ./src/FirestoreRules.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ServiceContext } from "./FirestoreRulesParser";
import { NamespaceContext } from "./FirestoreRulesParser";
import { NamespaceBlockContext } from "./FirestoreRulesParser";
import { MatchBlockContext } from "./FirestoreRulesParser";
import { AllowKeyContext } from "./FirestoreRulesParser";
import { AllowContext } from "./FirestoreRulesParser";
import { PathVariableReplaceContext } from "./FirestoreRulesParser";
import { PathVariableContext } from "./FirestoreRulesParser";
import { ArgumentsContext } from "./FirestoreRulesParser";
import { FunctionContext } from "./FirestoreRulesParser";
import { ExpressionContext } from "./FirestoreRulesParser";
import { CompareOperatorContext } from "./FirestoreRulesParser";
import { GetContext } from "./FirestoreRulesParser";
import { FunctionCallContext } from "./FirestoreRulesParser";
import { BooleanValueContext } from "./FirestoreRulesParser";
import { GetPathContext } from "./FirestoreRulesParser";
import { MatchPathContext } from "./FirestoreRulesParser";
import { MatcherContext } from "./FirestoreRulesParser";
import { AdditionExpContext } from "./FirestoreRulesParser";
import { MultiplyExpContext } from "./FirestoreRulesParser";
import { AtomExpContext } from "./FirestoreRulesParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `FirestoreRulesParser`.
 */
export interface FirestoreRulesListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.service`.
	 * @param ctx the parse tree
	 */
	enterService?: (ctx: ServiceContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.service`.
	 * @param ctx the parse tree
	 */
	exitService?: (ctx: ServiceContext) => void;

	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.namespace`.
	 * @param ctx the parse tree
	 */
	enterNamespace?: (ctx: NamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.namespace`.
	 * @param ctx the parse tree
	 */
	exitNamespace?: (ctx: NamespaceContext) => void;

	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.namespaceBlock`.
	 * @param ctx the parse tree
	 */
	enterNamespaceBlock?: (ctx: NamespaceBlockContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.namespaceBlock`.
	 * @param ctx the parse tree
	 */
	exitNamespaceBlock?: (ctx: NamespaceBlockContext) => void;

	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.matchBlock`.
	 * @param ctx the parse tree
	 */
	enterMatchBlock?: (ctx: MatchBlockContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.matchBlock`.
	 * @param ctx the parse tree
	 */
	exitMatchBlock?: (ctx: MatchBlockContext) => void;

	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.allowKey`.
	 * @param ctx the parse tree
	 */
	enterAllowKey?: (ctx: AllowKeyContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.allowKey`.
	 * @param ctx the parse tree
	 */
	exitAllowKey?: (ctx: AllowKeyContext) => void;

	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.allow`.
	 * @param ctx the parse tree
	 */
	enterAllow?: (ctx: AllowContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.allow`.
	 * @param ctx the parse tree
	 */
	exitAllow?: (ctx: AllowContext) => void;

	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.pathVariableReplace`.
	 * @param ctx the parse tree
	 */
	enterPathVariableReplace?: (ctx: PathVariableReplaceContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.pathVariableReplace`.
	 * @param ctx the parse tree
	 */
	exitPathVariableReplace?: (ctx: PathVariableReplaceContext) => void;

	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.pathVariable`.
	 * @param ctx the parse tree
	 */
	enterPathVariable?: (ctx: PathVariableContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.pathVariable`.
	 * @param ctx the parse tree
	 */
	exitPathVariable?: (ctx: PathVariableContext) => void;

	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.compareOperator`.
	 * @param ctx the parse tree
	 */
	enterCompareOperator?: (ctx: CompareOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.compareOperator`.
	 * @param ctx the parse tree
	 */
	exitCompareOperator?: (ctx: CompareOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.get`.
	 * @param ctx the parse tree
	 */
	enterGet?: (ctx: GetContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.get`.
	 * @param ctx the parse tree
	 */
	exitGet?: (ctx: GetContext) => void;

	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	enterBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	exitBooleanValue?: (ctx: BooleanValueContext) => void;

	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.getPath`.
	 * @param ctx the parse tree
	 */
	enterGetPath?: (ctx: GetPathContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.getPath`.
	 * @param ctx the parse tree
	 */
	exitGetPath?: (ctx: GetPathContext) => void;

	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.matchPath`.
	 * @param ctx the parse tree
	 */
	enterMatchPath?: (ctx: MatchPathContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.matchPath`.
	 * @param ctx the parse tree
	 */
	exitMatchPath?: (ctx: MatchPathContext) => void;

	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.matcher`.
	 * @param ctx the parse tree
	 */
	enterMatcher?: (ctx: MatcherContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.matcher`.
	 * @param ctx the parse tree
	 */
	exitMatcher?: (ctx: MatcherContext) => void;

	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.additionExp`.
	 * @param ctx the parse tree
	 */
	enterAdditionExp?: (ctx: AdditionExpContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.additionExp`.
	 * @param ctx the parse tree
	 */
	exitAdditionExp?: (ctx: AdditionExpContext) => void;

	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.multiplyExp`.
	 * @param ctx the parse tree
	 */
	enterMultiplyExp?: (ctx: MultiplyExpContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.multiplyExp`.
	 * @param ctx the parse tree
	 */
	exitMultiplyExp?: (ctx: MultiplyExpContext) => void;

	/**
	 * Enter a parse tree produced by `FirestoreRulesParser.atomExp`.
	 * @param ctx the parse tree
	 */
	enterAtomExp?: (ctx: AtomExpContext) => void;
	/**
	 * Exit a parse tree produced by `FirestoreRulesParser.atomExp`.
	 * @param ctx the parse tree
	 */
	exitAtomExp?: (ctx: AtomExpContext) => void;
}

