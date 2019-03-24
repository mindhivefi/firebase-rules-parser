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
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, Match=26, If=27, True=28, False=29, List=30, Get=31, Create=32, 
		Update=33, Read=34, Write=35, Delete=36, Return=37, Null=38, ObjectReference=39, 
		Number=40, String=41, Identifier=42, Slash=43, WS=44, Comment=45;
	public static final int
		RULE_service = 0, RULE_namespace = 1, RULE_namespaceBlock = 2, RULE_matchBlock = 3, 
		RULE_allowKey = 4, RULE_allow = 5, RULE_pathVariableReplace = 6, RULE_pathVariable = 7, 
		RULE_arguments = 8, RULE_function = 9, RULE_expression = 10, RULE_compareOperator = 11, 
		RULE_get = 12, RULE_functionCall = 13, RULE_booleanValue = 14, RULE_getPath = 15, 
		RULE_matchPath = 16, RULE_matcher = 17, RULE_additionExp = 18, RULE_multiplyExp = 19, 
		RULE_atomExp = 20;
	public static final String[] ruleNames = {
		"service", "namespace", "namespaceBlock", "matchBlock", "allowKey", "allow", 
		"pathVariableReplace", "pathVariable", "arguments", "function", "expression", 
		"compareOperator", "get", "functionCall", "booleanValue", "getPath", "matchPath", 
		"matcher", "additionExp", "multiplyExp", "atomExp"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'service'", "'{'", "'}'", "'allow'", "','", "':'", "';'", "'$('", 
		"')'", "'='", "'**'", "'function'", "'('", "'<'", "'=='", "'>'", "'!='", 
		"'&&'", "'||'", "'.'", "'['", "']'", "'+'", "'-'", "'*'", "'match'", "'if'", 
		"'true'", "'false'", "'list'", "'get'", "'create'", "'update'", "'read'", 
		"'write'", "'delete'", "'return'", "'null'", null, null, null, null, "'/'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, "Match", "If", "True", "False", "List", "Get", "Create", "Update", 
		"Read", "Write", "Delete", "Return", "Null", "ObjectReference", "Number", 
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
			setState(42);
			match(T__0);
			setState(43);
			namespace();
			setState(44);
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
			setState(46);
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
			setState(48);
			match(T__1);
			setState(54);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << Match) | (1L << Comment))) != 0)) {
				{
				setState(52);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Match:
					{
					setState(49);
					matcher();
					}
					break;
				case Comment:
					{
					setState(50);
					match(Comment);
					}
					break;
				case T__11:
					{
					setState(51);
					function();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(56);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(57);
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
			setState(59);
			match(T__1);
			setState(66);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__3) | (1L << T__11) | (1L << Match) | (1L << Comment))) != 0)) {
				{
				setState(64);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__3:
					{
					setState(60);
					allow();
					}
					break;
				case Match:
					{
					setState(61);
					matcher();
					}
					break;
				case Comment:
					{
					setState(62);
					match(Comment);
					}
					break;
				case T__11:
					{
					setState(63);
					function();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(68);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(69);
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
			setState(71);
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
		enterRule(_localctx, 10, RULE_allow);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			match(T__3);
			setState(74);
			allowKey();
			setState(79);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(75);
				match(T__4);
				setState(76);
				allowKey();
				}
				}
				setState(81);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(85);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__5) {
				{
				setState(82);
				match(T__5);
				setState(83);
				match(If);
				setState(84);
				expression(0);
				}
			}

			setState(87);
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
		enterRule(_localctx, 12, RULE_pathVariableReplace);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
			match(T__7);
			setState(90);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ObjectReference) | (1L << Number) | (1L << String) | (1L << Identifier))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(91);
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
		enterRule(_localctx, 14, RULE_pathVariable);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(93);
			match(T__1);
			setState(94);
			match(Identifier);
			setState(97);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__9) {
				{
				setState(95);
				match(T__9);
				setState(96);
				match(T__10);
				}
			}

			setState(99);
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
		enterRule(_localctx, 16, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(102);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier) {
				{
				setState(101);
				match(Identifier);
				}
			}

			setState(108);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(104);
				match(T__4);
				setState(105);
				match(Identifier);
				}
				}
				setState(110);
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
		enterRule(_localctx, 18, RULE_function);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(111);
			match(T__11);
			setState(112);
			match(Identifier);
			setState(113);
			match(T__12);
			setState(114);
			arguments();
			setState(115);
			match(T__8);
			setState(116);
			match(T__1);
			setState(117);
			match(Return);
			setState(118);
			expression(0);
			setState(119);
			match(T__6);
			setState(120);
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
		int _startState = 20;
		enterRecursionRule(_localctx, 20, RULE_expression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				{
				setState(123);
				match(Null);
				}
				break;
			case 2:
				{
				setState(124);
				match(String);
				}
				break;
			case 3:
				{
				setState(125);
				match(Number);
				}
				break;
			case 4:
				{
				setState(126);
				booleanValue();
				}
				break;
			case 5:
				{
				setState(127);
				match(ObjectReference);
				}
				break;
			case 6:
				{
				setState(128);
				get();
				}
				break;
			case 7:
				{
				setState(129);
				functionCall();
				}
				break;
			case 8:
				{
				setState(130);
				match(Identifier);
				}
				break;
			case 9:
				{
				setState(131);
				match(T__12);
				setState(132);
				expression(0);
				setState(133);
				match(T__8);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(143);
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
					setState(137);
					if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
					setState(138);
					compareOperator();
					setState(139);
					expression(10);
					}
					} 
				}
				setState(145);
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
		enterRule(_localctx, 22, RULE_compareOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(146);
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
		enterRule(_localctx, 24, RULE_get);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(148);
			match(Get);
			setState(149);
			match(T__12);
			setState(150);
			getPath();
			setState(151);
			match(T__8);
			setState(152);
			match(T__19);
			{
			setState(153);
			_la = _input.LA(1);
			if ( !(_la==ObjectReference || _la==Identifier) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(157);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				{
				setState(154);
				match(T__20);
				setState(155);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ObjectReference) | (1L << Number) | (1L << String))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(156);
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
		enterRule(_localctx, 26, RULE_functionCall);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(159);
			match(Identifier);
			setState(160);
			match(T__12);
			setState(161);
			arguments();
			setState(162);
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
		enterRule(_localctx, 28, RULE_booleanValue);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(164);
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
		enterRule(_localctx, 30, RULE_getPath);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(171); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(166);
				match(Slash);
				setState(169);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Identifier:
					{
					setState(167);
					match(Identifier);
					}
					break;
				case T__7:
					{
					setState(168);
					pathVariableReplace();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				setState(173); 
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
		enterRule(_localctx, 32, RULE_matchPath);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(180); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(175);
				match(Slash);
				setState(178);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Identifier:
					{
					setState(176);
					match(Identifier);
					}
					break;
				case T__1:
					{
					setState(177);
					pathVariable();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				setState(182); 
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

	public static class MatcherContext extends ParserRuleContext {
		public TerminalNode Match() { return getToken(FirestoreRulesParser.Match, 0); }
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
		enterRule(_localctx, 34, RULE_matcher);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			match(Match);
			setState(185);
			matchPath();
			setState(186);
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

	public static class AdditionExpContext extends ParserRuleContext {
		public List<MultiplyExpContext> multiplyExp() {
			return getRuleContexts(MultiplyExpContext.class);
		}
		public MultiplyExpContext multiplyExp(int i) {
			return getRuleContext(MultiplyExpContext.class,i);
		}
		public AdditionExpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_additionExp; }
	}

	public final AdditionExpContext additionExp() throws RecognitionException {
		AdditionExpContext _localctx = new AdditionExpContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_additionExp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(188);
			multiplyExp();
			setState(195);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__22 || _la==T__23) {
				{
				setState(193);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__22:
					{
					setState(189);
					match(T__22);
					setState(190);
					multiplyExp();
					}
					break;
				case T__23:
					{
					setState(191);
					match(T__23);
					setState(192);
					multiplyExp();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(197);
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

	public static class MultiplyExpContext extends ParserRuleContext {
		public List<AtomExpContext> atomExp() {
			return getRuleContexts(AtomExpContext.class);
		}
		public AtomExpContext atomExp(int i) {
			return getRuleContext(AtomExpContext.class,i);
		}
		public MultiplyExpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiplyExp; }
	}

	public final MultiplyExpContext multiplyExp() throws RecognitionException {
		MultiplyExpContext _localctx = new MultiplyExpContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_multiplyExp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(198);
			atomExp();
			setState(205);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__24 || _la==Slash) {
				{
				setState(203);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__24:
					{
					setState(199);
					match(T__24);
					setState(200);
					atomExp();
					}
					break;
				case Slash:
					{
					setState(201);
					match(Slash);
					setState(202);
					atomExp();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(207);
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

	public static class AtomExpContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(FirestoreRulesParser.Number, 0); }
		public AdditionExpContext additionExp() {
			return getRuleContext(AdditionExpContext.class,0);
		}
		public AtomExpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atomExp; }
	}

	public final AtomExpContext atomExp() throws RecognitionException {
		AtomExpContext _localctx = new AtomExpContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_atomExp);
		try {
			setState(213);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Number:
				enterOuterAlt(_localctx, 1);
				{
				setState(208);
				match(Number);
				}
				break;
			case T__12:
				enterOuterAlt(_localctx, 2);
				{
				setState(209);
				match(T__12);
				setState(210);
				additionExp();
				setState(211);
				match(T__8);
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

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 10:
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3/\u00da\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\3\2\3\2\3\2\3\2\3\3\3\3\3\4\3"+
		"\4\3\4\3\4\7\4\67\n\4\f\4\16\4:\13\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\7\5C"+
		"\n\5\f\5\16\5F\13\5\3\5\3\5\3\6\3\6\3\7\3\7\3\7\3\7\7\7P\n\7\f\7\16\7"+
		"S\13\7\3\7\3\7\3\7\5\7X\n\7\3\7\3\7\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\5"+
		"\td\n\t\3\t\3\t\3\n\5\ni\n\n\3\n\3\n\7\nm\n\n\f\n\16\np\13\n\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f"+
		"\3\f\3\f\3\f\3\f\3\f\3\f\3\f\5\f\u008a\n\f\3\f\3\f\3\f\3\f\7\f\u0090\n"+
		"\f\f\f\16\f\u0093\13\f\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\5\16\u00a0\n\16\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\21\3\21\3\21"+
		"\5\21\u00ac\n\21\6\21\u00ae\n\21\r\21\16\21\u00af\3\22\3\22\3\22\5\22"+
		"\u00b5\n\22\6\22\u00b7\n\22\r\22\16\22\u00b8\3\23\3\23\3\23\3\23\3\24"+
		"\3\24\3\24\3\24\3\24\7\24\u00c4\n\24\f\24\16\24\u00c7\13\24\3\25\3\25"+
		"\3\25\3\25\3\25\7\25\u00ce\n\25\f\25\16\25\u00d1\13\25\3\26\3\26\3\26"+
		"\3\26\3\26\5\26\u00d8\n\26\3\26\2\3\26\27\2\4\6\b\n\f\16\20\22\24\26\30"+
		"\32\34\36 \"$&(*\2\b\4\2)),,\3\2 &\3\2),\3\2\20\25\3\2)+\3\2\36\37\2\u00e3"+
		"\2,\3\2\2\2\4\60\3\2\2\2\6\62\3\2\2\2\b=\3\2\2\2\nI\3\2\2\2\fK\3\2\2\2"+
		"\16[\3\2\2\2\20_\3\2\2\2\22h\3\2\2\2\24q\3\2\2\2\26\u0089\3\2\2\2\30\u0094"+
		"\3\2\2\2\32\u0096\3\2\2\2\34\u00a1\3\2\2\2\36\u00a6\3\2\2\2 \u00ad\3\2"+
		"\2\2\"\u00b6\3\2\2\2$\u00ba\3\2\2\2&\u00be\3\2\2\2(\u00c8\3\2\2\2*\u00d7"+
		"\3\2\2\2,-\7\3\2\2-.\5\4\3\2./\5\6\4\2/\3\3\2\2\2\60\61\t\2\2\2\61\5\3"+
		"\2\2\2\628\7\4\2\2\63\67\5$\23\2\64\67\7/\2\2\65\67\5\24\13\2\66\63\3"+
		"\2\2\2\66\64\3\2\2\2\66\65\3\2\2\2\67:\3\2\2\28\66\3\2\2\289\3\2\2\29"+
		";\3\2\2\2:8\3\2\2\2;<\7\5\2\2<\7\3\2\2\2=D\7\4\2\2>C\5\f\7\2?C\5$\23\2"+
		"@C\7/\2\2AC\5\24\13\2B>\3\2\2\2B?\3\2\2\2B@\3\2\2\2BA\3\2\2\2CF\3\2\2"+
		"\2DB\3\2\2\2DE\3\2\2\2EG\3\2\2\2FD\3\2\2\2GH\7\5\2\2H\t\3\2\2\2IJ\t\3"+
		"\2\2J\13\3\2\2\2KL\7\6\2\2LQ\5\n\6\2MN\7\7\2\2NP\5\n\6\2OM\3\2\2\2PS\3"+
		"\2\2\2QO\3\2\2\2QR\3\2\2\2RW\3\2\2\2SQ\3\2\2\2TU\7\b\2\2UV\7\35\2\2VX"+
		"\5\26\f\2WT\3\2\2\2WX\3\2\2\2XY\3\2\2\2YZ\7\t\2\2Z\r\3\2\2\2[\\\7\n\2"+
		"\2\\]\t\4\2\2]^\7\13\2\2^\17\3\2\2\2_`\7\4\2\2`c\7,\2\2ab\7\f\2\2bd\7"+
		"\r\2\2ca\3\2\2\2cd\3\2\2\2de\3\2\2\2ef\7\5\2\2f\21\3\2\2\2gi\7,\2\2hg"+
		"\3\2\2\2hi\3\2\2\2in\3\2\2\2jk\7\7\2\2km\7,\2\2lj\3\2\2\2mp\3\2\2\2nl"+
		"\3\2\2\2no\3\2\2\2o\23\3\2\2\2pn\3\2\2\2qr\7\16\2\2rs\7,\2\2st\7\17\2"+
		"\2tu\5\22\n\2uv\7\13\2\2vw\7\4\2\2wx\7\'\2\2xy\5\26\f\2yz\7\t\2\2z{\7"+
		"\5\2\2{\25\3\2\2\2|}\b\f\1\2}\u008a\7(\2\2~\u008a\7+\2\2\177\u008a\7*"+
		"\2\2\u0080\u008a\5\36\20\2\u0081\u008a\7)\2\2\u0082\u008a\5\32\16\2\u0083"+
		"\u008a\5\34\17\2\u0084\u008a\7,\2\2\u0085\u0086\7\17\2\2\u0086\u0087\5"+
		"\26\f\2\u0087\u0088\7\13\2\2\u0088\u008a\3\2\2\2\u0089|\3\2\2\2\u0089"+
		"~\3\2\2\2\u0089\177\3\2\2\2\u0089\u0080\3\2\2\2\u0089\u0081\3\2\2\2\u0089"+
		"\u0082\3\2\2\2\u0089\u0083\3\2\2\2\u0089\u0084\3\2\2\2\u0089\u0085\3\2"+
		"\2\2\u008a\u0091\3\2\2\2\u008b\u008c\f\13\2\2\u008c\u008d\5\30\r\2\u008d"+
		"\u008e\5\26\f\f\u008e\u0090\3\2\2\2\u008f\u008b\3\2\2\2\u0090\u0093\3"+
		"\2\2\2\u0091\u008f\3\2\2\2\u0091\u0092\3\2\2\2\u0092\27\3\2\2\2\u0093"+
		"\u0091\3\2\2\2\u0094\u0095\t\5\2\2\u0095\31\3\2\2\2\u0096\u0097\7!\2\2"+
		"\u0097\u0098\7\17\2\2\u0098\u0099\5 \21\2\u0099\u009a\7\13\2\2\u009a\u009b"+
		"\7\26\2\2\u009b\u009f\t\2\2\2\u009c\u009d\7\27\2\2\u009d\u009e\t\6\2\2"+
		"\u009e\u00a0\7\30\2\2\u009f\u009c\3\2\2\2\u009f\u00a0\3\2\2\2\u00a0\33"+
		"\3\2\2\2\u00a1\u00a2\7,\2\2\u00a2\u00a3\7\17\2\2\u00a3\u00a4\5\22\n\2"+
		"\u00a4\u00a5\7\13\2\2\u00a5\35\3\2\2\2\u00a6\u00a7\t\7\2\2\u00a7\37\3"+
		"\2\2\2\u00a8\u00ab\7-\2\2\u00a9\u00ac\7,\2\2\u00aa\u00ac\5\16\b\2\u00ab"+
		"\u00a9\3\2\2\2\u00ab\u00aa\3\2\2\2\u00ac\u00ae\3\2\2\2\u00ad\u00a8\3\2"+
		"\2\2\u00ae\u00af\3\2\2\2\u00af\u00ad\3\2\2\2\u00af\u00b0\3\2\2\2\u00b0"+
		"!\3\2\2\2\u00b1\u00b4\7-\2\2\u00b2\u00b5\7,\2\2\u00b3\u00b5\5\20\t\2\u00b4"+
		"\u00b2\3\2\2\2\u00b4\u00b3\3\2\2\2\u00b5\u00b7\3\2\2\2\u00b6\u00b1\3\2"+
		"\2\2\u00b7\u00b8\3\2\2\2\u00b8\u00b6\3\2\2\2\u00b8\u00b9\3\2\2\2\u00b9"+
		"#\3\2\2\2\u00ba\u00bb\7\34\2\2\u00bb\u00bc\5\"\22\2\u00bc\u00bd\5\b\5"+
		"\2\u00bd%\3\2\2\2\u00be\u00c5\5(\25\2\u00bf\u00c0\7\31\2\2\u00c0\u00c4"+
		"\5(\25\2\u00c1\u00c2\7\32\2\2\u00c2\u00c4\5(\25\2\u00c3\u00bf\3\2\2\2"+
		"\u00c3\u00c1\3\2\2\2\u00c4\u00c7\3\2\2\2\u00c5\u00c3\3\2\2\2\u00c5\u00c6"+
		"\3\2\2\2\u00c6\'\3\2\2\2\u00c7\u00c5\3\2\2\2\u00c8\u00cf\5*\26\2\u00c9"+
		"\u00ca\7\33\2\2\u00ca\u00ce\5*\26\2\u00cb\u00cc\7-\2\2\u00cc\u00ce\5*"+
		"\26\2\u00cd\u00c9\3\2\2\2\u00cd\u00cb\3\2\2\2\u00ce\u00d1\3\2\2\2\u00cf"+
		"\u00cd\3\2\2\2\u00cf\u00d0\3\2\2\2\u00d0)\3\2\2\2\u00d1\u00cf\3\2\2\2"+
		"\u00d2\u00d8\7*\2\2\u00d3\u00d4\7\17\2\2\u00d4\u00d5\5&\24\2\u00d5\u00d6"+
		"\7\13\2\2\u00d6\u00d8\3\2\2\2\u00d7\u00d2\3\2\2\2\u00d7\u00d3\3\2\2\2"+
		"\u00d8+\3\2\2\2\27\668BDQWchn\u0089\u0091\u009f\u00ab\u00af\u00b4\u00b8"+
		"\u00c3\u00c5\u00cd\u00cf\u00d7";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}