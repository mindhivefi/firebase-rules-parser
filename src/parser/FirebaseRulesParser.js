// Generated from FirebaseRules.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FirebaseRulesListener = require('./FirebaseRulesListener').FirebaseRulesListener;
var FirebaseRulesVisitor = require('./FirebaseRulesVisitor').FirebaseRulesVisitor;

var grammarFileName = "FirebaseRules.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00036\u00bf\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0007\u0004/\n\u0004\f\u0004\u000e\u00042\u000b\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0007\u0005;\n\u0005\f\u0005\u000e\u0005>\u000b\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0007\tN\n",
    "\t\f\t\u000e\tQ\u000b\t\u0003\t\u0003\t\u0003\t\u0005\tV\n\t\u0003\t",
    "\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0005\u000bb\n\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0005\fg\n\f\u0003\f\u0003\f\u0007\fk\n\f\f\f\u000e\fn\u000b\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u008a\n",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0007\u000e\u0098\n\u000e\f\u000e\u000e\u000e\u009b\u000b\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00a6\n\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u00b0\n\u0011\u0006\u0011\u00b2\n\u0011",
    "\r\u0011\u000e\u0011\u00b3\u0003\u0012\u0003\u0012\u0003\u0012\u0005",
    "\u0012\u00b9\n\u0012\u0006\u0012\u00bb\n\u0012\r\u0012\u000e\u0012\u00bc",
    "\u0003\u0012\u0002\u0003\u001a\u0013\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"\u0002\f\u0004\u000200",
    "33\u0004\u0002##&+\u0003\u000203\u0004\u0002\u0018\u0018\u001c\u001c",
    "\u0003\u0002$%\u0003\u0002\u0010\u0015\u0003\u0002\u0016\u0017\u0003",
    "\u0002\u0019\u001a\u0004\u0002\u001b\u001f44\u0003\u000202\u0002\u00cb",
    "\u0002$\u0003\u0002\u0002\u0002\u0004(\u0003\u0002\u0002\u0002\u0006",
    "*\u0003\u0002\u0002\u0002\b5\u0003\u0002\u0002\u0002\nA\u0003\u0002",
    "\u0002\u0002\fC\u0003\u0002\u0002\u0002\u000eE\u0003\u0002\u0002\u0002",
    "\u0010I\u0003\u0002\u0002\u0002\u0012Y\u0003\u0002\u0002\u0002\u0014",
    "]\u0003\u0002\u0002\u0002\u0016f\u0003\u0002\u0002\u0002\u0018o\u0003",
    "\u0002\u0002\u0002\u001a\u0089\u0003\u0002\u0002\u0002\u001c\u009c\u0003",
    "\u0002\u0002\u0002\u001e\u00a7\u0003\u0002\u0002\u0002 \u00b1\u0003",
    "\u0002\u0002\u0002\"\u00ba\u0003\u0002\u0002\u0002$%\u0007/\u0002\u0002",
    "%&\u0005\u0004\u0003\u0002&\'\u0005\u0006\u0004\u0002\'\u0003\u0003",
    "\u0002\u0002\u0002()\t\u0002\u0002\u0002)\u0005\u0003\u0002\u0002\u0002",
    "*0\u0007\u0006\u0002\u0002+/\u0005\u000e\b\u0002,/\u0005\f\u0007\u0002",
    "-/\u0005\u0018\r\u0002.+\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002",
    "\u0002.-\u0003\u0002\u0002\u0002/2\u0003\u0002\u0002\u00020.\u0003\u0002",
    "\u0002\u000201\u0003\u0002\u0002\u000213\u0003\u0002\u0002\u000220\u0003",
    "\u0002\u0002\u000234\u0007\u0007\u0002\u00024\u0007\u0003\u0002\u0002",
    "\u00025<\u0007\u0006\u0002\u00026;\u0005\u0010\t\u00027;\u0005\u000e",
    "\b\u00028;\u00076\u0002\u00029;\u0005\u0018\r\u0002:6\u0003\u0002\u0002",
    "\u0002:7\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002:9\u0003\u0002",
    "\u0002\u0002;>\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002<=\u0003",
    "\u0002\u0002\u0002=?\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002",
    "?@\u0007\u0007\u0002\u0002@\t\u0003\u0002\u0002\u0002AB\t\u0003\u0002",
    "\u0002B\u000b\u0003\u0002\u0002\u0002CD\u00076\u0002\u0002D\r\u0003",
    "\u0002\u0002\u0002EF\u0007!\u0002\u0002FG\u0005\"\u0012\u0002GH\u0005",
    "\b\u0005\u0002H\u000f\u0003\u0002\u0002\u0002IJ\u0007 \u0002\u0002J",
    "O\u0005\n\u0006\u0002KL\u0007\u000e\u0002\u0002LN\u0005\n\u0006\u0002",
    "MK\u0003\u0002\u0002\u0002NQ\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002",
    "\u0002OP\u0003\u0002\u0002\u0002PU\u0003\u0002\u0002\u0002QO\u0003\u0002",
    "\u0002\u0002RS\u0007\r\u0002\u0002ST\u0007\"\u0002\u0002TV\u0005\u001a",
    "\u000e\u0002UR\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002VW\u0003",
    "\u0002\u0002\u0002WX\u0007\u000f\u0002\u0002X\u0011\u0003\u0002\u0002",
    "\u0002YZ\u0007\u0003\u0002\u0002Z[\t\u0004\u0002\u0002[\\\u0007\t\u0002",
    "\u0002\\\u0013\u0003\u0002\u0002\u0002]^\u0007\u0006\u0002\u0002^a\u0007",
    "3\u0002\u0002_`\u0007\u0004\u0002\u0002`b\u0007\u0005\u0002\u0002a_",
    "\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002",
    "\u0002cd\u0007\u0007\u0002\u0002d\u0015\u0003\u0002\u0002\u0002eg\u0007",
    "3\u0002\u0002fe\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002gl",
    "\u0003\u0002\u0002\u0002hi\u0007\u000e\u0002\u0002ik\u00073\u0002\u0002",
    "jh\u0003\u0002\u0002\u0002kn\u0003\u0002\u0002\u0002lj\u0003\u0002\u0002",
    "\u0002lm\u0003\u0002\u0002\u0002m\u0017\u0003\u0002\u0002\u0002nl\u0003",
    "\u0002\u0002\u0002op\u0007,\u0002\u0002pq\u00073\u0002\u0002qr\u0007",
    "\b\u0002\u0002rs\u0005\u0016\f\u0002st\u0007\t\u0002\u0002tu\u0007\u0006",
    "\u0002\u0002uv\u0007-\u0002\u0002vw\u0005\u001a\u000e\u0002wx\u0007",
    "\u000f\u0002\u0002xy\u0007\u0007\u0002\u0002y\u0019\u0003\u0002\u0002",
    "\u0002z{\b\u000e\u0001\u0002{\u008a\u0007.\u0002\u0002|}\t\u0005\u0002",
    "\u0002}\u008a\u0005\u001a\u000e\u000b~\u008a\u00072\u0002\u0002\u007f",
    "\u008a\u00071\u0002\u0002\u0080\u008a\t\u0006\u0002\u0002\u0081\u008a",
    "\u00070\u0002\u0002\u0082\u008a\u0005\u001c\u000f\u0002\u0083\u008a",
    "\u0005\u001e\u0010\u0002\u0084\u008a\u00073\u0002\u0002\u0085\u0086",
    "\u0007\b\u0002\u0002\u0086\u0087\u0005\u001a\u000e\u0002\u0087\u0088",
    "\u0007\t\u0002\u0002\u0088\u008a\u0003\u0002\u0002\u0002\u0089z\u0003",
    "\u0002\u0002\u0002\u0089|\u0003\u0002\u0002\u0002\u0089~\u0003\u0002",
    "\u0002\u0002\u0089\u007f\u0003\u0002\u0002\u0002\u0089\u0080\u0003\u0002",
    "\u0002\u0002\u0089\u0081\u0003\u0002\u0002\u0002\u0089\u0082\u0003\u0002",
    "\u0002\u0002\u0089\u0083\u0003\u0002\u0002\u0002\u0089\u0084\u0003\u0002",
    "\u0002\u0002\u0089\u0085\u0003\u0002\u0002\u0002\u008a\u0099\u0003\u0002",
    "\u0002\u0002\u008b\u008c\f\u000f\u0002\u0002\u008c\u008d\t\u0007\u0002",
    "\u0002\u008d\u0098\u0005\u001a\u000e\u0010\u008e\u008f\f\u000e\u0002",
    "\u0002\u008f\u0090\t\b\u0002\u0002\u0090\u0098\u0005\u001a\u000e\u000f",
    "\u0091\u0092\f\r\u0002\u0002\u0092\u0093\t\t\u0002\u0002\u0093\u0098",
    "\u0005\u001a\u000e\u000e\u0094\u0095\f\f\u0002\u0002\u0095\u0096\t\n",
    "\u0002\u0002\u0096\u0098\u0005\u001a\u000e\r\u0097\u008b\u0003\u0002",
    "\u0002\u0002\u0097\u008e\u0003\u0002\u0002\u0002\u0097\u0091\u0003\u0002",
    "\u0002\u0002\u0097\u0094\u0003\u0002\u0002\u0002\u0098\u009b\u0003\u0002",
    "\u0002\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002",
    "\u0002\u0002\u009a\u001b\u0003\u0002\u0002\u0002\u009b\u0099\u0003\u0002",
    "\u0002\u0002\u009c\u009d\u0007#\u0002\u0002\u009d\u009e\u0007\b\u0002",
    "\u0002\u009e\u009f\u0005 \u0011\u0002\u009f\u00a0\u0007\t\u0002\u0002",
    "\u00a0\u00a1\u0007\f\u0002\u0002\u00a1\u00a5\t\u0002\u0002\u0002\u00a2",
    "\u00a3\u0007\n\u0002\u0002\u00a3\u00a4\t\u000b\u0002\u0002\u00a4\u00a6",
    "\u0007\u000b\u0002\u0002\u00a5\u00a2\u0003\u0002\u0002\u0002\u00a5\u00a6",
    "\u0003\u0002\u0002\u0002\u00a6\u001d\u0003\u0002\u0002\u0002\u00a7\u00a8",
    "\u00073\u0002\u0002\u00a8\u00a9\u0007\b\u0002\u0002\u00a9\u00aa\u0005",
    "\u0016\f\u0002\u00aa\u00ab\u0007\t\u0002\u0002\u00ab\u001f\u0003\u0002",
    "\u0002\u0002\u00ac\u00af\u00074\u0002\u0002\u00ad\u00b0\u00073\u0002",
    "\u0002\u00ae\u00b0\u0005\u0012\n\u0002\u00af\u00ad\u0003\u0002\u0002",
    "\u0002\u00af\u00ae\u0003\u0002\u0002\u0002\u00b0\u00b2\u0003\u0002\u0002",
    "\u0002\u00b1\u00ac\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002",
    "\u0002\u00b3\u00b1\u0003\u0002\u0002\u0002\u00b3\u00b4\u0003\u0002\u0002",
    "\u0002\u00b4!\u0003\u0002\u0002\u0002\u00b5\u00b8\u00074\u0002\u0002",
    "\u00b6\u00b9\u00073\u0002\u0002\u00b7\u00b9\u0005\u0014\u000b\u0002",
    "\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b8\u00b7\u0003\u0002\u0002\u0002",
    "\u00b9\u00bb\u0003\u0002\u0002\u0002\u00ba\u00b5\u0003\u0002\u0002\u0002",
    "\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002",
    "\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd#\u0003\u0002\u0002\u0002",
    "\u0013.0:<OUafl\u0089\u0097\u0099\u00a5\u00af\u00b3\u00b8\u00bc"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'$('", "'='", "'**'", "'{'", "'}'", "'('", "')'", 
                     "'['", "']'", "'.'", "':'", "','", "';'", "'<'", "'<='", 
                     "'>='", "'>'", "'=='", "'!='", "'&&'", "'||'", "'!'", 
                     "'&'", "'|'", "'+'", "'-'", "'*'", "'^'", "'%'", "'allow'", 
                     "'match'", "'if'", "'get'", "'true'", "'false'", "'list'", 
                     "'create'", "'update'", "'read'", "'write'", "'delete'", 
                     "'function'", "'return'", "'null'", "'service'", null, 
                     null, null, null, "'/'" ];

