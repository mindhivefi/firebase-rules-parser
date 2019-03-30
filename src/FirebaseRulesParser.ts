// Generated from ./src/FirebaseRules.g4 by ANTLR 4.7.3-SNAPSHOT
import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import * as Utils from 'antlr4ts/misc/Utils';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import { FirebaseRulesListener } from './FirebaseRulesListener';

export class FirebaseRulesParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly Allow = 26;
	public static readonly Match = 27;
	public static readonly If = 28;
	public static readonly Get = 29;
	public static readonly True = 30;
	public static readonly False = 31;
	public static readonly List = 32;
	public static readonly Create = 33;
	public static readonly Update = 34;
	public static readonly Read = 35;
	public static readonly Write = 36;
	public static readonly Delete = 37;
	public static readonly Function = 38;
	public static readonly LogicalAnd = 39;
	public static readonly LogicalOr = 40;
	public static readonly LogicalNot = 41;
	public static readonly Return = 42;
	public static readonly Null = 43;
	public static readonly Service = 44;
	public static readonly ObjectReference = 45;
	public static readonly Number = 46;
	public static readonly String = 47;
	public static readonly Identifier = 48;
	public static readonly Slash = 49;
	public static readonly WS = 50;
	public static readonly Comment = 51;
	public static readonly RULE_service = 0;
	public static readonly RULE_namespace = 1;
	public static readonly RULE_namespaceBlock = 2;
	public static readonly RULE_matchBlock = 3;
	public static readonly RULE_allowKey = 4;
	public static readonly RULE_matcher = 5;
	public static readonly RULE_allow = 6;
	public static readonly RULE_pathVariableReplace = 7;
	public static readonly RULE_pathVariable = 8;
	public static readonly RULE_arguments = 9;
	public static readonly RULE_function = 10;
	public static readonly RULE_expression = 11;
	public static readonly RULE_parenthesisExpression = 12;
	public static readonly RULE_numberValue = 13;
	public static readonly RULE_stringValue = 14;
	public static readonly RULE_nullValue = 15;
	public static readonly RULE_objectRef = 16;
	public static readonly RULE_identifierRef = 17;
	public static readonly RULE_compareOperator = 18;
	public static readonly RULE_logicalOperator = 19;
	public static readonly RULE_binaryOperator = 20;
	public static readonly RULE_arithmeticOperator = 21;
	public static readonly RULE_unaryOperator = 22;
	public static readonly RULE_get = 23;
	public static readonly RULE_functionCall = 24;
	public static readonly RULE_booleanValue = 25;
	public static readonly RULE_getPath = 26;
	public static readonly RULE_matchPath = 27;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"service", "namespace", "namespaceBlock", "matchBlock", "allowKey", "matcher", 
		"allow", "pathVariableReplace", "pathVariable", "arguments", "function", 
		"expression", "parenthesisExpression", "numberValue", "stringValue", "nullValue", 
		"objectRef", "identifierRef", "compareOperator", "logicalOperator", "binaryOperator", 
		"arithmeticOperator", "unaryOperator", "get", "functionCall", "booleanValue", 
		"getPath", "matchPath",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'{'", "'}'", "','", "':'", "';'", "'$('", "')'", "'='", "'**'", 
		"'('", "'<'", "'<='", "'=='", "'!='", "'>'", "'>='", "'&'", "'|'", "'%'", 
		"'+'", "'-'", "'*'", "'.'", "'['", "']'", "'allow'", "'match'", "'if'", 
		"'get'", "'true'", "'false'", "'list'", "'create'", "'update'", "'read'", 
		"'write'", "'delete'", "'function'", "'&&'", "'||'", "'!'", "'return'", 
		"'null'", "'service'", undefined, undefined, undefined, undefined, "'/'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "Allow", "Match", 
		"If", "Get", "True", "False", "List", "Create", "Update", "Read", "Write", 
		"Delete", "Function", "LogicalAnd", "LogicalOr", "LogicalNot", "Return", 
		"Null", "Service", "ObjectReference", "Number", "String", "Identifier", 
		"Slash", "WS", "Comment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FirebaseRulesParser._LITERAL_NAMES, FirebaseRulesParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FirebaseRulesParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "FirebaseRules.g4"; }

	// @Override
	public get ruleNames(): string[] { return FirebaseRulesParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FirebaseRulesParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FirebaseRulesParser._ATN, this);
	}
	// @RuleVersion(0)
	public service(): ServiceContext {
		let _localctx: ServiceContext = new ServiceContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FirebaseRulesParser.RULE_service);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.match(FirebaseRulesParser.Service);
			this.state = 57;
			this.namespace();
			this.state = 58;
			this.namespaceBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespace(): NamespaceContext {
		let _localctx: NamespaceContext = new NamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FirebaseRulesParser.RULE_namespace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			_la = this._input.LA(1);
			if (!(_la === FirebaseRulesParser.ObjectReference || _la === FirebaseRulesParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceBlock(): NamespaceBlockContext {
		let _localctx: NamespaceBlockContext = new NamespaceBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FirebaseRulesParser.RULE_namespaceBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(FirebaseRulesParser.T__0);
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (FirebaseRulesParser.Match - 27)) | (1 << (FirebaseRulesParser.Function - 27)) | (1 << (FirebaseRulesParser.Comment - 27)))) !== 0)) {
				{
				this.state = 66;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FirebaseRulesParser.Match:
					{
					this.state = 63;
					this.matcher();
					}
					break;
				case FirebaseRulesParser.Comment:
					{
					this.state = 64;
					this.match(FirebaseRulesParser.Comment);
					}
					break;
				case FirebaseRulesParser.Function:
					{
					this.state = 65;
					this.function();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 71;
			this.match(FirebaseRulesParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public matchBlock(): MatchBlockContext {
		let _localctx: MatchBlockContext = new MatchBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FirebaseRulesParser.RULE_matchBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.match(FirebaseRulesParser.T__0);
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (FirebaseRulesParser.Allow - 26)) | (1 << (FirebaseRulesParser.Match - 26)) | (1 << (FirebaseRulesParser.Function - 26)) | (1 << (FirebaseRulesParser.Comment - 26)))) !== 0)) {
				{
				this.state = 78;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FirebaseRulesParser.Allow:
					{
					this.state = 74;
					this.allow();
					}
					break;
				case FirebaseRulesParser.Match:
					{
					this.state = 75;
					this.matcher();
					}
					break;
				case FirebaseRulesParser.Comment:
					{
					this.state = 76;
					this.match(FirebaseRulesParser.Comment);
					}
					break;
				case FirebaseRulesParser.Function:
					{
					this.state = 77;
					this.function();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 83;
			this.match(FirebaseRulesParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public allowKey(): AllowKeyContext {
		let _localctx: AllowKeyContext = new AllowKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FirebaseRulesParser.RULE_allowKey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			_la = this._input.LA(1);
			if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (FirebaseRulesParser.Get - 29)) | (1 << (FirebaseRulesParser.List - 29)) | (1 << (FirebaseRulesParser.Create - 29)) | (1 << (FirebaseRulesParser.Update - 29)) | (1 << (FirebaseRulesParser.Read - 29)) | (1 << (FirebaseRulesParser.Write - 29)) | (1 << (FirebaseRulesParser.Delete - 29)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public matcher(): MatcherContext {
		let _localctx: MatcherContext = new MatcherContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FirebaseRulesParser.RULE_matcher);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(FirebaseRulesParser.Match);
			this.state = 88;
			this.matchPath();
			this.state = 89;
			this.matchBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public allow(): AllowContext {
		let _localctx: AllowContext = new AllowContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FirebaseRulesParser.RULE_allow);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this.match(FirebaseRulesParser.Allow);
			this.state = 92;
			this.allowKey();
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FirebaseRulesParser.T__2) {
				{
				{
				this.state = 93;
				this.match(FirebaseRulesParser.T__2);
				this.state = 94;
				this.allowKey();
				}
				}
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FirebaseRulesParser.T__3) {
				{
				this.state = 100;
				this.match(FirebaseRulesParser.T__3);
				this.state = 101;
				this.match(FirebaseRulesParser.If);
				this.state = 102;
				this.expression(0);
				}
			}

			this.state = 105;
			this.match(FirebaseRulesParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pathVariableReplace(): PathVariableReplaceContext {
		let _localctx: PathVariableReplaceContext = new PathVariableReplaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FirebaseRulesParser.RULE_pathVariableReplace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this.match(FirebaseRulesParser.T__5);
			this.state = 108;
			_la = this._input.LA(1);
			if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (FirebaseRulesParser.ObjectReference - 45)) | (1 << (FirebaseRulesParser.Number - 45)) | (1 << (FirebaseRulesParser.String - 45)) | (1 << (FirebaseRulesParser.Identifier - 45)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 109;
			this.match(FirebaseRulesParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pathVariable(): PathVariableContext {
		let _localctx: PathVariableContext = new PathVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FirebaseRulesParser.RULE_pathVariable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.match(FirebaseRulesParser.T__0);
			this.state = 112;
			this.match(FirebaseRulesParser.Identifier);
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FirebaseRulesParser.T__7) {
				{
				this.state = 113;
				this.match(FirebaseRulesParser.T__7);
				this.state = 114;
				this.match(FirebaseRulesParser.T__8);
				}
			}

			this.state = 117;
			this.match(FirebaseRulesParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FirebaseRulesParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FirebaseRulesParser.Identifier) {
				{
				this.state = 119;
				this.match(FirebaseRulesParser.Identifier);
				}
			}

			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FirebaseRulesParser.T__2) {
				{
				{
				this.state = 122;
				this.match(FirebaseRulesParser.T__2);
				this.state = 123;
				this.match(FirebaseRulesParser.Identifier);
				}
				}
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FirebaseRulesParser.RULE_function);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.match(FirebaseRulesParser.Function);
			this.state = 130;
			this.match(FirebaseRulesParser.Identifier);
			this.state = 131;
			this.match(FirebaseRulesParser.T__9);
			this.state = 132;
			this.arguments();
			this.state = 133;
			this.match(FirebaseRulesParser.T__6);
			this.state = 134;
			this.match(FirebaseRulesParser.T__0);
			this.state = 135;
			this.match(FirebaseRulesParser.Return);
			this.state = 136;
			this.expression(0);
			this.state = 137;
			this.match(FirebaseRulesParser.T__4);
			this.state = 138;
			this.match(FirebaseRulesParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, FirebaseRulesParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 141;
				this.nullValue();
				}
				break;

			case 2:
				{
				this.state = 142;
				this.unaryOperator();
				this.state = 143;
				this.expression(9);
				}
				break;

			case 3:
				{
				this.state = 145;
				this.stringValue();
				}
				break;

			case 4:
				{
				this.state = 146;
				this.numberValue();
				}
				break;

			case 5:
				{
				this.state = 147;
				this.booleanValue();
				}
				break;

			case 6:
				{
				this.state = 148;
				this.objectRef();
				}
				break;

			case 7:
				{
				this.state = 149;
				this.get();
				}
				break;

			case 8:
				{
				this.state = 150;
				this.functionCall();
				}
				break;

			case 9:
				{
				this.state = 151;
				this.identifierRef();
				}
				break;

			case 10:
				{
				this.state = 152;
				this.parenthesisExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 173;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 171;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FirebaseRulesParser.RULE_expression);
						this.state = 155;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 156;
						this.compareOperator();
						this.state = 157;
						this.expression(14);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FirebaseRulesParser.RULE_expression);
						this.state = 159;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 160;
						this.logicalOperator();
						this.state = 161;
						this.expression(13);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FirebaseRulesParser.RULE_expression);
						this.state = 163;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 164;
						this.binaryOperator();
						this.state = 165;
						this.expression(12);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FirebaseRulesParser.RULE_expression);
						this.state = 167;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 168;
						this.arithmeticOperator();
						this.state = 169;
						this.expression(11);
						}
						break;
					}
					}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parenthesisExpression(): ParenthesisExpressionContext {
		let _localctx: ParenthesisExpressionContext = new ParenthesisExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FirebaseRulesParser.RULE_parenthesisExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.match(FirebaseRulesParser.T__9);
			this.state = 177;
			this.expression(0);
			this.state = 178;
			this.match(FirebaseRulesParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numberValue(): NumberValueContext {
		let _localctx: NumberValueContext = new NumberValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FirebaseRulesParser.RULE_numberValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this.match(FirebaseRulesParser.Number);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringValue(): StringValueContext {
		let _localctx: StringValueContext = new StringValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FirebaseRulesParser.RULE_stringValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(FirebaseRulesParser.String);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nullValue(): NullValueContext {
		let _localctx: NullValueContext = new NullValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, FirebaseRulesParser.RULE_nullValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(FirebaseRulesParser.Null);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectRef(): ObjectRefContext {
		let _localctx: ObjectRefContext = new ObjectRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, FirebaseRulesParser.RULE_objectRef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.match(FirebaseRulesParser.ObjectReference);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierRef(): IdentifierRefContext {
		let _localctx: IdentifierRefContext = new IdentifierRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, FirebaseRulesParser.RULE_identifierRef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			this.match(FirebaseRulesParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compareOperator(): CompareOperatorContext {
		let _localctx: CompareOperatorContext = new CompareOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, FirebaseRulesParser.RULE_compareOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FirebaseRulesParser.T__10) | (1 << FirebaseRulesParser.T__11) | (1 << FirebaseRulesParser.T__12) | (1 << FirebaseRulesParser.T__13) | (1 << FirebaseRulesParser.T__14) | (1 << FirebaseRulesParser.T__15))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalOperator(): LogicalOperatorContext {
		let _localctx: LogicalOperatorContext = new LogicalOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, FirebaseRulesParser.RULE_logicalOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			_la = this._input.LA(1);
			if (!(_la === FirebaseRulesParser.LogicalAnd || _la === FirebaseRulesParser.LogicalOr)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binaryOperator(): BinaryOperatorContext {
		let _localctx: BinaryOperatorContext = new BinaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, FirebaseRulesParser.RULE_binaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FirebaseRulesParser.T__16) | (1 << FirebaseRulesParser.T__17) | (1 << FirebaseRulesParser.T__18))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arithmeticOperator(): ArithmeticOperatorContext {
		let _localctx: ArithmeticOperatorContext = new ArithmeticOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, FirebaseRulesParser.RULE_arithmeticOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			_la = this._input.LA(1);
			if (!(((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (FirebaseRulesParser.T__19 - 20)) | (1 << (FirebaseRulesParser.T__20 - 20)) | (1 << (FirebaseRulesParser.T__21 - 20)) | (1 << (FirebaseRulesParser.Slash - 20)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryOperator(): UnaryOperatorContext {
		let _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, FirebaseRulesParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			_la = this._input.LA(1);
			if (!(_la === FirebaseRulesParser.T__20 || _la === FirebaseRulesParser.LogicalNot)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public get(): GetContext {
		let _localctx: GetContext = new GetContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, FirebaseRulesParser.RULE_get);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.match(FirebaseRulesParser.Get);
			this.state = 201;
			this.match(FirebaseRulesParser.T__9);
			this.state = 202;
			this.getPath();
			this.state = 203;
			this.match(FirebaseRulesParser.T__6);
			this.state = 204;
			this.match(FirebaseRulesParser.T__22);
			{
			this.state = 205;
			_la = this._input.LA(1);
			if (!(_la === FirebaseRulesParser.ObjectReference || _la === FirebaseRulesParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 209;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 206;
				this.match(FirebaseRulesParser.T__23);
				this.state = 207;
				_la = this._input.LA(1);
				if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (FirebaseRulesParser.ObjectReference - 45)) | (1 << (FirebaseRulesParser.Number - 45)) | (1 << (FirebaseRulesParser.String - 45)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 208;
				this.match(FirebaseRulesParser.T__24);
				}
				break;
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, FirebaseRulesParser.RULE_functionCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.match(FirebaseRulesParser.Identifier);
			this.state = 212;
			this.match(FirebaseRulesParser.T__9);
			this.state = 213;
			this.arguments();
			this.state = 214;
			this.match(FirebaseRulesParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanValue(): BooleanValueContext {
		let _localctx: BooleanValueContext = new BooleanValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, FirebaseRulesParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			_la = this._input.LA(1);
			if (!(_la === FirebaseRulesParser.True || _la === FirebaseRulesParser.False)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getPath(): GetPathContext {
		let _localctx: GetPathContext = new GetPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, FirebaseRulesParser.RULE_getPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 218;
				this.match(FirebaseRulesParser.Slash);
				this.state = 221;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FirebaseRulesParser.Identifier:
					{
					this.state = 219;
					this.match(FirebaseRulesParser.Identifier);
					}
					break;
				case FirebaseRulesParser.T__5:
					{
					this.state = 220;
					this.pathVariableReplace();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FirebaseRulesParser.Slash);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public matchPath(): MatchPathContext {
		let _localctx: MatchPathContext = new MatchPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, FirebaseRulesParser.RULE_matchPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 227;
				this.match(FirebaseRulesParser.Slash);
				this.state = 230;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FirebaseRulesParser.Identifier:
					{
					this.state = 228;
					this.match(FirebaseRulesParser.Identifier);
					}
					break;
				case FirebaseRulesParser.T__0:
					{
					this.state = 229;
					this.pathVariable();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FirebaseRulesParser.Slash);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 11:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);

		case 1:
			return this.precpred(this._ctx, 12);

		case 2:
			return this.precpred(this._ctx, 11);

		case 3:
			return this.precpred(this._ctx, 10);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x035\xEF\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x07\x04E\n\x04\f\x04\x0E\x04H\v\x04\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05Q\n\x05\f\x05\x0E\x05" +
		"T\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x07\bb\n\b\f\b\x0E\be\v\b\x03\b\x03\b\x03\b\x05" +
		"\bj\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x05" +
		"\nv\n\n\x03\n\x03\n\x03\v\x05\v{\n\v\x03\v\x03\v\x07\v\x7F\n\v\f\v\x0E" +
		"\v\x82\v\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x05\r\x9C\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xAE\n\r\f" +
		"\r\x0E\r\xB1\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19" +
		"\xD4\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03" +
		"\x1C\x03\x1C\x03\x1C\x05\x1C\xE0\n\x1C\x06\x1C\xE2\n\x1C\r\x1C\x0E\x1C" +
		"\xE3\x03\x1D\x03\x1D\x03\x1D\x05\x1D\xE9\n\x1D\x06\x1D\xEB\n\x1D\r\x1D" +
		"\x0E\x1D\xEC\x03\x1D\x02\x02\x03\x18\x1E\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02\x02\f\x04\x02//22\x04\x02\x1F\x1F\"\'\x03\x02/2\x03\x02\r\x12" +
		"\x03\x02)*\x03\x02\x13\x15\x04\x02\x16\x1833\x04\x02\x17\x17++\x03\x02" +
		"/1\x03\x02 !\x02\xF0\x02:\x03\x02\x02\x02\x04>\x03\x02\x02\x02\x06@\x03" +
		"\x02\x02\x02\bK\x03\x02\x02\x02\nW\x03\x02\x02\x02\fY\x03\x02\x02\x02" +
		"\x0E]\x03\x02\x02\x02\x10m\x03\x02\x02\x02\x12q\x03\x02\x02\x02\x14z\x03" +
		"\x02\x02\x02\x16\x83\x03\x02\x02\x02\x18\x9B\x03\x02\x02\x02\x1A\xB2\x03" +
		"\x02\x02\x02\x1C\xB6\x03\x02\x02\x02\x1E\xB8\x03\x02\x02\x02 \xBA\x03" +
		"\x02\x02\x02\"\xBC\x03\x02\x02\x02$\xBE\x03\x02\x02\x02&\xC0\x03\x02\x02" +
		"\x02(\xC2\x03\x02\x02\x02*\xC4\x03\x02\x02\x02,\xC6\x03\x02\x02\x02.\xC8" +
		"\x03\x02\x02\x020\xCA\x03\x02\x02\x022\xD5\x03\x02\x02\x024\xDA\x03\x02" +
		"\x02\x026\xE1\x03\x02\x02\x028\xEA\x03\x02\x02\x02:;\x07.\x02\x02;<\x05" +
		"\x04\x03\x02<=\x05\x06\x04\x02=\x03\x03\x02\x02\x02>?\t\x02\x02\x02?\x05" +
		"\x03\x02\x02\x02@F\x07\x03\x02\x02AE\x05\f\x07\x02BE\x075\x02\x02CE\x05" +
		"\x16\f\x02DA\x03\x02\x02\x02DB\x03\x02\x02\x02DC\x03\x02\x02\x02EH\x03" +
		"\x02\x02\x02FD\x03\x02\x02\x02FG\x03\x02\x02\x02GI\x03\x02\x02\x02HF\x03" +
		"\x02\x02\x02IJ\x07\x04\x02\x02J\x07\x03\x02\x02\x02KR\x07\x03\x02\x02" +
		"LQ\x05\x0E\b\x02MQ\x05\f\x07\x02NQ\x075\x02\x02OQ\x05\x16\f\x02PL\x03" +
		"\x02\x02\x02PM\x03\x02\x02\x02PN\x03\x02\x02\x02PO\x03\x02\x02\x02QT\x03" +
		"\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02SU\x03\x02\x02\x02TR\x03" +
		"\x02\x02\x02UV\x07\x04\x02\x02V\t\x03\x02\x02\x02WX\t\x03\x02\x02X\v\x03" +
		"\x02\x02\x02YZ\x07\x1D\x02\x02Z[\x058\x1D\x02[\\\x05\b\x05\x02\\\r\x03" +
		"\x02\x02\x02]^\x07\x1C\x02\x02^c\x05\n\x06\x02_`\x07\x05\x02\x02`b\x05" +
		"\n\x06\x02a_\x03\x02\x02\x02be\x03\x02\x02\x02ca\x03\x02\x02\x02cd\x03" +
		"\x02\x02\x02di\x03\x02\x02\x02ec\x03\x02\x02\x02fg\x07\x06\x02\x02gh\x07" +
		"\x1E\x02\x02hj\x05\x18\r\x02if\x03\x02\x02\x02ij\x03\x02\x02\x02jk\x03" +
		"\x02\x02\x02kl\x07\x07\x02\x02l\x0F\x03\x02\x02\x02mn\x07\b\x02\x02no" +
		"\t\x04\x02\x02op\x07\t\x02\x02p\x11\x03\x02\x02\x02qr\x07\x03\x02\x02" +
		"ru\x072\x02\x02st\x07\n\x02\x02tv\x07\v\x02\x02us\x03\x02\x02\x02uv\x03" +
		"\x02\x02\x02vw\x03\x02\x02\x02wx\x07\x04\x02\x02x\x13\x03\x02\x02\x02" +
		"y{\x072\x02\x02zy\x03\x02\x02\x02z{\x03\x02\x02\x02{\x80\x03\x02\x02\x02" +
		"|}\x07\x05\x02\x02}\x7F\x072\x02\x02~|\x03\x02\x02\x02\x7F\x82\x03\x02" +
		"\x02\x02\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x15\x03\x02" +
		"\x02\x02\x82\x80\x03\x02\x02\x02\x83\x84\x07(\x02\x02\x84\x85\x072\x02" +
		"\x02\x85\x86\x07\f\x02\x02\x86\x87\x05\x14\v\x02\x87\x88\x07\t\x02\x02" +
		"\x88\x89\x07\x03\x02\x02\x89\x8A\x07,\x02\x02\x8A\x8B\x05\x18\r\x02\x8B" +
		"\x8C\x07\x07\x02\x02\x8C\x8D\x07\x04\x02\x02\x8D\x17\x03\x02\x02\x02\x8E" +
		"\x8F\b\r\x01\x02\x8F\x9C\x05 \x11\x02\x90\x91\x05.\x18\x02\x91\x92\x05" +
		"\x18\r\v\x92\x9C\x03\x02\x02\x02\x93\x9C\x05\x1E\x10\x02\x94\x9C\x05\x1C" +
		"\x0F\x02\x95\x9C\x054\x1B\x02\x96\x9C\x05\"\x12\x02\x97\x9C\x050\x19\x02" +
		"\x98\x9C\x052\x1A\x02\x99\x9C\x05$\x13\x02\x9A\x9C\x05\x1A\x0E\x02\x9B" +
		"\x8E\x03\x02\x02\x02\x9B\x90\x03\x02\x02\x02\x9B\x93\x03\x02\x02\x02\x9B" +
		"\x94\x03\x02\x02\x02\x9B\x95\x03\x02\x02\x02\x9B\x96\x03\x02\x02\x02\x9B" +
		"\x97\x03\x02\x02\x02\x9B\x98\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9B" +
		"\x9A\x03\x02\x02\x02\x9C\xAF\x03\x02\x02\x02\x9D\x9E\f\x0F\x02\x02\x9E" +
		"\x9F\x05&\x14\x02\x9F\xA0\x05\x18\r\x10\xA0\xAE\x03\x02\x02\x02\xA1\xA2" +
		"\f\x0E\x02\x02\xA2\xA3\x05(\x15\x02\xA3\xA4\x05\x18\r\x0F\xA4\xAE\x03" +
		"\x02\x02\x02\xA5\xA6\f\r\x02\x02\xA6\xA7\x05*\x16\x02\xA7\xA8\x05\x18" +
		"\r\x0E\xA8\xAE\x03\x02\x02\x02\xA9\xAA\f\f\x02\x02\xAA\xAB\x05,\x17\x02" +
		"\xAB\xAC\x05\x18\r\r\xAC\xAE\x03\x02\x02\x02\xAD\x9D\x03\x02\x02\x02\xAD" +
		"\xA1\x03\x02\x02\x02\xAD\xA5\x03\x02\x02\x02\xAD\xA9\x03\x02\x02\x02\xAE" +
		"\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0" +
		"\x19\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB3\x07\f\x02\x02\xB3" +
		"\xB4\x05\x18\r\x02\xB4\xB5\x07\t\x02\x02\xB5\x1B\x03\x02\x02\x02\xB6\xB7" +
		"\x070\x02\x02\xB7\x1D\x03\x02\x02\x02\xB8\xB9\x071\x02\x02\xB9\x1F\x03" +
		"\x02\x02\x02\xBA\xBB\x07-\x02\x02\xBB!\x03\x02\x02\x02\xBC\xBD\x07/\x02" +
		"\x02\xBD#\x03\x02\x02\x02\xBE\xBF\x072\x02\x02\xBF%\x03\x02\x02\x02\xC0" +
		"\xC1\t\x05\x02\x02\xC1\'\x03\x02\x02\x02\xC2\xC3\t\x06\x02\x02\xC3)\x03" +
		"\x02\x02\x02\xC4\xC5\t\x07\x02\x02\xC5+\x03\x02\x02\x02\xC6\xC7\t\b\x02" +
		"\x02\xC7-\x03\x02\x02\x02\xC8\xC9\t\t\x02\x02\xC9/\x03\x02\x02\x02\xCA" +
		"\xCB\x07\x1F\x02\x02\xCB\xCC\x07\f\x02\x02\xCC\xCD\x056\x1C\x02\xCD\xCE" +
		"\x07\t\x02\x02\xCE\xCF\x07\x19\x02\x02\xCF\xD3\t\x02\x02\x02\xD0\xD1\x07" +
		"\x1A\x02\x02\xD1\xD2\t\n\x02\x02\xD2\xD4\x07\x1B\x02\x02\xD3\xD0\x03\x02" +
		"\x02\x02\xD3\xD4\x03\x02\x02\x02\xD41\x03\x02\x02\x02\xD5\xD6\x072\x02" +
		"\x02\xD6\xD7\x07\f\x02\x02\xD7\xD8\x05\x14\v\x02\xD8\xD9\x07\t\x02\x02" +
		"\xD93\x03\x02\x02\x02\xDA\xDB\t\v\x02\x02\xDB5\x03\x02\x02\x02\xDC\xDF" +
		"\x073\x02\x02\xDD\xE0\x072\x02\x02\xDE\xE0\x05\x10\t\x02\xDF\xDD\x03\x02" +
		"\x02\x02\xDF\xDE\x03\x02\x02\x02\xE0\xE2\x03\x02\x02\x02\xE1\xDC\x03\x02" +
		"\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02" +
		"\x02\x02\xE47\x03\x02\x02\x02\xE5\xE8\x073\x02\x02\xE6\xE9\x072\x02\x02" +
		"\xE7\xE9\x05\x12\n\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE7\x03\x02\x02\x02" +
		"\xE9\xEB\x03\x02\x02\x02\xEA\xE5\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02" +
		"\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED9\x03\x02\x02\x02" +
		"\x13DFPRciuz\x80\x9B\xAD\xAF\xD3\xDF\xE3\xE8\xEC";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FirebaseRulesParser.__ATN) {
			FirebaseRulesParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FirebaseRulesParser._serializedATN));
		}

		return FirebaseRulesParser.__ATN;
	}

}

export class ServiceContext extends ParserRuleContext {
	public Service(): TerminalNode { return this.getToken(FirebaseRulesParser.Service, 0); }
	public namespace(): NamespaceContext {
		return this.getRuleContext(0, NamespaceContext);
	}
	public namespaceBlock(): NamespaceBlockContext {
		return this.getRuleContext(0, NamespaceBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_service; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterService) {
			listener.enterService(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitService) {
			listener.exitService(this);
		}
	}
}


export class NamespaceContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.Identifier, 0); }
	public ObjectReference(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.ObjectReference, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_namespace; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterNamespace) {
			listener.enterNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitNamespace) {
			listener.exitNamespace(this);
		}
	}
}


export class NamespaceBlockContext extends ParserRuleContext {
	public matcher(): MatcherContext[];
	public matcher(i: number): MatcherContext;
	public matcher(i?: number): MatcherContext | MatcherContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MatcherContext);
		} else {
			return this.getRuleContext(i, MatcherContext);
		}
	}
	public Comment(): TerminalNode[];
	public Comment(i: number): TerminalNode;
	public Comment(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FirebaseRulesParser.Comment);
		} else {
			return this.getToken(FirebaseRulesParser.Comment, i);
		}
	}
	public function(): FunctionContext[];
	public function(i: number): FunctionContext;
	public function(i?: number): FunctionContext | FunctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionContext);
		} else {
			return this.getRuleContext(i, FunctionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_namespaceBlock; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterNamespaceBlock) {
			listener.enterNamespaceBlock(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitNamespaceBlock) {
			listener.exitNamespaceBlock(this);
		}
	}
}


export class MatchBlockContext extends ParserRuleContext {
	public allow(): AllowContext[];
	public allow(i: number): AllowContext;
	public allow(i?: number): AllowContext | AllowContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AllowContext);
		} else {
			return this.getRuleContext(i, AllowContext);
		}
	}
	public matcher(): MatcherContext[];
	public matcher(i: number): MatcherContext;
	public matcher(i?: number): MatcherContext | MatcherContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MatcherContext);
		} else {
			return this.getRuleContext(i, MatcherContext);
		}
	}
	public Comment(): TerminalNode[];
	public Comment(i: number): TerminalNode;
	public Comment(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FirebaseRulesParser.Comment);
		} else {
			return this.getToken(FirebaseRulesParser.Comment, i);
		}
	}
	public function(): FunctionContext[];
	public function(i: number): FunctionContext;
	public function(i?: number): FunctionContext | FunctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionContext);
		} else {
			return this.getRuleContext(i, FunctionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_matchBlock; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterMatchBlock) {
			listener.enterMatchBlock(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitMatchBlock) {
			listener.exitMatchBlock(this);
		}
	}
}


