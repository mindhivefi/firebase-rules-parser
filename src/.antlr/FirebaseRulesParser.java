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
		T__0=1, T__1=2, T__2=3, CurlyOpen=4, CurlyClose=5, BracketOpen=6, BracketClose=7, 
		SquareBracketOpen=8, SquareBracketClose=9, Dot=10, Colon=11, Comma=12, 
		Semicolon=13, LessThan=14, LessOrEqual=15, GreaterOrEqual=16, GreaterThan=17, 
		Equals=18, Unequal=19, LogicalAnd=20, LogicalOr=21, LogicalNot=22, BinaryAnd=23, 
		BinaryOr=24, ArithmeticAdd=25, ArithmeticSub=26, ArithmeticMul=27, ArithmeticExp=28, 
		ArithmeticModus=29, Allow=30, Match=31, If=32, Get=33, True=34, False=35, 
		List=36, Create=37, Update=38, Read=39, Write=40, Delete=41, Function=42, 
		Return=43, Null=44, Service=45, Number=46, String=47, Identifier=48, Slash=49, 
		WS=50, Comment=51;
	public static final int
		RULE_service = 0, RULE_namespace = 1, RULE_namespaceBlock = 2, RULE_matchBlock = 3, 
		RULE_allowKey = 4, RULE_comment = 5, RULE_matcher = 6, RULE_allow = 7, 
		RULE_pathVariableReplace = 8, RULE_pathVariable = 9, RULE_arg = 10, RULE_arguments = 11, 
		RULE_argDeclaration = 12, RULE_argDeclarations = 13, RULE_functionDeclaration = 14, 
		RULE_fieldReference = 15, RULE_expression = 16, RULE_objectReference = 17, 
		RULE_get = 18, RULE_functionCall = 19, RULE_getPath = 20, RULE_matchPath = 21;
	public static final String[] ruleNames = {
		"service", "namespace", "namespaceBlock", "matchBlock", "allowKey", "comment", 
		"matcher", "allow", "pathVariableReplace", "pathVariable", "arg", "arguments", 
		"argDeclaration", "argDeclarations", "functionDeclaration", "fieldReference", 
		"expression", "objectReference", "get", "functionCall", "getPath", "matchPath"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'$('", "'='", "'**'", "'{'", "'}'", "'('", "')'", "'['", "']'", 
		"'.'", "':'", "','", "';'", "'<'", "'<='", "'>='", "'>'", "'=='", "'!='", 
		"'&&'", "'||'", "'!'", "'&'", "'|'", "'+'", "'-'", "'*'", "'^'", "'%'", 
		"'allow'", "'match'", "'if'", "'get'", "'true'", "'false'", "'list'", 
		"'create'", "'update'", "'read'", "'write'", "'delete'", "'function'", 
		"'return'", "'null'", "'service'", null, null, null, "'/'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, "CurlyOpen", "CurlyClose", "BracketOpen", "BracketClose", 
		"SquareBracketOpen", "SquareBracketClose", "Dot", "Colon", "Comma", "Semicolon", 
		"LessThan", "LessOrEqual", "GreaterOrEqual", "GreaterThan", "Equals", 
		"Unequal", "LogicalAnd", "LogicalOr", "LogicalNot", "BinaryAnd", "BinaryOr", 
		"ArithmeticAdd", "ArithmeticSub", "ArithmeticMul", "ArithmeticExp", "ArithmeticModus", 
		"Allow", "Match", "If", "Get", "True", "False", "List", "Create", "Update", 
		"Read", "Write", "Delete", "Function", "Return", "Null", "Service", "Number", 
		"String", "Identifier", "Slash", "WS", "Comment"
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
			setState(44);
			match(Service);
			setState(45);
			namespace();
			setState(46);
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
			setState(48);
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
			setState(50);
			match(CurlyOpen);
			setState(56);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Match) | (1L << Function) | (1L << Comment))) != 0)) {
				{
				setState(54);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Match:
					{
					setState(51);
					matcher();
					}
					break;
				case Comment:
					{
					setState(52);
					comment();
					}
					break;
				case Function:
					{
					setState(53);
					functionDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(58);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(59);
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
			setState(61);
			match(CurlyOpen);
			setState(68);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Allow) | (1L << Match) | (1L << Function) | (1L << Comment))) != 0)) {
				{
				setState(66);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Allow:
					{
					setState(62);
					allow();
					}
					break;
				case Match:
					{
					setState(63);
					matcher();
					}
					break;
				case Comment:
					{
					setState(64);
					match(Comment);
					}
					break;
				case Function:
					{
					setState(65);
					functionDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(70);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(71);
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
			setState(73);
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
			setState(75);
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
			setState(77);
			match(Match);
			setState(78);
			matchPath();
			setState(79);
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
			setState(81);
			match(Allow);
			setState(82);
			allowKey();
			setState(87);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(83);
				match(Comma);
				setState(84);
				allowKey();
				}
				}
				setState(89);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(93);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(90);
				match(Colon);
				setState(91);
				match(If);
				setState(92);
				expression(0);
				}
			}

			setState(95);
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

	public static class PathVariableReplaceContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(FirebaseRulesParser.Identifier, 0); }
		public TerminalNode String() { return getToken(FirebaseRulesParser.String, 0); }
		public TerminalNode Number() { return getToken(FirebaseRulesParser.Number, 0); }
		public PathVariableReplaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pathVariableReplace; }
	}

	public final PathVariableReplaceContext pathVariableReplace() throws RecognitionException {
		PathVariableReplaceContext _localctx = new PathVariableReplaceContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_pathVariableReplace);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			match(T__0);
			setState(98);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Number) | (1L << String) | (1L << Identifier))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(99);
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
			setState(101);
			match(CurlyOpen);
			setState(102);
			match(Identifier);
			setState(105);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__1) {
				{
				setState(103);
				match(T__1);
				setState(104);
				match(T__2);
				}
			}

			setState(107);
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
			setState(109);
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
			setState(112);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BracketOpen) | (1L << LogicalNot) | (1L << ArithmeticSub) | (1L << Get) | (1L << True) | (1L << False) | (1L << Null) | (1L << Number) | (1L << String) | (1L << Identifier))) != 0)) {
				{
				setState(111);
				arg();
				}
			}

			setState(118);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(114);
				match(Comma);
				setState(115);
				arg();
				}
				}
				setState(120);
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
			setState(121);
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
			setState(124);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier) {
				{
				setState(123);
				argDeclaration();
				}
			}

			setState(130);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(126);
				match(Comma);
				setState(127);
				argDeclaration();
				}
				}
				setState(132);
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
			setState(133);
			match(Function);
			setState(134);
			match(Identifier);
			setState(135);
			match(BracketOpen);
			setState(136);
			argDeclarations();
			setState(137);
			match(BracketClose);
			setState(138);
			match(CurlyOpen);
			setState(139);
			match(Return);
			setState(140);
			expression(0);
			setState(141);
			match(Semicolon);
			setState(142);
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
		public TerminalNode Identifier() { return getToken(FirebaseRulesParser.Identifier, 0); }
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
			setState(150);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Dot:
				_localctx = new FieldReferenceWithIdentifierContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(144);
				match(Dot);
				setState(145);
				match(Identifier);
				}
				}
				break;
			case SquareBracketOpen:
				_localctx = new FieldReferenceWithMemberRefContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(146);
				match(SquareBracketOpen);
				setState(147);
				expression(0);
				setState(148);
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
		public GetContext get() {
			return getRuleContext(GetContext.class,0);
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
		int _startState = 32;
		enterRecursionRule(_localctx, 32, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(166);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				{
				_localctx = new NullExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(153);
				match(Null);
				}
				break;
			case 2:
				{
				_localctx = new UnaryExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(154);
				_la = _input.LA(1);
				if ( !(_la==LogicalNot || _la==ArithmeticSub) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(155);
				expression(8);
				}
				break;
			case 3:
				{
				_localctx = new StringExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(156);
				match(String);
				}
				break;
			case 4:
				{
				_localctx = new NumberExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(157);
				match(Number);
				}
				break;
			case 5:
				{
				_localctx = new BooleanExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(158);
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
				setState(159);
				objectReference();
				}
				break;
			case 7:
				{
				_localctx = new GetExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(160);
				get();
				}
				break;
			case 8:
				{
				_localctx = new FunctionExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(161);
				functionCall();
				}
				break;
			case 9:
				{
				_localctx = new ParenthesisExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(162);
				match(BracketOpen);
				setState(163);
				expression(0);
				setState(164);
				match(BracketClose);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(182);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(180);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
					case 1:
						{
						_localctx = new CompareExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(168);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(169);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LessThan) | (1L << LessOrEqual) | (1L << GreaterOrEqual) | (1L << GreaterThan) | (1L << Equals) | (1L << Unequal))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(170);
						expression(13);
						}
						break;
					case 2:
						{
						_localctx = new LogicalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(171);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(172);
						_la = _input.LA(1);
						if ( !(_la==LogicalAnd || _la==LogicalOr) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(173);
						expression(12);
						}
						break;
					case 3:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(174);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(175);
						_la = _input.LA(1);
						if ( !(_la==BinaryAnd || _la==BinaryOr) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(176);
						expression(11);
						}
						break;
					case 4:
						{
						_localctx = new ArithmeticExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(177);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(178);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ArithmeticAdd) | (1L << ArithmeticSub) | (1L << ArithmeticMul) | (1L << ArithmeticExp) | (1L << ArithmeticModus) | (1L << Slash))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(179);
						expression(10);
						}
						break;
					}
					} 
				}
				setState(184);
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
		enterRule(_localctx, 34, RULE_objectReference);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
			match(Identifier);
			setState(189);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(186);
					fieldReference();
					}
					} 
				}
				setState(191);
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

	public static class GetContext extends ParserRuleContext {
		public TerminalNode Get() { return getToken(FirebaseRulesParser.Get, 0); }
		public TerminalNode BracketOpen() { return getToken(FirebaseRulesParser.BracketOpen, 0); }
		public GetPathContext getPath() {
			return getRuleContext(GetPathContext.class,0);
		}
		public TerminalNode BracketClose() { return getToken(FirebaseRulesParser.BracketClose, 0); }
		public TerminalNode Dot() { return getToken(FirebaseRulesParser.Dot, 0); }
		public TerminalNode Identifier() { return getToken(FirebaseRulesParser.Identifier, 0); }
		public TerminalNode SquareBracketOpen() { return getToken(FirebaseRulesParser.SquareBracketOpen, 0); }
		public TerminalNode SquareBracketClose() { return getToken(FirebaseRulesParser.SquareBracketClose, 0); }
		public TerminalNode String() { return getToken(FirebaseRulesParser.String, 0); }
		public TerminalNode Number() { return getToken(FirebaseRulesParser.Number, 0); }
		public ObjectReferenceContext objectReference() {
			return getRuleContext(ObjectReferenceContext.class,0);
		}
		public GetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_get; }
	}

	public final GetContext get() throws RecognitionException {
		GetContext _localctx = new GetContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_get);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			match(Get);
			setState(193);
			match(BracketOpen);
			setState(194);
			getPath();
			setState(195);
			match(BracketClose);
			setState(196);
			match(Dot);
			{
			{
			setState(197);
			match(Identifier);
			}
			setState(205);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				{
				setState(198);
				match(SquareBracketOpen);
				setState(202);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case String:
					{
					setState(199);
					match(String);
					}
					break;
				case Number:
					{
					setState(200);
					match(Number);
					}
					break;
				case Identifier:
					{
					setState(201);
					objectReference();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(204);
				match(SquareBracketClose);
				}
				break;
			}
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
		enterRule(_localctx, 38, RULE_functionCall);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(207);
			match(Identifier);
			setState(208);
			match(BracketOpen);
			setState(209);
			arguments();
			setState(210);
			match(BracketClose);
			setState(214);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(211);
					fieldReference();
					}
					} 
				}
				setState(216);
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

	public static class GetPathContext extends ParserRuleContext {
		public List<TerminalNode> Slash() { return getTokens(FirebaseRulesParser.Slash); }
		public TerminalNode Slash(int i) {
			return getToken(FirebaseRulesParser.Slash, i);
		}
		public List<TerminalNode> Identifier() { return getTokens(FirebaseRulesParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(FirebaseRulesParser.Identifier, i);
		}
		public List<PathVariableReplaceContext> pathVariableReplace() {
			return getRuleContexts(PathVariableReplaceContext.class);
		}
		public PathVariableReplaceContext pathVariableReplace(int i) {
			return getRuleContext(PathVariableReplaceContext.class,i);
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
			setState(222); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(217);
				match(Slash);
				setState(220);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Identifier:
					{
					setState(218);
					match(Identifier);
					}
					break;
				case T__0:
					{
					setState(219);
					pathVariableReplace();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				setState(224); 
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
		enterRule(_localctx, 42, RULE_matchPath);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(231); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(226);
				match(Slash);
				setState(229);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Identifier:
					{
					setState(227);
					match(Identifier);
					}
					break;
				case CurlyOpen:
					{
					setState(228);
					pathVariable();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				setState(233); 
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
		case 16:
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\65\u00ee\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\3\2\3\2\3\2\3\2\3\3"+
		"\3\3\3\4\3\4\3\4\3\4\7\49\n\4\f\4\16\4<\13\4\3\4\3\4\3\5\3\5\3\5\3\5\3"+
		"\5\7\5E\n\5\f\5\16\5H\13\5\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\b\3\b\3\t"+
		"\3\t\3\t\3\t\7\tX\n\t\f\t\16\t[\13\t\3\t\3\t\3\t\5\t`\n\t\3\t\3\t\3\n"+
		"\3\n\3\n\3\n\3\13\3\13\3\13\3\13\5\13l\n\13\3\13\3\13\3\f\3\f\3\r\5\r"+
		"s\n\r\3\r\3\r\7\rw\n\r\f\r\16\rz\13\r\3\16\3\16\3\17\5\17\177\n\17\3\17"+
		"\3\17\7\17\u0083\n\17\f\17\16\17\u0086\13\17\3\20\3\20\3\20\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\21\5\21\u0099"+
		"\n\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\5\22\u00a9\n\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\7\22\u00b7\n\22\f\22\16\22\u00ba\13\22\3\23\3\23\7\23\u00be"+
		"\n\23\f\23\16\23\u00c1\13\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3"+
		"\24\3\24\5\24\u00cd\n\24\3\24\5\24\u00d0\n\24\3\25\3\25\3\25\3\25\3\25"+
		"\7\25\u00d7\n\25\f\25\16\25\u00da\13\25\3\26\3\26\3\26\5\26\u00df\n\26"+
		"\6\26\u00e1\n\26\r\26\16\26\u00e2\3\27\3\27\3\27\5\27\u00e8\n\27\6\27"+
		"\u00ea\n\27\r\27\16\27\u00eb\3\27\2\3\"\30\2\4\6\b\n\f\16\20\22\24\26"+
		"\30\32\34\36 \"$&(*,\2\n\4\2##&+\3\2\60\62\4\2\30\30\34\34\3\2$%\3\2\20"+
		"\25\3\2\26\27\3\2\31\32\4\2\33\37\63\63\2\u00fb\2.\3\2\2\2\4\62\3\2\2"+
		"\2\6\64\3\2\2\2\b?\3\2\2\2\nK\3\2\2\2\fM\3\2\2\2\16O\3\2\2\2\20S\3\2\2"+
		"\2\22c\3\2\2\2\24g\3\2\2\2\26o\3\2\2\2\30r\3\2\2\2\32{\3\2\2\2\34~\3\2"+
		"\2\2\36\u0087\3\2\2\2 \u0098\3\2\2\2\"\u00a8\3\2\2\2$\u00bb\3\2\2\2&\u00c2"+
		"\3\2\2\2(\u00d1\3\2\2\2*\u00e0\3\2\2\2,\u00e9\3\2\2\2./\7/\2\2/\60\5\4"+
		"\3\2\60\61\5\6\4\2\61\3\3\2\2\2\62\63\5$\23\2\63\5\3\2\2\2\64:\7\6\2\2"+
		"\659\5\16\b\2\669\5\f\7\2\679\5\36\20\28\65\3\2\2\28\66\3\2\2\28\67\3"+
		"\2\2\29<\3\2\2\2:8\3\2\2\2:;\3\2\2\2;=\3\2\2\2<:\3\2\2\2=>\7\7\2\2>\7"+
		"\3\2\2\2?F\7\6\2\2@E\5\20\t\2AE\5\16\b\2BE\7\65\2\2CE\5\36\20\2D@\3\2"+
		"\2\2DA\3\2\2\2DB\3\2\2\2DC\3\2\2\2EH\3\2\2\2FD\3\2\2\2FG\3\2\2\2GI\3\2"+
		"\2\2HF\3\2\2\2IJ\7\7\2\2J\t\3\2\2\2KL\t\2\2\2L\13\3\2\2\2MN\7\65\2\2N"+
		"\r\3\2\2\2OP\7!\2\2PQ\5,\27\2QR\5\b\5\2R\17\3\2\2\2ST\7 \2\2TY\5\n\6\2"+
		"UV\7\16\2\2VX\5\n\6\2WU\3\2\2\2X[\3\2\2\2YW\3\2\2\2YZ\3\2\2\2Z_\3\2\2"+
		"\2[Y\3\2\2\2\\]\7\r\2\2]^\7\"\2\2^`\5\"\22\2_\\\3\2\2\2_`\3\2\2\2`a\3"+
		"\2\2\2ab\7\17\2\2b\21\3\2\2\2cd\7\3\2\2de\t\3\2\2ef\7\t\2\2f\23\3\2\2"+
		"\2gh\7\6\2\2hk\7\62\2\2ij\7\4\2\2jl\7\5\2\2ki\3\2\2\2kl\3\2\2\2lm\3\2"+
		"\2\2mn\7\7\2\2n\25\3\2\2\2op\5\"\22\2p\27\3\2\2\2qs\5\26\f\2rq\3\2\2\2"+
		"rs\3\2\2\2sx\3\2\2\2tu\7\16\2\2uw\5\26\f\2vt\3\2\2\2wz\3\2\2\2xv\3\2\2"+
		"\2xy\3\2\2\2y\31\3\2\2\2zx\3\2\2\2{|\7\62\2\2|\33\3\2\2\2}\177\5\32\16"+
		"\2~}\3\2\2\2~\177\3\2\2\2\177\u0084\3\2\2\2\u0080\u0081\7\16\2\2\u0081"+
		"\u0083\5\32\16\2\u0082\u0080\3\2\2\2\u0083\u0086\3\2\2\2\u0084\u0082\3"+
		"\2\2\2\u0084\u0085\3\2\2\2\u0085\35\3\2\2\2\u0086\u0084\3\2\2\2\u0087"+
		"\u0088\7,\2\2\u0088\u0089\7\62\2\2\u0089\u008a\7\b\2\2\u008a\u008b\5\34"+
		"\17\2\u008b\u008c\7\t\2\2\u008c\u008d\7\6\2\2\u008d\u008e\7-\2\2\u008e"+
		"\u008f\5\"\22\2\u008f\u0090\7\17\2\2\u0090\u0091\7\7\2\2\u0091\37\3\2"+
		"\2\2\u0092\u0093\7\f\2\2\u0093\u0099\7\62\2\2\u0094\u0095\7\n\2\2\u0095"+
		"\u0096\5\"\22\2\u0096\u0097\7\13\2\2\u0097\u0099\3\2\2\2\u0098\u0092\3"+
		"\2\2\2\u0098\u0094\3\2\2\2\u0099!\3\2\2\2\u009a\u009b\b\22\1\2\u009b\u00a9"+
		"\7.\2\2\u009c\u009d\t\4\2\2\u009d\u00a9\5\"\22\n\u009e\u00a9\7\61\2\2"+
		"\u009f\u00a9\7\60\2\2\u00a0\u00a9\t\5\2\2\u00a1\u00a9\5$\23\2\u00a2\u00a9"+
		"\5&\24\2\u00a3\u00a9\5(\25\2\u00a4\u00a5\7\b\2\2\u00a5\u00a6\5\"\22\2"+
		"\u00a6\u00a7\7\t\2\2\u00a7\u00a9\3\2\2\2\u00a8\u009a\3\2\2\2\u00a8\u009c"+
		"\3\2\2\2\u00a8\u009e\3\2\2\2\u00a8\u009f\3\2\2\2\u00a8\u00a0\3\2\2\2\u00a8"+
		"\u00a1\3\2\2\2\u00a8\u00a2\3\2\2\2\u00a8\u00a3\3\2\2\2\u00a8\u00a4\3\2"+
		"\2\2\u00a9\u00b8\3\2\2\2\u00aa\u00ab\f\16\2\2\u00ab\u00ac\t\6\2\2\u00ac"+
		"\u00b7\5\"\22\17\u00ad\u00ae\f\r\2\2\u00ae\u00af\t\7\2\2\u00af\u00b7\5"+
		"\"\22\16\u00b0\u00b1\f\f\2\2\u00b1\u00b2\t\b\2\2\u00b2\u00b7\5\"\22\r"+
		"\u00b3\u00b4\f\13\2\2\u00b4\u00b5\t\t\2\2\u00b5\u00b7\5\"\22\f\u00b6\u00aa"+
		"\3\2\2\2\u00b6\u00ad\3\2\2\2\u00b6\u00b0\3\2\2\2\u00b6\u00b3\3\2\2\2\u00b7"+
		"\u00ba\3\2\2\2\u00b8\u00b6\3\2\2\2\u00b8\u00b9\3\2\2\2\u00b9#\3\2\2\2"+
		"\u00ba\u00b8\3\2\2\2\u00bb\u00bf\7\62\2\2\u00bc\u00be\5 \21\2\u00bd\u00bc"+
		"\3\2\2\2\u00be\u00c1\3\2\2\2\u00bf\u00bd\3\2\2\2\u00bf\u00c0\3\2\2\2\u00c0"+
		"%\3\2\2\2\u00c1\u00bf\3\2\2\2\u00c2\u00c3\7#\2\2\u00c3\u00c4\7\b\2\2\u00c4"+
		"\u00c5\5*\26\2\u00c5\u00c6\7\t\2\2\u00c6\u00c7\7\f\2\2\u00c7\u00cf\7\62"+
		"\2\2\u00c8\u00cc\7\n\2\2\u00c9\u00cd\7\61\2\2\u00ca\u00cd\7\60\2\2\u00cb"+
		"\u00cd\5$\23\2\u00cc\u00c9\3\2\2\2\u00cc\u00ca\3\2\2\2\u00cc\u00cb\3\2"+
		"\2\2\u00cd\u00ce\3\2\2\2\u00ce\u00d0\7\13\2\2\u00cf\u00c8\3\2\2\2\u00cf"+
		"\u00d0\3\2\2\2\u00d0\'\3\2\2\2\u00d1\u00d2\7\62\2\2\u00d2\u00d3\7\b\2"+
		"\2\u00d3\u00d4\5\30\r\2\u00d4\u00d8\7\t\2\2\u00d5\u00d7\5 \21\2\u00d6"+
		"\u00d5\3\2\2\2\u00d7\u00da\3\2\2\2\u00d8\u00d6\3\2\2\2\u00d8\u00d9\3\2"+
		"\2\2\u00d9)\3\2\2\2\u00da\u00d8\3\2\2\2\u00db\u00de\7\63\2\2\u00dc\u00df"+
		"\7\62\2\2\u00dd\u00df\5\22\n\2\u00de\u00dc\3\2\2\2\u00de\u00dd\3\2\2\2"+
		"\u00df\u00e1\3\2\2\2\u00e0\u00db\3\2\2\2\u00e1\u00e2\3\2\2\2\u00e2\u00e0"+
		"\3\2\2\2\u00e2\u00e3\3\2\2\2\u00e3+\3\2\2\2\u00e4\u00e7\7\63\2\2\u00e5"+
		"\u00e8\7\62\2\2\u00e6\u00e8\5\24\13\2\u00e7\u00e5\3\2\2\2\u00e7\u00e6"+
		"\3\2\2\2\u00e8\u00ea\3\2\2\2\u00e9\u00e4\3\2\2\2\u00ea\u00eb\3\2\2\2\u00eb"+
		"\u00e9\3\2\2\2\u00eb\u00ec\3\2\2\2\u00ec-\3\2\2\2\318:DFY_krx~\u0084\u0098"+
		"\u00a8\u00b6\u00b8\u00bf\u00cc\u00cf\u00d8\u00de\u00e2\u00e7\u00eb";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}