var symbolicNames = [ null, null, null, null, "CurlyOpen", "CurlyClose", 
                      "BracketOpen", "BracketClose", "SquareBracketOpen", 
                      "SquareBracketClose", "Dot", "Colon", "Comma", "Semicolon", 
                      "LessThan", "LessOrEqual", "GreaterOrEqual", "GreaterThan", 
                      "Equals", "Unequal", "LogicalAnd", "LogicalOr", "LogicalNot", 
                      "BinaryAnd", "BinaryOr", "ArithmeticAdd", "ArithmeticSub", 
                      "ArithmeticMul", "ArithmeticExp", "ArithmeticModus", 
                      "Allow", "Match", "If", "Get", "True", "False", "List", 
                      "Create", "Update", "Read", "Write", "Delete", "Function", 
                      "Return", "Null", "Service", "ObjectReference", "Number", 
                      "String", "Identifier", "Slash", "WS", "Comment" ];

var ruleNames =  [ "service", "namespace", "namespaceBlock", "matchBlock", 
                   "allowKey", "comment", "matcher", "allow", "pathVariableReplace", 
                   "pathVariable", "arguments", "functionDeclaration", "expression", 
                   "get", "functionCall", "getPath", "matchPath" ];

function FirebaseRulesParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FirebaseRulesParser.prototype = Object.create(antlr4.Parser.prototype);
FirebaseRulesParser.prototype.constructor = FirebaseRulesParser;

