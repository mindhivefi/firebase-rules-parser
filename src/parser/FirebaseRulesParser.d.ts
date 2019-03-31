import {CommonTokenStream, Parser, ParserRuleContext, Token} from 'antlr4';
import {TerminalNode} from 'antlr4/tree/Tree';


export declare class ServiceContext extends ParserRuleContext {
    
    public Service(): TerminalNode;
    
    public namespace(): NamespaceContext;
    
    public namespaceBlock(): NamespaceBlockContext;
    
}

export declare class NamespaceContext extends ParserRuleContext {
    
    public objectReference(): ObjectReferenceContext;
    
}

export declare class NamespaceBlockContext extends ParserRuleContext {
    
    public CurlyOpen(): TerminalNode;
    
    public CurlyClose(): TerminalNode;
    
}

export declare class MatchBlockContext extends ParserRuleContext {
    
    public CurlyOpen(): TerminalNode;
    
    public CurlyClose(): TerminalNode;
    
}

export declare class AllowKeyContext extends ParserRuleContext {
    
    public Read(): TerminalNode;
    
    public Write(): TerminalNode;
    
    public Update(): TerminalNode;
    
    public Delete(): TerminalNode;
    
    public Create(): TerminalNode;
    
    public List(): TerminalNode;
    
    public Get(): TerminalNode;
    
}

export declare class CommentContext extends ParserRuleContext {
    
    public Comment(): TerminalNode;
    
}

export declare class MatcherContext extends ParserRuleContext {
    
    public Match(): TerminalNode;
    
    public matchPath(): MatchPathContext;
    
    public matchBlock(): MatchBlockContext;
    
}

export declare class AllowContext extends ParserRuleContext {
    
    public Allow(): TerminalNode;
    
    public Semicolon(): TerminalNode;
    
    public Colon(): TerminalNode;
    
    public If(): TerminalNode;
    
    public expression(): ExpressionContext;
    
}

export declare class PathVariableReplaceContext extends ParserRuleContext {
    
    public Identifier(): TerminalNode;
    
    public String(): TerminalNode;
    
    public Number(): TerminalNode;
    
}

export declare class PathVariableContext extends ParserRuleContext {
    
    public CurlyOpen(): TerminalNode;
    
    public Identifier(): TerminalNode;
    
    public CurlyClose(): TerminalNode;
    
}

export declare class ArgContext extends ParserRuleContext {
    
    public expression(): ExpressionContext;
    
}

export declare class ArgumentsContext extends ParserRuleContext {
    
}

export declare class ArgDeclarationContext extends ParserRuleContext {
    
    public Identifier(): TerminalNode;
    
}

export declare class ArgDeclarationsContext extends ParserRuleContext {
    
}

export declare class FunctionDeclarationContext extends ParserRuleContext {
    
    public Function(): TerminalNode;
    
    public Identifier(): TerminalNode;
    
    public BracketOpen(): TerminalNode;
    
    public argDeclarations(): ArgDeclarationsContext;
    
    public BracketClose(): TerminalNode;
    
    public CurlyOpen(): TerminalNode;
    
    public Return(): TerminalNode;
    
    public expression(): ExpressionContext;
    
    public CurlyClose(): TerminalNode;
    
}

export declare class FieldReferenceWithIdentifierContext extends ParserRuleContext {
    
    public Dot(): TerminalNode;
    
    public Identifier(): TerminalNode;
    
}

export declare class FieldReferenceWithMemberRefContext extends ParserRuleContext {
    
    public SquareBracketOpen(): TerminalNode;
    
    public expression(): ExpressionContext;
    
    public SquareBracketClose(): TerminalNode;
    
}

export declare class FieldReferenceContext extends ParserRuleContext {
    
}

export declare class NumberExpressionContext extends ParserRuleContext {
    
    public Number(): TerminalNode;
    
}

export declare class ObjectReferenceExpressionContext extends ParserRuleContext {
    
    public objectReference(): ObjectReferenceContext;
    
}

export declare class ParenthesisExpressionContext extends ParserRuleContext {
    
    public BracketOpen(): TerminalNode;
    
    public expression(): ExpressionContext;
    
    public BracketClose(): TerminalNode;
    
}

