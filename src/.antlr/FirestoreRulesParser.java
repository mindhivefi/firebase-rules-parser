// Generated from /Users/villevenalainen/react_src/firebase-rules-parser/src/FirestoreRules.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class FirestoreRulesParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, Match=23, If=24, True=25, 
		False=26, List=27, Get=28, Create=29, Update=30, Read=31, Write=32, Delete=33, 
		Return=34, Null=35, ObjectReference=36, Number=37, String=38, Identifier=39, 
		Slash=40, WS=41, Comment=42;
	public static final int
		RULE_service = 0, RULE_namespace = 1, RULE_namespaceBlock = 2, RULE_matchBlock = 3, 
		RULE_allowKey = 4, RULE_matcher = 5, RULE_allow = 6, RULE_pathVariableReplace = 7, 
		RULE_pathVariable = 8, RULE_arguments = 9, RULE_function = 10, RULE_expression = 11, 
		RULE_compareOperator = 12, RULE_get = 13, RULE_functionCall = 14, RULE_booleanValue = 15, 
		RULE_getPath = 16, RULE_matchPath = 17;
	public static final String[] ruleNames = {
		"service", "namespace", "namespaceBlock", "matchBlock", "allowKey", "matcher", 
		"allow", "pathVariableReplace", "pathVariable", "arguments", "function", 
		"expression", "compareOperator", "get", "functionCall", "booleanValue", 
		"getPath", "matchPath"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'service'", "'{'", "'}'", "'allow'", "','", "':'", "';'", "'$('", 
		"')'", "'='", "'**'", "'function'", "'('", "'<'", "'=='", "'>'", "'!='", 
		"'&&'", "'||'", "'.'", "'['", "']'", "'match'", "'if'", "'true'", "'false'", 
		"'list'", "'get'", "'create'", "'update'", "'read'", "'write'", "'delete'", 
		"'return'", "'null'", null, null, null, null, "'/'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, "Match", 
		"If", "True", "False", "List", "Get", "Create", "Update", "Read", "Write", 
		"Delete", "Return", "Null", "ObjectReference", "Number", "String", "Identifier", 
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
	public String getGrammarFileName() { return "FirestoreRules.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public FirestoreRulesParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ServiceContext extends ParserRuleContext {
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
			setState(36);
			match(T__0);
			setState(37);
			namespace();
			setState(38);
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
		public TerminalNode Identifier() { return getToken(FirestoreRulesParser.Identifier, 0); }
		public TerminalNode ObjectReference() { return getToken(FirestoreRulesParser.ObjectReference, 0); }
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
			setState(40);
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
		public List<TerminalNode> Comment() { return getTokens(FirestoreRulesParser.Comment); }
		public TerminalNode Comment(int i) {
			return getToken(FirestoreRulesParser.Comment, i);
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
			setState(42);
			match(T__1);
			setState(48);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << Match) | (1L << Comment))) != 0)) {
				{
				setState(46);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Match:
					{
					setState(43);
					matcher();
					}
					break;
				case Comment:
					{
					setState(44);
					match(Comment);
					}
					break;
				case T__11:
					{
					setState(45);
					function();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(50);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(51);
			match(T__2);
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
		public List<TerminalNode> Comment() { return getTokens(FirestoreRulesParser.Comment); }
		public TerminalNode Comment(int i) {
			return getToken(FirestoreRulesParser.Comment, i);
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
			setState(53);
			match(T__1);
			setState(60);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__3) | (1L << T__11) | (1L << Match) | (1L << Comment))) != 0)) {
				{
				setState(58);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__3:
					{
					setState(54);
					allow();
					}
					break;
				case Match:
					{
					setState(55);
					matcher();
					}
					break;
				case Comment:
					{
					setState(56);
					match(Comment);
					}
					break;
				case T__11:
					{
					setState(57);
					function();
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
			match(T__2);
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
		public TerminalNode Read() { return getToken(FirestoreRulesParser.Read, 0); }
		public TerminalNode Write() { return getToken(FirestoreRulesParser.Write, 0); }
		public TerminalNode Update() { return getToken(FirestoreRulesParser.Update, 0); }
		public TerminalNode Delete() { return getToken(FirestoreRulesParser.Delete, 0); }
		public TerminalNode Create() { return getToken(FirestoreRulesParser.Create, 0); }
		public TerminalNode List() { return getToken(FirestoreRulesParser.List, 0); }
		public TerminalNode Get() { return getToken(FirestoreRulesParser.Get, 0); }
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
			setState(65);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << List) | (1L << Get) | (1L << Create) | (1L << Update) | (1L << Read) | (1L << Write) | (1L << Delete))) != 0)) ) {
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
			setState(67);
			match(Match);
			setState(68);
			matchPath();
			setState(69);
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
		public List<AllowKeyContext> allowKey() {
			return getRuleContexts(AllowKeyContext.class);
		}
		public AllowKeyContext allowKey(int i) {
			return getRuleContext(AllowKeyContext.class,i);
		}
		public TerminalNode If() { return getToken(FirestoreRulesParser.If, 0); }
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
			setState(71);
			match(T__3);
			setState(72);
			allowKey();
			setState(77);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(73);
				match(T__4);
				setState(74);
				allowKey();
				}
				}
				setState(79);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(83);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__5) {
				{
				setState(80);
				match(T__5);
				setState(81);
				match(If);
				setState(82);
				expression(0);
				}
			}

			setState(85);
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

	public static class PathVariableReplaceContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(FirestoreRulesParser.Identifier, 0); }
		public TerminalNode String() { return getToken(FirestoreRulesParser.String, 0); }
		public TerminalNode Number() { return getToken(FirestoreRulesParser.Number, 0); }
		public TerminalNode ObjectReference() { return getToken(FirestoreRulesParser.ObjectReference, 0); }
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
			setState(87);
			match(T__7);
			setState(88);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ObjectReference) | (1L << Number) | (1L << String) | (1L << Identifier))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(89);
			match(T__8);
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
		public TerminalNode Identifier() { return getToken(FirestoreRulesParser.Identifier, 0); }
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
			setState(91);
			match(T__1);
			setState(92);
			match(Identifier);
			setState(95);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__9) {
				{
				setState(93);
				match(T__9);
				setState(94);
				match(T__10);
				}
			}

			setState(97);
			match(T__2);
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
		public List<TerminalNode> Identifier() { return getTokens(FirestoreRulesParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(FirestoreRulesParser.Identifier, i);
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
			setState(100);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier) {
				{
				setState(99);
				match(Identifier);
				}
			}

			setState(106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(102);
				match(T__4);
				setState(103);
				match(Identifier);
				}
				}
				setState(108);
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
		public TerminalNode Identifier() { return getToken(FirestoreRulesParser.Identifier, 0); }
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public TerminalNode Return() { return getToken(FirestoreRulesParser.Return, 0); }
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
			setState(109);
			match(T__11);
			setState(110);
			match(Identifier);
			setState(111);
			match(T__12);
			setState(112);
			arguments();
			setState(113);
			match(T__8);
			setState(114);
			match(T__1);
			setState(115);
			match(Return);
			setState(116);
			expression(0);
			setState(117);
			match(T__6);
			setState(118);
			match(T__2);
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
		public TerminalNode Null() { return getToken(FirestoreRulesParser.Null, 0); }
		public TerminalNode String() { return getToken(FirestoreRulesParser.String, 0); }
		public TerminalNode Number() { return getToken(FirestoreRulesParser.Number, 0); }
		public BooleanValueContext booleanValue() {
			return getRuleContext(BooleanValueContext.class,0);
		}
		public TerminalNode ObjectReference() { return getToken(FirestoreRulesParser.ObjectReference, 0); }
		public GetContext get() {
			return getRuleContext(GetContext.class,0);
		}
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(FirestoreRulesParser.Identifier, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public CompareOperatorContext compareOperator() {
			return getRuleContext(CompareOperatorContext.class,0);
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
			setState(133);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				{
				setState(121);
				match(Null);
				}
				break;
			case 2:
				{
				setState(122);
				match(String);
				}
				break;
			case 3:
				{
				setState(123);
				match(Number);
				}
				break;
			case 4:
				{
				setState(124);
				booleanValue();
				}
				break;
			case 5:
				{
				setState(125);
				match(ObjectReference);
				}
				break;
			case 6:
				{
				setState(126);
				get();
				}
				break;
			case 7:
				{
				setState(127);
				functionCall();
				}
				break;
			case 8:
				{
				setState(128);
				match(Identifier);
				}
				break;
			case 9:
				{
				setState(129);
				match(T__12);
				setState(130);
				expression(0);
				setState(131);
				match(T__8);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(141);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ExpressionContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_expression);
					setState(135);
					if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
					setState(136);
					compareOperator();
					setState(137);
					expression(10);
					}
					} 
				}
				setState(143);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
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

	public static class CompareOperatorContext extends ParserRuleContext {
		public CompareOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compareOperator; }
	}

	public final CompareOperatorContext compareOperator() throws RecognitionException {
		CompareOperatorContext _localctx = new CompareOperatorContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_compareOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(144);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__13) | (1L << T__14) | (1L << T__15) | (1L << T__16) | (1L << T__17) | (1L << T__18))) != 0)) ) {
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
		public GetPathContext getPath() {
			return getRuleContext(GetPathContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(FirestoreRulesParser.Identifier, 0); }
		public List<TerminalNode> ObjectReference() { return getTokens(FirestoreRulesParser.ObjectReference); }
		public TerminalNode ObjectReference(int i) {
			return getToken(FirestoreRulesParser.ObjectReference, i);
		}
		public TerminalNode String() { return getToken(FirestoreRulesParser.String, 0); }
		public TerminalNode Number() { return getToken(FirestoreRulesParser.Number, 0); }
		public GetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_get; }
	}

	public final GetContext get() throws RecognitionException {
		GetContext _localctx = new GetContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_get);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(146);
			match(Get);
			setState(147);
			match(T__12);
			setState(148);
			getPath();
			setState(149);
			match(T__8);
			setState(150);
			match(T__19);
			{
			setState(151);
			_la = _input.LA(1);
			if ( !(_la==ObjectReference || _la==Identifier) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(155);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				{
				setState(152);
				match(T__20);
				setState(153);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ObjectReference) | (1L << Number) | (1L << String))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(154);
				match(T__21);
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
		public TerminalNode Identifier() { return getToken(FirestoreRulesParser.Identifier, 0); }
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
		enterRule(_localctx, 28, RULE_functionCall);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			match(Identifier);
			setState(158);
			match(T__12);
			setState(159);
			arguments();
			setState(160);
			match(T__8);
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
		public TerminalNode True() { return getToken(FirestoreRulesParser.True, 0); }
		public TerminalNode False() { return getToken(FirestoreRulesParser.False, 0); }
		public BooleanValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_booleanValue; }
	}

	public final BooleanValueContext booleanValue() throws RecognitionException {
		BooleanValueContext _localctx = new BooleanValueContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_booleanValue);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
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
		public List<TerminalNode> Slash() { return getTokens(FirestoreRulesParser.Slash); }
		public TerminalNode Slash(int i) {
			return getToken(FirestoreRulesParser.Slash, i);
		}
		public List<TerminalNode> Identifier() { return getTokens(FirestoreRulesParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(FirestoreRulesParser.Identifier, i);
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
		enterRule(_localctx, 32, RULE_getPath);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(169); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(164);
				match(Slash);
				setState(167);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Identifier:
					{
					setState(165);
					match(Identifier);
					}
					break;
				case T__7:
					{
					setState(166);
					pathVariableReplace();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				setState(171); 
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
		public List<TerminalNode> Slash() { return getTokens(FirestoreRulesParser.Slash); }
		public TerminalNode Slash(int i) {
			return getToken(FirestoreRulesParser.Slash, i);
		}
		public List<TerminalNode> Identifier() { return getTokens(FirestoreRulesParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(FirestoreRulesParser.Identifier, i);
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
		enterRule(_localctx, 34, RULE_matchPath);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(178); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(173);
				match(Slash);
				setState(176);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Identifier:
					{
					setState(174);
					match(Identifier);
					}
					break;
				case T__1:
					{
					setState(175);
					pathVariable();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				setState(180); 
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
			return precpred(_ctx, 9);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3,\u00b9\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\3\2\3\2\3\2\3\2\3\3\3\3\3\4\3\4\3\4\3\4\7\4\61\n\4\f\4\16\4"+
		"\64\13\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\7\5=\n\5\f\5\16\5@\13\5\3\5\3\5\3"+
		"\6\3\6\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\7\bN\n\b\f\b\16\bQ\13\b\3\b\3\b"+
		"\3\b\5\bV\n\b\3\b\3\b\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\5\nb\n\n\3\n\3\n"+
		"\3\13\5\13g\n\13\3\13\3\13\7\13k\n\13\f\13\16\13n\13\13\3\f\3\f\3\f\3"+
		"\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r"+
		"\3\r\3\r\3\r\5\r\u0088\n\r\3\r\3\r\3\r\3\r\7\r\u008e\n\r\f\r\16\r\u0091"+
		"\13\r\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\5\17\u009e"+
		"\n\17\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\22\3\22\3\22\5\22\u00aa\n\22"+
		"\6\22\u00ac\n\22\r\22\16\22\u00ad\3\23\3\23\3\23\5\23\u00b3\n\23\6\23"+
		"\u00b5\n\23\r\23\16\23\u00b6\3\23\2\3\30\24\2\4\6\b\n\f\16\20\22\24\26"+
		"\30\32\34\36 \"$\2\b\4\2&&))\3\2\35#\3\2&)\3\2\20\25\3\2&(\3\2\33\34\2"+
		"\u00c0\2&\3\2\2\2\4*\3\2\2\2\6,\3\2\2\2\b\67\3\2\2\2\nC\3\2\2\2\fE\3\2"+
		"\2\2\16I\3\2\2\2\20Y\3\2\2\2\22]\3\2\2\2\24f\3\2\2\2\26o\3\2\2\2\30\u0087"+
		"\3\2\2\2\32\u0092\3\2\2\2\34\u0094\3\2\2\2\36\u009f\3\2\2\2 \u00a4\3\2"+
		"\2\2\"\u00ab\3\2\2\2$\u00b4\3\2\2\2&\'\7\3\2\2\'(\5\4\3\2()\5\6\4\2)\3"+
		"\3\2\2\2*+\t\2\2\2+\5\3\2\2\2,\62\7\4\2\2-\61\5\f\7\2.\61\7,\2\2/\61\5"+
		"\26\f\2\60-\3\2\2\2\60.\3\2\2\2\60/\3\2\2\2\61\64\3\2\2\2\62\60\3\2\2"+
		"\2\62\63\3\2\2\2\63\65\3\2\2\2\64\62\3\2\2\2\65\66\7\5\2\2\66\7\3\2\2"+
		"\2\67>\7\4\2\28=\5\16\b\29=\5\f\7\2:=\7,\2\2;=\5\26\f\2<8\3\2\2\2<9\3"+
		"\2\2\2<:\3\2\2\2<;\3\2\2\2=@\3\2\2\2><\3\2\2\2>?\3\2\2\2?A\3\2\2\2@>\3"+
		"\2\2\2AB\7\5\2\2B\t\3\2\2\2CD\t\3\2\2D\13\3\2\2\2EF\7\31\2\2FG\5$\23\2"+
		"GH\5\b\5\2H\r\3\2\2\2IJ\7\6\2\2JO\5\n\6\2KL\7\7\2\2LN\5\n\6\2MK\3\2\2"+
		"\2NQ\3\2\2\2OM\3\2\2\2OP\3\2\2\2PU\3\2\2\2QO\3\2\2\2RS\7\b\2\2ST\7\32"+
		"\2\2TV\5\30\r\2UR\3\2\2\2UV\3\2\2\2VW\3\2\2\2WX\7\t\2\2X\17\3\2\2\2YZ"+
		"\7\n\2\2Z[\t\4\2\2[\\\7\13\2\2\\\21\3\2\2\2]^\7\4\2\2^a\7)\2\2_`\7\f\2"+
		"\2`b\7\r\2\2a_\3\2\2\2ab\3\2\2\2bc\3\2\2\2cd\7\5\2\2d\23\3\2\2\2eg\7)"+
		"\2\2fe\3\2\2\2fg\3\2\2\2gl\3\2\2\2hi\7\7\2\2ik\7)\2\2jh\3\2\2\2kn\3\2"+
		"\2\2lj\3\2\2\2lm\3\2\2\2m\25\3\2\2\2nl\3\2\2\2op\7\16\2\2pq\7)\2\2qr\7"+
		"\17\2\2rs\5\24\13\2st\7\13\2\2tu\7\4\2\2uv\7$\2\2vw\5\30\r\2wx\7\t\2\2"+
		"xy\7\5\2\2y\27\3\2\2\2z{\b\r\1\2{\u0088\7%\2\2|\u0088\7(\2\2}\u0088\7"+
		"\'\2\2~\u0088\5 \21\2\177\u0088\7&\2\2\u0080\u0088\5\34\17\2\u0081\u0088"+
		"\5\36\20\2\u0082\u0088\7)\2\2\u0083\u0084\7\17\2\2\u0084\u0085\5\30\r"+
		"\2\u0085\u0086\7\13\2\2\u0086\u0088\3\2\2\2\u0087z\3\2\2\2\u0087|\3\2"+
		"\2\2\u0087}\3\2\2\2\u0087~\3\2\2\2\u0087\177\3\2\2\2\u0087\u0080\3\2\2"+
		"\2\u0087\u0081\3\2\2\2\u0087\u0082\3\2\2\2\u0087\u0083\3\2\2\2\u0088\u008f"+
		"\3\2\2\2\u0089\u008a\f\13\2\2\u008a\u008b\5\32\16\2\u008b\u008c\5\30\r"+
		"\f\u008c\u008e\3\2\2\2\u008d\u0089\3\2\2\2\u008e\u0091\3\2\2\2\u008f\u008d"+
		"\3\2\2\2\u008f\u0090\3\2\2\2\u0090\31\3\2\2\2\u0091\u008f\3\2\2\2\u0092"+
		"\u0093\t\5\2\2\u0093\33\3\2\2\2\u0094\u0095\7\36\2\2\u0095\u0096\7\17"+
		"\2\2\u0096\u0097\5\"\22\2\u0097\u0098\7\13\2\2\u0098\u0099\7\26\2\2\u0099"+
		"\u009d\t\2\2\2\u009a\u009b\7\27\2\2\u009b\u009c\t\6\2\2\u009c\u009e\7"+
		"\30\2\2\u009d\u009a\3\2\2\2\u009d\u009e\3\2\2\2\u009e\35\3\2\2\2\u009f"+
		"\u00a0\7)\2\2\u00a0\u00a1\7\17\2\2\u00a1\u00a2\5\24\13\2\u00a2\u00a3\7"+
		"\13\2\2\u00a3\37\3\2\2\2\u00a4\u00a5\t\7\2\2\u00a5!\3\2\2\2\u00a6\u00a9"+
		"\7*\2\2\u00a7\u00aa\7)\2\2\u00a8\u00aa\5\20\t\2\u00a9\u00a7\3\2\2\2\u00a9"+
		"\u00a8\3\2\2\2\u00aa\u00ac\3\2\2\2\u00ab\u00a6\3\2\2\2\u00ac\u00ad\3\2"+
		"\2\2\u00ad\u00ab\3\2\2\2\u00ad\u00ae\3\2\2\2\u00ae#\3\2\2\2\u00af\u00b2"+
		"\7*\2\2\u00b0\u00b3\7)\2\2\u00b1\u00b3\5\22\n\2\u00b2\u00b0\3\2\2\2\u00b2"+
		"\u00b1\3\2\2\2\u00b3\u00b5\3\2\2\2\u00b4\u00af\3\2\2\2\u00b5\u00b6\3\2"+
		"\2\2\u00b6\u00b4\3\2\2\2\u00b6\u00b7\3\2\2\2\u00b7%\3\2\2\2\22\60\62<"+
		">OUafl\u0087\u008f\u009d\u00a9\u00ad\u00b2\u00b6";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}