Object.defineProperty(FirebaseRulesParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

FirebaseRulesParser.EOF = antlr4.Token.EOF;
FirebaseRulesParser.T__0 = 1;
FirebaseRulesParser.T__1 = 2;
FirebaseRulesParser.T__2 = 3;
FirebaseRulesParser.CurlyOpen = 4;
FirebaseRulesParser.CurlyClose = 5;
FirebaseRulesParser.BracketOpen = 6;
FirebaseRulesParser.BracketClose = 7;
FirebaseRulesParser.SquareBracketOpen = 8;
FirebaseRulesParser.SquareBracketClose = 9;
FirebaseRulesParser.Dot = 10;
FirebaseRulesParser.Colon = 11;
FirebaseRulesParser.Comma = 12;
FirebaseRulesParser.Semicolon = 13;
FirebaseRulesParser.LessThan = 14;
FirebaseRulesParser.LessOrEqual = 15;
FirebaseRulesParser.GreaterOrEqual = 16;
FirebaseRulesParser.GreaterThan = 17;
FirebaseRulesParser.Equals = 18;
FirebaseRulesParser.Unequal = 19;
FirebaseRulesParser.LogicalAnd = 20;
FirebaseRulesParser.LogicalOr = 21;
FirebaseRulesParser.LogicalNot = 22;
FirebaseRulesParser.BinaryAnd = 23;
FirebaseRulesParser.BinaryOr = 24;
FirebaseRulesParser.ArithmeticAdd = 25;
FirebaseRulesParser.ArithmeticSub = 26;
FirebaseRulesParser.ArithmeticMul = 27;
FirebaseRulesParser.ArithmeticExp = 28;
FirebaseRulesParser.ArithmeticModus = 29;
FirebaseRulesParser.Allow = 30;
FirebaseRulesParser.Match = 31;
FirebaseRulesParser.If = 32;
FirebaseRulesParser.Get = 33;
FirebaseRulesParser.True = 34;
FirebaseRulesParser.False = 35;
FirebaseRulesParser.List = 36;
FirebaseRulesParser.Create = 37;
FirebaseRulesParser.Update = 38;
FirebaseRulesParser.Read = 39;
FirebaseRulesParser.Write = 40;
FirebaseRulesParser.Delete = 41;
FirebaseRulesParser.Function = 42;
FirebaseRulesParser.Return = 43;
FirebaseRulesParser.Null = 44;
FirebaseRulesParser.Service = 45;
FirebaseRulesParser.ObjectReference = 46;
FirebaseRulesParser.Number = 47;
FirebaseRulesParser.String = 48;
FirebaseRulesParser.Identifier = 49;
FirebaseRulesParser.Slash = 50;
FirebaseRulesParser.WS = 51;
FirebaseRulesParser.Comment = 52;

FirebaseRulesParser.RULE_service = 0;
FirebaseRulesParser.RULE_namespace = 1;
FirebaseRulesParser.RULE_namespaceBlock = 2;
FirebaseRulesParser.RULE_matchBlock = 3;
FirebaseRulesParser.RULE_allowKey = 4;
FirebaseRulesParser.RULE_comment = 5;
FirebaseRulesParser.RULE_matcher = 6;
FirebaseRulesParser.RULE_allow = 7;
FirebaseRulesParser.RULE_pathVariableReplace = 8;
FirebaseRulesParser.RULE_pathVariable = 9;
FirebaseRulesParser.RULE_arguments = 10;
FirebaseRulesParser.RULE_functionDeclaration = 11;
FirebaseRulesParser.RULE_expression = 12;
FirebaseRulesParser.RULE_get = 13;
FirebaseRulesParser.RULE_functionCall = 14;
FirebaseRulesParser.RULE_getPath = 15;
FirebaseRulesParser.RULE_matchPath = 16;

function ServiceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_service;
    return this;
}

ServiceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ServiceContext.prototype.constructor = ServiceContext;

ServiceContext.prototype.Service = function() {
    return this.getToken(FirebaseRulesParser.Service, 0);
};

ServiceContext.prototype.namespace = function() {
    return this.getTypedRuleContext(NamespaceContext,0);
};

ServiceContext.prototype.namespaceBlock = function() {
    return this.getTypedRuleContext(NamespaceBlockContext,0);
};

ServiceContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterService(this);
	}
};

ServiceContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitService(this);
	}
};

ServiceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitService(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.ServiceContext = ServiceContext;

FirebaseRulesParser.prototype.service = function() {

    var localctx = new ServiceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FirebaseRulesParser.RULE_service);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this.match(FirebaseRulesParser.Service);
        this.state = 35;
        this.namespace();
        this.state = 36;
        this.namespaceBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamespaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_namespace;
    return this;
}

NamespaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceContext.prototype.constructor = NamespaceContext;

NamespaceContext.prototype.Identifier = function() {
    return this.getToken(FirebaseRulesParser.Identifier, 0);
};

NamespaceContext.prototype.ObjectReference = function() {
    return this.getToken(FirebaseRulesParser.ObjectReference, 0);
};

NamespaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterNamespace(this);
	}
};

NamespaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitNamespace(this);
	}
};

NamespaceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitNamespace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.NamespaceContext = NamespaceContext;

FirebaseRulesParser.prototype.namespace = function() {

    var localctx = new NamespaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FirebaseRulesParser.RULE_namespace);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        _la = this._input.LA(1);
        if(!(_la===FirebaseRulesParser.ObjectReference || _la===FirebaseRulesParser.Identifier)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamespaceBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_namespaceBlock;
    return this;
}

NamespaceBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceBlockContext.prototype.constructor = NamespaceBlockContext;

NamespaceBlockContext.prototype.CurlyOpen = function() {
    return this.getToken(FirebaseRulesParser.CurlyOpen, 0);
};

NamespaceBlockContext.prototype.CurlyClose = function() {
    return this.getToken(FirebaseRulesParser.CurlyClose, 0);
};

NamespaceBlockContext.prototype.matcher = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MatcherContext);
    } else {
        return this.getTypedRuleContext(MatcherContext,i);
    }
};

NamespaceBlockContext.prototype.comment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CommentContext);
    } else {
        return this.getTypedRuleContext(CommentContext,i);
    }
};

NamespaceBlockContext.prototype.functionDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunctionDeclarationContext);
    } else {
        return this.getTypedRuleContext(FunctionDeclarationContext,i);
    }
};

NamespaceBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterNamespaceBlock(this);
	}
};

NamespaceBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitNamespaceBlock(this);
	}
};

NamespaceBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitNamespaceBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.NamespaceBlockContext = NamespaceBlockContext;

FirebaseRulesParser.prototype.namespaceBlock = function() {

    var localctx = new NamespaceBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, FirebaseRulesParser.RULE_namespaceBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 40;
        this.match(FirebaseRulesParser.CurlyOpen);
        this.state = 46;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (FirebaseRulesParser.Match - 31)) | (1 << (FirebaseRulesParser.Function - 31)) | (1 << (FirebaseRulesParser.Comment - 31)))) !== 0)) {
            this.state = 44;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case FirebaseRulesParser.Match:
                this.state = 41;
                this.matcher();
                break;
            case FirebaseRulesParser.Comment:
                this.state = 42;
                this.comment();
                break;
            case FirebaseRulesParser.Function:
                this.state = 43;
                this.functionDeclaration();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 48;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 49;
        this.match(FirebaseRulesParser.CurlyClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MatchBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_matchBlock;
    return this;
}

MatchBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatchBlockContext.prototype.constructor = MatchBlockContext;

MatchBlockContext.prototype.CurlyOpen = function() {
    return this.getToken(FirebaseRulesParser.CurlyOpen, 0);
};

MatchBlockContext.prototype.CurlyClose = function() {
    return this.getToken(FirebaseRulesParser.CurlyClose, 0);
};

MatchBlockContext.prototype.allow = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AllowContext);
    } else {
        return this.getTypedRuleContext(AllowContext,i);
    }
};