export declare class ArithmeticExpressionContext extends ParserRuleContext {
    
    public ArithmeticAdd(): TerminalNode;
    
    public ArithmeticSub(): TerminalNode;
    
    public ArithmeticMul(): TerminalNode;
    
    public Slash(): TerminalNode;
    
    public ArithmeticExp(): TerminalNode;
    
    public ArithmeticModus(): TerminalNode;
    
}

export declare class BooleanExpressionContext extends ParserRuleContext {
    
    public True(): TerminalNode;
    
    public False(): TerminalNode;
    
}

export declare class FunctionExpressionContext extends ParserRuleContext {
    
    public functionCall(): FunctionCallContext;
    
}

export declare class CompareExpressionContext extends ParserRuleContext {
    
    public LessThan(): TerminalNode;
    
    public LessOrEqual(): TerminalNode;
    
    public Equals(): TerminalNode;
    
    public Unequal(): TerminalNode;
    
    public GreaterThan(): TerminalNode;
    
    public GreaterOrEqual(): TerminalNode;
    
}

export declare class BinaryExpressionContext extends ParserRuleContext {
    
    public BinaryAnd(): TerminalNode;
    
    public BinaryOr(): TerminalNode;
    
}

export declare class LogicalExpressionContext extends ParserRuleContext {
    
    public LogicalAnd(): TerminalNode;
    
    public LogicalOr(): TerminalNode;
    
}

export declare class GetExpressionContext extends ParserRuleContext {
    
    public get(): GetContext;
    
}

export declare class StringExpressionContext extends ParserRuleContext {
    
    public String(): TerminalNode;
    
}

export declare class NullExpressionContext extends ParserRuleContext {
    
    public Null(): TerminalNode;
    
}

export declare class UnaryExpressionContext extends ParserRuleContext {
    
    public expression(): ExpressionContext;
    
    public LogicalNot(): TerminalNode;
    
    public ArithmeticSub(): TerminalNode;
    
}

export declare class ObjectReferenceContext extends ParserRuleContext {
    
    public Identifier(): TerminalNode;
    
}

export declare class GetContext extends ParserRuleContext {
    
    public Get(): TerminalNode;
    
    public BracketOpen(): TerminalNode;
    
    public getPath(): GetPathContext;
    
    public BracketClose(): TerminalNode;
    
    public Dot(): TerminalNode;
    
    public Identifier(): TerminalNode;
    
    public SquareBracketOpen(): TerminalNode;
    
    public SquareBracketClose(): TerminalNode;
    
    public String(): TerminalNode;
    
    public Number(): TerminalNode;
    
    public objectReference(): ObjectReferenceContext;
    
}

export declare class FunctionCallContext extends ParserRuleContext {
    
    public Identifier(): TerminalNode;
    
    public BracketOpen(): TerminalNode;
    
    public arguments(): ArgumentsContext;
    
    public BracketClose(): TerminalNode;
    
}

export declare class GetPathContext extends ParserRuleContext {
    
}

export declare class MatchPathContext extends ParserRuleContext {
    
}

export declare class ExpressionContext extends ParserRuleContext {
    
}


export declare class FirebaseRulesParser extends Parser {
    public readonly ruleNames: string[];
    public readonly literalNames: string[];
    public readonly symbolicNames: string[];

    constructor(input: CommonTokenStream);
    
    public service(): ServiceContext;

    public namespace(): NamespaceContext;

    public namespaceBlock(): NamespaceBlockContext;

    public matchBlock(): MatchBlockContext;

    public allowKey(): AllowKeyContext;

    public comment(): CommentContext;

    public matcher(): MatcherContext;

    public allow(): AllowContext;

    public pathVariableReplace(): PathVariableReplaceContext;

    public pathVariable(): PathVariableContext;

    public arg(): ArgContext;

    public arguments(): ArgumentsContext;

    public argDeclaration(): ArgDeclarationContext;

    public argDeclarations(): ArgDeclarationsContext;

    public functionDeclaration(): FunctionDeclarationContext;

    public fieldReference(): FieldReferenceContext;

    public objectReference(): ObjectReferenceContext;

    public get(): GetContext;

    public functionCall(): FunctionCallContext;

    public getPath(): GetPathContext;

    public matchPath(): MatchPathContext;

}
