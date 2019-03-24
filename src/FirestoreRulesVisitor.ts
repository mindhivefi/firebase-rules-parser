// Generated from ./src/FirestoreRules.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FirestoreRulesParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FirestoreRulesVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.service`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitService?: (ctx: ServiceContext) => Result;

	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.namespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespace?: (ctx: NamespaceContext) => Result;

	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.namespaceBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceBlock?: (ctx: NamespaceBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.matchBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchBlock?: (ctx: MatchBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.allowKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAllowKey?: (ctx: AllowKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.allow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAllow?: (ctx: AllowContext) => Result;

	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.pathVariableReplace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathVariableReplace?: (ctx: PathVariableReplaceContext) => Result;

	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.pathVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathVariable?: (ctx: PathVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.compareOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompareOperator?: (ctx: CompareOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.get`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGet?: (ctx: GetContext) => Result;

	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.booleanValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;

	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.getPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetPath?: (ctx: GetPathContext) => Result;

	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.matchPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchPath?: (ctx: MatchPathContext) => Result;

	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.matcher`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatcher?: (ctx: MatcherContext) => Result;

	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.additionExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditionExp?: (ctx: AdditionExpContext) => Result;

	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.multiplyExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyExp?: (ctx: MultiplyExpContext) => Result;

	/**
	 * Visit a parse tree produced by `FirestoreRulesParser.atomExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomExp?: (ctx: AtomExpContext) => Result;
}