MatchBlockContext.prototype.matcher = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MatcherContext);
    } else {
        return this.getTypedRuleContext(MatcherContext,i);
    }
};

MatchBlockContext.prototype.Comment = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FirebaseRulesParser.Comment);
    } else {
        return this.getToken(FirebaseRulesParser.Comment, i);
    }
};


MatchBlockContext.prototype.functionDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunctionDeclarationContext);
    } else {
        return this.getTypedRuleContext(FunctionDeclarationContext,i);
    }
};

MatchBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterMatchBlock(this);
	}
};

MatchBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitMatchBlock(this);
	}
};

MatchBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitMatchBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.MatchBlockContext = MatchBlockContext;

FirebaseRulesParser.prototype.matchBlock = function() {

    var localctx = new MatchBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FirebaseRulesParser.RULE_matchBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this.match(FirebaseRulesParser.CurlyOpen);
        this.state = 58;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 30)) & ~0x1f) == 0 && ((1 << (_la - 30)) & ((1 << (FirebaseRulesParser.Allow - 30)) | (1 << (FirebaseRulesParser.Match - 30)) | (1 << (FirebaseRulesParser.Function - 30)) | (1 << (FirebaseRulesParser.Comment - 30)))) !== 0)) {
            this.state = 56;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case FirebaseRulesParser.Allow:
                this.state = 52;
                this.allow();
                break;
            case FirebaseRulesParser.Match:
                this.state = 53;
                this.matcher();
                break;
            case FirebaseRulesParser.Comment:
                this.state = 54;
                this.match(FirebaseRulesParser.Comment);
                break;
            case FirebaseRulesParser.Function:
                this.state = 55;
                this.functionDeclaration();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 60;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 61;
        this.match(FirebaseRulesParser.CurlyClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AllowKeyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_allowKey;
    return this;
}

AllowKeyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AllowKeyContext.prototype.constructor = AllowKeyContext;

AllowKeyContext.prototype.Read = function() {
    return this.getToken(FirebaseRulesParser.Read, 0);
};

AllowKeyContext.prototype.Write = function() {
    return this.getToken(FirebaseRulesParser.Write, 0);
};

AllowKeyContext.prototype.Update = function() {
    return this.getToken(FirebaseRulesParser.Update, 0);
};

AllowKeyContext.prototype.Delete = function() {
    return this.getToken(FirebaseRulesParser.Delete, 0);
};

AllowKeyContext.prototype.Create = function() {
    return this.getToken(FirebaseRulesParser.Create, 0);
};

AllowKeyContext.prototype.List = function() {
    return this.getToken(FirebaseRulesParser.List, 0);
};

AllowKeyContext.prototype.Get = function() {
    return this.getToken(FirebaseRulesParser.Get, 0);
};

AllowKeyContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterAllowKey(this);
	}
};

AllowKeyContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitAllowKey(this);
	}
};

AllowKeyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitAllowKey(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.AllowKeyContext = AllowKeyContext;

FirebaseRulesParser.prototype.allowKey = function() {

    var localctx = new AllowKeyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, FirebaseRulesParser.RULE_allowKey);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        _la = this._input.LA(1);
        if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (FirebaseRulesParser.Get - 33)) | (1 << (FirebaseRulesParser.List - 33)) | (1 << (FirebaseRulesParser.Create - 33)) | (1 << (FirebaseRulesParser.Update - 33)) | (1 << (FirebaseRulesParser.Read - 33)) | (1 << (FirebaseRulesParser.Write - 33)) | (1 << (FirebaseRulesParser.Delete - 33)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CommentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_comment;
    return this;
}

CommentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommentContext.prototype.constructor = CommentContext;

CommentContext.prototype.Comment = function() {
    return this.getToken(FirebaseRulesParser.Comment, 0);
};

CommentContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterComment(this);
	}
};

CommentContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitComment(this);
	}
};

CommentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitComment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.CommentContext = CommentContext;

FirebaseRulesParser.prototype.comment = function() {

    var localctx = new CommentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, FirebaseRulesParser.RULE_comment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this.match(FirebaseRulesParser.Comment);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MatcherContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_matcher;
    return this;
}

MatcherContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatcherContext.prototype.constructor = MatcherContext;

MatcherContext.prototype.Match = function() {
    return this.getToken(FirebaseRulesParser.Match, 0);
};

MatcherContext.prototype.matchPath = function() {
    return this.getTypedRuleContext(MatchPathContext,0);
};

MatcherContext.prototype.matchBlock = function() {
    return this.getTypedRuleContext(MatchBlockContext,0);
};

MatcherContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterMatcher(this);
	}
};

MatcherContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitMatcher(this);
	}
};

MatcherContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitMatcher(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.MatcherContext = MatcherContext;

FirebaseRulesParser.prototype.matcher = function() {

    var localctx = new MatcherContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FirebaseRulesParser.RULE_matcher);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.match(FirebaseRulesParser.Match);
        this.state = 68;
        this.matchPath();
        this.state = 69;
        this.matchBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AllowContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_allow;
    return this;
}

AllowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AllowContext.prototype.constructor = AllowContext;

AllowContext.prototype.Allow = function() {
    return this.getToken(FirebaseRulesParser.Allow, 0);
};

AllowContext.prototype.allowKey = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AllowKeyContext);
    } else {
        return this.getTypedRuleContext(AllowKeyContext,i);
    }
};

AllowContext.prototype.Semicolon = function() {
    return this.getToken(FirebaseRulesParser.Semicolon, 0);
};

AllowContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FirebaseRulesParser.Comma);
    } else {
        return this.getToken(FirebaseRulesParser.Comma, i);
    }
};


AllowContext.prototype.Colon = function() {
    return this.getToken(FirebaseRulesParser.Colon, 0);
};

AllowContext.prototype.If = function() {
    return this.getToken(FirebaseRulesParser.If, 0);
};

AllowContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AllowContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterAllow(this);
	}
};

AllowContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitAllow(this);
	}
};

AllowContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitAllow(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.AllowContext = AllowContext;

FirebaseRulesParser.prototype.allow = function() {

    var localctx = new AllowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, FirebaseRulesParser.RULE_allow);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.match(FirebaseRulesParser.Allow);
        this.state = 72;
        this.allowKey();
        this.state = 77;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FirebaseRulesParser.Comma) {
            this.state = 73;
            this.match(FirebaseRulesParser.Comma);
            this.state = 74;
            this.allowKey();
            this.state = 79;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 83;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FirebaseRulesParser.Colon) {
            this.state = 80;
            this.match(FirebaseRulesParser.Colon);
            this.state = 81;
            this.match(FirebaseRulesParser.If);
            this.state = 82;
            this.expression(0);
        }

        this.state = 85;
        this.match(FirebaseRulesParser.Semicolon);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PathVariableReplaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_pathVariableReplace;
    return this;
}

PathVariableReplaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PathVariableReplaceContext.prototype.constructor = PathVariableReplaceContext;

PathVariableReplaceContext.prototype.Identifier = function() {
    return this.getToken(FirebaseRulesParser.Identifier, 0);
};

