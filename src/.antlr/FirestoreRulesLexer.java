// Generated from /Users/villevenalainen/react_src/firebase-rules-parser/src/FirestoreRules.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class FirestoreRulesLexer extends Lexer {
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"Match", "If", "True", "False", "List", "Get", "Create", "Update", "Read", 
		"Write", "Delete", "Return", "Null", "ObjectReference", "Number", "String", 
		"Identifier", "Slash", "WS", "Comment"
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


	public FirestoreRulesLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "FirestoreRules.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2/\u0122\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3"+
		"\5\3\5\3\5\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\t\3\n\3\n\3\13\3"+
		"\13\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\17\3\17"+
		"\3\20\3\20\3\20\3\21\3\21\3\22\3\22\3\22\3\23\3\23\3\23\3\24\3\24\3\24"+
		"\3\25\3\25\3\26\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33"+
		"\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3\35\3\35\3\35\3\35\3\35\3\36\3\36"+
		"\3\36\3\36\3\36\3\36\3\37\3\37\3\37\3\37\3\37\3 \3 \3 \3 \3!\3!\3!\3!"+
		"\3!\3!\3!\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3#\3#\3#\3#\3#\3$\3$\3$\3$\3$\3"+
		"$\3%\3%\3%\3%\3%\3%\3%\3&\3&\3&\3&\3&\3&\3&\3\'\3\'\3\'\3\'\3\'\3(\3("+
		"\3(\6(\u00f3\n(\r(\16(\u00f4\3)\6)\u00f8\n)\r)\16)\u00f9\3)\3)\6)\u00fe"+
		"\n)\r)\16)\u00ff\5)\u0102\n)\3*\3*\7*\u0106\n*\f*\16*\u0109\13*\3*\3*"+
		"\3+\3+\7+\u010f\n+\f+\16+\u0112\13+\3,\3,\3-\3-\3-\3-\3.\3.\3.\3.\7.\u011e"+
		"\n.\f.\16.\u0121\13.\2\2/\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25"+
		"\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32"+
		"\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/\3\2\7\3\2"+
		"))\5\2C\\aac|\7\2//\62;C\\aac|\5\2\13\f\17\17\"\"\3\2\f\f\2\u0128\2\3"+
		"\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2"+
		"\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31"+
		"\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2"+
		"\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2"+
		"\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2"+
		"\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2"+
		"I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3"+
		"\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\3]\3\2\2\2\5e\3\2\2\2\7g\3\2\2"+
		"\2\ti\3\2\2\2\13o\3\2\2\2\rq\3\2\2\2\17s\3\2\2\2\21u\3\2\2\2\23x\3\2\2"+
		"\2\25z\3\2\2\2\27|\3\2\2\2\31\177\3\2\2\2\33\u0088\3\2\2\2\35\u008a\3"+
		"\2\2\2\37\u008c\3\2\2\2!\u008f\3\2\2\2#\u0091\3\2\2\2%\u0094\3\2\2\2\'"+
		"\u0097\3\2\2\2)\u009a\3\2\2\2+\u009c\3\2\2\2-\u009e\3\2\2\2/\u00a0\3\2"+
		"\2\2\61\u00a2\3\2\2\2\63\u00a4\3\2\2\2\65\u00a6\3\2\2\2\67\u00ac\3\2\2"+
		"\29\u00af\3\2\2\2;\u00b4\3\2\2\2=\u00ba\3\2\2\2?\u00bf\3\2\2\2A\u00c3"+
		"\3\2\2\2C\u00ca\3\2\2\2E\u00d1\3\2\2\2G\u00d6\3\2\2\2I\u00dc\3\2\2\2K"+
		"\u00e3\3\2\2\2M\u00ea\3\2\2\2O\u00ef\3\2\2\2Q\u00f7\3\2\2\2S\u0103\3\2"+
		"\2\2U\u010c\3\2\2\2W\u0113\3\2\2\2Y\u0115\3\2\2\2[\u0119\3\2\2\2]^\7u"+
		"\2\2^_\7g\2\2_`\7t\2\2`a\7x\2\2ab\7k\2\2bc\7e\2\2cd\7g\2\2d\4\3\2\2\2"+
		"ef\7}\2\2f\6\3\2\2\2gh\7\177\2\2h\b\3\2\2\2ij\7c\2\2jk\7n\2\2kl\7n\2\2"+
		"lm\7q\2\2mn\7y\2\2n\n\3\2\2\2op\7.\2\2p\f\3\2\2\2qr\7<\2\2r\16\3\2\2\2"+
		"st\7=\2\2t\20\3\2\2\2uv\7&\2\2vw\7*\2\2w\22\3\2\2\2xy\7+\2\2y\24\3\2\2"+
		"\2z{\7?\2\2{\26\3\2\2\2|}\7,\2\2}~\7,\2\2~\30\3\2\2\2\177\u0080\7h\2\2"+
		"\u0080\u0081\7w\2\2\u0081\u0082\7p\2\2\u0082\u0083\7e\2\2\u0083\u0084"+
		"\7v\2\2\u0084\u0085\7k\2\2\u0085\u0086\7q\2\2\u0086\u0087\7p\2\2\u0087"+
		"\32\3\2\2\2\u0088\u0089\7*\2\2\u0089\34\3\2\2\2\u008a\u008b\7>\2\2\u008b"+
		"\36\3\2\2\2\u008c\u008d\7?\2\2\u008d\u008e\7?\2\2\u008e \3\2\2\2\u008f"+
		"\u0090\7@\2\2\u0090\"\3\2\2\2\u0091\u0092\7#\2\2\u0092\u0093\7?\2\2\u0093"+
		"$\3\2\2\2\u0094\u0095\7(\2\2\u0095\u0096\7(\2\2\u0096&\3\2\2\2\u0097\u0098"+
		"\7~\2\2\u0098\u0099\7~\2\2\u0099(\3\2\2\2\u009a\u009b\7\60\2\2\u009b*"+
		"\3\2\2\2\u009c\u009d\7]\2\2\u009d,\3\2\2\2\u009e\u009f\7_\2\2\u009f.\3"+
		"\2\2\2\u00a0\u00a1\7-\2\2\u00a1\60\3\2\2\2\u00a2\u00a3\7/\2\2\u00a3\62"+
		"\3\2\2\2\u00a4\u00a5\7,\2\2\u00a5\64\3\2\2\2\u00a6\u00a7\7o\2\2\u00a7"+
		"\u00a8\7c\2\2\u00a8\u00a9\7v\2\2\u00a9\u00aa\7e\2\2\u00aa\u00ab\7j\2\2"+
		"\u00ab\66\3\2\2\2\u00ac\u00ad\7k\2\2\u00ad\u00ae\7h\2\2\u00ae8\3\2\2\2"+
		"\u00af\u00b0\7v\2\2\u00b0\u00b1\7t\2\2\u00b1\u00b2\7w\2\2\u00b2\u00b3"+
		"\7g\2\2\u00b3:\3\2\2\2\u00b4\u00b5\7h\2\2\u00b5\u00b6\7c\2\2\u00b6\u00b7"+
		"\7n\2\2\u00b7\u00b8\7u\2\2\u00b8\u00b9\7g\2\2\u00b9<\3\2\2\2\u00ba\u00bb"+
		"\7n\2\2\u00bb\u00bc\7k\2\2\u00bc\u00bd\7u\2\2\u00bd\u00be\7v\2\2\u00be"+
		">\3\2\2\2\u00bf\u00c0\7i\2\2\u00c0\u00c1\7g\2\2\u00c1\u00c2\7v\2\2\u00c2"+
		"@\3\2\2\2\u00c3\u00c4\7e\2\2\u00c4\u00c5\7t\2\2\u00c5\u00c6\7g\2\2\u00c6"+
		"\u00c7\7c\2\2\u00c7\u00c8\7v\2\2\u00c8\u00c9\7g\2\2\u00c9B\3\2\2\2\u00ca"+
		"\u00cb\7w\2\2\u00cb\u00cc\7r\2\2\u00cc\u00cd\7f\2\2\u00cd\u00ce\7c\2\2"+
		"\u00ce\u00cf\7v\2\2\u00cf\u00d0\7g\2\2\u00d0D\3\2\2\2\u00d1\u00d2\7t\2"+
		"\2\u00d2\u00d3\7g\2\2\u00d3\u00d4\7c\2\2\u00d4\u00d5\7f\2\2\u00d5F\3\2"+
		"\2\2\u00d6\u00d7\7y\2\2\u00d7\u00d8\7t\2\2\u00d8\u00d9\7k\2\2\u00d9\u00da"+
		"\7v\2\2\u00da\u00db\7g\2\2\u00dbH\3\2\2\2\u00dc\u00dd\7f\2\2\u00dd\u00de"+
		"\7g\2\2\u00de\u00df\7n\2\2\u00df\u00e0\7g\2\2\u00e0\u00e1\7v\2\2\u00e1"+
		"\u00e2\7g\2\2\u00e2J\3\2\2\2\u00e3\u00e4\7t\2\2\u00e4\u00e5\7g\2\2\u00e5"+
		"\u00e6\7v\2\2\u00e6\u00e7\7w\2\2\u00e7\u00e8\7t\2\2\u00e8\u00e9\7p\2\2"+
		"\u00e9L\3\2\2\2\u00ea\u00eb\7p\2\2\u00eb\u00ec\7w\2\2\u00ec\u00ed\7n\2"+
		"\2\u00ed\u00ee\7n\2\2\u00eeN\3\2\2\2\u00ef\u00f2\5U+\2\u00f0\u00f1\7\60"+
		"\2\2\u00f1\u00f3\5U+\2\u00f2\u00f0\3\2\2\2\u00f3\u00f4\3\2\2\2\u00f4\u00f2"+
		"\3\2\2\2\u00f4\u00f5\3\2\2\2\u00f5P\3\2\2\2\u00f6\u00f8\4\62;\2\u00f7"+
		"\u00f6\3\2\2\2\u00f8\u00f9\3\2\2\2\u00f9\u00f7\3\2\2\2\u00f9\u00fa\3\2"+
		"\2\2\u00fa\u0101\3\2\2\2\u00fb\u00fd\7\60\2\2\u00fc\u00fe\4\62;\2\u00fd"+
		"\u00fc\3\2\2\2\u00fe\u00ff\3\2\2\2\u00ff\u00fd\3\2\2\2\u00ff\u0100\3\2"+
		"\2\2\u0100\u0102\3\2\2\2\u0101\u00fb\3\2\2\2\u0101\u0102\3\2\2\2\u0102"+
		"R\3\2\2\2\u0103\u0107\7)\2\2\u0104\u0106\n\2\2\2\u0105\u0104\3\2\2\2\u0106"+
		"\u0109\3\2\2\2\u0107\u0105\3\2\2\2\u0107\u0108\3\2\2\2\u0108\u010a\3\2"+
		"\2\2\u0109\u0107\3\2\2\2\u010a\u010b\7)\2\2\u010bT\3\2\2\2\u010c\u0110"+
		"\t\3\2\2\u010d\u010f\t\4\2\2\u010e\u010d\3\2\2\2\u010f\u0112\3\2\2\2\u0110"+
		"\u010e\3\2\2\2\u0110\u0111\3\2\2\2\u0111V\3\2\2\2\u0112\u0110\3\2\2\2"+
		"\u0113\u0114\7\61\2\2\u0114X\3\2\2\2\u0115\u0116\t\5\2\2\u0116\u0117\3"+
		"\2\2\2\u0117\u0118\b-\2\2\u0118Z\3\2\2\2\u0119\u011a\7\61\2\2\u011a\u011b"+
		"\7\61\2\2\u011b\u011f\3\2\2\2\u011c\u011e\n\6\2\2\u011d\u011c\3\2\2\2"+
		"\u011e\u0121\3\2\2\2\u011f\u011d\3\2\2\2\u011f\u0120\3\2\2\2\u0120\\\3"+
		"\2\2\2\u0121\u011f\3\2\2\2\n\2\u00f4\u00f9\u00ff\u0101\u0107\u0110\u011f"+
		"\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}