export class AllowKeyContext extends ParserRuleContext {
	public Read(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.Read, 0); }
	public Write(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.Write, 0); }
	public Update(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.Update, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.Delete, 0); }
	public Create(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.Create, 0); }
	public List(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.List, 0); }
	public Get(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.Get, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_allowKey; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterAllowKey) {
			listener.enterAllowKey(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitAllowKey) {
			listener.exitAllowKey(this);
		}
	}
}


export class MatcherContext extends ParserRuleContext {
	public Match(): TerminalNode { return this.getToken(FirebaseRulesParser.Match, 0); }
	public matchPath(): MatchPathContext {
		return this.getRuleContext(0, MatchPathContext);
	}
	public matchBlock(): MatchBlockContext {
		return this.getRuleContext(0, MatchBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_matcher; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterMatcher) {
			listener.enterMatcher(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitMatcher) {
			listener.exitMatcher(this);
		}
	}
}


export class AllowContext extends ParserRuleContext {
	public Allow(): TerminalNode { return this.getToken(FirebaseRulesParser.Allow, 0); }
	public allowKey(): AllowKeyContext[];
	public allowKey(i: number): AllowKeyContext;
	public allowKey(i?: number): AllowKeyContext | AllowKeyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AllowKeyContext);
		} else {
			return this.getRuleContext(i, AllowKeyContext);
		}
	}
	public If(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.If, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_allow; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterAllow) {
			listener.enterAllow(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitAllow) {
			listener.exitAllow(this);
		}
	}
}