PathVariableReplaceContext.prototype.String = function() {
    return this.getToken(FirebaseRulesParser.String, 0);
};

PathVariableReplaceContext.prototype.Number = function() {
    return this.getToken(FirebaseRulesParser.Number, 0);
};

PathVariableReplaceContext.prototype.ObjectReference = function() {
    return this.getToken(FirebaseRulesParser.ObjectReference, 0);
};

PathVariableReplaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterPathVariableReplace(this);
	}
};

PathVariableReplaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitPathVariableReplace(this);
	}
};

PathVariableReplaceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitPathVariableReplace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.PathVariableReplaceContext = PathVariableReplaceContext;

FirebaseRulesParser.prototype.pathVariableReplace = function() {

    var localctx = new PathVariableReplaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, FirebaseRulesParser.RULE_pathVariableReplace);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 87;
        this.match(FirebaseRulesParser.T__0);
        this.state = 88;
        _la = this._input.LA(1);
        if(!(((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (FirebaseRulesParser.ObjectReference - 46)) | (1 << (FirebaseRulesParser.Number - 46)) | (1 << (FirebaseRulesParser.String - 46)) | (1 << (FirebaseRulesParser.Identifier - 46)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 89;
        this.match(FirebaseRulesParser.BracketClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PathVariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_pathVariable;
    return this;
}

PathVariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PathVariableContext.prototype.constructor = PathVariableContext;

PathVariableContext.prototype.CurlyOpen = function() {
    return this.getToken(FirebaseRulesParser.CurlyOpen, 0);
};

PathVariableContext.prototype.Identifier = function() {
    return this.getToken(FirebaseRulesParser.Identifier, 0);
};

PathVariableContext.prototype.CurlyClose = function() {
    return this.getToken(FirebaseRulesParser.CurlyClose, 0);
};

PathVariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterPathVariable(this);
	}
};

PathVariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitPathVariable(this);
	}
};

PathVariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitPathVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.PathVariableContext = PathVariableContext;

FirebaseRulesParser.prototype.pathVariable = function() {

    var localctx = new PathVariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, FirebaseRulesParser.RULE_pathVariable);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this.match(FirebaseRulesParser.CurlyOpen);
        this.state = 92;
        this.match(FirebaseRulesParser.Identifier);
        this.state = 95;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FirebaseRulesParser.T__1) {
            this.state = 93;
            this.match(FirebaseRulesParser.T__1);
            this.state = 94;
            this.match(FirebaseRulesParser.T__2);
        }

        this.state = 97;
        this.match(FirebaseRulesParser.CurlyClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_arguments;
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FirebaseRulesParser.Identifier);
    } else {
        return this.getToken(FirebaseRulesParser.Identifier, i);
    }
};


ArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterArguments(this);
	}
};

ArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitArguments(this);
	}
};

ArgumentsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitArguments(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.ArgumentsContext = ArgumentsContext;

FirebaseRulesParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, FirebaseRulesParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FirebaseRulesParser.Identifier) {
            this.state = 99;
            this.match(FirebaseRulesParser.Identifier);
        }

        this.state = 106;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FirebaseRulesParser.Comma) {
            this.state = 102;
            this.match(FirebaseRulesParser.Comma);
            this.state = 103;
            this.match(FirebaseRulesParser.Identifier);
            this.state = 108;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_functionDeclaration;
    return this;
}

FunctionDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclarationContext.prototype.constructor = FunctionDeclarationContext;

FunctionDeclarationContext.prototype.Function = function() {
    return this.getToken(FirebaseRulesParser.Function, 0);
};

FunctionDeclarationContext.prototype.Identifier = function() {
    return this.getToken(FirebaseRulesParser.Identifier, 0);
};

FunctionDeclarationContext.prototype.BracketOpen = function() {
    return this.getToken(FirebaseRulesParser.BracketOpen, 0);
};

FunctionDeclarationContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};

FunctionDeclarationContext.prototype.BracketClose = function() {
    return this.getToken(FirebaseRulesParser.BracketClose, 0);
};

FunctionDeclarationContext.prototype.CurlyOpen = function() {
    return this.getToken(FirebaseRulesParser.CurlyOpen, 0);
};

FunctionDeclarationContext.prototype.Return = function() {
    return this.getToken(FirebaseRulesParser.Return, 0);
};

FunctionDeclarationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

FunctionDeclarationContext.prototype.CurlyClose = function() {
    return this.getToken(FirebaseRulesParser.CurlyClose, 0);
};

FunctionDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitFunctionDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.FunctionDeclarationContext = FunctionDeclarationContext;

FirebaseRulesParser.prototype.functionDeclaration = function() {

    var localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, FirebaseRulesParser.RULE_functionDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this.match(FirebaseRulesParser.Function);
        this.state = 110;
        this.match(FirebaseRulesParser.Identifier);
        this.state = 111;
        this.match(FirebaseRulesParser.BracketOpen);
        this.state = 112;
        this.arguments();
        this.state = 113;
        this.match(FirebaseRulesParser.BracketClose);
        this.state = 114;
        this.match(FirebaseRulesParser.CurlyOpen);
        this.state = 115;
        this.match(FirebaseRulesParser.Return);
        this.state = 116;
        this.expression(0);
        this.state = 117;
        this.match(FirebaseRulesParser.Semicolon);
        this.state = 118;
        this.match(FirebaseRulesParser.CurlyClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function NumberExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NumberExpressionContext.prototype.constructor = NumberExpressionContext;

FirebaseRulesParser.NumberExpressionContext = NumberExpressionContext;

NumberExpressionContext.prototype.Number = function() {
    return this.getToken(FirebaseRulesParser.Number, 0);
};
NumberExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterNumberExpression(this);
	}
};

NumberExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitNumberExpression(this);
	}
};

NumberExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitNumberExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ObjectReferenceExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ObjectReferenceExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ObjectReferenceExpressionContext.prototype.constructor = ObjectReferenceExpressionContext;

FirebaseRulesParser.ObjectReferenceExpressionContext = ObjectReferenceExpressionContext;

ObjectReferenceExpressionContext.prototype.ObjectReference = function() {
    return this.getToken(FirebaseRulesParser.ObjectReference, 0);
};
ObjectReferenceExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterObjectReferenceExpression(this);
	}
};

ObjectReferenceExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitObjectReferenceExpression(this);
	}
};

ObjectReferenceExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitObjectReferenceExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParenthesisExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenthesisExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ParenthesisExpressionContext.prototype.constructor = ParenthesisExpressionContext;

FirebaseRulesParser.ParenthesisExpressionContext = ParenthesisExpressionContext;

ParenthesisExpressionContext.prototype.BracketOpen = function() {
    return this.getToken(FirebaseRulesParser.BracketOpen, 0);
};

ParenthesisExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ParenthesisExpressionContext.prototype.BracketClose = function() {
    return this.getToken(FirebaseRulesParser.BracketClose, 0);
};
ParenthesisExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterParenthesisExpression(this);
	}
};

ParenthesisExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitParenthesisExpression(this);
	}
};

ParenthesisExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitParenthesisExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdentifierReferenceExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierReferenceExpressionContext.prototype = Object.create(ExpressionContext.prototype);
IdentifierReferenceExpressionContext.prototype.constructor = IdentifierReferenceExpressionContext;

