import {CommonTokenStream, ParserRuleContext, Token} from 'antlr4';
import {ErrorNode, ParseTreeListener, TerminalNode} from 'antlr4/tree/Tree';

import {ServiceContext} from './FirebaseRulesParser';

import {NamespaceContext} from './FirebaseRulesParser';

import {NamespaceBlockContext} from './FirebaseRulesParser';

import {MatchBlockContext} from './FirebaseRulesParser';

import {AllowKeyContext} from './FirebaseRulesParser';

import {CommentContext} from './FirebaseRulesParser';

import {MatcherContext} from './FirebaseRulesParser';

import {AllowContext} from './FirebaseRulesParser';

import {PathVariableReplaceContext} from './FirebaseRulesParser';

import {PathVariableContext} from './FirebaseRulesParser';

import {ArgContext} from './FirebaseRulesParser';

import {ArgumentsContext} from './FirebaseRulesParser';

import {ArgDeclarationContext} from './FirebaseRulesParser';

import {ArgDeclarationsContext} from './FirebaseRulesParser';

import {FunctionDeclarationContext} from './FirebaseRulesParser';

import {FieldReferenceContext} from './FirebaseRulesParser';

import {ExpressionContext} from './FirebaseRulesParser';

import {ObjectReferenceContext} from './FirebaseRulesParser';

import {GetContext} from './FirebaseRulesParser';

import {FunctionCallContext} from './FirebaseRulesParser';

import {GetPathContext} from './FirebaseRulesParser';

import {MatchPathContext} from './FirebaseRulesParser';


export declare class FirebaseRulesListener implements ParseTreeListener {
    constructor();
    
    public enterService(ctx: ServiceContext): void;
    
    public exitService(ctx: ServiceContext): void;
    
    public enterNamespace(ctx: NamespaceContext): void;
    
    public exitNamespace(ctx: NamespaceContext): void;
    
    public enterNamespaceBlock(ctx: NamespaceBlockContext): void;
    
    public exitNamespaceBlock(ctx: NamespaceBlockContext): void;
    
    public enterMatchBlock(ctx: MatchBlockContext): void;
    
    public exitMatchBlock(ctx: MatchBlockContext): void;
    
    public enterAllowKey(ctx: AllowKeyContext): void;
    
    public exitAllowKey(ctx: AllowKeyContext): void;
    
    public enterComment(ctx: CommentContext): void;
    
    public exitComment(ctx: CommentContext): void;
    
    public enterMatcher(ctx: MatcherContext): void;
    
    public exitMatcher(ctx: MatcherContext): void;
    
    public enterAllow(ctx: AllowContext): void;
    
    public exitAllow(ctx: AllowContext): void;
    
    public enterPathVariableReplace(ctx: PathVariableReplaceContext): void;
    
    public exitPathVariableReplace(ctx: PathVariableReplaceContext): void;
    
    public enterPathVariable(ctx: PathVariableContext): void;
    
    public exitPathVariable(ctx: PathVariableContext): void;
    
    public enterArg(ctx: ArgContext): void;
    
    public exitArg(ctx: ArgContext): void;
    
    public enterArguments(ctx: ArgumentsContext): void;
    
    public exitArguments(ctx: ArgumentsContext): void;
    
    public enterArgDeclaration(ctx: ArgDeclarationContext): void;
    
    public exitArgDeclaration(ctx: ArgDeclarationContext): void;
    
    public enterArgDeclarations(ctx: ArgDeclarationsContext): void;
    
    public exitArgDeclarations(ctx: ArgDeclarationsContext): void;
    
    public enterFunctionDeclaration(ctx: FunctionDeclarationContext): void;
    
    public exitFunctionDeclaration(ctx: FunctionDeclarationContext): void;
    
    public enterFieldReference(ctx: FieldReferenceContext): void;
    
    public exitFieldReference(ctx: FieldReferenceContext): void;
    
    public enterExpression(ctx: ExpressionContext): void;
    
    public exitExpression(ctx: ExpressionContext): void;
    
    public enterObjectReference(ctx: ObjectReferenceContext): void;
    
    public exitObjectReference(ctx: ObjectReferenceContext): void;
    
    public enterGet(ctx: GetContext): void;
    
    public exitGet(ctx: GetContext): void;
    
    public enterFunctionCall(ctx: FunctionCallContext): void;
    
    public exitFunctionCall(ctx: FunctionCallContext): void;
    
    public enterGetPath(ctx: GetPathContext): void;
    
    public exitGetPath(ctx: GetPathContext): void;
    
    public enterMatchPath(ctx: MatchPathContext): void;
    
    public exitMatchPath(ctx: MatchPathContext): void;
    
    public visitTerminal(node: TerminalNode): void;

    public visitErrorNode(node: ErrorNode): void;

    public enterEveryRule(node: ParserRuleContext): void;

    public exitEveryRule(node: ParserRuleContext): void;
}
