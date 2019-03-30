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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, Allow=26, Match=27, If=28, Get=29, True=30, False=31, List=32, 
		Create=33, Update=34, Read=35, Write=36, Delete=37, Function=38, LogicalAnd=39, 
		LogicalOr=40, LogicalNot=41, Return=42, Null=43, Service=44, ObjectReference=45, 
		Number=46, String=47, Identifier=48, Slash=49, WS=50, Comment=51;
	public static final int
		RULE_service = 0, RULE_namespace = 1, RULE_namespaceBlock = 2, RULE_matchBlock = 3, 
		RULE_allowKey = 4, RULE_matcher = 5, RULE_allow = 6, RULE_pathVariableReplace = 7, 
		RULE_pathVariable = 8, RULE_arguments = 9, RULE_function = 10, RULE_expression = 11, 
		RULE_parenthesisExpression = 12, RULE_numberValue = 13, RULE_stringValue = 14, 
		RULE_nullValue = 15, RULE_objectRef = 16, RULE_identifierRef = 17, RULE_compareOperator = 18, 
		RULE_logicalOperator = 19, RULE_binaryOperator = 20, RULE_arithmeticOperator = 21, 
		RULE_unaryOperator = 22, RULE_get = 23, RULE_functionCall = 24, RULE_booleanValue = 25, 
		RULE_getPath = 26, RULE_matchPath = 27;
	public static final String[] ruleNames = {
		"service", "namespace", "namespaceBlock", "matchBlock", "allowKey", "matcher", 
		"allow", "pathVariableReplace", "pathVariable", "arguments", "function", 
		"expression", "parenthesisExpression", "numberValue", "stringValue", "nullValue", 
		"objectRef", "identifierRef", "compareOperator", "logicalOperator", "binaryOperator", 
		"arithmeticOperator", "unaryOperator", "get", "functionCall", "booleanValue", 
		"getPath", "matchPath"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'{'", "'}'", "','", "':'", "';'", "'$('", "')'", "'='", "'**'", 
		"'('", "'<'", "'<='", "'=='", "'!='", "'>'", "'>='", "'&'", "'|'", "'%'", 
		"'+'", "'-'", "'*'", "'.'", "'['", "']'", "'allow'", "'match'", "'if'", 
		"'get'", "'true'", "'false'", "'list'", "'create'", "'update'", "'read'", 
		"'write'", "'delete'", "'function'", "'&&'", "'||'", "'!'", "'return'", 
		"'null'", "'service'", null, null, null, null, "'/'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, "Allow", "Match", "If", "Get", "True", "False", "List", "Create", 
		"Update", "Read", "Write", "Delete", "Function", "LogicalAnd", "LogicalOr", 
		"LogicalNot", "Return", "Null", "Service", "ObjectReference", "Number", 
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
			setState(56);
			match(Service);
			setState(57);
			namespace();
			setState(58);
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
		public TerminalNode Identifier() { return getToken(FirebaseRulesParser.Identifier, 0); }
		public TerminalNode ObjectReference() { return getToken(FirebaseRulesParser.ObjectReference, 0); }
		public NamespaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namespace; }
	}

	public final NamespaceContext namespace() throws RecognitionException {
		NamespaceContext _localctx = new NamespaceContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_namespace);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			_la = _input.LA(1);
			if ( !(_la==ObjectReference || _la==Identifier) ) {
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

	public static class NamespaceBlockContext extends ParserRuleContext {
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
		public List<FunctionContext> function() {
			return getRuleContexts(FunctionContext.class);
		}
		public FunctionContext function(int i) {
			return getRuleContext(FunctionContext.class,i);
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
			setState(62);
			match(T__0);
			setState(68);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Match) | (1L << Function) | (1L << Comment))) != 0)) {
				{
				setState(66);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
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
					function();
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
			match(T__1);
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
		public List<FunctionContext> function() {
			return getRuleContexts(FunctionContext.class);
		}
		public FunctionContext function(int i) {
			return getRuleContext(FunctionContext.class,i);
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
			setState(73);
			match(T__0);
			setState(80);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Allow) | (1L << Match) | (1L << Function) | (1L << Comment))) != 0)) {
				{
				setState(78);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Allow:
					{
					setState(74);
					allow();
					}
					break;
				case Match:
					{
					setState(75);
					matcher();
					}
					break;
				case Comment:
					{
					setState(76);
					match(Comment);
					}
					break;
				case Function:
					{
					setState(77);
					function();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(82);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(83);
			match(T__1);
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
			setState(85);
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
		enterRule(_localctx, 10, RULE_matcher);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(87);
			match(Match);
			setState(88);
			matchPath();
			setState(89);
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
		enterRule(_localctx, 12, RULE_allow);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			match(Allow);
			setState(92);
			allowKey();
			setState(97);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__2) {
				{
				{
				setState(93);
				match(T__2);
				setState(94);
				allowKey();
				}
				}
				setState(99);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(103);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__3) {
				{
				setState(100);
				match(T__3);
				setState(101);
				match(If);
				setState(102);
				expression(0);
				}
			}

			setState(105);
			match(T__4);
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
		public TerminalNode ObjectReference() { return getToken(FirebaseRulesParser.ObjectReference, 0); }
		public PathVariableReplaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pathVariableReplace; }
	}

	public final PathVariableReplaceContext pathVariableReplace() throws RecognitionException {
		PathVariableReplaceContext _localctx = new PathVariableReplaceContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_pathVariableReplace);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			match(T__5);
			setState(108);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ObjectReference) | (1L << Number) | (1L << String) | (1L << Identifier))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(109);
			match(T__6);
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
		public TerminalNode Identifier() { return getToken(FirebaseRulesParser.Identifier, 0); }
		public PathVariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pathVariable; }
	}

	public final PathVariableContext pathVariable() throws RecognitionException {
		PathVariableContext _localctx = new PathVariableContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_pathVariable);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(111);
			match(T__0);
			setState(112);
			match(Identifier);
			setState(115);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__7) {
				{
				setState(113);
				match(T__7);
				setState(114);
				match(T__8);
				}
			}

			setState(117);
			match(T__1);
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
		public List<TerminalNode> Identifier() { return getTokens(FirebaseRulesParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(FirebaseRulesParser.Identifier, i);
		}
		public ArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arguments; }
	}

	public final ArgumentsContext arguments() throws RecognitionException {
		ArgumentsContext _localctx = new ArgumentsContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier) {
				{
				setState(119);
				match(Identifier);
				}
			}

			setState(126);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__2) {
				{
				{
				setState(122);
				match(T__2);
				setState(123);
				match(Identifier);
				}
				}
				setState(128);
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

	public static class FunctionContext extends ParserRuleContext {
		public TerminalNode Function() { return getToken(FirebaseRulesParser.Function, 0); }
		public TerminalNode Identifier() { return getToken(FirebaseRulesParser.Identifier, 0); }
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public TerminalNode Return() { return getToken(FirebaseRulesParser.Return, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public FunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function; }
	}

	public final FunctionContext function() throws RecognitionException {
		FunctionContext _localctx = new FunctionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_function);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(129);
			match(Function);
			setState(130);
			match(Identifier);
			setState(131);
			match(T__9);
			setState(132);
			arguments();
			setState(133);
			match(T__6);
			setState(134);
			match(T__0);
			setState(135);
			match(Return);
			setState(136);
			expression(0);
			setState(137);
			match(T__4);
			setState(138);
			match(T__1);
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
		public NullValueContext nullValue() {
			return getRuleContext(NullValueContext.class,0);
		}
		public UnaryOperatorContext unaryOperator() {
			return getRuleContext(UnaryOperatorContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public StringValueContext stringValue() {
			return getRuleContext(StringValueContext.class,0);
		}
		public NumberValueContext numberValue() {
			return getRuleContext(NumberValueContext.class,0);
		}
		public BooleanValueContext booleanValue() {
			return getRuleContext(BooleanValueContext.class,0);
		}
		public ObjectRefContext objectRef() {
			return getRuleContext(ObjectRefContext.class,0);
		}
		public GetContext get() {
			return getRuleContext(GetContext.class,0);
		}
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public IdentifierRefContext identifierRef() {
			return getRuleContext(IdentifierRefContext.class,0);
		}
		public ParenthesisExpressionContext parenthesisExpression() {
			return getRuleContext(ParenthesisExpressionContext.class,0);
		}
		public CompareOperatorContext compareOperator() {
			return getRuleContext(CompareOperatorContext.class,0);
		}
		public LogicalOperatorContext logicalOperator() {
			return getRuleContext(LogicalOperatorContext.class,0);
		}
		public BinaryOperatorContext binaryOperator() {
			return getRuleContext(BinaryOperatorContext.class,0);
		}
		public ArithmeticOperatorContext arithmeticOperator() {
			return getRuleContext(ArithmeticOperatorContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 22;
		enterRecursionRule(_localctx, 22, RULE_expression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(153);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				{
				setState(141);
				nullValue();
				}
				break;
			case 2:
				{
				setState(142);
				unaryOperator();
				setState(143);
				expression(9);
				}
				break;
			case 3:
				{
				setState(145);
				stringValue();
				}
				break;
			case 4:
				{
				setState(146);
				numberValue();
				}
				break;
			case 5:
				{
				setState(147);
				booleanValue();
				}
				break;
			case 6:
				{
				setState(148);
				objectRef();
				}
				break;
			case 7:
				{
				setState(149);
				get();
				}
				break;
			case 8:
				{
				setState(150);
				functionCall();
				}
				break;
			case 9:
				{
				setState(151);
				identifierRef();
				}
				break;
			case 10:
				{
				setState(152);
				parenthesisExpression();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(173);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(171);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(155);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(156);
						compareOperator();
						setState(157);
						expression(14);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(159);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(160);
						logicalOperator();
						setState(161);
						expression(13);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(163);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(164);
						binaryOperator();
						setState(165);
						expression(12);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(167);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(168);
						arithmeticOperator();
						setState(169);
						expression(11);
						}
						break;
					}
					} 
				}
				setState(175);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
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

	public static class ParenthesisExpressionContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ParenthesisExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parenthesisExpression; }
	}

	public final ParenthesisExpressionContext parenthesisExpression() throws RecognitionException {
		ParenthesisExpressionContext _localctx = new ParenthesisExpressionContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_parenthesisExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			match(T__9);
			setState(177);
			expression(0);
			setState(178);
			match(T__6);
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

	public static class NumberValueContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(FirebaseRulesParser.Number, 0); }
		public NumberValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numberValue; }
	}

	public final NumberValueContext numberValue() throws RecognitionException {
		NumberValueContext _localctx = new NumberValueContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_numberValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(180);
			match(Number);
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

	public static class StringValueContext extends ParserRuleContext {
		public TerminalNode String() { return getToken(FirebaseRulesParser.String, 0); }
		public StringValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringValue; }
	}

	public final StringValueContext stringValue() throws RecognitionException {
		StringValueContext _localctx = new StringValueContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_stringValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(182);
			match(String);
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

	public static class NullValueContext extends ParserRuleContext {
		public TerminalNode Null() { return getToken(FirebaseRulesParser.Null, 0); }
		public NullValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nullValue; }
	}

	public final NullValueContext nullValue() throws RecognitionException {
		NullValueContext _localctx = new NullValueContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_nullValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			match(Null);
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

	public static class ObjectRefContext extends ParserRuleContext {
		public TerminalNode ObjectReference() { return getToken(FirebaseRulesParser.ObjectReference, 0); }
		public ObjectRefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectRef; }
	}

	public final ObjectRefContext objectRef() throws RecognitionException {
		ObjectRefContext _localctx = new ObjectRefContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_objectRef);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(186);
			match(ObjectReference);
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

	public static class IdentifierRefContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(FirebaseRulesParser.Identifier, 0); }
		public IdentifierRefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierRef; }
	}

	public final IdentifierRefContext identifierRef() throws RecognitionException {
		IdentifierRefContext _localctx = new IdentifierRefContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_identifierRef);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(188);
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

	public static class CompareOperatorContext extends ParserRuleContext {
		public CompareOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compareOperator; }
	}

	public final CompareOperatorContext compareOperator() throws RecognitionException {
		CompareOperatorContext _localctx = new CompareOperatorContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_compareOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__10) | (1L << T__11) | (1L << T__12) | (1L << T__13) | (1L << T__14) | (1L << T__15))) != 0)) ) {
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

	public static class LogicalOperatorContext extends ParserRuleContext {
		public LogicalOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logicalOperator; }
	}

	public final LogicalOperatorContext logicalOperator() throws RecognitionException {
		LogicalOperatorContext _localctx = new LogicalOperatorContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_logicalOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			_la = _input.LA(1);
			if ( !(_la==LogicalAnd || _la==LogicalOr) ) {
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

	public static class BinaryOperatorContext extends ParserRuleContext {
		public BinaryOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_binaryOperator; }
	}

	public final BinaryOperatorContext binaryOperator() throws RecognitionException {
		BinaryOperatorContext _localctx = new BinaryOperatorContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_binaryOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__16) | (1L << T__17) | (1L << T__18))) != 0)) ) {
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

	public static class ArithmeticOperatorContext extends ParserRuleContext {
		public ArithmeticOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arithmeticOperator; }
	}

	public final ArithmeticOperatorContext arithmeticOperator() throws RecognitionException {
		ArithmeticOperatorContext _localctx = new ArithmeticOperatorContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_arithmeticOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(196);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__19) | (1L << T__20) | (1L << T__21) | (1L << Slash))) != 0)) ) {
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

	public static class UnaryOperatorContext extends ParserRuleContext {
		public TerminalNode LogicalNot() { return getToken(FirebaseRulesParser.LogicalNot, 0); }
		public UnaryOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unaryOperator; }
	}

	public final UnaryOperatorContext unaryOperator() throws RecognitionException {
		UnaryOperatorContext _localctx = new UnaryOperatorContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_unaryOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(198);
			_la = _input.LA(1);
			if ( !(_la==T__20 || _la==LogicalNot) ) {
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

	public static class GetContext extends ParserRuleContext {
		public TerminalNode Get() { return getToken(FirebaseRulesParser.Get, 0); }
		public GetPathContext getPath() {
			return getRuleContext(GetPathContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(FirebaseRulesParser.Identifier, 0); }
		public List<TerminalNode> ObjectReference() { return getTokens(FirebaseRulesParser.ObjectReference); }
		public TerminalNode ObjectReference(int i) {
			return getToken(FirebaseRulesParser.ObjectReference, i);
		}
		public TerminalNode String() { return getToken(FirebaseRulesParser.String, 0); }
		public TerminalNode Number() { return getToken(FirebaseRulesParser.Number, 0); }
		public GetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_get; }
	}

	public final GetContext get() throws RecognitionException {
		GetContext _localctx = new GetContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_get);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(200);
			match(Get);
			setState(201);
			match(T__9);
			setState(202);
			getPath();
			setState(203);
			match(T__6);
			setState(204);
			match(T__22);
			{
			setState(205);
			_la = _input.LA(1);
			if ( !(_la==ObjectReference || _la==Identifier) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(209);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				{
				setState(206);
				match(T__23);
				setState(207);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ObjectReference) | (1L << Number) | (1L << String))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(208);
				match(T__24);
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
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
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
			setState(211);
			match(Identifier);
			setState(212);
			match(T__9);
			setState(213);
			arguments();
			setState(214);
			match(T__6);
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

	public static class BooleanValueContext extends ParserRuleContext {
		public TerminalNode True() { return getToken(FirebaseRulesParser.True, 0); }
		public TerminalNode False() { return getToken(FirebaseRulesParser.False, 0); }
		public BooleanValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_booleanValue; }
	}

	public final BooleanValueContext booleanValue() throws RecognitionException {
		BooleanValueContext _localctx = new BooleanValueContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_booleanValue);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(216);
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
		enterRule(_localctx, 52, RULE_getPath);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(223); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(218);
				match(Slash);
				setState(221);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Identifier:
					{
					setState(219);
					match(Identifier);
					}
					break;
				case T__5:
					{
					setState(220);
					pathVariableReplace();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				setState(225); 
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
		enterRule(_localctx, 54, RULE_matchPath);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(232); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(227);
				match(Slash);
				setState(230);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Identifier:
					{
					setState(228);
					match(Identifier);
					}
					break;
				case T__0:
					{
					setState(229);
					pathVariable();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				setState(234); 
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
		case 11:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 13);
		case 1:
			return precpred(_ctx, 12);
		case 2:
			return precpred(_ctx, 11);
		case 3:
			return precpred(_ctx, 10);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\65\u00ef\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\3\2\3\2\3\2\3\2\3\3\3\3\3\4\3"+
		"\4\3\4\3\4\7\4E\n\4\f\4\16\4H\13\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\7\5Q\n"+
		"\5\f\5\16\5T\13\5\3\5\3\5\3\6\3\6\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\7\b"+
		"b\n\b\f\b\16\be\13\b\3\b\3\b\3\b\5\bj\n\b\3\b\3\b\3\t\3\t\3\t\3\t\3\n"+
		"\3\n\3\n\3\n\5\nv\n\n\3\n\3\n\3\13\5\13{\n\13\3\13\3\13\7\13\177\n\13"+
		"\f\13\16\13\u0082\13\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3"+
		"\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\5\r\u009c\n\r\3\r\3"+
		"\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\7\r\u00ae\n"+
		"\r\f\r\16\r\u00b1\13\r\3\16\3\16\3\16\3\16\3\17\3\17\3\20\3\20\3\21\3"+
		"\21\3\22\3\22\3\23\3\23\3\24\3\24\3\25\3\25\3\26\3\26\3\27\3\27\3\30\3"+
		"\30\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\5\31\u00d4\n\31\3\32"+
		"\3\32\3\32\3\32\3\32\3\33\3\33\3\34\3\34\3\34\5\34\u00e0\n\34\6\34\u00e2"+
		"\n\34\r\34\16\34\u00e3\3\35\3\35\3\35\5\35\u00e9\n\35\6\35\u00eb\n\35"+
		"\r\35\16\35\u00ec\3\35\2\3\30\36\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36"+
		" \"$&(*,.\60\62\64\668\2\f\4\2//\62\62\4\2\37\37\"\'\3\2/\62\3\2\r\22"+
		"\3\2)*\3\2\23\25\4\2\26\30\63\63\4\2\27\27++\3\2/\61\3\2 !\2\u00f0\2:"+
		"\3\2\2\2\4>\3\2\2\2\6@\3\2\2\2\bK\3\2\2\2\nW\3\2\2\2\fY\3\2\2\2\16]\3"+
		"\2\2\2\20m\3\2\2\2\22q\3\2\2\2\24z\3\2\2\2\26\u0083\3\2\2\2\30\u009b\3"+
		"\2\2\2\32\u00b2\3\2\2\2\34\u00b6\3\2\2\2\36\u00b8\3\2\2\2 \u00ba\3\2\2"+
		"\2\"\u00bc\3\2\2\2$\u00be\3\2\2\2&\u00c0\3\2\2\2(\u00c2\3\2\2\2*\u00c4"+
		"\3\2\2\2,\u00c6\3\2\2\2.\u00c8\3\2\2\2\60\u00ca\3\2\2\2\62\u00d5\3\2\2"+
		"\2\64\u00da\3\2\2\2\66\u00e1\3\2\2\28\u00ea\3\2\2\2:;\7.\2\2;<\5\4\3\2"+
		"<=\5\6\4\2=\3\3\2\2\2>?\t\2\2\2?\5\3\2\2\2@F\7\3\2\2AE\5\f\7\2BE\7\65"+
		"\2\2CE\5\26\f\2DA\3\2\2\2DB\3\2\2\2DC\3\2\2\2EH\3\2\2\2FD\3\2\2\2FG\3"+
		"\2\2\2GI\3\2\2\2HF\3\2\2\2IJ\7\4\2\2J\7\3\2\2\2KR\7\3\2\2LQ\5\16\b\2M"+
		"Q\5\f\7\2NQ\7\65\2\2OQ\5\26\f\2PL\3\2\2\2PM\3\2\2\2PN\3\2\2\2PO\3\2\2"+
		"\2QT\3\2\2\2RP\3\2\2\2RS\3\2\2\2SU\3\2\2\2TR\3\2\2\2UV\7\4\2\2V\t\3\2"+
		"\2\2WX\t\3\2\2X\13\3\2\2\2YZ\7\35\2\2Z[\58\35\2[\\\5\b\5\2\\\r\3\2\2\2"+
		"]^\7\34\2\2^c\5\n\6\2_`\7\5\2\2`b\5\n\6\2a_\3\2\2\2be\3\2\2\2ca\3\2\2"+
		"\2cd\3\2\2\2di\3\2\2\2ec\3\2\2\2fg\7\6\2\2gh\7\36\2\2hj\5\30\r\2if\3\2"+
		"\2\2ij\3\2\2\2jk\3\2\2\2kl\7\7\2\2l\17\3\2\2\2mn\7\b\2\2no\t\4\2\2op\7"+
		"\t\2\2p\21\3\2\2\2qr\7\3\2\2ru\7\62\2\2st\7\n\2\2tv\7\13\2\2us\3\2\2\2"+
		"uv\3\2\2\2vw\3\2\2\2wx\7\4\2\2x\23\3\2\2\2y{\7\62\2\2zy\3\2\2\2z{\3\2"+
		"\2\2{\u0080\3\2\2\2|}\7\5\2\2}\177\7\62\2\2~|\3\2\2\2\177\u0082\3\2\2"+
		"\2\u0080~\3\2\2\2\u0080\u0081\3\2\2\2\u0081\25\3\2\2\2\u0082\u0080\3\2"+
		"\2\2\u0083\u0084\7(\2\2\u0084\u0085\7\62\2\2\u0085\u0086\7\f\2\2\u0086"+
		"\u0087\5\24\13\2\u0087\u0088\7\t\2\2\u0088\u0089\7\3\2\2\u0089\u008a\7"+
		",\2\2\u008a\u008b\5\30\r\2\u008b\u008c\7\7\2\2\u008c\u008d\7\4\2\2\u008d"+
		"\27\3\2\2\2\u008e\u008f\b\r\1\2\u008f\u009c\5 \21\2\u0090\u0091\5.\30"+
		"\2\u0091\u0092\5\30\r\13\u0092\u009c\3\2\2\2\u0093\u009c\5\36\20\2\u0094"+
		"\u009c\5\34\17\2\u0095\u009c\5\64\33\2\u0096\u009c\5\"\22\2\u0097\u009c"+
		"\5\60\31\2\u0098\u009c\5\62\32\2\u0099\u009c\5$\23\2\u009a\u009c\5\32"+
		"\16\2\u009b\u008e\3\2\2\2\u009b\u0090\3\2\2\2\u009b\u0093\3\2\2\2\u009b"+
		"\u0094\3\2\2\2\u009b\u0095\3\2\2\2\u009b\u0096\3\2\2\2\u009b\u0097\3\2"+
		"\2\2\u009b\u0098\3\2\2\2\u009b\u0099\3\2\2\2\u009b\u009a\3\2\2\2\u009c"+
		"\u00af\3\2\2\2\u009d\u009e\f\17\2\2\u009e\u009f\5&\24\2\u009f\u00a0\5"+
		"\30\r\20\u00a0\u00ae\3\2\2\2\u00a1\u00a2\f\16\2\2\u00a2\u00a3\5(\25\2"+
		"\u00a3\u00a4\5\30\r\17\u00a4\u00ae\3\2\2\2\u00a5\u00a6\f\r\2\2\u00a6\u00a7"+
		"\5*\26\2\u00a7\u00a8\5\30\r\16\u00a8\u00ae\3\2\2\2\u00a9\u00aa\f\f\2\2"+
		"\u00aa\u00ab\5,\27\2\u00ab\u00ac\5\30\r\r\u00ac\u00ae\3\2\2\2\u00ad\u009d"+
		"\3\2\2\2\u00ad\u00a1\3\2\2\2\u00ad\u00a5\3\2\2\2\u00ad\u00a9\3\2\2\2\u00ae"+
		"\u00b1\3\2\2\2\u00af\u00ad\3\2\2\2\u00af\u00b0\3\2\2\2\u00b0\31\3\2\2"+
		"\2\u00b1\u00af\3\2\2\2\u00b2\u00b3\7\f\2\2\u00b3\u00b4\5\30\r\2\u00b4"+
		"\u00b5\7\t\2\2\u00b5\33\3\2\2\2\u00b6\u00b7\7\60\2\2\u00b7\35\3\2\2\2"+
		"\u00b8\u00b9\7\61\2\2\u00b9\37\3\2\2\2\u00ba\u00bb\7-\2\2\u00bb!\3\2\2"+
		"\2\u00bc\u00bd\7/\2\2\u00bd#\3\2\2\2\u00be\u00bf\7\62\2\2\u00bf%\3\2\2"+
		"\2\u00c0\u00c1\t\5\2\2\u00c1\'\3\2\2\2\u00c2\u00c3\t\6\2\2\u00c3)\3\2"+
		"\2\2\u00c4\u00c5\t\7\2\2\u00c5+\3\2\2\2\u00c6\u00c7\t\b\2\2\u00c7-\3\2"+
		"\2\2\u00c8\u00c9\t\t\2\2\u00c9/\3\2\2\2\u00ca\u00cb\7\37\2\2\u00cb\u00cc"+
		"\7\f\2\2\u00cc\u00cd\5\66\34\2\u00cd\u00ce\7\t\2\2\u00ce\u00cf\7\31\2"+
		"\2\u00cf\u00d3\t\2\2\2\u00d0\u00d1\7\32\2\2\u00d1\u00d2\t\n\2\2\u00d2"+
		"\u00d4\7\33\2\2\u00d3\u00d0\3\2\2\2\u00d3\u00d4\3\2\2\2\u00d4\61\3\2\2"+
		"\2\u00d5\u00d6\7\62\2\2\u00d6\u00d7\7\f\2\2\u00d7\u00d8\5\24\13\2\u00d8"+
		"\u00d9\7\t\2\2\u00d9\63\3\2\2\2\u00da\u00db\t\13\2\2\u00db\65\3\2\2\2"+
		"\u00dc\u00df\7\63\2\2\u00dd\u00e0\7\62\2\2\u00de\u00e0\5\20\t\2\u00df"+
		"\u00dd\3\2\2\2\u00df\u00de\3\2\2\2\u00e0\u00e2\3\2\2\2\u00e1\u00dc\3\2"+
		"\2\2\u00e2\u00e3\3\2\2\2\u00e3\u00e1\3\2\2\2\u00e3\u00e4\3\2\2\2\u00e4"+
		"\67\3\2\2\2\u00e5\u00e8\7\63\2\2\u00e6\u00e9\7\62\2\2\u00e7\u00e9\5\22"+
		"\n\2\u00e8\u00e6\3\2\2\2\u00e8\u00e7\3\2\2\2\u00e9\u00eb\3\2\2\2\u00ea"+
		"\u00e5\3\2\2\2\u00eb\u00ec\3\2\2\2\u00ec\u00ea\3\2\2\2\u00ec\u00ed\3\2"+
		"\2\2\u00ed9\3\2\2\2\23DFPRciuz\u0080\u009b\u00ad\u00af\u00d3\u00df\u00e3"+
		"\u00e8\u00ec";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}