FirebaseRulesParser.IdentifierReferenceExpressionContext = IdentifierReferenceExpressionContext;

IdentifierReferenceExpressionContext.prototype.Identifier = function() {
    return this.getToken(FirebaseRulesParser.Identifier, 0);
};
IdentifierReferenceExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterIdentifierReferenceExpression(this);
	}
};

IdentifierReferenceExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitIdentifierReferenceExpression(this);
	}
};

IdentifierReferenceExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitIdentifierReferenceExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArithmeticExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArithmeticExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ArithmeticExpressionContext.prototype.constructor = ArithmeticExpressionContext;

FirebaseRulesParser.ArithmeticExpressionContext = ArithmeticExpressionContext;

ArithmeticExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ArithmeticExpressionContext.prototype.ArithmeticAdd = function() {
    return this.getToken(FirebaseRulesParser.ArithmeticAdd, 0);
};

ArithmeticExpressionContext.prototype.ArithmeticSub = function() {
    return this.getToken(FirebaseRulesParser.ArithmeticSub, 0);
};

ArithmeticExpressionContext.prototype.ArithmeticMul = function() {
    return this.getToken(FirebaseRulesParser.ArithmeticMul, 0);
};

ArithmeticExpressionContext.prototype.Slash = function() {
    return this.getToken(FirebaseRulesParser.Slash, 0);
};

ArithmeticExpressionContext.prototype.ArithmeticExp = function() {
    return this.getToken(FirebaseRulesParser.ArithmeticExp, 0);
};

ArithmeticExpressionContext.prototype.ArithmeticModus = function() {
    return this.getToken(FirebaseRulesParser.ArithmeticModus, 0);
};
ArithmeticExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterArithmeticExpression(this);
	}
};

ArithmeticExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitArithmeticExpression(this);
	}
};

ArithmeticExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitArithmeticExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BooleanExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BooleanExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BooleanExpressionContext.prototype.constructor = BooleanExpressionContext;

FirebaseRulesParser.BooleanExpressionContext = BooleanExpressionContext;

BooleanExpressionContext.prototype.True = function() {
    return this.getToken(FirebaseRulesParser.True, 0);
};

BooleanExpressionContext.prototype.False = function() {
    return this.getToken(FirebaseRulesParser.False, 0);
};
BooleanExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterBooleanExpression(this);
	}
};

BooleanExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitBooleanExpression(this);
	}
};

BooleanExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitBooleanExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FunctionExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionExpressionContext.prototype = Object.create(ExpressionContext.prototype);
FunctionExpressionContext.prototype.constructor = FunctionExpressionContext;

FirebaseRulesParser.FunctionExpressionContext = FunctionExpressionContext;

FunctionExpressionContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};
FunctionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitFunctionExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CompareExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CompareExpressionContext.prototype = Object.create(ExpressionContext.prototype);
CompareExpressionContext.prototype.constructor = CompareExpressionContext;

FirebaseRulesParser.CompareExpressionContext = CompareExpressionContext;

CompareExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

CompareExpressionContext.prototype.LessThan = function() {
    return this.getToken(FirebaseRulesParser.LessThan, 0);
};

CompareExpressionContext.prototype.LessOrEqual = function() {
    return this.getToken(FirebaseRulesParser.LessOrEqual, 0);
};

CompareExpressionContext.prototype.Equals = function() {
    return this.getToken(FirebaseRulesParser.Equals, 0);
};

CompareExpressionContext.prototype.Unequal = function() {
    return this.getToken(FirebaseRulesParser.Unequal, 0);
};

CompareExpressionContext.prototype.GreaterThan = function() {
    return this.getToken(FirebaseRulesParser.GreaterThan, 0);
};

CompareExpressionContext.prototype.GreaterOrEqual = function() {
    return this.getToken(FirebaseRulesParser.GreaterOrEqual, 0);
};
CompareExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterCompareExpression(this);
	}
};

CompareExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitCompareExpression(this);
	}
};

CompareExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitCompareExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BinaryExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BinaryExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BinaryExpressionContext.prototype.constructor = BinaryExpressionContext;

FirebaseRulesParser.BinaryExpressionContext = BinaryExpressionContext;

BinaryExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

BinaryExpressionContext.prototype.BinaryAnd = function() {
    return this.getToken(FirebaseRulesParser.BinaryAnd, 0);
};

BinaryExpressionContext.prototype.BinaryOr = function() {
    return this.getToken(FirebaseRulesParser.BinaryOr, 0);
};
BinaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterBinaryExpression(this);
	}
};

BinaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitBinaryExpression(this);
	}
};

BinaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitBinaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LogicalExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalExpressionContext.prototype = Object.create(ExpressionContext.prototype);
LogicalExpressionContext.prototype.constructor = LogicalExpressionContext;

FirebaseRulesParser.LogicalExpressionContext = LogicalExpressionContext;

LogicalExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

LogicalExpressionContext.prototype.LogicalAnd = function() {
    return this.getToken(FirebaseRulesParser.LogicalAnd, 0);
};

LogicalExpressionContext.prototype.LogicalOr = function() {
    return this.getToken(FirebaseRulesParser.LogicalOr, 0);
};
LogicalExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterLogicalExpression(this);
	}
};

LogicalExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitLogicalExpression(this);
	}
};

LogicalExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitLogicalExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GetExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GetExpressionContext.prototype = Object.create(ExpressionContext.prototype);
GetExpressionContext.prototype.constructor = GetExpressionContext;

FirebaseRulesParser.GetExpressionContext = GetExpressionContext;

GetExpressionContext.prototype.get = function() {
    return this.getTypedRuleContext(GetContext,0);
};
GetExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterGetExpression(this);
	}
};

GetExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitGetExpression(this);
	}
};

GetExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitGetExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringExpressionContext.prototype = Object.create(ExpressionContext.prototype);
StringExpressionContext.prototype.constructor = StringExpressionContext;

FirebaseRulesParser.StringExpressionContext = StringExpressionContext;

StringExpressionContext.prototype.String = function() {
    return this.getToken(FirebaseRulesParser.String, 0);
};
StringExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterStringExpression(this);
	}
};

StringExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitStringExpression(this);
	}
};

StringExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitStringExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NullExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NullExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NullExpressionContext.prototype.constructor = NullExpressionContext;

FirebaseRulesParser.NullExpressionContext = NullExpressionContext;

NullExpressionContext.prototype.Null = function() {
    return this.getToken(FirebaseRulesParser.Null, 0);
};
NullExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterNullExpression(this);
	}
};

NullExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitNullExpression(this);
	}
};

NullExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitNullExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryExpressionContext.prototype = Object.create(ExpressionContext.prototype);
UnaryExpressionContext.prototype.constructor = UnaryExpressionContext;

FirebaseRulesParser.UnaryExpressionContext = UnaryExpressionContext;

UnaryExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

UnaryExpressionContext.prototype.LogicalNot = function() {
    return this.getToken(FirebaseRulesParser.LogicalNot, 0);
};

