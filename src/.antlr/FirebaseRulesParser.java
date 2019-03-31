// Generated from /Users/villevenalainen/react_src/firebase-rules-parser/src/FirebaseRules.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class FirebaseRulesParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, CurlyOpen=3, CurlyClose=4, BracketOpen=5, BracketClose=6, 
		PathVariableBracket=7, SquareBracketOpen=8, SquareBracketClose=9, Dot=10, 
		Colon=11, Comma=12, Semicolon=13, LessThan=14, LessOrEqual=15, GreaterOrEqual=16, 
		GreaterThan=17, Equals=18, Unequal=19, LogicalAnd=20, LogicalOr=21, LogicalNot=22, 
		BinaryAnd=23, BinaryOr=24, ArithmeticAdd=25, ArithmeticSub=26, ArithmeticMul=27, 
		ArithmeticExp=28, ArithmeticModus=29, Allow=30, Match=31, If=32, Get=33, 
		Exists=34, True=35, False=36, List=37, Create=38, Update=39, Read=40, 
		Write=41, Delete=42, Function=43, Return=44, Null=45, Service=46, Number=47, 
		String=48, Identifier=49, Slash=50, WS=51, Comment=52;
	public static final int
		RULE_service = 0, RULE_namespace = 1, RULE_namespaceBlock = 2, RULE_matchBlock = 3, 
		RULE_allowKey = 4, RULE_comment = 5, RULE_matcher = 6, RULE_allow = 7, 
		RULE_getPathVariable = 8, RULE_pathVariable = 9, RULE_arg = 10, RULE_arguments = 11, 
		RULE_argDeclaration = 12, RULE_argDeclarations = 13, RULE_functionDeclaration = 14, 
		RULE_fieldReference = 15, RULE_id = 16, RULE_expression = 17, RULE_objectReference = 18, 
		RULE_getPathExpressionVariable = 19, RULE_getPath = 20, RULE_ruleFunctionCall = 21, 
		RULE_functionCall = 22, RULE_matchPath = 23;
	public static final String[] ruleNames = {
		"service", "namespace", "namespaceBlock", "matchBlock", "allowKey", "comment", 
		"matcher", "allow", "getPathVariable", "pathVariable", "arg", "arguments", 
		"argDeclaration", "argDeclarations", "functionDeclaration", "fieldReference", 
		"id", "expression", "objectReference", "getPathExpressionVariable", "getPath", 
		"ruleFunctionCall", "functionCall", "matchPath"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'='", "'**'", "'{'", "'}'", "'('", "')'", "'$('", "'['", "']'", 
		"'.'", "':'", "','", "';'", "'<'", "'<='", "'>='", "'>'", "'=='", "'!='", 
		"'&&'", "'||'", "'!'", "'&'", "'|'", "'+'", "'-'", "'*'", "'^'", "'%'", 
		"'allow'", "'match'", "'if'", "'get'", "'exists'", "'true'", "'false'", 
		"'list'", "'create'", "'update'", "'read'", "'write'", "'delete'", "'function'", 
		"'return'", "'null'", "'service'", null, null, null, "'/'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, "CurlyOpen", "CurlyClose", "BracketOpen", "BracketClose", 
		"PathVariableBracket", "SquareBracketOpen", "SquareBracketClose", "Dot", 
		"Colon", "Comma", "Semicolon", "LessThan", "LessOrEqual", "GreaterOrEqual", 
		"GreaterThan", "Equals", "Unequal", "LogicalAnd", "LogicalOr", "LogicalNot", 
		"BinaryAnd", "BinaryOr", "ArithmeticAdd", "ArithmeticSub", "ArithmeticMul", 
		"ArithmeticExp", "ArithmeticModus", "Allow", "Match", "If", "Get", "Exists", 
		"True", "False", "List", "Create", "Update", "Read", "Write", "Delete", 
		"Function", "Return", "Null", "Service", "Number", "String", "Identifier", 
		"Slash", "WS", "Comment"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "FirebaseRules.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public FirebaseRulesParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ServiceContext extends ParserRuleContext {
		public TerminalNode Service() { return getToken(FirebaseRulesParser.Service, 0); }
		public NamespaceContext namespace() {
			return getRuleContext(NamespaceContext.class,0);
		}
		public NamespaceBlockContext namespaceBlock() {
			return getRuleContext(NamespaceBlockContext.class,0);
		}
		public ServiceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_service; }
	}

	public final ServiceContext service() throws RecognitionException {
		ServiceContext _localctx = new ServiceContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_service);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(48);
			match(Service);
			setState(49);
			namespace();
			setState(50);
			namespaceBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamespaceContext extends ParserRuleContext {
		public ObjectReferenceContext objectReference() {
			return getRuleContext(ObjectReferenceContext.class,0);
		}
		public NamespaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namespace; }
	}

	public final NamespaceContext namespace() throws RecognitionException {
		NamespaceContext _localctx = new NamespaceContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_namespace);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(52);
			objectReference();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamespaceBlockContext extends ParserRuleContext {
		public TerminalNode CurlyOpen() { return getToken(FirebaseRulesParser.CurlyOpen, 0); }
		public TerminalNode CurlyClose() { return getToken(FirebaseRulesParser.CurlyClose, 0); }
		public List<MatcherContext> matcher() {
			return getRuleContexts(MatcherContext.class);
		}
		public MatcherContext matcher(int i) {
			return getRuleContext(MatcherContext.class,i);
		}
		public List<CommentContext> comment() {
			return getRuleContexts(CommentContext.class);
		}
		public CommentContext comment(int i) {
			return getRuleContext(CommentContext.class,i);
		}
		public List<FunctionDeclarationContext> functionDeclaration() {
			return getRuleContexts(FunctionDeclarationContext.class);
		}
		public FunctionDeclarationContext functionDeclaration(int i) {
			return getRuleContext(FunctionDeclarationContext.class,i);
		}
		public NamespaceBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namespaceBlock; }
	}

	public final NamespaceBlockContext namespaceBlock() throws RecognitionException {
		NamespaceBlockContext _localctx = new NamespaceBlockContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_namespaceBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(54);
			match(CurlyOpen);
			setState(60);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Match) | (1L << Function) | (1L << Comment))) != 0)) {
				{
				setState(58);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Match:
					{
					setState(55);
					matcher();
					}
					break;
				case Comment:
					{
					setState(56);
					comment();
					}
					break;
				case Function:
					{
					setState(57);
					functionDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(62);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(63);
			match(CurlyClose);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MatchBlockContext extends ParserRuleContext {
		public TerminalNode CurlyOpen() { return getToken(FirebaseRulesParser.CurlyOpen, 0); }
		public TerminalNode CurlyClose() { return getToken(FirebaseRulesParser.CurlyClose, 0); }
		public List<AllowContext> allow() {
			return getRuleContexts(AllowContext.class);
		}
		public AllowContext allow(int i) {
			return getRuleContext(AllowContext.class,i);
		}
		public List<MatcherContext> matcher() {
			return getRuleContexts(MatcherContext.class);
		}
		public MatcherContext matcher(int i) {
			return getRuleContext(MatcherContext.class,i);
		}
		public List<TerminalNode> Comment() { return getTokens(FirebaseRulesParser.Comment); }
		public TerminalNode Comment(int i) {
			return getToken(FirebaseRulesParser.Comment, i);
		}
		public List<FunctionDeclarationContext> functionDeclaration() {
			return getRuleContexts(FunctionDeclarationContext.class);
		}
		public FunctionDeclarationContext functionDeclaration(int i) {
			return getRuleContext(FunctionDeclarationContext.class,i);
		}
		public MatchBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_matchBlock; }
	}

	public final MatchBlockContext matchBlock() throws RecognitionException {
		MatchBlockContext _localctx = new MatchBlockContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_matchBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(65);
			match(CurlyOpen);
			setState(72);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Allow) | (1L << Match) | (1L << Function) | (1L << Comment))) != 0)) {
				{
				setState(70);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Allow:
					{
					setState(66);
					allow();
					}
					break;
				case Match:
					{
					setState(67);
					matcher();
					}
					break;
				case Comment:
					{
					setState(68);
					match(Comment);
					}
					break;
				case Function:
					{
					setState(69);
					functionDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(74);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(75);
			match(CurlyClose);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AllowKeyContext extends ParserRuleContext {
		public TerminalNode Read() { return getToken(FirebaseRulesParser.Read, 0); }
		public TerminalNode Write() { return getToken(FirebaseRulesParser.Write, 0); }
		public TerminalNode Update() { return getToken(FirebaseRulesParser.Update, 0); }
		public TerminalNode Delete() { return getToken(FirebaseRulesParser.Delete, 0); }
		public TerminalNode Create() { return getToken(FirebaseRulesParser.Create, 0); }
		public TerminalNode List() { return getToken(FirebaseRulesParser.List, 0); }
		public TerminalNode Get() { return getToken(FirebaseRulesParser.Get, 0); }
		public AllowKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_allowKey; }
	}

	public final AllowKeyContext allowKey() throws RecognitionException {
		AllowKeyContext _localctx = new AllowKeyContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_allowKey);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(77);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Get) | (1L << List) | (1L << Create) | (1L << Update) | (1L << Read) | (1L << Write) | (1L << Delete))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CommentContext extends ParserRuleContext {
		public TerminalNode Comment() { return getToken(FirebaseRulesParser.Comment, 0); }
		public CommentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comment; }
	}

	public final CommentContext comment() throws RecognitionException {
		CommentContext _localctx = new CommentContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_comment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			match(Comment);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MatcherContext extends ParserRuleContext {
		public TerminalNode Match() { return getToken(FirebaseRulesParser.Match, 0); }
		public MatchPathContext matchPath() {
			return getRuleContext(MatchPathContext.class,0);
		}
		public MatchBlockContext matchBlock() {
			return getRuleContext(MatchBlockContext.class,0);
		}
		public MatcherContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_matcher; }
	}

	public final MatcherContext matcher() throws RecognitionException {
		MatcherContext _localctx = new MatcherContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_matcher);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(81);
			match(Match);
			setState(82);
			matchPath();
			setState(83);
			matchBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AllowContext extends ParserRuleContext {
		public TerminalNode Allow() { return getToken(FirebaseRulesParser.Allow, 0); }
		public List<AllowKeyContext> allowKey() {
			return getRuleContexts(AllowKeyContext.class);
		}
		public AllowKeyContext allowKey(int i) {
			return getRuleContext(AllowKeyContext.class,i);
		}
		public TerminalNode Semicolon() { return getToken(FirebaseRulesParser.Semicolon, 0); }
		public List<TerminalNode> Comma() { return getTokens(FirebaseRulesParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(FirebaseRulesParser.Comma, i);
		}
		public TerminalNode Colon() { return getToken(FirebaseRulesParser.Colon, 0); }
		public TerminalNode If() { return getToken(FirebaseRulesParser.If, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AllowContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_allow; }
	}

	public final AllowContext allow() throws RecognitionException {
		AllowContext _localctx = new AllowContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_allow);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			match(Allow);
			setState(86);
			allowKey();
			setState(91);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(87);
				match(Comma);
				setState(88);
				allowKey();
				}
				}
				setState(93);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(97);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(94);
				match(Colon);
				setState(95);
				match(If);
				setState(96);
				expression(0);
				}
			}

			setState(99);
			match(Semicolon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GetPathVariableContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(FirebaseRulesParser.Identifier, 0); }
		public GetPathVariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_getPathVariable; }
	}

	public final GetPathVariableContext getPathVariable() throws RecognitionException {
		GetPathVariableContext _localctx = new GetPathVariableContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_getPathVariable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(101);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PathVariableContext extends ParserRuleContext {
		public TerminalNode CurlyOpen() { return getToken(FirebaseRulesParser.CurlyOpen, 0); }
		public TerminalNode Identifier() { return getToken(FirebaseRulesParser.Identifier, 0); }
		public TerminalNode CurlyClose() { return getToken(FirebaseRulesParser.CurlyClose, 0); }
		public PathVariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pathVariable; }
	}

	public final PathVariableContext pathVariable() throws RecognitionException {
		PathVariableContext _localctx = new PathVariableContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_pathVariable);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
			match(CurlyOpen);
			setState(104);
			match(Identifier);
			setState(107);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0) {
				{
				setState(105);
				match(T__0);
				setState(106);
				match(T__1);
				}
			}

			setState(109);
			match(CurlyClose);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arg; }
	}

	public final ArgContext arg() throws RecognitionException {
		ArgContext _localctx = new ArgContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_arg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(111);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentsContext extends ParserRuleContext {
		public List<ArgContext> arg() {
			return getRuleContexts(ArgContext.class);
		}
		public ArgContext arg(int i) {
			return getRuleContext(ArgContext.class,i);
		}
		public ArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arguments; }
	}

	public final ArgumentsContext arguments() throws RecognitionException {
		ArgumentsContext _localctx = new ArgumentsContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(114);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BracketOpen) | (1L << LogicalNot) | (1L << ArithmeticSub) | (1L << Get) | (1L << Exists) | (1L << True) | (1L << False) | (1L << Null) | (1L << Number) | (1L << String) | (1L << Identifier))) != 0)) {
				{
				setState(113);
				arg();
				}
			}

			setState(120);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(116);
				match(Comma);
				setState(117);
				arg();
				}
				}
				setState(122);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgDeclarationContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(FirebaseRulesParser.Identifier, 0); }
		public ArgDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argDeclaration; }
	}

	public final ArgDeclarationContext argDeclaration() throws RecognitionException {
		ArgDeclarationContext _localctx = new ArgDeclarationContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_argDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(123);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgDeclarationsContext extends ParserRuleContext {
		public List<ArgDeclarationContext> argDeclaration() {
			return getRuleContexts(ArgDeclarationContext.class);
		}
		public ArgDeclarationContext argDeclaration(int i) {
			return getRuleContext(ArgDeclarationContext.class,i);
		}
		public ArgDeclarationsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argDeclarations; }
	}

	public final ArgDeclarationsContext argDeclarations() throws RecognitionException {
		ArgDeclarationsContext _localctx = new ArgDeclarationsContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_argDeclarations);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(126);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier) {
				{
				setState(125);
				argDeclaration();
				}
			}

			setState(132);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(128);
				match(Comma);
				setState(129);
				argDeclaration();
				}
				}
				setState(134);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionDeclarationContext extends ParserRuleContext {
		public TerminalNode Function() { return getToken(FirebaseRulesParser.Function, 0); }
		public TerminalNode Identifier() { return getToken(FirebaseRulesParser.Identifier, 0); }
		public TerminalNode BracketOpen() { return getToken(FirebaseRulesParser.BracketOpen, 0); }
		public ArgDeclarationsContext argDeclarations() {
			return getRuleContext(ArgDeclarationsContext.class,0);
		}
		public TerminalNode BracketClose() { return getToken(FirebaseRulesParser.BracketClose, 0); }
		public TerminalNode CurlyOpen() { return getToken(FirebaseRulesParser.CurlyOpen, 0); }
		public TerminalNode Return() { return getToken(FirebaseRulesParser.Return, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode CurlyClose() { return getToken(FirebaseRulesParser.CurlyClose, 0); }
		public FunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDeclaration; }
	}

	public final FunctionDeclarationContext functionDeclaration() throws RecognitionException {
		FunctionDeclarationContext _localctx = new FunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_functionDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			match(Function);
			setState(136);
			match(Identifier);
			setState(137);
			match(BracketOpen);
			setState(138);
			argDeclarations();
			setState(139);
			match(BracketClose);
			setState(140);
			match(CurlyOpen);
			setState(141);
			match(Return);
			setState(142);
			expression(0);
			setState(143);
			match(Semicolon);
			setState(144);
			match(CurlyClose);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldReferenceContext extends ParserRuleContext {
		public FieldReferenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldReference; }
	 
		public FieldReferenceContext() { }
		public void copyFrom(FieldReferenceContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class FieldReferenceWithIdentifierContext extends FieldReferenceContext {
		public TerminalNode Dot() { return getToken(FirebaseRulesParser.Dot, 0); }
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public FieldReferenceWithIdentifierContext(FieldReferenceContext ctx) { copyFrom(ctx); }
	}
	public static class FieldReferenceWithMemberRefContext extends FieldReferenceContext {
		public TerminalNode SquareBracketOpen() { return getToken(FirebaseRulesParser.SquareBracketOpen, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SquareBracketClose() { return getToken(FirebaseRulesParser.SquareBracketClose, 0); }
		public FieldReferenceWithMemberRefContext(FieldReferenceContext ctx) { copyFrom(ctx); }
	}

	public final FieldReferenceContext fieldReference() throws RecognitionException {
		FieldReferenceContext _localctx = new FieldReferenceContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_fieldReference);
		try {
			setState(152);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Dot:
				_localctx = new FieldReferenceWithIdentifierContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(146);
				match(Dot);
				setState(147);
				id();
				}
				}
				break;
			case SquareBracketOpen:
				_localctx = new FieldReferenceWithMemberRefContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(148);
				match(SquareBracketOpen);
				setState(149);
				expression(0);
				setState(150);
				match(SquareBracketClose);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(FirebaseRulesParser.Identifier, 0); }
		public TerminalNode Allow() { return getToken(FirebaseRulesParser.Allow, 0); }
		public TerminalNode Match() { return getToken(FirebaseRulesParser.Match, 0); }
		public TerminalNode If() { return getToken(FirebaseRulesParser.If, 0); }
		public TerminalNode Exists() { return getToken(FirebaseRulesParser.Exists, 0); }
		public TerminalNode True() { return getToken(FirebaseRulesParser.True, 0); }
		public TerminalNode False() { return getToken(FirebaseRulesParser.False, 0); }
		public TerminalNode List() { return getToken(FirebaseRulesParser.List, 0); }
		public TerminalNode Create() { return getToken(FirebaseRulesParser.Create, 0); }
		public TerminalNode Update() { return getToken(FirebaseRulesParser.Update, 0); }
		public TerminalNode Read() { return getToken(FirebaseRulesParser.Read, 0); }
		public TerminalNode Write() { return getToken(FirebaseRulesParser.Write, 0); }
		public TerminalNode Delete() { return getToken(FirebaseRulesParser.Delete, 0); }
		public TerminalNode Function() { return getToken(FirebaseRulesParser.Function, 0); }
		public TerminalNode Return() { return getToken(FirebaseRulesParser.Return, 0); }
		public TerminalNode Null() { return getToken(FirebaseRulesParser.Null, 0); }
		public TerminalNode Service() { return getToken(FirebaseRulesParser.Service, 0); }
		public IdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_id; }
	}

	public final IdContext id() throws RecognitionException {
		IdContext _localctx = new IdContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_id);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(154);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Allow) | (1L << Match) | (1L << If) | (1L << Exists) | (1L << True) | (1L << False) | (1L << List) | (1L << Create) | (1L << Update) | (1L << Read) | (1L << Write) | (1L << Delete) | (1L << Function) | (1L << Return) | (1L << Null) | (1L << Service) | (1L << Identifier))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	 
		public ExpressionContext() { }
		public void copyFrom(ExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class NumberExpressionContext extends ExpressionContext {
		public TerminalNode Number() { return getToken(FirebaseRulesParser.Number, 0); }
		public NumberExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ObjectReferenceExpressionContext extends ExpressionContext {
		public ObjectReferenceContext objectReference() {
			return getRuleContext(ObjectReferenceContext.class,0);
		}
		public ObjectReferenceExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ParenthesisExpressionContext extends ExpressionContext {
		public TerminalNode BracketOpen() { return getToken(FirebaseRulesParser.BracketOpen, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode BracketClose() { return getToken(FirebaseRulesParser.BracketClose, 0); }
		public ParenthesisExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ArithmeticExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode ArithmeticAdd() { return getToken(FirebaseRulesParser.ArithmeticAdd, 0); }
		public TerminalNode ArithmeticSub() { return getToken(FirebaseRulesParser.ArithmeticSub, 0); }
		public TerminalNode ArithmeticMul() { return getToken(FirebaseRulesParser.ArithmeticMul, 0); }
		public TerminalNode Slash() { return getToken(FirebaseRulesParser.Slash, 0); }
		public TerminalNode ArithmeticExp() { return getToken(FirebaseRulesParser.ArithmeticExp, 0); }
		public TerminalNode ArithmeticModus() { return getToken(FirebaseRulesParser.ArithmeticModus, 0); }
		public ArithmeticExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BooleanExpressionContext extends ExpressionContext {
		public TerminalNode True() { return getToken(FirebaseRulesParser.True, 0); }
		public TerminalNode False() { return getToken(FirebaseRulesParser.False, 0); }
		public BooleanExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class FunctionExpressionContext extends ExpressionContext {
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public FunctionExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class CompareExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode LessThan() { return getToken(FirebaseRulesParser.LessThan, 0); }
		public TerminalNode LessOrEqual() { return getToken(FirebaseRulesParser.LessOrEqual, 0); }
		public TerminalNode Equals() { return getToken(FirebaseRulesParser.Equals, 0); }
		public TerminalNode Unequal() { return getToken(FirebaseRulesParser.Unequal, 0); }
		public TerminalNode GreaterThan() { return getToken(FirebaseRulesParser.GreaterThan, 0); }
		public TerminalNode GreaterOrEqual() { return getToken(FirebaseRulesParser.GreaterOrEqual, 0); }
		public CompareExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BinaryExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode BinaryAnd() { return getToken(FirebaseRulesParser.BinaryAnd, 0); }
		public TerminalNode BinaryOr() { return getToken(FirebaseRulesParser.BinaryOr, 0); }
		public BinaryExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogicalExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode LogicalAnd() { return getToken(FirebaseRulesParser.LogicalAnd, 0); }
		public TerminalNode LogicalOr() { return getToken(FirebaseRulesParser.LogicalOr, 0); }
		public LogicalExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class GetExpressionContext extends ExpressionContext {
		public RuleFunctionCallContext ruleFunctionCall() {
			return getRuleContext(RuleFunctionCallContext.class,0);
		}
		public GetExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class StringExpressionContext extends ExpressionContext {
		public TerminalNode String() { return getToken(FirebaseRulesParser.String, 0); }
		public StringExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class NullExpressionContext extends ExpressionContext {
		public TerminalNode Null() { return getToken(FirebaseRulesParser.Null, 0); }
		public NullExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class UnaryExpressionContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode LogicalNot() { return getToken(FirebaseRulesParser.LogicalNot, 0); }
		public TerminalNode ArithmeticSub() { return getToken(FirebaseRulesParser.ArithmeticSub, 0); }
		public UnaryExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 34;
		enterRecursionRule(_localctx, 34, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(170);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				{
				_localctx = new NullExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(157);
				match(Null);
				}
				break;
			case 2:
				{
				_localctx = new UnaryExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(158);
				_la = _input.LA(1);
				if ( !(_la==LogicalNot || _la==ArithmeticSub) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(159);
				expression(8);
				}
				break;
			case 3:
				{
				_localctx = new StringExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(160);
				match(String);
				}
				break;
			case 4:
				{
				_localctx = new NumberExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(161);
				match(Number);
				}
				break;
			case 5:
				{
				_localctx = new BooleanExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(162);
				_la = _input.LA(1);
				if ( !(_la==True || _la==False) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 6:
				{
				_localctx = new ObjectReferenceExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(163);
				objectReference();
				}
				break;
			case 7:
				{
				_localctx = new GetExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(164);
				ruleFunctionCall();
				}
				break;
			case 8:
				{
				_localctx = new FunctionExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(165);
				functionCall();
				}
				break;
			case 9:
				{
				_localctx = new ParenthesisExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(166);
				match(BracketOpen);
				setState(167);
				expression(0);
				setState(168);
				match(BracketClose);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(186);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(184);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
					case 1:
						{
						_localctx = new CompareExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(172);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(173);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LessThan) | (1L << LessOrEqual) | (1L << GreaterOrEqual) | (1L << GreaterThan) | (1L << Equals) | (1L << Unequal))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(174);
						expression(13);
						}
						break;
					case 2:
						{
						_localctx = new LogicalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(175);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(176);
						_la = _input.LA(1);
						if ( !(_la==LogicalAnd || _la==LogicalOr) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(177);
						expression(12);
						}
						break;
					case 3:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(178);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(179);
						_la = _input.LA(1);
						if ( !(_la==BinaryAnd || _la==BinaryOr) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(180);
						expression(11);
						}
						break;
					case 4:
						{
						_localctx = new ArithmeticExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(181);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(182);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ArithmeticAdd) | (1L << ArithmeticSub) | (1L << ArithmeticMul) | (1L << ArithmeticExp) | (1L << ArithmeticModus) | (1L << Slash))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(183);
						expression(10);
						}
						break;
					}
					} 
				}
				setState(188);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ObjectReferenceContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(FirebaseRulesParser.Identifier, 0); }
		public List<FieldReferenceContext> fieldReference() {
			return getRuleContexts(FieldReferenceContext.class);
		}
		public FieldReferenceContext fieldReference(int i) {
			return getRuleContext(FieldReferenceContext.class,i);
		}
		public ObjectReferenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectReference; }
	}

	public final ObjectReferenceContext objectReference() throws RecognitionException {
		ObjectReferenceContext _localctx = new ObjectReferenceContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_objectReference);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(189);
			match(Identifier);
			setState(193);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(190);
					fieldReference();
					}
					} 
				}
				setState(195);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GetPathExpressionVariableContext extends ParserRuleContext {
		public TerminalNode PathVariableBracket() { return getToken(FirebaseRulesParser.PathVariableBracket, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode BracketClose() { return getToken(FirebaseRulesParser.BracketClose, 0); }
		public GetPathExpressionVariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_getPathExpressionVariable; }
	}

	public final GetPathExpressionVariableContext getPathExpressionVariable() throws RecognitionException {
		GetPathExpressionVariableContext _localctx = new GetPathExpressionVariableContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_getPathExpressionVariable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(196);
			match(PathVariableBracket);
			setState(197);
			expression(0);
			setState(198);
			match(BracketClose);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GetPathContext extends ParserRuleContext {
		public List<TerminalNode> Slash() { return getTokens(FirebaseRulesParser.Slash); }
		public TerminalNode Slash(int i) {
			return getToken(FirebaseRulesParser.Slash, i);
		}
		public List<GetPathVariableContext> getPathVariable() {
			return getRuleContexts(GetPathVariableContext.class);
		}
		public GetPathVariableContext getPathVariable(int i) {
			return getRuleContext(GetPathVariableContext.class,i);
		}
		public List<GetPathExpressionVariableContext> getPathExpressionVariable() {
			return getRuleContexts(GetPathExpressionVariableContext.class);
		}
		public GetPathExpressionVariableContext getPathExpressionVariable(int i) {
			return getRuleContext(GetPathExpressionVariableContext.class,i);
		}
		public GetPathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_getPath; }
	}

	public final GetPathContext getPath() throws RecognitionException {
		GetPathContext _localctx = new GetPathContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_getPath);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(205); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(200);
				match(Slash);
				setState(203);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Identifier:
					{
					setState(201);
					getPathVariable();
					}
					break;
				case PathVariableBracket:
					{
					setState(202);
					getPathExpressionVariable();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				setState(207); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==Slash );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RuleFunctionCallContext extends ParserRuleContext {
		public TerminalNode BracketOpen() { return getToken(FirebaseRulesParser.BracketOpen, 0); }
		public GetPathContext getPath() {
			return getRuleContext(GetPathContext.class,0);
		}
		public TerminalNode BracketClose() { return getToken(FirebaseRulesParser.BracketClose, 0); }
		public TerminalNode Get() { return getToken(FirebaseRulesParser.Get, 0); }
		public TerminalNode Exists() { return getToken(FirebaseRulesParser.Exists, 0); }
		public List<FieldReferenceContext> fieldReference() {
			return getRuleContexts(FieldReferenceContext.class);
		}
		public FieldReferenceContext fieldReference(int i) {
			return getRuleContext(FieldReferenceContext.class,i);
		}
		public RuleFunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ruleFunctionCall; }
	}

	public final RuleFunctionCallContext ruleFunctionCall() throws RecognitionException {
		RuleFunctionCallContext _localctx = new RuleFunctionCallContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_ruleFunctionCall);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			_la = _input.LA(1);
			if ( !(_la==Get || _la==Exists) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(210);
			match(BracketOpen);
			setState(211);
			getPath();
			setState(212);
			match(BracketClose);
			setState(216);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(213);
					fieldReference();
					}
					} 
				}
				setState(218);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionCallContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(FirebaseRulesParser.Identifier, 0); }
		public TerminalNode BracketOpen() { return getToken(FirebaseRulesParser.BracketOpen, 0); }
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public TerminalNode BracketClose() { return getToken(FirebaseRulesParser.BracketClose, 0); }
		public List<FieldReferenceContext> fieldReference() {
			return getRuleContexts(FieldReferenceContext.class);
		}
		public FieldReferenceContext fieldReference(int i) {
			return getRuleContext(FieldReferenceContext.class,i);
		}
		public FunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCall; }
	}

	public final FunctionCallContext functionCall() throws RecognitionException {
		FunctionCallContext _localctx = new FunctionCallContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_functionCall);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			match(Identifier);
			setState(220);
			match(BracketOpen);
			setState(221);
			arguments();
			setState(222);
			match(BracketClose);
			setState(226);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(223);
					fieldReference();
					}
					} 
				}
				setState(228);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MatchPathContext extends ParserRuleContext {
		public List<TerminalNode> Slash() { return getTokens(FirebaseRulesParser.Slash); }
		public TerminalNode Slash(int i) {
			return getToken(FirebaseRulesParser.Slash, i);
		}
		public List<TerminalNode> Identifier() { return getTokens(FirebaseRulesParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(FirebaseRulesParser.Identifier, i);
		}
		public List<PathVariableContext> pathVariable() {
			return getRuleContexts(PathVariableContext.class);
		}
		public PathVariableContext pathVariable(int i) {
			return getRuleContext(PathVariableContext.class,i);
		}
		public MatchPathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_matchPath; }
	}

	public final MatchPathContext matchPath() throws RecognitionException {
		MatchPathContext _localctx = new MatchPathContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_matchPath);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(234); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(229);
				match(Slash);
				setState(232);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Identifier:
					{
					setState(230);
					match(Identifier);
					}
					break;
				case CurlyOpen:
					{
					setState(231);
					pathVariable();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				setState(236); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==Slash );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 17:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 12);
		case 1:
			return precpred(_ctx, 11);
		case 2:
			return precpred(_ctx, 10);
		case 3:
			return precpred(_ctx, 9);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\66\u00f1\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\3\2\3\2\3\2\3\2\3\3\3\3\3\4\3\4\3\4\3\4\7\4=\n\4\f\4\16\4@\13\4\3\4\3"+
		"\4\3\5\3\5\3\5\3\5\3\5\7\5I\n\5\f\5\16\5L\13\5\3\5\3\5\3\6\3\6\3\7\3\7"+
		"\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\7\t\\\n\t\f\t\16\t_\13\t\3\t\3\t\3\t"+
		"\5\td\n\t\3\t\3\t\3\n\3\n\3\13\3\13\3\13\3\13\5\13n\n\13\3\13\3\13\3\f"+
		"\3\f\3\r\5\ru\n\r\3\r\3\r\7\ry\n\r\f\r\16\r|\13\r\3\16\3\16\3\17\5\17"+
		"\u0081\n\17\3\17\3\17\7\17\u0085\n\17\f\17\16\17\u0088\13\17\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\5\21\u009b\n\21\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\5\23\u00ad\n\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\7\23\u00bb\n\23\f\23\16\23\u00be\13"+
		"\23\3\24\3\24\7\24\u00c2\n\24\f\24\16\24\u00c5\13\24\3\25\3\25\3\25\3"+
		"\25\3\26\3\26\3\26\5\26\u00ce\n\26\6\26\u00d0\n\26\r\26\16\26\u00d1\3"+
		"\27\3\27\3\27\3\27\3\27\7\27\u00d9\n\27\f\27\16\27\u00dc\13\27\3\30\3"+
		"\30\3\30\3\30\3\30\7\30\u00e3\n\30\f\30\16\30\u00e6\13\30\3\31\3\31\3"+
		"\31\5\31\u00eb\n\31\6\31\u00ed\n\31\r\31\16\31\u00ee\3\31\2\3$\32\2\4"+
		"\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\2\13\4\2##\',\5\2 \"$"+
		"\60\63\63\4\2\30\30\34\34\3\2%&\3\2\20\25\3\2\26\27\3\2\31\32\4\2\33\37"+
		"\64\64\3\2#$\2\u00fa\2\62\3\2\2\2\4\66\3\2\2\2\68\3\2\2\2\bC\3\2\2\2\n"+
		"O\3\2\2\2\fQ\3\2\2\2\16S\3\2\2\2\20W\3\2\2\2\22g\3\2\2\2\24i\3\2\2\2\26"+
		"q\3\2\2\2\30t\3\2\2\2\32}\3\2\2\2\34\u0080\3\2\2\2\36\u0089\3\2\2\2 \u009a"+
		"\3\2\2\2\"\u009c\3\2\2\2$\u00ac\3\2\2\2&\u00bf\3\2\2\2(\u00c6\3\2\2\2"+
		"*\u00cf\3\2\2\2,\u00d3\3\2\2\2.\u00dd\3\2\2\2\60\u00ec\3\2\2\2\62\63\7"+
		"\60\2\2\63\64\5\4\3\2\64\65\5\6\4\2\65\3\3\2\2\2\66\67\5&\24\2\67\5\3"+
		"\2\2\28>\7\5\2\29=\5\16\b\2:=\5\f\7\2;=\5\36\20\2<9\3\2\2\2<:\3\2\2\2"+
		"<;\3\2\2\2=@\3\2\2\2><\3\2\2\2>?\3\2\2\2?A\3\2\2\2@>\3\2\2\2AB\7\6\2\2"+
		"B\7\3\2\2\2CJ\7\5\2\2DI\5\20\t\2EI\5\16\b\2FI\7\66\2\2GI\5\36\20\2HD\3"+
		"\2\2\2HE\3\2\2\2HF\3\2\2\2HG\3\2\2\2IL\3\2\2\2JH\3\2\2\2JK\3\2\2\2KM\3"+
		"\2\2\2LJ\3\2\2\2MN\7\6\2\2N\t\3\2\2\2OP\t\2\2\2P\13\3\2\2\2QR\7\66\2\2"+
		"R\r\3\2\2\2ST\7!\2\2TU\5\60\31\2UV\5\b\5\2V\17\3\2\2\2WX\7 \2\2X]\5\n"+
		"\6\2YZ\7\16\2\2Z\\\5\n\6\2[Y\3\2\2\2\\_\3\2\2\2][\3\2\2\2]^\3\2\2\2^c"+
		"\3\2\2\2_]\3\2\2\2`a\7\r\2\2ab\7\"\2\2bd\5$\23\2c`\3\2\2\2cd\3\2\2\2d"+
		"e\3\2\2\2ef\7\17\2\2f\21\3\2\2\2gh\7\63\2\2h\23\3\2\2\2ij\7\5\2\2jm\7"+
		"\63\2\2kl\7\3\2\2ln\7\4\2\2mk\3\2\2\2mn\3\2\2\2no\3\2\2\2op\7\6\2\2p\25"+
		"\3\2\2\2qr\5$\23\2r\27\3\2\2\2su\5\26\f\2ts\3\2\2\2tu\3\2\2\2uz\3\2\2"+
		"\2vw\7\16\2\2wy\5\26\f\2xv\3\2\2\2y|\3\2\2\2zx\3\2\2\2z{\3\2\2\2{\31\3"+
		"\2\2\2|z\3\2\2\2}~\7\63\2\2~\33\3\2\2\2\177\u0081\5\32\16\2\u0080\177"+
		"\3\2\2\2\u0080\u0081\3\2\2\2\u0081\u0086\3\2\2\2\u0082\u0083\7\16\2\2"+
		"\u0083\u0085\5\32\16\2\u0084\u0082\3\2\2\2\u0085\u0088\3\2\2\2\u0086\u0084"+
		"\3\2\2\2\u0086\u0087\3\2\2\2\u0087\35\3\2\2\2\u0088\u0086\3\2\2\2\u0089"+
		"\u008a\7-\2\2\u008a\u008b\7\63\2\2\u008b\u008c\7\7\2\2\u008c\u008d\5\34"+
		"\17\2\u008d\u008e\7\b\2\2\u008e\u008f\7\5\2\2\u008f\u0090\7.\2\2\u0090"+
		"\u0091\5$\23\2\u0091\u0092\7\17\2\2\u0092\u0093\7\6\2\2\u0093\37\3\2\2"+
		"\2\u0094\u0095\7\f\2\2\u0095\u009b\5\"\22\2\u0096\u0097\7\n\2\2\u0097"+
		"\u0098\5$\23\2\u0098\u0099\7\13\2\2\u0099\u009b\3\2\2\2\u009a\u0094\3"+
		"\2\2\2\u009a\u0096\3\2\2\2\u009b!\3\2\2\2\u009c\u009d\t\3\2\2\u009d#\3"+
		"\2\2\2\u009e\u009f\b\23\1\2\u009f\u00ad\7/\2\2\u00a0\u00a1\t\4\2\2\u00a1"+
		"\u00ad\5$\23\n\u00a2\u00ad\7\62\2\2\u00a3\u00ad\7\61\2\2\u00a4\u00ad\t"+
		"\5\2\2\u00a5\u00ad\5&\24\2\u00a6\u00ad\5,\27\2\u00a7\u00ad\5.\30\2\u00a8"+
		"\u00a9\7\7\2\2\u00a9\u00aa\5$\23\2\u00aa\u00ab\7\b\2\2\u00ab\u00ad\3\2"+
		"\2\2\u00ac\u009e\3\2\2\2\u00ac\u00a0\3\2\2\2\u00ac\u00a2\3\2\2\2\u00ac"+
		"\u00a3\3\2\2\2\u00ac\u00a4\3\2\2\2\u00ac\u00a5\3\2\2\2\u00ac\u00a6\3\2"+
		"\2\2\u00ac\u00a7\3\2\2\2\u00ac\u00a8\3\2\2\2\u00ad\u00bc\3\2\2\2\u00ae"+
		"\u00af\f\16\2\2\u00af\u00b0\t\6\2\2\u00b0\u00bb\5$\23\17\u00b1\u00b2\f"+
		"\r\2\2\u00b2\u00b3\t\7\2\2\u00b3\u00bb\5$\23\16\u00b4\u00b5\f\f\2\2\u00b5"+
		"\u00b6\t\b\2\2\u00b6\u00bb\5$\23\r\u00b7\u00b8\f\13\2\2\u00b8\u00b9\t"+
		"\t\2\2\u00b9\u00bb\5$\23\f\u00ba\u00ae\3\2\2\2\u00ba\u00b1\3\2\2\2\u00ba"+
		"\u00b4\3\2\2\2\u00ba\u00b7\3\2\2\2\u00bb\u00be\3\2\2\2\u00bc\u00ba\3\2"+
		"\2\2\u00bc\u00bd\3\2\2\2\u00bd%\3\2\2\2\u00be\u00bc\3\2\2\2\u00bf\u00c3"+
		"\7\63\2\2\u00c0\u00c2\5 \21\2\u00c1\u00c0\3\2\2\2\u00c2\u00c5\3\2\2\2"+
		"\u00c3\u00c1\3\2\2\2\u00c3\u00c4\3\2\2\2\u00c4\'\3\2\2\2\u00c5\u00c3\3"+
		"\2\2\2\u00c6\u00c7\7\t\2\2\u00c7\u00c8\5$\23\2\u00c8\u00c9\7\b\2\2\u00c9"+
		")\3\2\2\2\u00ca\u00cd\7\64\2\2\u00cb\u00ce\5\22\n\2\u00cc\u00ce\5(\25"+
		"\2\u00cd\u00cb\3\2\2\2\u00cd\u00cc\3\2\2\2\u00ce\u00d0\3\2\2\2\u00cf\u00ca"+
		"\3\2\2\2\u00d0\u00d1\3\2\2\2\u00d1\u00cf\3\2\2\2\u00d1\u00d2\3\2\2\2\u00d2"+
		"+\3\2\2\2\u00d3\u00d4\t\n\2\2\u00d4\u00d5\7\7\2\2\u00d5\u00d6\5*\26\2"+
		"\u00d6\u00da\7\b\2\2\u00d7\u00d9\5 \21\2\u00d8\u00d7\3\2\2\2\u00d9\u00dc"+
		"\3\2\2\2\u00da\u00d8\3\2\2\2\u00da\u00db\3\2\2\2\u00db-\3\2\2\2\u00dc"+
		"\u00da\3\2\2\2\u00dd\u00de\7\63\2\2\u00de\u00df\7\7\2\2\u00df\u00e0\5"+
		"\30\r\2\u00e0\u00e4\7\b\2\2\u00e1\u00e3\5 \21\2\u00e2\u00e1\3\2\2\2\u00e3"+
		"\u00e6\3\2\2\2\u00e4\u00e2\3\2\2\2\u00e4\u00e5\3\2\2\2\u00e5/\3\2\2\2"+
		"\u00e6\u00e4\3\2\2\2\u00e7\u00ea\7\64\2\2\u00e8\u00eb\7\63\2\2\u00e9\u00eb"+
		"\5\24\13\2\u00ea\u00e8\3\2\2\2\u00ea\u00e9\3\2\2\2\u00eb\u00ed\3\2\2\2"+
		"\u00ec\u00e7\3\2\2\2\u00ed\u00ee\3\2\2\2\u00ee\u00ec\3\2\2\2\u00ee\u00ef"+
		"\3\2\2\2\u00ef\61\3\2\2\2\30<>HJ]cmtz\u0080\u0086\u009a\u00ac\u00ba\u00bc"+
		"\u00c3\u00cd\u00d1\u00da\u00e4\u00ea\u00ee";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}