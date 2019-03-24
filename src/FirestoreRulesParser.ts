// Generated from ./src/FirestoreRules.g4 by ANTLR 4.7.3-SNAPSHOT
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

import { FirestoreRulesListener } from './FirestoreRulesListener';
import { FirestoreRulesVisitor } from './FirestoreRulesVisitor';



// import { RuleVersion } from "antlr4ts/RuleVersion";

export class FirestoreRulesParser extends Parser {

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FirestoreRulesParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "FirestoreRules.g4"; }

	// @Override
	public get ruleNames(): string[] { return FirestoreRulesParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FirestoreRulesParser._serializedATN; }
	public static get _ATN(): ATN {
		if (!FirestoreRulesParser.__ATN) {
			FirestoreRulesParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FirestoreRulesParser._serializedATN));
		}

		return FirestoreRulesParser.__ATN;
	}
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
	public static readonly Match = 26;
	public static readonly If = 27;
	public static readonly True = 28;
	public static readonly False = 29;
	public static readonly List = 30;
	public static readonly Get = 31;
	public static readonly Create = 32;
	public static readonly Update = 33;
	public static readonly Read = 34;
	public static readonly Write = 35;
	public static readonly Delete = 36;
	public static readonly Return = 37;
	public static readonly Null = 38;
	public static readonly ObjectReference = 39;
	public static readonly Number = 40;
	public static readonly String = 41;
	public static readonly Identifier = 42;
	public static readonly Slash = 43;
	public static readonly WS = 44;
	public static readonly Comment = 45;
	public static readonly RULE_service = 0;
	public static readonly RULE_namespace = 1;
	public static readonly RULE_namespaceBlock = 2;
	public static readonly RULE_matchBlock = 3;
	public static readonly RULE_allowKey = 4;
	public static readonly RULE_allow = 5;
	public static readonly RULE_pathVariableReplace = 6;
	public static readonly RULE_pathVariable = 7;
	public static readonly RULE_arguments = 8;
	public static readonly RULE_function = 9;
	public static readonly RULE_expression = 10;
	public static readonly RULE_compareOperator = 11;
	public static readonly RULE_get = 12;
	public static readonly RULE_functionCall = 13;
	public static readonly RULE_booleanValue = 14;
	public static readonly RULE_getPath = 15;
	public static readonly RULE_matchPath = 16;
	public static readonly RULE_matcher = 17;
	public static readonly RULE_additionExp = 18;
	public static readonly RULE_multiplyExp = 19;
	public static readonly RULE_atomExp = 20;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"service", "namespace", "namespaceBlock", "matchBlock", "allowKey", "allow", 
		"pathVariableReplace", "pathVariable", "arguments", "function", "expression", 
		"compareOperator", "get", "functionCall", "booleanValue", "getPath", "matchPath", 
		"matcher", "additionExp", "multiplyExp", "atomExp",
	];

	public static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'service'", "'{'", "'}'", "'allow'", "','", "':'", "';'", 
		"'$('", "')'", "'='", "'**'", "'function'", "'('", "'<'", "'=='", "'>'", 
		"'!='", "'&&'", "'||'", "'.'", "'['", "']'", "'+'", "'-'", "'*'", "'match'", 
		"'if'", "'true'", "'false'", "'list'", "'get'", "'create'", "'update'", 
		"'read'", "'write'", "'delete'", "'return'", "'null'", undefined, undefined, 
		undefined, undefined, "'/'",
	];
	public static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "Match", "If", 
		"True", "False", "List", "Get", "Create", "Update", "Read", "Write", "Delete", 
		"Return", "Null", "ObjectReference", "Number", "String", "Identifier", 
		"Slash", "WS", "Comment",
	];

	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FirestoreRulesParser._LITERAL_NAMES, FirestoreRulesParser._SYMBOLIC_NAMES, []);

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/\xDA\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x047" +
		"\n\x04\f\x04\x0E\x04:\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x07\x05C\n\x05\f\x05\x0E\x05F\v\x05\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07P\n\x07\f\x07\x0E\x07" +
		"S\v\x07\x03\x07\x03\x07\x03\x07\x05\x07X\n\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x05\td\n\t\x03\t\x03\t\x03\n\x05" +
		"\ni\n\n\x03\n\x03\n\x07\nm\n\n\f\n\x0E\np\v\n\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\x8A\n\f\x03\f" +
		"\x03\f\x03\f\x03\f\x07\f\x90\n\f\f\f\x0E\f\x93\v\f\x03\r\x03\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"\xA0\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x11\x05\x11\xAC\n\x11\x06\x11\xAE\n\x11\r\x11\x0E\x11" +
		"\xAF\x03\x12\x03\x12\x03\x12\x05\x12\xB5\n\x12\x06\x12\xB7\n\x12\r\x12" +
		"\x0E\x12\xB8\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x07\x14\xC4\n\x14\f\x14\x0E\x14\xC7\v\x14\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x07\x15\xCE\n\x15\f\x15\x0E\x15\xD1\v\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\xD8\n\x16\x03\x16\x02\x02" +
		"\x03\x16\x17\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02\x02\b\x04\x02)),,\x03\x02 &\x03\x02),\x03\x02\x10\x15" +
		"\x03\x02)+\x03\x02\x1E\x1F\x02\xE3\x02,\x03\x02\x02\x02\x040\x03\x02\x02" +
		"\x02\x062\x03\x02\x02\x02\b=\x03\x02\x02\x02\nI\x03\x02\x02\x02\fK\x03" +
		"\x02\x02\x02\x0E[\x03\x02\x02\x02\x10_\x03\x02\x02\x02\x12h\x03\x02\x02" +
		"\x02\x14q\x03\x02\x02\x02\x16\x89\x03\x02\x02\x02\x18\x94\x03\x02\x02" +
		"\x02\x1A\x96\x03\x02\x02\x02\x1C\xA1\x03\x02\x02\x02\x1E\xA6\x03\x02\x02" +
		"\x02 \xAD\x03\x02\x02\x02\"\xB6\x03\x02\x02\x02$\xBA\x03\x02\x02\x02&" +
		"\xBE\x03\x02\x02\x02(\xC8\x03\x02\x02\x02*\xD7\x03\x02\x02\x02,-\x07\x03" +
		"\x02\x02-.\x05\x04\x03\x02./\x05\x06\x04\x02/\x03\x03\x02\x02\x0201\t" +
		"\x02\x02\x021\x05\x03\x02\x02\x0228\x07\x04\x02\x0237\x05$\x13\x0247\x07" +
		"/\x02\x0257\x05\x14\v\x0263\x03\x02\x02\x0264\x03\x02\x02\x0265\x03\x02" +
		"\x02\x027:\x03\x02\x02\x0286\x03\x02\x02\x0289\x03\x02\x02\x029;\x03\x02" +
		"\x02\x02:8\x03\x02\x02\x02;<\x07\x05\x02\x02<\x07\x03\x02\x02\x02=D\x07" +
		"\x04\x02\x02>C\x05\f\x07\x02?C\x05$\x13\x02@C\x07/\x02\x02AC\x05\x14\v" +
		"\x02B>\x03\x02\x02\x02B?\x03\x02\x02\x02B@\x03\x02\x02\x02BA\x03\x02\x02" +
		"\x02CF\x03\x02\x02\x02DB\x03\x02\x02\x02DE\x03\x02\x02\x02EG\x03\x02\x02" +
		"\x02FD\x03\x02\x02\x02GH\x07\x05\x02\x02H\t\x03\x02\x02\x02IJ\t\x03\x02" +
		"\x02J\v\x03\x02\x02\x02KL\x07\x06\x02\x02LQ\x05\n\x06\x02MN\x07\x07\x02" +
		"\x02NP\x05\n\x06\x02OM\x03\x02\x02\x02PS\x03\x02\x02\x02QO\x03\x02\x02" +
		"\x02QR\x03\x02\x02\x02RW\x03\x02\x02\x02SQ\x03\x02\x02\x02TU\x07\b\x02" +
		"\x02UV\x07\x1D\x02\x02VX\x05\x16\f\x02WT\x03\x02\x02\x02WX\x03\x02\x02" +
		"\x02XY\x03\x02\x02\x02YZ\x07\t\x02\x02Z\r\x03\x02\x02\x02[\\\x07\n\x02" +
		"\x02\\]\t\x04\x02\x02]^\x07\v\x02\x02^\x0F\x03\x02\x02\x02_`\x07\x04\x02" +
		"\x02`c\x07,\x02\x02ab\x07\f\x02\x02bd\x07\r\x02\x02ca\x03\x02\x02\x02" +
		"cd\x03\x02\x02\x02de\x03\x02\x02\x02ef\x07\x05\x02\x02f\x11\x03\x02\x02" +
		"\x02gi\x07,\x02\x02hg\x03\x02\x02\x02hi\x03\x02\x02\x02in\x03\x02\x02" +
		"\x02jk\x07\x07\x02\x02km\x07,\x02\x02lj\x03\x02\x02\x02mp\x03\x02\x02" +
		"\x02nl\x03\x02\x02\x02no\x03\x02\x02\x02o\x13\x03\x02\x02\x02pn\x03\x02" +
		"\x02\x02qr\x07\x0E\x02\x02rs\x07,\x02\x02st\x07\x0F\x02\x02tu\x05\x12" +
		"\n\x02uv\x07\v\x02\x02vw\x07\x04\x02\x02wx\x07\'\x02\x02xy\x05\x16\f\x02" +
		"yz\x07\t\x02\x02z{\x07\x05\x02\x02{\x15\x03\x02\x02\x02|}\b\f\x01\x02" +
		"}\x8A\x07(\x02\x02~\x8A\x07+\x02\x02\x7F\x8A\x07*\x02\x02\x80\x8A\x05" +
		"\x1E\x10\x02\x81\x8A\x07)\x02\x02\x82\x8A\x05\x1A\x0E\x02\x83\x8A\x05" +
		"\x1C\x0F\x02\x84\x8A\x07,\x02\x02\x85\x86\x07\x0F\x02\x02\x86\x87\x05" +
		"\x16\f\x02\x87\x88\x07\v\x02\x02\x88\x8A\x03\x02\x02\x02\x89|\x03\x02" +
		"\x02\x02\x89~\x03\x02\x02\x02\x89\x7F\x03\x02\x02\x02\x89\x80\x03\x02" +
		"\x02\x02\x89\x81\x03\x02\x02\x02\x89\x82\x03\x02\x02\x02\x89\x83\x03\x02" +
		"\x02\x02\x89\x84\x03\x02\x02\x02\x89\x85\x03\x02\x02\x02\x8A\x91\x03\x02" +
		"\x02\x02\x8B\x8C\f\v\x02\x02\x8C\x8D\x05\x18\r\x02\x8D\x8E\x05\x16\f\f" +
		"\x8E\x90\x03\x02\x02\x02\x8F\x8B\x03\x02\x02\x02\x90\x93\x03\x02\x02\x02" +
		"\x91\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x17\x03\x02\x02\x02" +
		"\x93\x91\x03\x02\x02\x02\x94\x95\t\x05\x02\x02\x95\x19\x03\x02\x02\x02" +
		"\x96\x97\x07!\x02\x02\x97\x98\x07\x0F\x02\x02\x98\x99\x05 \x11\x02\x99" +
		"\x9A\x07\v\x02\x02\x9A\x9B\x07\x16\x02\x02\x9B\x9F\t\x02\x02\x02\x9C\x9D" +
		"\x07\x17\x02\x02\x9D\x9E\t\x06\x02\x02\x9E\xA0\x07\x18\x02\x02\x9F\x9C" +
		"\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\x1B\x03\x02\x02\x02\xA1\xA2" +
		"\x07,\x02\x02\xA2\xA3\x07\x0F\x02\x02\xA3\xA4\x05\x12\n\x02\xA4\xA5\x07" +
		"\v\x02\x02\xA5\x1D\x03\x02\x02\x02\xA6\xA7\t\x07\x02\x02\xA7\x1F\x03\x02" +
		"\x02\x02\xA8\xAB\x07-\x02\x02\xA9\xAC\x07,\x02\x02\xAA\xAC\x05\x0E\b\x02" +
		"\xAB\xA9\x03\x02\x02\x02\xAB\xAA\x03\x02\x02\x02\xAC\xAE\x03\x02\x02\x02" +
		"\xAD\xA8\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02" +
		"\xAF\xB0\x03\x02\x02\x02\xB0!\x03\x02\x02\x02\xB1\xB4\x07-\x02\x02\xB2" +
		"\xB5\x07,\x02\x02\xB3\xB5\x05\x10\t\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB3" +
		"\x03\x02\x02\x02\xB5\xB7\x03\x02\x02\x02\xB6\xB1\x03\x02\x02\x02\xB7\xB8" +
		"\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9#" +
		"\x03\x02\x02\x02\xBA\xBB\x07\x1C\x02\x02\xBB\xBC\x05\"\x12\x02\xBC\xBD" +
		"\x05\b\x05\x02\xBD%\x03\x02\x02\x02\xBE\xC5\x05(\x15\x02\xBF\xC0\x07\x19" +
		"\x02\x02\xC0\xC4\x05(\x15\x02\xC1\xC2\x07\x1A\x02\x02\xC2\xC4\x05(\x15" +
		"\x02\xC3\xBF\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4\xC7\x03\x02\x02" +
		"\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\'\x03\x02\x02" +
		"\x02\xC7\xC5\x03\x02\x02\x02\xC8\xCF\x05*\x16\x02\xC9\xCA\x07\x1B\x02" +
		"\x02\xCA\xCE\x05*\x16\x02\xCB\xCC\x07-\x02\x02\xCC\xCE\x05*\x16\x02\xCD" +
		"\xC9\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF" +
		"\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0)\x03\x02\x02\x02\xD1" +
		"\xCF\x03\x02\x02\x02\xD2\xD8\x07*\x02\x02\xD3\xD4\x07\x0F\x02\x02\xD4" +
		"\xD5\x05&\x14\x02\xD5\xD6\x07\v\x02\x02\xD6\xD8\x03\x02\x02\x02\xD7\xD2" +
		"\x03\x02\x02\x02\xD7\xD3\x03\x02\x02\x02\xD8+\x03\x02\x02\x02\x1768BD" +
		"QWchn\x89\x91\x9F\xAB\xAF\xB4\xB8\xC3\xC5\xCD\xCF\xD7";
	public static __ATN: ATN;


	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FirestoreRulesParser._ATN, this);
	}
	// @RuleVersion(0)
	public service(): ServiceContext {
		const _localctx: ServiceContext = new ServiceContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FirestoreRulesParser.RULE_service);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.match(FirestoreRulesParser.T__0);
			this.state = 43;
			this.namespace();
			this.state = 44;
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
		const _localctx: NamespaceContext = new NamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FirestoreRulesParser.RULE_namespace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			_la = this._input.LA(1);
			if (!(_la === FirestoreRulesParser.ObjectReference || _la === FirestoreRulesParser.Identifier)) {
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
		const _localctx: NamespaceBlockContext = new NamespaceBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FirestoreRulesParser.RULE_namespaceBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			this.match(FirestoreRulesParser.T__1);
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FirestoreRulesParser.T__11 || _la === FirestoreRulesParser.Match || _la === FirestoreRulesParser.Comment) {
				{
				this.state = 52;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FirestoreRulesParser.Match:
					{
					this.state = 49;
					this.matcher();
					}
					break;
				case FirestoreRulesParser.Comment:
					{
					this.state = 50;
					this.match(FirestoreRulesParser.Comment);
					}
					break;
				case FirestoreRulesParser.T__11:
					{
					this.state = 51;
					this.function();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 57;
			this.match(FirestoreRulesParser.T__2);
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
		const _localctx: MatchBlockContext = new MatchBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FirestoreRulesParser.RULE_matchBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this.match(FirestoreRulesParser.T__1);
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FirestoreRulesParser.T__3) | (1 << FirestoreRulesParser.T__11) | (1 << FirestoreRulesParser.Match))) !== 0) || _la === FirestoreRulesParser.Comment) {
				{
				this.state = 64;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FirestoreRulesParser.T__3:
					{
					this.state = 60;
					this.allow();
					}
					break;
				case FirestoreRulesParser.Match:
					{
					this.state = 61;
					this.matcher();
					}
					break;
				case FirestoreRulesParser.Comment:
					{
					this.state = 62;
					this.match(FirestoreRulesParser.Comment);
					}
					break;
				case FirestoreRulesParser.T__11:
					{
					this.state = 63;
					this.function();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 68;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 69;
			this.match(FirestoreRulesParser.T__2);
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
		const _localctx: AllowKeyContext = new AllowKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FirestoreRulesParser.RULE_allowKey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			_la = this._input.LA(1);
			if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (FirestoreRulesParser.List - 30)) | (1 << (FirestoreRulesParser.Get - 30)) | (1 << (FirestoreRulesParser.Create - 30)) | (1 << (FirestoreRulesParser.Update - 30)) | (1 << (FirestoreRulesParser.Read - 30)) | (1 << (FirestoreRulesParser.Write - 30)) | (1 << (FirestoreRulesParser.Delete - 30)))) !== 0))) {
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
	public allow(): AllowContext {
		const _localctx: AllowContext = new AllowContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FirestoreRulesParser.RULE_allow);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.match(FirestoreRulesParser.T__3);
			this.state = 74;
			this.allowKey();
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FirestoreRulesParser.T__4) {
				{
				{
				this.state = 75;
				this.match(FirestoreRulesParser.T__4);
				this.state = 76;
				this.allowKey();
				}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FirestoreRulesParser.T__5) {
				{
				this.state = 82;
				this.match(FirestoreRulesParser.T__5);
				this.state = 83;
				this.match(FirestoreRulesParser.If);
				this.state = 84;
				this.expression(0);
				}
			}

			this.state = 87;
			this.match(FirestoreRulesParser.T__6);
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
		const _localctx: PathVariableReplaceContext = new PathVariableReplaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FirestoreRulesParser.RULE_pathVariableReplace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this.match(FirestoreRulesParser.T__7);
			this.state = 90;
			_la = this._input.LA(1);
			if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (FirestoreRulesParser.ObjectReference - 39)) | (1 << (FirestoreRulesParser.Number - 39)) | (1 << (FirestoreRulesParser.String - 39)) | (1 << (FirestoreRulesParser.Identifier - 39)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 91;
			this.match(FirestoreRulesParser.T__8);
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
		const _localctx: PathVariableContext = new PathVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FirestoreRulesParser.RULE_pathVariable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			this.match(FirestoreRulesParser.T__1);
			this.state = 94;
			this.match(FirestoreRulesParser.Identifier);
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FirestoreRulesParser.T__9) {
				{
				this.state = 95;
				this.match(FirestoreRulesParser.T__9);
				this.state = 96;
				this.match(FirestoreRulesParser.T__10);
				}
			}

			this.state = 99;
			this.match(FirestoreRulesParser.T__2);
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
		const _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FirestoreRulesParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FirestoreRulesParser.Identifier) {
				{
				this.state = 101;
				this.match(FirestoreRulesParser.Identifier);
				}
			}

			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FirestoreRulesParser.T__4) {
				{
				{
				this.state = 104;
				this.match(FirestoreRulesParser.T__4);
				this.state = 105;
				this.match(FirestoreRulesParser.Identifier);
				}
				}
				this.state = 110;
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
		const _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FirestoreRulesParser.RULE_function);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.match(FirestoreRulesParser.T__11);
			this.state = 112;
			this.match(FirestoreRulesParser.Identifier);
			this.state = 113;
			this.match(FirestoreRulesParser.T__12);
			this.state = 114;
			this.arguments();
			this.state = 115;
			this.match(FirestoreRulesParser.T__8);
			this.state = 116;
			this.match(FirestoreRulesParser.T__1);
			this.state = 117;
			this.match(FirestoreRulesParser.Return);
			this.state = 118;
			this.expression(0);
			this.state = 119;
			this.match(FirestoreRulesParser.T__6);
			this.state = 120;
			this.match(FirestoreRulesParser.T__2);
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

		const _parentctx: ParserRuleContext = this._ctx;
		const _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		const _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, FirestoreRulesParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 123;
				this.match(FirestoreRulesParser.Null);
				}
				break;

			case 2:
				{
				this.state = 124;
				this.match(FirestoreRulesParser.String);
				}
				break;

			case 3:
				{
				this.state = 125;
				this.match(FirestoreRulesParser.Number);
				}
				break;

			case 4:
				{
				this.state = 126;
				this.booleanValue();
				}
				break;

			case 5:
				{
				this.state = 127;
				this.match(FirestoreRulesParser.ObjectReference);
				}
				break;

			case 6:
				{
				this.state = 128;
				this.get();
				}
				break;

			case 7:
				{
				this.state = 129;
				this.functionCall();
				}
				break;

			case 8:
				{
				this.state = 130;
				this.match(FirestoreRulesParser.Identifier);
				}
				break;

			case 9:
				{
				this.state = 131;
				this.match(FirestoreRulesParser.T__12);
				this.state = 132;
				this.expression(0);
				this.state = 133;
				this.match(FirestoreRulesParser.T__8);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 143;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, FirestoreRulesParser.RULE_expression);
					this.state = 137;
					if (!(this.precpred(this._ctx, 9))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
					}
					this.state = 138;
					this.compareOperator();
					this.state = 139;
					this.expression(10);
					}
					}
				}
				this.state = 145;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
	public compareOperator(): CompareOperatorContext {
		const _localctx: CompareOperatorContext = new CompareOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FirestoreRulesParser.RULE_compareOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FirestoreRulesParser.T__13) | (1 << FirestoreRulesParser.T__14) | (1 << FirestoreRulesParser.T__15) | (1 << FirestoreRulesParser.T__16) | (1 << FirestoreRulesParser.T__17) | (1 << FirestoreRulesParser.T__18))) !== 0))) {
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
		const _localctx: GetContext = new GetContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FirestoreRulesParser.RULE_get);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.match(FirestoreRulesParser.Get);
			this.state = 149;
			this.match(FirestoreRulesParser.T__12);
			this.state = 150;
			this.getPath();
			this.state = 151;
			this.match(FirestoreRulesParser.T__8);
			this.state = 152;
			this.match(FirestoreRulesParser.T__19);
			{
			this.state = 153;
			_la = this._input.LA(1);
			if (!(_la === FirestoreRulesParser.ObjectReference || _la === FirestoreRulesParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 157;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 154;
				this.match(FirestoreRulesParser.T__20);
				this.state = 155;
				_la = this._input.LA(1);
				if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (FirestoreRulesParser.ObjectReference - 39)) | (1 << (FirestoreRulesParser.Number - 39)) | (1 << (FirestoreRulesParser.String - 39)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 156;
				this.match(FirestoreRulesParser.T__21);
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
		const _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FirestoreRulesParser.RULE_functionCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(FirestoreRulesParser.Identifier);
			this.state = 160;
			this.match(FirestoreRulesParser.T__12);
			this.state = 161;
			this.arguments();
			this.state = 162;
			this.match(FirestoreRulesParser.T__8);
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
		const _localctx: BooleanValueContext = new BooleanValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FirestoreRulesParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			_la = this._input.LA(1);
			if (!(_la === FirestoreRulesParser.True || _la === FirestoreRulesParser.False)) {
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
		const _localctx: GetPathContext = new GetPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, FirestoreRulesParser.RULE_getPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 166;
				this.match(FirestoreRulesParser.Slash);
				this.state = 169;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FirestoreRulesParser.Identifier:
					{
					this.state = 167;
					this.match(FirestoreRulesParser.Identifier);
					}
					break;
				case FirestoreRulesParser.T__7:
					{
					this.state = 168;
					this.pathVariableReplace();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FirestoreRulesParser.Slash);
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
		const _localctx: MatchPathContext = new MatchPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, FirestoreRulesParser.RULE_matchPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 175;
				this.match(FirestoreRulesParser.Slash);
				this.state = 178;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FirestoreRulesParser.Identifier:
					{
					this.state = 176;
					this.match(FirestoreRulesParser.Identifier);
					}
					break;
				case FirestoreRulesParser.T__1:
					{
					this.state = 177;
					this.pathVariable();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FirestoreRulesParser.Slash);
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
		const _localctx: MatcherContext = new MatcherContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, FirestoreRulesParser.RULE_matcher);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(FirestoreRulesParser.Match);
			this.state = 185;
			this.matchPath();
			this.state = 186;
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
	public additionExp(): AdditionExpContext {
		const _localctx: AdditionExpContext = new AdditionExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, FirestoreRulesParser.RULE_additionExp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			this.multiplyExp();
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FirestoreRulesParser.T__22 || _la === FirestoreRulesParser.T__23) {
				{
				this.state = 193;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FirestoreRulesParser.T__22:
					{
					this.state = 189;
					this.match(FirestoreRulesParser.T__22);
					this.state = 190;
					this.multiplyExp();
					}
					break;
				case FirestoreRulesParser.T__23:
					{
					this.state = 191;
					this.match(FirestoreRulesParser.T__23);
					this.state = 192;
					this.multiplyExp();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 197;
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
	public multiplyExp(): MultiplyExpContext {
		const _localctx: MultiplyExpContext = new MultiplyExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, FirestoreRulesParser.RULE_multiplyExp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.atomExp();
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FirestoreRulesParser.T__24 || _la === FirestoreRulesParser.Slash) {
				{
				this.state = 203;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FirestoreRulesParser.T__24:
					{
					this.state = 199;
					this.match(FirestoreRulesParser.T__24);
					this.state = 200;
					this.atomExp();
					}
					break;
				case FirestoreRulesParser.Slash:
					{
					this.state = 201;
					this.match(FirestoreRulesParser.Slash);
					this.state = 202;
					this.atomExp();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 207;
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
	public atomExp(): AtomExpContext {
		const _localctx: AtomExpContext = new AtomExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, FirestoreRulesParser.RULE_atomExp);
		try {
			this.state = 213;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FirestoreRulesParser.Number:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 208;
				this.match(FirestoreRulesParser.Number);
				}
				break;
			case FirestoreRulesParser.T__12:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 209;
				this.match(FirestoreRulesParser.T__12);
				this.state = 210;
				this.additionExp();
				this.state = 211;
				this.match(FirestoreRulesParser.T__8);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
		case 10:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

}

export class ServiceContext extends ParserRuleContext {
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_service; }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	public namespace(): NamespaceContext {
		return this.getRuleContext(0, NamespaceContext);
	}
	public namespaceBlock(): NamespaceBlockContext {
		return this.getRuleContext(0, NamespaceBlockContext);
	}
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterService) {
			listener.enterService(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitService) {
			listener.exitService(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitService) {
			return visitor.visitService(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceContext extends ParserRuleContext {
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_namespace; }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.Identifier, 0); }
	public ObjectReference(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.ObjectReference, 0); }
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterNamespace) {
			listener.enterNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitNamespace) {
			listener.exitNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitNamespace) {
			return visitor.visitNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceBlockContext extends ParserRuleContext {
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_namespaceBlock; }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
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
			return this.getTokens(FirestoreRulesParser.Comment);
		} else {
			return this.getToken(FirestoreRulesParser.Comment, i);
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
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterNamespaceBlock) {
			listener.enterNamespaceBlock(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitNamespaceBlock) {
			listener.exitNamespaceBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitNamespaceBlock) {
			return visitor.visitNamespaceBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatchBlockContext extends ParserRuleContext {
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_matchBlock; }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
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
			return this.getTokens(FirestoreRulesParser.Comment);
		} else {
			return this.getToken(FirestoreRulesParser.Comment, i);
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
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterMatchBlock) {
			listener.enterMatchBlock(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitMatchBlock) {
			listener.exitMatchBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitMatchBlock) {
			return visitor.visitMatchBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AllowKeyContext extends ParserRuleContext {
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_allowKey; }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	public Read(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.Read, 0); }
	public Write(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.Write, 0); }
	public Update(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.Update, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.Delete, 0); }
	public Create(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.Create, 0); }
	public List(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.List, 0); }
	public Get(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.Get, 0); }
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterAllowKey) {
			listener.enterAllowKey(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitAllowKey) {
			listener.exitAllowKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitAllowKey) {
			return visitor.visitAllowKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AllowContext extends ParserRuleContext {
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_allow; }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	public allowKey(): AllowKeyContext[];
	public allowKey(i: number): AllowKeyContext;
	public allowKey(i?: number): AllowKeyContext | AllowKeyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AllowKeyContext);
		} else {
			return this.getRuleContext(i, AllowKeyContext);
		}
	}
	public If(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.If, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterAllow) {
			listener.enterAllow(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitAllow) {
			listener.exitAllow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitAllow) {
			return visitor.visitAllow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathVariableReplaceContext extends ParserRuleContext {
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_pathVariableReplace; }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.Identifier, 0); }
	public String(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.String, 0); }
	public Number(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.Number, 0); }
	public ObjectReference(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.ObjectReference, 0); }
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterPathVariableReplace) {
			listener.enterPathVariableReplace(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitPathVariableReplace) {
			listener.exitPathVariableReplace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitPathVariableReplace) {
			return visitor.visitPathVariableReplace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathVariableContext extends ParserRuleContext {
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_pathVariable; }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	public Identifier(): TerminalNode { return this.getToken(FirestoreRulesParser.Identifier, 0); }
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterPathVariable) {
			listener.enterPathVariable(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitPathVariable) {
			listener.exitPathVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitPathVariable) {
			return visitor.visitPathVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_arguments; }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FirestoreRulesParser.Identifier);
		} else {
			return this.getToken(FirestoreRulesParser.Identifier, i);
		}
	}
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_function; }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	public Identifier(): TerminalNode { return this.getToken(FirestoreRulesParser.Identifier, 0); }
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public Return(): TerminalNode { return this.getToken(FirestoreRulesParser.Return, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_expression; }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	public Null(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.Null, 0); }
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
	public String(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.String, 0); }
	public Number(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.Number, 0); }
	public booleanValue(): BooleanValueContext | undefined {
		return this.tryGetRuleContext(0, BooleanValueContext);
	}
	public ObjectReference(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.ObjectReference, 0); }
	public get(): GetContext | undefined {
		return this.tryGetRuleContext(0, GetContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.Identifier, 0); }
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompareOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_compareOperator; }
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterCompareOperator) {
			listener.enterCompareOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitCompareOperator) {
			listener.exitCompareOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitCompareOperator) {
			return visitor.visitCompareOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetContext extends ParserRuleContext {
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_get; }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	public Get(): TerminalNode { return this.getToken(FirestoreRulesParser.Get, 0); }
	public getPath(): GetPathContext {
		return this.getRuleContext(0, GetPathContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.Identifier, 0); }
	public ObjectReference(): TerminalNode[];
	public ObjectReference(i: number): TerminalNode;
	public ObjectReference(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FirestoreRulesParser.ObjectReference);
		} else {
			return this.getToken(FirestoreRulesParser.ObjectReference, i);
		}
	}
	public String(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.String, 0); }
	public Number(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.Number, 0); }
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterGet) {
			listener.enterGet(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitGet) {
			listener.exitGet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitGet) {
			return visitor.visitGet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_functionCall; }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	public Identifier(): TerminalNode { return this.getToken(FirestoreRulesParser.Identifier, 0); }
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanValueContext extends ParserRuleContext {
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_booleanValue; }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	public True(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.True, 0); }
	public False(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.False, 0); }
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterBooleanValue) {
			listener.enterBooleanValue(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitBooleanValue) {
			listener.exitBooleanValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitBooleanValue) {
			return visitor.visitBooleanValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetPathContext extends ParserRuleContext {
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_getPath; }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	public Slash(): TerminalNode[];
	public Slash(i: number): TerminalNode;
	public Slash(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FirestoreRulesParser.Slash);
		} else {
			return this.getToken(FirestoreRulesParser.Slash, i);
		}
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FirestoreRulesParser.Identifier);
		} else {
			return this.getToken(FirestoreRulesParser.Identifier, i);
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
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterGetPath) {
			listener.enterGetPath(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitGetPath) {
			listener.exitGetPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitGetPath) {
			return visitor.visitGetPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatchPathContext extends ParserRuleContext {
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_matchPath; }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	public Slash(): TerminalNode[];
	public Slash(i: number): TerminalNode;
	public Slash(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FirestoreRulesParser.Slash);
		} else {
			return this.getToken(FirestoreRulesParser.Slash, i);
		}
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FirestoreRulesParser.Identifier);
		} else {
			return this.getToken(FirestoreRulesParser.Identifier, i);
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
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterMatchPath) {
			listener.enterMatchPath(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitMatchPath) {
			listener.exitMatchPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitMatchPath) {
			return visitor.visitMatchPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatcherContext extends ParserRuleContext {
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_matcher; }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	public Match(): TerminalNode { return this.getToken(FirestoreRulesParser.Match, 0); }
	public matchPath(): MatchPathContext {
		return this.getRuleContext(0, MatchPathContext);
	}
	public matchBlock(): MatchBlockContext {
		return this.getRuleContext(0, MatchBlockContext);
	}
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterMatcher) {
			listener.enterMatcher(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitMatcher) {
			listener.exitMatcher(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitMatcher) {
			return visitor.visitMatcher(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditionExpContext extends ParserRuleContext {
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_additionExp; }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	public multiplyExp(): MultiplyExpContext[];
	public multiplyExp(i: number): MultiplyExpContext;
	public multiplyExp(i?: number): MultiplyExpContext | MultiplyExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplyExpContext);
		} else {
			return this.getRuleContext(i, MultiplyExpContext);
		}
	}
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterAdditionExp) {
			listener.enterAdditionExp(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitAdditionExp) {
			listener.exitAdditionExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitAdditionExp) {
			return visitor.visitAdditionExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplyExpContext extends ParserRuleContext {
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_multiplyExp; }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	public atomExp(): AtomExpContext[];
	public atomExp(i: number): AtomExpContext;
	public atomExp(i?: number): AtomExpContext | AtomExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtomExpContext);
		} else {
			return this.getRuleContext(i, AtomExpContext);
		}
	}
	public Slash(): TerminalNode[];
	public Slash(i: number): TerminalNode;
	public Slash(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FirestoreRulesParser.Slash);
		} else {
			return this.getToken(FirestoreRulesParser.Slash, i);
		}
	}
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterMultiplyExp) {
			listener.enterMultiplyExp(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitMultiplyExp) {
			listener.exitMultiplyExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitMultiplyExp) {
			return visitor.visitMultiplyExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomExpContext extends ParserRuleContext {
	// @Override
	public get ruleIndex(): number { return FirestoreRulesParser.RULE_atomExp; }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	public Number(): TerminalNode | undefined { return this.tryGetToken(FirestoreRulesParser.Number, 0); }
	public additionExp(): AdditionExpContext | undefined {
		return this.tryGetRuleContext(0, AdditionExpContext);
	}
	// @Override
	public enterRule(listener: FirestoreRulesListener): void {
		if (listener.enterAtomExp) {
			listener.enterAtomExp(this);
		}
	}
	// @Override
	public exitRule(listener: FirestoreRulesListener): void {
		if (listener.exitAtomExp) {
			listener.exitAtomExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FirestoreRulesVisitor<Result>): Result {
		if (visitor.visitAtomExp) {
			return visitor.visitAtomExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


