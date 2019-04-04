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
		ArithmeticExp=28, ArithmeticModus=29, InOperator=30, Allow=31, Match=32, 
		If=33, Get=34, Exists=35, True=36, False=37, List=38, Create=39, Update=40, 
		Read=41, Write=42, Delete=43, Function=44, Return=45, Null=46, Service=47, 
		Number=48, String=49, Identifier=50, Slash=51, WS=52, Comment=53;
	public static final int
		RULE_service = 0, RULE_namespaceIdentifier = 1, RULE_namespaceBlock = 2, 
		RULE_matchBlock = 3, RULE_allowKey = 4, RULE_comment = 5, RULE_matcher = 6, 
		RULE_allow = 7, RULE_getPathVariable = 8, RULE_pathVariable = 9, RULE_arg = 10, 
		RULE_arguments = 11, RULE_memberArg = 12, RULE_memberArguments = 13, RULE_argDeclaration = 14, 
		RULE_argDeclarations = 15, RULE_functionDeclaration = 16, RULE_fieldReference = 17, 
		RULE_id = 18, RULE_expression = 19, RULE_objectReference = 20, RULE_getPathExpressionVariable = 21, 
		RULE_getPath = 22, RULE_ruleFunctionCall = 23, RULE_functionCall = 24, 
		RULE_matchPath = 25;
	public static final String[] ruleNames = {
		"service", "namespaceIdentifier", "namespaceBlock", "matchBlock", "allowKey", 
		"comment", "matcher", "allow", "getPathVariable", "pathVariable", "arg", 
		"arguments", "memberArg", "memberArguments", "argDeclaration", "argDeclarations", 
		"functionDeclaration", "fieldReference", "id", "expression", "objectReference", 
		"getPathExpressionVariable", "getPath", "ruleFunctionCall", "functionCall", 
		"matchPath"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'='", "'**'", "'{'", "'}'", "'('", "')'", "'$('", "'['", "']'", 
		"'.'", "':'", "','", "';'", "'<'", "'<='", "'>='", "'>'", "'=='", "'!='", 
		"'&&'", "'||'", "'!'", "'&'", "'|'", "'+'", "'-'", "'*'", "'^'", "'%'", 
		"'in'", "'allow'", "'match'", "'if'", "'get'", "'exists'", "'true'", "'false'", 
		"'list'", "'create'", "'update'", "'read'", "'write'", "'delete'", "'function'", 
		"'return'", "'null'", "'service'", null, null, null, "'/'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, "CurlyOpen", "CurlyClose", "BracketOpen", "BracketClose", 
		"PathVariableBracket", "SquareBracketOpen", "SquareBracketClose", "Dot", 
		"Colon", "Comma", "Semicolon", "LessThan", "LessOrEqual", "GreaterOrEqual", 
		"GreaterThan", "Equals", "Unequal", "LogicalAnd", "LogicalOr", "LogicalNot", 
		"BinaryAnd", "BinaryOr", "ArithmeticAdd", "ArithmeticSub", "ArithmeticMul", 
		"ArithmeticExp", "ArithmeticModus", "InOperator", "Allow", "Match", "If", 
		"Get", "Exists", "True", "False", "List", "Create", "Update", "Read", 
		"Write", "Delete", "Function", "Return", "Null", "Service", "Number", 
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
		public NamespaceIdentifierContext namespaceIdentifier() {
			return getRuleContext(NamespaceIdentifierContext.class,0);
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
			setState(52);
			match(Service);
			setState(53);
			namespaceIdentifier();
			setState(54);
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

	public static class NamespaceIdentifierContext extends ParserRuleContext {
		public List<IdContext> id() {
			return getRuleContexts(IdContext.class);
		}
		public IdContext id(int i) {
			return getRuleContext(IdContext.class,i);
		}
		public List<TerminalNode> Dot() { return getTokens(FirebaseRulesParser.Dot); }
		public TerminalNode Dot(int i) {
			return getToken(FirebaseRulesParser.Dot, i);
		}
		public NamespaceIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namespaceIdentifier; }
	}

	public final NamespaceIdentifierContext namespaceIdentifier() throws RecognitionException {
		NamespaceIdentifierContext _localctx = new NamespaceIdentifierContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_namespaceIdentifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			id();
			setState(61);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Dot) {
				{
				{
				setState(57);
				match(Dot);
				setState(58);
				id();
				}
				}
				setState(63);
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
			setState(64);
			match(CurlyOpen);
			setState(70);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Match) | (1L << Function) | (1L << Comment))) != 0)) {
				{
				setState(68);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Match:
					{
					setState(65);
					matcher();
					}
					break;
				case Comment:
					{
					setState(66);
					comment();
					}
					break;
				case Function:
					{
					setState(67);
					functionDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(72);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(73);
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
			setState(75);
			match(CurlyOpen);
			setState(82);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Allow) | (1L << Match) | (1L << Function) | (1L << Comment))) != 0)) {
				{
				setState(80);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Allow:
					{
					setState(76);
					allow();
					}
					break;
				case Match:
					{
					setState(77);
					matcher();
					}
					break;
				case Comment:
					{
					setState(78);
					match(Comment);
					}
					break;
				case Function:
					{
					setState(79);
					functionDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(84);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(85);
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
			setState(87);
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
			setState(89);
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
			setState(91);
			match(Match);
			setState(92);
			matchPath();
			setState(93);
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
			setState(95);
			match(Allow);
			setState(96);
			allowKey();
			setState(101);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(97);
				match(Comma);
				setState(98);
				allowKey();
				}
				}
				setState(103);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(107);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(104);
				match(Colon);
				setState(105);
				match(If);
				setState(106);
				expression(0);
				}
			}

			setState(109);
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
			setState(111);
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
			setState(113);
			match(CurlyOpen);
			setState(114);
			match(Identifier);
			setState(117);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0) {
				{
				setState(115);
				match(T__0);
				setState(116);
				match(T__1);
				}
			}

			setState(119);
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
			setState(121);
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
			setState(124);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BracketOpen) | (1L << SquareBracketOpen) | (1L << LogicalNot) | (1L << ArithmeticSub) | (1L << Get) | (1L << Exists) | (1L << True) | (1L << False) | (1L << Null) | (1L << Number) | (1L << String) | (1L << Identifier))) != 0)) {
				{
				setState(123);
				arg();
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
				arg();
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

	public static class MemberArgContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public MemberArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_memberArg; }
	}

	public final MemberArgContext memberArg() throws RecognitionException {
		MemberArgContext _localctx = new MemberArgContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_memberArg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
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

	public static class MemberArgumentsContext extends ParserRuleContext {
		public List<MemberArgContext> memberArg() {
			return getRuleContexts(MemberArgContext.class);
		}
		public MemberArgContext memberArg(int i) {
			return getRuleContext(MemberArgContext.class,i);
		}
		public MemberArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_memberArguments; }
	}

	public final MemberArgumentsContext memberArguments() throws RecognitionException {
		MemberArgumentsContext _localctx = new MemberArgumentsContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_memberArguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(136);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BracketOpen) | (1L << SquareBracketOpen) | (1L << LogicalNot) | (1L << ArithmeticSub) | (1L << Get) | (1L << Exists) | (1L << True) | (1L << False) | (1L << Null) | (1L << Number) | (1L << String) | (1L << Identifier))) != 0)) {
				{
				setState(135);
				memberArg();
				}
			}

			setState(142);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(138);
				match(Comma);
				setState(139);
				memberArg();
				}
				}
				setState(144);
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
		enterRule(_localctx, 28, RULE_argDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
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
		enterRule(_localctx, 30, RULE_argDeclarations);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(148);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier) {
				{
				setState(147);
				argDeclaration();
				}
			}

			setState(154);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(150);
				match(Comma);
				setState(151);
				argDeclaration();
				}
				}
				setState(156);
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
		enterRule(_localctx, 32, RULE_functionDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			match(Function);
			setState(158);
			match(Identifier);
			setState(159);
			match(BracketOpen);
			setState(160);
			argDeclarations();
			setState(161);
			match(BracketClose);
			setState(162);
			match(CurlyOpen);
			setState(163);
			match(Return);
			setState(164);
			expression(0);
			setState(165);
			match(Semicolon);
			setState(166);
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
		enterRule(_localctx, 34, RULE_fieldReference);
		try {
			setState(174);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Dot:
				_localctx = new FieldReferenceWithIdentifierContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(168);
				match(Dot);
				setState(169);
				id();
				}
				break;
			case SquareBracketOpen:
				_localctx = new FieldReferenceWithMemberRefContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(170);
				match(SquareBracketOpen);
				setState(171);
				expression(0);
				setState(172);
				match(SquareBracketClose);
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
		enterRule(_localctx, 36, RULE_id);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
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
	public static class ArrayExpressionContext extends ExpressionContext {
		public TerminalNode SquareBracketOpen() { return getToken(FirebaseRulesParser.SquareBracketOpen, 0); }
		public TerminalNode SquareBracketClose() { return getToken(FirebaseRulesParser.SquareBracketClose, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(FirebaseRulesParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(FirebaseRulesParser.Comma, i);
		}
		public ArrayExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class NumberExpressionContext extends ExpressionContext {
		public TerminalNode Number() { return getToken(FirebaseRulesParser.Number, 0); }
		public NumberExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ObjectReferenceExpressionContext extends ExpressionContext {
		public TerminalNode Identifier() { return getToken(FirebaseRulesParser.Identifier, 0); }
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
	public static class MemberReferenceExpressionContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode Dot() { return getToken(FirebaseRulesParser.Dot, 0); }
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public MemberReferenceExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
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
	public static class InExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode InOperator() { return getToken(FirebaseRulesParser.InOperator, 0); }
		public InExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class StringExpressionContext extends ExpressionContext {
		public TerminalNode String() { return getToken(FirebaseRulesParser.String, 0); }
		public StringExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class NullExpressionContext extends ExpressionContext {
		public TerminalNode Null() { return getToken(FirebaseRulesParser.Null, 0); }
		public NullExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class RangeExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode SquareBracketOpen() { return getToken(FirebaseRulesParser.SquareBracketOpen, 0); }
		public TerminalNode SquareBracketClose() { return getToken(FirebaseRulesParser.SquareBracketClose, 0); }
		public TerminalNode Colon() { return getToken(FirebaseRulesParser.Colon, 0); }
		public RangeExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class UnaryExpressionContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode LogicalNot() { return getToken(FirebaseRulesParser.LogicalNot, 0); }
		public TerminalNode ArithmeticSub() { return getToken(FirebaseRulesParser.ArithmeticSub, 0); }
		public UnaryExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MemberFunctionExpressionContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode Dot() { return getToken(FirebaseRulesParser.Dot, 0); }
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode BracketOpen() { return getToken(FirebaseRulesParser.BracketOpen, 0); }
		public MemberArgumentsContext memberArguments() {
			return getRuleContext(MemberArgumentsContext.class,0);
		}
		public TerminalNode BracketClose() { return getToken(FirebaseRulesParser.BracketClose, 0); }
		public MemberFunctionExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 38;
		enterRecursionRule(_localctx, 38, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(204);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				{
				_localctx = new NullExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(179);
				match(Null);
				}
				break;
			case 2:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(180);
				match(SquareBracketOpen);
				setState(182);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BracketOpen) | (1L << SquareBracketOpen) | (1L << LogicalNot) | (1L << ArithmeticSub) | (1L << Get) | (1L << Exists) | (1L << True) | (1L << False) | (1L << Null) | (1L << Number) | (1L << String) | (1L << Identifier))) != 0)) {
					{
					setState(181);
					expression(0);
					}
				}

				setState(188);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Comma) {
					{
					{
					setState(184);
					match(Comma);
					setState(185);
					expression(0);
					}
					}
					setState(190);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(191);
				match(SquareBracketClose);
				}
				break;
			case 3:
				{
				_localctx = new UnaryExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(192);
				_la = _input.LA(1);
				if ( !(_la==LogicalNot || _la==ArithmeticSub) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(193);
				expression(8);
				}
				break;
			case 4:
				{
				_localctx = new StringExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(194);
				match(String);
				}
				break;
			case 5:
				{
				_localctx = new NumberExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(195);
				match(Number);
				}
				break;
			case 6:
				{
				_localctx = new BooleanExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(196);
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
			case 7:
				{
				_localctx = new ObjectReferenceExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(197);
				match(Identifier);
				}
				break;
			case 8:
				{
				_localctx = new GetExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(198);
				ruleFunctionCall();
				}
				break;
			case 9:
				{
				_localctx = new FunctionExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(199);
				functionCall();
				}
				break;
			case 10:
				{
				_localctx = new ParenthesisExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(200);
				match(BracketOpen);
				setState(201);
				expression(0);
				setState(202);
				match(BracketClose);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(242);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(240);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
					case 1:
						{
						_localctx = new CompareExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(206);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(207);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LessThan) | (1L << LessOrEqual) | (1L << GreaterOrEqual) | (1L << GreaterThan) | (1L << Equals) | (1L << Unequal))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(208);
						expression(18);
						}
						break;
					case 2:
						{
						_localctx = new LogicalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(209);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(210);
						_la = _input.LA(1);
						if ( !(_la==LogicalAnd || _la==LogicalOr) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(211);
						expression(17);
						}
						break;
					case 3:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(212);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(213);
						_la = _input.LA(1);
						if ( !(_la==BinaryAnd || _la==BinaryOr) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(214);
						expression(16);
						}
						break;
					case 4:
						{
						_localctx = new ArithmeticExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(215);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(216);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ArithmeticAdd) | (1L << ArithmeticSub) | (1L << ArithmeticMul) | (1L << ArithmeticExp) | (1L << ArithmeticModus) | (1L << Slash))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(217);
						expression(15);
						}
						break;
					case 5:
						{
						_localctx = new InExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(218);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(219);
						match(InOperator);
						setState(220);
						expression(14);
						}
						break;
					case 6:
						{
						_localctx = new MemberReferenceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(221);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(222);
						match(Dot);
						setState(223);
						id();
						}
						break;
					case 7:
						{
						_localctx = new MemberFunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(224);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(225);
						match(Dot);
						setState(226);
						id();
						setState(227);
						match(BracketOpen);
						setState(228);
						memberArguments();
						setState(229);
						match(BracketClose);
						}
						break;
					case 8:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(231);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(232);
						match(SquareBracketOpen);
						setState(233);
						expression(0);
						setState(236);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==Colon) {
							{
							setState(234);
							match(Colon);
							setState(235);
							expression(0);
							}
						}

						setState(238);
						match(SquareBracketClose);
						}
						break;
					}
					} 
				}
				setState(244);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
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
		public ObjectReferenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectReference; }
	}

	public final ObjectReferenceContext objectReference() throws RecognitionException {
		ObjectReferenceContext _localctx = new ObjectReferenceContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_objectReference);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(245);
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
		enterRule(_localctx, 42, RULE_getPathExpressionVariable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(247);
			match(PathVariableBracket);
			setState(248);
			expression(0);
			setState(249);
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
		enterRule(_localctx, 44, RULE_getPath);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(256); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(251);
				match(Slash);
				setState(254);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Identifier:
					{
					setState(252);
					getPathVariable();
					}
					break;
				case PathVariableBracket:
					{
					setState(253);
					getPathExpressionVariable();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				setState(258); 
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
		public RuleFunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ruleFunctionCall; }
	}

	public final RuleFunctionCallContext ruleFunctionCall() throws RecognitionException {
		RuleFunctionCallContext _localctx = new RuleFunctionCallContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_ruleFunctionCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(260);
			_la = _input.LA(1);
			if ( !(_la==Get || _la==Exists) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(261);
			match(BracketOpen);
			setState(262);
			getPath();
			setState(263);
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

	public static class FunctionCallContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(FirebaseRulesParser.Identifier, 0); }
		public TerminalNode BracketOpen() { return getToken(FirebaseRulesParser.BracketOpen, 0); }
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public TerminalNode BracketClose() { return getToken(FirebaseRulesParser.BracketClose, 0); }
		public FunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCall; }
	}

	public final FunctionCallContext functionCall() throws RecognitionException {
		FunctionCallContext _localctx = new FunctionCallContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_functionCall);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(265);
			match(Identifier);
			setState(266);
			match(BracketOpen);
			setState(267);
			arguments();
			setState(268);
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
		enterRule(_localctx, 50, RULE_matchPath);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(275); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(270);
				match(Slash);
				setState(273);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Identifier:
					{
					setState(271);
					match(Identifier);
					}
					break;
				case CurlyOpen:
					{
					setState(272);
					pathVariable();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				setState(277); 
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
		case 19:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 17);
		case 1:
			return precpred(_ctx, 16);
		case 2:
			return precpred(_ctx, 15);
		case 3:
			return precpred(_ctx, 14);
		case 4:
			return precpred(_ctx, 13);
		case 5:
			return precpred(_ctx, 12);
		case 6:
			return precpred(_ctx, 11);
		case 7:
			return precpred(_ctx, 10);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\67\u011a\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\3\2\3\2\3\2\3\2\3\3\3\3\3\3\7\3>\n\3\f\3\16\3A\13"+
		"\3\3\4\3\4\3\4\3\4\7\4G\n\4\f\4\16\4J\13\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5"+
		"\7\5S\n\5\f\5\16\5V\13\5\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\b\3\b\3\t\3"+
		"\t\3\t\3\t\7\tf\n\t\f\t\16\ti\13\t\3\t\3\t\3\t\5\tn\n\t\3\t\3\t\3\n\3"+
		"\n\3\13\3\13\3\13\3\13\5\13x\n\13\3\13\3\13\3\f\3\f\3\r\5\r\177\n\r\3"+
		"\r\3\r\7\r\u0083\n\r\f\r\16\r\u0086\13\r\3\16\3\16\3\17\5\17\u008b\n\17"+
		"\3\17\3\17\7\17\u008f\n\17\f\17\16\17\u0092\13\17\3\20\3\20\3\21\5\21"+
		"\u0097\n\21\3\21\3\21\7\21\u009b\n\21\f\21\16\21\u009e\13\21\3\22\3\22"+
		"\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\5\23\u00b1\n\23\3\24\3\24\3\25\3\25\3\25\3\25\5\25\u00b9\n\25\3"+
		"\25\3\25\7\25\u00bd\n\25\f\25\16\25\u00c0\13\25\3\25\3\25\3\25\3\25\3"+
		"\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\5\25\u00cf\n\25\3\25\3\25"+
		"\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25"+
		"\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25"+
		"\5\25\u00ef\n\25\3\25\3\25\7\25\u00f3\n\25\f\25\16\25\u00f6\13\25\3\26"+
		"\3\26\3\27\3\27\3\27\3\27\3\30\3\30\3\30\5\30\u0101\n\30\6\30\u0103\n"+
		"\30\r\30\16\30\u0104\3\31\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32"+
		"\3\33\3\33\3\33\5\33\u0114\n\33\6\33\u0116\n\33\r\33\16\33\u0117\3\33"+
		"\2\3(\34\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\2\13"+
		"\4\2$$(-\5\2!#%\61\64\64\4\2\30\30\34\34\3\2&\'\3\2\20\25\3\2\26\27\3"+
		"\2\31\32\4\2\33\37\65\65\3\2$%\2\u0129\2\66\3\2\2\2\4:\3\2\2\2\6B\3\2"+
		"\2\2\bM\3\2\2\2\nY\3\2\2\2\f[\3\2\2\2\16]\3\2\2\2\20a\3\2\2\2\22q\3\2"+
		"\2\2\24s\3\2\2\2\26{\3\2\2\2\30~\3\2\2\2\32\u0087\3\2\2\2\34\u008a\3\2"+
		"\2\2\36\u0093\3\2\2\2 \u0096\3\2\2\2\"\u009f\3\2\2\2$\u00b0\3\2\2\2&\u00b2"+
		"\3\2\2\2(\u00ce\3\2\2\2*\u00f7\3\2\2\2,\u00f9\3\2\2\2.\u0102\3\2\2\2\60"+
		"\u0106\3\2\2\2\62\u010b\3\2\2\2\64\u0115\3\2\2\2\66\67\7\61\2\2\678\5"+
		"\4\3\289\5\6\4\29\3\3\2\2\2:?\5&\24\2;<\7\f\2\2<>\5&\24\2=;\3\2\2\2>A"+
		"\3\2\2\2?=\3\2\2\2?@\3\2\2\2@\5\3\2\2\2A?\3\2\2\2BH\7\5\2\2CG\5\16\b\2"+
		"DG\5\f\7\2EG\5\"\22\2FC\3\2\2\2FD\3\2\2\2FE\3\2\2\2GJ\3\2\2\2HF\3\2\2"+
		"\2HI\3\2\2\2IK\3\2\2\2JH\3\2\2\2KL\7\6\2\2L\7\3\2\2\2MT\7\5\2\2NS\5\20"+
		"\t\2OS\5\16\b\2PS\7\67\2\2QS\5\"\22\2RN\3\2\2\2RO\3\2\2\2RP\3\2\2\2RQ"+
		"\3\2\2\2SV\3\2\2\2TR\3\2\2\2TU\3\2\2\2UW\3\2\2\2VT\3\2\2\2WX\7\6\2\2X"+
		"\t\3\2\2\2YZ\t\2\2\2Z\13\3\2\2\2[\\\7\67\2\2\\\r\3\2\2\2]^\7\"\2\2^_\5"+
		"\64\33\2_`\5\b\5\2`\17\3\2\2\2ab\7!\2\2bg\5\n\6\2cd\7\16\2\2df\5\n\6\2"+
		"ec\3\2\2\2fi\3\2\2\2ge\3\2\2\2gh\3\2\2\2hm\3\2\2\2ig\3\2\2\2jk\7\r\2\2"+
		"kl\7#\2\2ln\5(\25\2mj\3\2\2\2mn\3\2\2\2no\3\2\2\2op\7\17\2\2p\21\3\2\2"+
		"\2qr\7\64\2\2r\23\3\2\2\2st\7\5\2\2tw\7\64\2\2uv\7\3\2\2vx\7\4\2\2wu\3"+
		"\2\2\2wx\3\2\2\2xy\3\2\2\2yz\7\6\2\2z\25\3\2\2\2{|\5(\25\2|\27\3\2\2\2"+
		"}\177\5\26\f\2~}\3\2\2\2~\177\3\2\2\2\177\u0084\3\2\2\2\u0080\u0081\7"+
		"\16\2\2\u0081\u0083\5\26\f\2\u0082\u0080\3\2\2\2\u0083\u0086\3\2\2\2\u0084"+
		"\u0082\3\2\2\2\u0084\u0085\3\2\2\2\u0085\31\3\2\2\2\u0086\u0084\3\2\2"+
		"\2\u0087\u0088\5(\25\2\u0088\33\3\2\2\2\u0089\u008b\5\32\16\2\u008a\u0089"+
		"\3\2\2\2\u008a\u008b\3\2\2\2\u008b\u0090\3\2\2\2\u008c\u008d\7\16\2\2"+
		"\u008d\u008f\5\32\16\2\u008e\u008c\3\2\2\2\u008f\u0092\3\2\2\2\u0090\u008e"+
		"\3\2\2\2\u0090\u0091\3\2\2\2\u0091\35\3\2\2\2\u0092\u0090\3\2\2\2\u0093"+
		"\u0094\7\64\2\2\u0094\37\3\2\2\2\u0095\u0097\5\36\20\2\u0096\u0095\3\2"+
		"\2\2\u0096\u0097\3\2\2\2\u0097\u009c\3\2\2\2\u0098\u0099\7\16\2\2\u0099"+
		"\u009b\5\36\20\2\u009a\u0098\3\2\2\2\u009b\u009e\3\2\2\2\u009c\u009a\3"+
		"\2\2\2\u009c\u009d\3\2\2\2\u009d!\3\2\2\2\u009e\u009c\3\2\2\2\u009f\u00a0"+
		"\7.\2\2\u00a0\u00a1\7\64\2\2\u00a1\u00a2\7\7\2\2\u00a2\u00a3\5 \21\2\u00a3"+
		"\u00a4\7\b\2\2\u00a4\u00a5\7\5\2\2\u00a5\u00a6\7/\2\2\u00a6\u00a7\5(\25"+
		"\2\u00a7\u00a8\7\17\2\2\u00a8\u00a9\7\6\2\2\u00a9#\3\2\2\2\u00aa\u00ab"+
		"\7\f\2\2\u00ab\u00b1\5&\24\2\u00ac\u00ad\7\n\2\2\u00ad\u00ae\5(\25\2\u00ae"+
		"\u00af\7\13\2\2\u00af\u00b1\3\2\2\2\u00b0\u00aa\3\2\2\2\u00b0\u00ac\3"+
		"\2\2\2\u00b1%\3\2\2\2\u00b2\u00b3\t\3\2\2\u00b3\'\3\2\2\2\u00b4\u00b5"+
		"\b\25\1\2\u00b5\u00cf\7\60\2\2\u00b6\u00b8\7\n\2\2\u00b7\u00b9\5(\25\2"+
		"\u00b8\u00b7\3\2\2\2\u00b8\u00b9\3\2\2\2\u00b9\u00be\3\2\2\2\u00ba\u00bb"+
		"\7\16\2\2\u00bb\u00bd\5(\25\2\u00bc\u00ba\3\2\2\2\u00bd\u00c0\3\2\2\2"+
		"\u00be\u00bc\3\2\2\2\u00be\u00bf\3\2\2\2\u00bf\u00c1\3\2\2\2\u00c0\u00be"+
		"\3\2\2\2\u00c1\u00cf\7\13\2\2\u00c2\u00c3\t\4\2\2\u00c3\u00cf\5(\25\n"+
		"\u00c4\u00cf\7\63\2\2\u00c5\u00cf\7\62\2\2\u00c6\u00cf\t\5\2\2\u00c7\u00cf"+
		"\7\64\2\2\u00c8\u00cf\5\60\31\2\u00c9\u00cf\5\62\32\2\u00ca\u00cb\7\7"+
		"\2\2\u00cb\u00cc\5(\25\2\u00cc\u00cd\7\b\2\2\u00cd\u00cf\3\2\2\2\u00ce"+
		"\u00b4\3\2\2\2\u00ce\u00b6\3\2\2\2\u00ce\u00c2\3\2\2\2\u00ce\u00c4\3\2"+
		"\2\2\u00ce\u00c5\3\2\2\2\u00ce\u00c6\3\2\2\2\u00ce\u00c7\3\2\2\2\u00ce"+
		"\u00c8\3\2\2\2\u00ce\u00c9\3\2\2\2\u00ce\u00ca\3\2\2\2\u00cf\u00f4\3\2"+
		"\2\2\u00d0\u00d1\f\23\2\2\u00d1\u00d2\t\6\2\2\u00d2\u00f3\5(\25\24\u00d3"+
		"\u00d4\f\22\2\2\u00d4\u00d5\t\7\2\2\u00d5\u00f3\5(\25\23\u00d6\u00d7\f"+
		"\21\2\2\u00d7\u00d8\t\b\2\2\u00d8\u00f3\5(\25\22\u00d9\u00da\f\20\2\2"+
		"\u00da\u00db\t\t\2\2\u00db\u00f3\5(\25\21\u00dc\u00dd\f\17\2\2\u00dd\u00de"+
		"\7 \2\2\u00de\u00f3\5(\25\20\u00df\u00e0\f\16\2\2\u00e0\u00e1\7\f\2\2"+
		"\u00e1\u00f3\5&\24\2\u00e2\u00e3\f\r\2\2\u00e3\u00e4\7\f\2\2\u00e4\u00e5"+
		"\5&\24\2\u00e5\u00e6\7\7\2\2\u00e6\u00e7\5\34\17\2\u00e7\u00e8\7\b\2\2"+
		"\u00e8\u00f3\3\2\2\2\u00e9\u00ea\f\f\2\2\u00ea\u00eb\7\n\2\2\u00eb\u00ee"+
		"\5(\25\2\u00ec\u00ed\7\r\2\2\u00ed\u00ef\5(\25\2\u00ee\u00ec\3\2\2\2\u00ee"+
		"\u00ef\3\2\2\2\u00ef\u00f0\3\2\2\2\u00f0\u00f1\7\13\2\2\u00f1\u00f3\3"+
		"\2\2\2\u00f2\u00d0\3\2\2\2\u00f2\u00d3\3\2\2\2\u00f2\u00d6\3\2\2\2\u00f2"+
		"\u00d9\3\2\2\2\u00f2\u00dc\3\2\2\2\u00f2\u00df\3\2\2\2\u00f2\u00e2\3\2"+
		"\2\2\u00f2\u00e9\3\2\2\2\u00f3\u00f6\3\2\2\2\u00f4\u00f2\3\2\2\2\u00f4"+
		"\u00f5\3\2\2\2\u00f5)\3\2\2\2\u00f6\u00f4\3\2\2\2\u00f7\u00f8\7\64\2\2"+
		"\u00f8+\3\2\2\2\u00f9\u00fa\7\t\2\2\u00fa\u00fb\5(\25\2\u00fb\u00fc\7"+
		"\b\2\2\u00fc-\3\2\2\2\u00fd\u0100\7\65\2\2\u00fe\u0101\5\22\n\2\u00ff"+
		"\u0101\5,\27\2\u0100\u00fe\3\2\2\2\u0100\u00ff\3\2\2\2\u0101\u0103\3\2"+
		"\2\2\u0102\u00fd\3\2\2\2\u0103\u0104\3\2\2\2\u0104\u0102\3\2\2\2\u0104"+
		"\u0105\3\2\2\2\u0105/\3\2\2\2\u0106\u0107\t\n\2\2\u0107\u0108\7\7\2\2"+
		"\u0108\u0109\5.\30\2\u0109\u010a\7\b\2\2\u010a\61\3\2\2\2\u010b\u010c"+
		"\7\64\2\2\u010c\u010d\7\7\2\2\u010d\u010e\5\30\r\2\u010e\u010f\7\b\2\2"+
		"\u010f\63\3\2\2\2\u0110\u0113\7\65\2\2\u0111\u0114\7\64\2\2\u0112\u0114"+
		"\5\24\13\2\u0113\u0111\3\2\2\2\u0113\u0112\3\2\2\2\u0114\u0116\3\2\2\2"+
		"\u0115\u0110\3\2\2\2\u0116\u0117\3\2\2\2\u0117\u0115\3\2\2\2\u0117\u0118"+
		"\3\2\2\2\u0118\65\3\2\2\2\33?FHRTgmw~\u0084\u008a\u0090\u0096\u009c\u00b0"+
		"\u00b8\u00be\u00ce\u00ee\u00f2\u00f4\u0100\u0104\u0113\u0117";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}