export class PathVariableReplaceContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.Identifier, 0); }
	public String(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.String, 0); }
	public Number(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.Number, 0); }
	public ObjectReference(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.ObjectReference, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_pathVariableReplace; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterPathVariableReplace) {
			listener.enterPathVariableReplace(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitPathVariableReplace) {
			listener.exitPathVariableReplace(this);
		}
	}
}


export class PathVariableContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(FirebaseRulesParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_pathVariable; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterPathVariable) {
			listener.enterPathVariable(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitPathVariable) {
			listener.exitPathVariable(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FirebaseRulesParser.Identifier);
		} else {
			return this.getToken(FirebaseRulesParser.Identifier, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_arguments; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public Function(): TerminalNode { return this.getToken(FirebaseRulesParser.Function, 0); }
	public Identifier(): TerminalNode { return this.getToken(FirebaseRulesParser.Identifier, 0); }
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public Return(): TerminalNode { return this.getToken(FirebaseRulesParser.Return, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_function; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public nullValue(): NullValueContext | undefined {
		return this.tryGetRuleContext(0, NullValueContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public compareOperator(): CompareOperatorContext | undefined {
		return this.tryGetRuleContext(0, CompareOperatorContext);
	}
	public logicalOperator(): LogicalOperatorContext | undefined {
		return this.tryGetRuleContext(0, LogicalOperatorContext);
	}
	public binaryOperator(): BinaryOperatorContext | undefined {
		return this.tryGetRuleContext(0, BinaryOperatorContext);
	}
	public arithmeticOperator(): ArithmeticOperatorContext | undefined {
		return this.tryGetRuleContext(0, ArithmeticOperatorContext);
	}
	public unaryOperator(): UnaryOperatorContext | undefined {
		return this.tryGetRuleContext(0, UnaryOperatorContext);
	}
	public stringValue(): StringValueContext | undefined {
		return this.tryGetRuleContext(0, StringValueContext);
	}
	public numberValue(): NumberValueContext | undefined {
		return this.tryGetRuleContext(0, NumberValueContext);
	}
	public booleanValue(): BooleanValueContext | undefined {
		return this.tryGetRuleContext(0, BooleanValueContext);
	}
	public objectRef(): ObjectRefContext | undefined {
		return this.tryGetRuleContext(0, ObjectRefContext);
	}
	public get(): GetContext | undefined {
		return this.tryGetRuleContext(0, GetContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public identifierRef(): IdentifierRefContext | undefined {
		return this.tryGetRuleContext(0, IdentifierRefContext);
	}
	public parenthesisExpression(): ParenthesisExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParenthesisExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_expression; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class ParenthesisExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_parenthesisExpression; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterParenthesisExpression) {
			listener.enterParenthesisExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitParenthesisExpression) {
			listener.exitParenthesisExpression(this);
		}
	}
}


export class NumberValueContext extends ParserRuleContext {
	public Number(): TerminalNode { return this.getToken(FirebaseRulesParser.Number, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_numberValue; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterNumberValue) {
			listener.enterNumberValue(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitNumberValue) {
			listener.exitNumberValue(this);
		}
	}
}


export class StringValueContext extends ParserRuleContext {
	public String(): TerminalNode { return this.getToken(FirebaseRulesParser.String, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_stringValue; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterStringValue) {
			listener.enterStringValue(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitStringValue) {
			listener.exitStringValue(this);
		}
	}
}


export class NullValueContext extends ParserRuleContext {
	public Null(): TerminalNode { return this.getToken(FirebaseRulesParser.Null, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_nullValue; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterNullValue) {
			listener.enterNullValue(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitNullValue) {
			listener.exitNullValue(this);
		}
	}
}


export class ObjectRefContext extends ParserRuleContext {
	public ObjectReference(): TerminalNode { return this.getToken(FirebaseRulesParser.ObjectReference, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_objectRef; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterObjectRef) {
			listener.enterObjectRef(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitObjectRef) {
			listener.exitObjectRef(this);
		}
	}
}


export class IdentifierRefContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(FirebaseRulesParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_identifierRef; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterIdentifierRef) {
			listener.enterIdentifierRef(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitIdentifierRef) {
			listener.exitIdentifierRef(this);
		}
	}
}


export class CompareOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_compareOperator; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterCompareOperator) {
			listener.enterCompareOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitCompareOperator) {
			listener.exitCompareOperator(this);
		}
	}
}


export class LogicalOperatorContext extends ParserRuleContext {
	public LogicalAnd(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.LogicalAnd, 0); }
	public LogicalOr(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.LogicalOr, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_logicalOperator; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterLogicalOperator) {
			listener.enterLogicalOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitLogicalOperator) {
			listener.exitLogicalOperator(this);
		}
	}
}


export class BinaryOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_binaryOperator; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterBinaryOperator) {
			listener.enterBinaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitBinaryOperator) {
			listener.exitBinaryOperator(this);
		}
	}
}


export class ArithmeticOperatorContext extends ParserRuleContext {
	public Slash(): TerminalNode { return this.getToken(FirebaseRulesParser.Slash, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_arithmeticOperator; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterArithmeticOperator) {
			listener.enterArithmeticOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitArithmeticOperator) {
			listener.exitArithmeticOperator(this);
		}
	}
}


export class UnaryOperatorContext extends ParserRuleContext {
	public LogicalNot(): TerminalNode { return this.getToken(FirebaseRulesParser.LogicalNot, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_unaryOperator; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterUnaryOperator) {
			listener.enterUnaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitUnaryOperator) {
			listener.exitUnaryOperator(this);
		}
	}
}


export class GetContext extends ParserRuleContext {
	public Get(): TerminalNode { return this.getToken(FirebaseRulesParser.Get, 0); }
	public getPath(): GetPathContext {
		return this.getRuleContext(0, GetPathContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.Identifier, 0); }
	public ObjectReference(): TerminalNode[];
	public ObjectReference(i: number): TerminalNode;
	public ObjectReference(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FirebaseRulesParser.ObjectReference);
		} else {
			return this.getToken(FirebaseRulesParser.ObjectReference, i);
		}
	}
	public String(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.String, 0); }
	public Number(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.Number, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_get; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterGet) {
			listener.enterGet(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitGet) {
			listener.exitGet(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(FirebaseRulesParser.Identifier, 0); }
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
}


export class BooleanValueContext extends ParserRuleContext {
	public True(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.True, 0); }
	public False(): TerminalNode | undefined { return this.tryGetToken(FirebaseRulesParser.False, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_booleanValue; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterBooleanValue) {
			listener.enterBooleanValue(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitBooleanValue) {
			listener.exitBooleanValue(this);
		}
	}
}


export class GetPathContext extends ParserRuleContext {
	public Slash(): TerminalNode[];
	public Slash(i: number): TerminalNode;
	public Slash(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FirebaseRulesParser.Slash);
		} else {
			return this.getToken(FirebaseRulesParser.Slash, i);
		}
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FirebaseRulesParser.Identifier);
		} else {
			return this.getToken(FirebaseRulesParser.Identifier, i);
		}
	}
	public pathVariableReplace(): PathVariableReplaceContext[];
	public pathVariableReplace(i: number): PathVariableReplaceContext;
	public pathVariableReplace(i?: number): PathVariableReplaceContext | PathVariableReplaceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PathVariableReplaceContext);
		} else {
			return this.getRuleContext(i, PathVariableReplaceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_getPath; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterGetPath) {
			listener.enterGetPath(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitGetPath) {
			listener.exitGetPath(this);
		}
	}
}


export class MatchPathContext extends ParserRuleContext {
	public Slash(): TerminalNode[];
	public Slash(i: number): TerminalNode;
	public Slash(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FirebaseRulesParser.Slash);
		} else {
			return this.getToken(FirebaseRulesParser.Slash, i);
		}
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FirebaseRulesParser.Identifier);
		} else {
			return this.getToken(FirebaseRulesParser.Identifier, i);
		}
	}
	public pathVariable(): PathVariableContext[];
	public pathVariable(i: number): PathVariableContext;
	public pathVariable(i?: number): PathVariableContext | PathVariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PathVariableContext);
		} else {
			return this.getRuleContext(i, PathVariableContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirebaseRulesParser.RULE_matchPath; }
	// @Override
	public enterRule(listener: FirebaseRulesListener): void {
		if (listener.enterMatchPath) {
			listener.enterMatchPath(this);
		}
	}
	// @Override
	public exitRule(listener: FirebaseRulesListener): void {
		if (listener.exitMatchPath) {
			listener.exitMatchPath(this);
		}
	}
}