UnaryExpressionContext.prototype.ArithmeticSub = function() {
    return this.getToken(FirebaseRulesParser.ArithmeticSub, 0);
};
UnaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterUnaryExpression(this);
	}
};

UnaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitUnaryExpression(this);
	}
};

UnaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitUnaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FirebaseRulesParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 24;
    this.enterRecursionRule(localctx, 24, FirebaseRulesParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            localctx = new NullExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 121;
            this.match(FirebaseRulesParser.Null);
            break;

        case 2:
            localctx = new UnaryExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 122;
            _la = this._input.LA(1);
            if(!(_la===FirebaseRulesParser.LogicalNot || _la===FirebaseRulesParser.ArithmeticSub)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 123;
            this.expression(9);
            break;

        case 3:
            localctx = new StringExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 124;
            this.match(FirebaseRulesParser.String);
            break;

        case 4:
            localctx = new NumberExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 125;
            this.match(FirebaseRulesParser.Number);
            break;

        case 5:
            localctx = new BooleanExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 126;
            _la = this._input.LA(1);
            if(!(_la===FirebaseRulesParser.True || _la===FirebaseRulesParser.False)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        case 6:
            localctx = new ObjectReferenceExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 127;
            this.match(FirebaseRulesParser.ObjectReference);
            break;

        case 7:
            localctx = new GetExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 128;
            this.get();
            break;

        case 8:
            localctx = new FunctionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 129;
            this.functionCall();
            break;

        case 9:
            localctx = new IdentifierReferenceExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 130;
            this.match(FirebaseRulesParser.Identifier);
            break;

        case 10:
            localctx = new ParenthesisExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 131;
            this.match(FirebaseRulesParser.BracketOpen);
            this.state = 132;
            this.expression(0);
            this.state = 133;
            this.match(FirebaseRulesParser.BracketClose);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 151;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 149;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new CompareExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FirebaseRulesParser.RULE_expression);
                    this.state = 137;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 138;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FirebaseRulesParser.LessThan) | (1 << FirebaseRulesParser.LessOrEqual) | (1 << FirebaseRulesParser.GreaterOrEqual) | (1 << FirebaseRulesParser.GreaterThan) | (1 << FirebaseRulesParser.Equals) | (1 << FirebaseRulesParser.Unequal))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 139;
                    this.expression(14);
                    break;

                case 2:
                    localctx = new LogicalExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FirebaseRulesParser.RULE_expression);
                    this.state = 140;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 141;
                    _la = this._input.LA(1);
                    if(!(_la===FirebaseRulesParser.LogicalAnd || _la===FirebaseRulesParser.LogicalOr)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 142;
                    this.expression(13);
                    break;

                case 3:
                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FirebaseRulesParser.RULE_expression);
                    this.state = 143;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 144;
                    _la = this._input.LA(1);
                    if(!(_la===FirebaseRulesParser.BinaryAnd || _la===FirebaseRulesParser.BinaryOr)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 145;
                    this.expression(12);
                    break;

                case 4:
                    localctx = new ArithmeticExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FirebaseRulesParser.RULE_expression);
                    this.state = 146;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 147;
                    _la = this._input.LA(1);
                    if(!(((((_la - 25)) & ~0x1f) == 0 && ((1 << (_la - 25)) & ((1 << (FirebaseRulesParser.ArithmeticAdd - 25)) | (1 << (FirebaseRulesParser.ArithmeticSub - 25)) | (1 << (FirebaseRulesParser.ArithmeticMul - 25)) | (1 << (FirebaseRulesParser.ArithmeticExp - 25)) | (1 << (FirebaseRulesParser.ArithmeticModus - 25)) | (1 << (FirebaseRulesParser.Slash - 25)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 148;
                    this.expression(11);
                    break;

                } 
            }
            this.state = 153;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function GetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_get;
    return this;
}

GetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GetContext.prototype.constructor = GetContext;

GetContext.prototype.Get = function() {
    return this.getToken(FirebaseRulesParser.Get, 0);
};

GetContext.prototype.BracketOpen = function() {
    return this.getToken(FirebaseRulesParser.BracketOpen, 0);
};

GetContext.prototype.getPath = function() {
    return this.getTypedRuleContext(GetPathContext,0);
};

GetContext.prototype.BracketClose = function() {
    return this.getToken(FirebaseRulesParser.BracketClose, 0);
};

GetContext.prototype.Dot = function() {
    return this.getToken(FirebaseRulesParser.Dot, 0);
};

GetContext.prototype.Identifier = function() {
    return this.getToken(FirebaseRulesParser.Identifier, 0);
};

GetContext.prototype.ObjectReference = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FirebaseRulesParser.ObjectReference);
    } else {
        return this.getToken(FirebaseRulesParser.ObjectReference, i);
    }
};


GetContext.prototype.SquareBracketOpen = function() {
    return this.getToken(FirebaseRulesParser.SquareBracketOpen, 0);
};

GetContext.prototype.SquareBracketClose = function() {
    return this.getToken(FirebaseRulesParser.SquareBracketClose, 0);
};

GetContext.prototype.String = function() {
    return this.getToken(FirebaseRulesParser.String, 0);
};

GetContext.prototype.Number = function() {
    return this.getToken(FirebaseRulesParser.Number, 0);
};

GetContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterGet(this);
	}
};

GetContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitGet(this);
	}
};

GetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitGet(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.GetContext = GetContext;

FirebaseRulesParser.prototype.get = function() {

    var localctx = new GetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, FirebaseRulesParser.RULE_get);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.match(FirebaseRulesParser.Get);
        this.state = 155;
        this.match(FirebaseRulesParser.BracketOpen);
        this.state = 156;
        this.getPath();
        this.state = 157;
        this.match(FirebaseRulesParser.BracketClose);
        this.state = 158;
        this.match(FirebaseRulesParser.Dot);

        this.state = 159;
        _la = this._input.LA(1);
        if(!(_la===FirebaseRulesParser.ObjectReference || _la===FirebaseRulesParser.Identifier)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 163;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        if(la_===1) {
            this.state = 160;
            this.match(FirebaseRulesParser.SquareBracketOpen);
            this.state = 161;
            _la = this._input.LA(1);
            if(!(((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (FirebaseRulesParser.ObjectReference - 46)) | (1 << (FirebaseRulesParser.Number - 46)) | (1 << (FirebaseRulesParser.String - 46)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 162;
            this.match(FirebaseRulesParser.SquareBracketClose);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.Identifier = function() {
    return this.getToken(FirebaseRulesParser.Identifier, 0);
};

FunctionCallContext.prototype.BracketOpen = function() {
    return this.getToken(FirebaseRulesParser.BracketOpen, 0);
};

FunctionCallContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};

FunctionCallContext.prototype.BracketClose = function() {
    return this.getToken(FirebaseRulesParser.BracketClose, 0);
};

FunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterFunctionCall(this);
	}
};

FunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitFunctionCall(this);
	}
};

FunctionCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitFunctionCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.FunctionCallContext = FunctionCallContext;

FirebaseRulesParser.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, FirebaseRulesParser.RULE_functionCall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this.match(FirebaseRulesParser.Identifier);
        this.state = 166;
        this.match(FirebaseRulesParser.BracketOpen);
        this.state = 167;
        this.arguments();
        this.state = 168;
        this.match(FirebaseRulesParser.BracketClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GetPathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_getPath;
    return this;
}

GetPathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GetPathContext.prototype.constructor = GetPathContext;

GetPathContext.prototype.Slash = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FirebaseRulesParser.Slash);
    } else {
        return this.getToken(FirebaseRulesParser.Slash, i);
    }
};


GetPathContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FirebaseRulesParser.Identifier);
    } else {
        return this.getToken(FirebaseRulesParser.Identifier, i);
    }
};


GetPathContext.prototype.pathVariableReplace = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PathVariableReplaceContext);
    } else {
        return this.getTypedRuleContext(PathVariableReplaceContext,i);
    }
};

GetPathContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterGetPath(this);
	}
};

GetPathContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitGetPath(this);
	}
};

GetPathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitGetPath(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.GetPathContext = GetPathContext;

FirebaseRulesParser.prototype.getPath = function() {

    var localctx = new GetPathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, FirebaseRulesParser.RULE_getPath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 175; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 170;
            this.match(FirebaseRulesParser.Slash);
            this.state = 173;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case FirebaseRulesParser.Identifier:
                this.state = 171;
                this.match(FirebaseRulesParser.Identifier);
                break;
            case FirebaseRulesParser.T__0:
                this.state = 172;
                this.pathVariableReplace();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 177; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===FirebaseRulesParser.Slash);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MatchPathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_matchPath;
    return this;
}

MatchPathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatchPathContext.prototype.constructor = MatchPathContext;

MatchPathContext.prototype.Slash = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FirebaseRulesParser.Slash);
    } else {
        return this.getToken(FirebaseRulesParser.Slash, i);
    }
};


MatchPathContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FirebaseRulesParser.Identifier);
    } else {
        return this.getToken(FirebaseRulesParser.Identifier, i);
    }
};


MatchPathContext.prototype.pathVariable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PathVariableContext);
    } else {
        return this.getTypedRuleContext(PathVariableContext,i);
    }
};

MatchPathContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterMatchPath(this);
	}
};

MatchPathContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitMatchPath(this);
	}
};

MatchPathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitMatchPath(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.MatchPathContext = MatchPathContext;

FirebaseRulesParser.prototype.matchPath = function() {

    var localctx = new MatchPathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, FirebaseRulesParser.RULE_matchPath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 179;
            this.match(FirebaseRulesParser.Slash);
            this.state = 182;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case FirebaseRulesParser.Identifier:
                this.state = 180;
                this.match(FirebaseRulesParser.Identifier);
                break;
            case FirebaseRulesParser.CurlyOpen:
                this.state = 181;
                this.pathVariable();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 186; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===FirebaseRulesParser.Slash);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


FirebaseRulesParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 12:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

FirebaseRulesParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);
		case 1:
			return this.precpred(this._ctx, 12);
		case 2:
			return this.precpred(this._ctx, 11);
		case 3:
			return this.precpred(this._ctx, 10);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.FirebaseRulesParser = FirebaseRulesParser;
exports.ServiceContext = ServiceContext;
FirebaseRulesParser.ServiceContext = ServiceContext;
exports.NamespaceContext = NamespaceContext;
FirebaseRulesParser.NamespaceContext = NamespaceContext;
exports.NamespaceBlockContext = NamespaceBlockContext;
FirebaseRulesParser.NamespaceBlockContext = NamespaceBlockContext;
exports.MatchBlockContext = MatchBlockContext;
FirebaseRulesParser.MatchBlockContext = MatchBlockContext;
exports.AllowKeyContext = AllowKeyContext;
FirebaseRulesParser.AllowKeyContext = AllowKeyContext;
exports.CommentContext = CommentContext;
FirebaseRulesParser.CommentContext = CommentContext;
exports.MatcherContext = MatcherContext;
FirebaseRulesParser.MatcherContext = MatcherContext;
exports.AllowContext = AllowContext;
FirebaseRulesParser.AllowContext = AllowContext;
exports.PathVariableReplaceContext = PathVariableReplaceContext;
FirebaseRulesParser.PathVariableReplaceContext = PathVariableReplaceContext;
exports.PathVariableContext = PathVariableContext;
FirebaseRulesParser.PathVariableContext = PathVariableContext;
exports.ArgumentsContext = ArgumentsContext;
FirebaseRulesParser.ArgumentsContext = ArgumentsContext;
exports.FunctionDeclarationContext = FunctionDeclarationContext;
FirebaseRulesParser.FunctionDeclarationContext = FunctionDeclarationContext;
exports.ExpressionContext = ExpressionContext;
FirebaseRulesParser.ExpressionContext = ExpressionContext;
exports.GetContext = GetContext;
FirebaseRulesParser.GetContext = GetContext;
exports.FunctionCallContext = FunctionCallContext;
FirebaseRulesParser.FunctionCallContext = FunctionCallContext;
exports.GetPathContext = GetPathContext;
FirebaseRulesParser.GetPathContext = GetPathContext;
exports.MatchPathContext = MatchPathContext;
FirebaseRulesParser.MatchPathContext = MatchPathContext;
exports.NumberExpressionContext = NumberExpressionContext;
FirebaseRulesParser.NumberExpressionContext = NumberExpressionContext;
exports.ObjectReferenceExpressionContext = ObjectReferenceExpressionContext;
FirebaseRulesParser.ObjectReferenceExpressionContext = ObjectReferenceExpressionContext;
exports.ParenthesisExpressionContext = ParenthesisExpressionContext;
FirebaseRulesParser.ParenthesisExpressionContext = ParenthesisExpressionContext;
exports.IdentifierReferenceExpressionContext = IdentifierReferenceExpressionContext;
FirebaseRulesParser.IdentifierReferenceExpressionContext = IdentifierReferenceExpressionContext;
exports.ArithmeticExpressionContext = ArithmeticExpressionContext;
FirebaseRulesParser.ArithmeticExpressionContext = ArithmeticExpressionContext;
exports.BooleanExpressionContext = BooleanExpressionContext;
FirebaseRulesParser.BooleanExpressionContext = BooleanExpressionContext;
exports.FunctionExpressionContext = FunctionExpressionContext;
FirebaseRulesParser.FunctionExpressionContext = FunctionExpressionContext;
exports.CompareExpressionContext = CompareExpressionContext;
FirebaseRulesParser.CompareExpressionContext = CompareExpressionContext;
exports.BinaryExpressionContext = BinaryExpressionContext;
FirebaseRulesParser.BinaryExpressionContext = BinaryExpressionContext;
exports.LogicalExpressionContext = LogicalExpressionContext;
FirebaseRulesParser.LogicalExpressionContext = LogicalExpressionContext;
exports.GetExpressionContext = GetExpressionContext;
FirebaseRulesParser.GetExpressionContext = GetExpressionContext;
exports.StringExpressionContext = StringExpressionContext;
FirebaseRulesParser.StringExpressionContext = StringExpressionContext;
exports.NullExpressionContext = NullExpressionContext;
FirebaseRulesParser.NullExpressionContext = NullExpressionContext;
exports.UnaryExpressionContext = UnaryExpressionContext;
FirebaseRulesParser.UnaryExpressionContext = UnaryExpressionContext;
