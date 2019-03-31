// Generated from /Users/villevenalainen/react_src/firebase-rules-parser/src/FirebaseRules.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class FirebaseRulesLexer extends Lexer {
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "T__2", "CurlyOpen", "CurlyClose", "BracketOpen", "BracketClose", 
		"SquareBracketOpen", "SquareBracketClose", "Dot", "Colon", "Comma", "Semicolon", 
		"LessThan", "LessOrEqual", "GreaterOrEqual", "GreaterThan", "Equals", 
		"Unequal", "LogicalAnd", "LogicalOr", "LogicalNot", "BinaryAnd", "BinaryOr", 
		"ArithmeticAdd", "ArithmeticSub", "ArithmeticMul", "ArithmeticExp", "ArithmeticModus", 
		"Allow", "Match", "If", "Get", "True", "False", "List", "Create", "Update", 
		"Read", "Write", "Delete", "Function", "Return", "Null", "Service", "Number", 
		"String", "Identifier", "Slash", "WS", "Comment"
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


	public FirebaseRulesLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "FirebaseRules.g4"; }

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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\65\u0140\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t"+
		" \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t"+
		"+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64"+
		"\t\64\3\2\3\2\3\2\3\3\3\3\3\4\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b"+
		"\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3"+
		"\20\3\20\3\21\3\21\3\21\3\22\3\22\3\23\3\23\3\23\3\24\3\24\3\24\3\25\3"+
		"\25\3\25\3\26\3\26\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3"+
		"\33\3\34\3\34\3\35\3\35\3\36\3\36\3\37\3\37\3\37\3\37\3\37\3\37\3 \3 "+
		"\3 \3 \3 \3 \3!\3!\3!\3\"\3\"\3\"\3\"\3#\3#\3#\3#\3#\3$\3$\3$\3$\3$\3"+
		"$\3%\3%\3%\3%\3%\3&\3&\3&\3&\3&\3&\3&\3\'\3\'\3\'\3\'\3\'\3\'\3\'\3(\3"+
		"(\3(\3(\3(\3)\3)\3)\3)\3)\3)\3*\3*\3*\3*\3*\3*\3*\3+\3+\3+\3+\3+\3+\3"+
		"+\3+\3+\3,\3,\3,\3,\3,\3,\3,\3-\3-\3-\3-\3-\3.\3.\3.\3.\3.\3.\3.\3.\3"+
		"/\6/\u010d\n/\r/\16/\u010e\3/\3/\6/\u0113\n/\r/\16/\u0114\5/\u0117\n/"+
		"\3\60\3\60\7\60\u011b\n\60\f\60\16\60\u011e\13\60\3\60\3\60\3\60\7\60"+
		"\u0123\n\60\f\60\16\60\u0126\13\60\3\60\5\60\u0129\n\60\3\61\3\61\7\61"+
		"\u012d\n\61\f\61\16\61\u0130\13\61\3\62\3\62\3\63\3\63\3\63\3\63\3\64"+
		"\3\64\3\64\3\64\7\64\u013c\n\64\f\64\16\64\u013f\13\64\2\2\65\3\3\5\4"+
		"\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22"+
		"#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C"+
		"#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g\65\3\2\b\3\2))\3\2$$\5"+
		"\2C\\aac|\7\2//\62;C\\aac|\5\2\13\f\17\17\"\"\3\2\f\f\2\u0147\2\3\3\2"+
		"\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17"+
		"\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2"+
		"\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3"+
		"\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3"+
		"\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2"+
		"=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3"+
		"\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2"+
		"\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2"+
		"c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\3i\3\2\2\2\5l\3\2\2\2\7n\3\2\2\2\tq\3"+
		"\2\2\2\13s\3\2\2\2\ru\3\2\2\2\17w\3\2\2\2\21y\3\2\2\2\23{\3\2\2\2\25}"+
		"\3\2\2\2\27\177\3\2\2\2\31\u0081\3\2\2\2\33\u0083\3\2\2\2\35\u0085\3\2"+
		"\2\2\37\u0087\3\2\2\2!\u008a\3\2\2\2#\u008d\3\2\2\2%\u008f\3\2\2\2\'\u0092"+
		"\3\2\2\2)\u0095\3\2\2\2+\u0098\3\2\2\2-\u009b\3\2\2\2/\u009d\3\2\2\2\61"+
		"\u009f\3\2\2\2\63\u00a1\3\2\2\2\65\u00a3\3\2\2\2\67\u00a5\3\2\2\29\u00a7"+
		"\3\2\2\2;\u00a9\3\2\2\2=\u00ab\3\2\2\2?\u00b1\3\2\2\2A\u00b7\3\2\2\2C"+
		"\u00ba\3\2\2\2E\u00be\3\2\2\2G\u00c3\3\2\2\2I\u00c9\3\2\2\2K\u00ce\3\2"+
		"\2\2M\u00d5\3\2\2\2O\u00dc\3\2\2\2Q\u00e1\3\2\2\2S\u00e7\3\2\2\2U\u00ee"+
		"\3\2\2\2W\u00f7\3\2\2\2Y\u00fe\3\2\2\2[\u0103\3\2\2\2]\u010c\3\2\2\2_"+
		"\u0128\3\2\2\2a\u012a\3\2\2\2c\u0131\3\2\2\2e\u0133\3\2\2\2g\u0137\3\2"+
		"\2\2ij\7&\2\2jk\7*\2\2k\4\3\2\2\2lm\7?\2\2m\6\3\2\2\2no\7,\2\2op\7,\2"+
		"\2p\b\3\2\2\2qr\7}\2\2r\n\3\2\2\2st\7\177\2\2t\f\3\2\2\2uv\7*\2\2v\16"+
		"\3\2\2\2wx\7+\2\2x\20\3\2\2\2yz\7]\2\2z\22\3\2\2\2{|\7_\2\2|\24\3\2\2"+
		"\2}~\7\60\2\2~\26\3\2\2\2\177\u0080\7<\2\2\u0080\30\3\2\2\2\u0081\u0082"+
		"\7.\2\2\u0082\32\3\2\2\2\u0083\u0084\7=\2\2\u0084\34\3\2\2\2\u0085\u0086"+
		"\7>\2\2\u0086\36\3\2\2\2\u0087\u0088\7>\2\2\u0088\u0089\7?\2\2\u0089 "+
		"\3\2\2\2\u008a\u008b\7@\2\2\u008b\u008c\7?\2\2\u008c\"\3\2\2\2\u008d\u008e"+
		"\7@\2\2\u008e$\3\2\2\2\u008f\u0090\7?\2\2\u0090\u0091\7?\2\2\u0091&\3"+
		"\2\2\2\u0092\u0093\7#\2\2\u0093\u0094\7?\2\2\u0094(\3\2\2\2\u0095\u0096"+
		"\7(\2\2\u0096\u0097\7(\2\2\u0097*\3\2\2\2\u0098\u0099\7~\2\2\u0099\u009a"+
		"\7~\2\2\u009a,\3\2\2\2\u009b\u009c\7#\2\2\u009c.\3\2\2\2\u009d\u009e\7"+
		"(\2\2\u009e\60\3\2\2\2\u009f\u00a0\7~\2\2\u00a0\62\3\2\2\2\u00a1\u00a2"+
		"\7-\2\2\u00a2\64\3\2\2\2\u00a3\u00a4\7/\2\2\u00a4\66\3\2\2\2\u00a5\u00a6"+
		"\7,\2\2\u00a68\3\2\2\2\u00a7\u00a8\7`\2\2\u00a8:\3\2\2\2\u00a9\u00aa\7"+
		"\'\2\2\u00aa<\3\2\2\2\u00ab\u00ac\7c\2\2\u00ac\u00ad\7n\2\2\u00ad\u00ae"+
		"\7n\2\2\u00ae\u00af\7q\2\2\u00af\u00b0\7y\2\2\u00b0>\3\2\2\2\u00b1\u00b2"+
		"\7o\2\2\u00b2\u00b3\7c\2\2\u00b3\u00b4\7v\2\2\u00b4\u00b5\7e\2\2\u00b5"+
		"\u00b6\7j\2\2\u00b6@\3\2\2\2\u00b7\u00b8\7k\2\2\u00b8\u00b9\7h\2\2\u00b9"+
		"B\3\2\2\2\u00ba\u00bb\7i\2\2\u00bb\u00bc\7g\2\2\u00bc\u00bd\7v\2\2\u00bd"+
		"D\3\2\2\2\u00be\u00bf\7v\2\2\u00bf\u00c0\7t\2\2\u00c0\u00c1\7w\2\2\u00c1"+
		"\u00c2\7g\2\2\u00c2F\3\2\2\2\u00c3\u00c4\7h\2\2\u00c4\u00c5\7c\2\2\u00c5"+
		"\u00c6\7n\2\2\u00c6\u00c7\7u\2\2\u00c7\u00c8\7g\2\2\u00c8H\3\2\2\2\u00c9"+
		"\u00ca\7n\2\2\u00ca\u00cb\7k\2\2\u00cb\u00cc\7u\2\2\u00cc\u00cd\7v\2\2"+
		"\u00cdJ\3\2\2\2\u00ce\u00cf\7e\2\2\u00cf\u00d0\7t\2\2\u00d0\u00d1\7g\2"+
		"\2\u00d1\u00d2\7c\2\2\u00d2\u00d3\7v\2\2\u00d3\u00d4\7g\2\2\u00d4L\3\2"+
		"\2\2\u00d5\u00d6\7w\2\2\u00d6\u00d7\7r\2\2\u00d7\u00d8\7f\2\2\u00d8\u00d9"+
		"\7c\2\2\u00d9\u00da\7v\2\2\u00da\u00db\7g\2\2\u00dbN\3\2\2\2\u00dc\u00dd"+
		"\7t\2\2\u00dd\u00de\7g\2\2\u00de\u00df\7c\2\2\u00df\u00e0\7f\2\2\u00e0"+
		"P\3\2\2\2\u00e1\u00e2\7y\2\2\u00e2\u00e3\7t\2\2\u00e3\u00e4\7k\2\2\u00e4"+
		"\u00e5\7v\2\2\u00e5\u00e6\7g\2\2\u00e6R\3\2\2\2\u00e7\u00e8\7f\2\2\u00e8"+
		"\u00e9\7g\2\2\u00e9\u00ea\7n\2\2\u00ea\u00eb\7g\2\2\u00eb\u00ec\7v\2\2"+
		"\u00ec\u00ed\7g\2\2\u00edT\3\2\2\2\u00ee\u00ef\7h\2\2\u00ef\u00f0\7w\2"+
		"\2\u00f0\u00f1\7p\2\2\u00f1\u00f2\7e\2\2\u00f2\u00f3\7v\2\2\u00f3\u00f4"+
		"\7k\2\2\u00f4\u00f5\7q\2\2\u00f5\u00f6\7p\2\2\u00f6V\3\2\2\2\u00f7\u00f8"+
		"\7t\2\2\u00f8\u00f9\7g\2\2\u00f9\u00fa\7v\2\2\u00fa\u00fb\7w\2\2\u00fb"+
		"\u00fc\7t\2\2\u00fc\u00fd\7p\2\2\u00fdX\3\2\2\2\u00fe\u00ff\7p\2\2\u00ff"+
		"\u0100\7w\2\2\u0100\u0101\7n\2\2\u0101\u0102\7n\2\2\u0102Z\3\2\2\2\u0103"+
		"\u0104\7u\2\2\u0104\u0105\7g\2\2\u0105\u0106\7t\2\2\u0106\u0107\7x\2\2"+
		"\u0107\u0108\7k\2\2\u0108\u0109\7e\2\2\u0109\u010a\7g\2\2\u010a\\\3\2"+
		"\2\2\u010b\u010d\4\62;\2\u010c\u010b\3\2\2\2\u010d\u010e\3\2\2\2\u010e"+
		"\u010c\3\2\2\2\u010e\u010f\3\2\2\2\u010f\u0116\3\2\2\2\u0110\u0112\7\60"+
		"\2\2\u0111\u0113\4\62;\2\u0112\u0111\3\2\2\2\u0113\u0114\3\2\2\2\u0114"+
		"\u0112\3\2\2\2\u0114\u0115\3\2\2\2\u0115\u0117\3\2\2\2\u0116\u0110\3\2"+
		"\2\2\u0116\u0117\3\2\2\2\u0117^\3\2\2\2\u0118\u011c\7)\2\2\u0119\u011b"+
		"\n\2\2\2\u011a\u0119\3\2\2\2\u011b\u011e\3\2\2\2\u011c\u011a\3\2\2\2\u011c"+
		"\u011d\3\2\2\2\u011d\u011f\3\2\2\2\u011e\u011c\3\2\2\2\u011f\u0129\7)"+
		"\2\2\u0120\u0124\7$\2\2\u0121\u0123\n\3\2\2\u0122\u0121\3\2\2\2\u0123"+
		"\u0126\3\2\2\2\u0124\u0122\3\2\2\2\u0124\u0125\3\2\2\2\u0125\u0127\3\2"+
		"\2\2\u0126\u0124\3\2\2\2\u0127\u0129\7$\2\2\u0128\u0118\3\2\2\2\u0128"+
		"\u0120\3\2\2\2\u0129`\3\2\2\2\u012a\u012e\t\4\2\2\u012b\u012d\t\5\2\2"+
		"\u012c\u012b\3\2\2\2\u012d\u0130\3\2\2\2\u012e\u012c\3\2\2\2\u012e\u012f"+
		"\3\2\2\2\u012fb\3\2\2\2\u0130\u012e\3\2\2\2\u0131\u0132\7\61\2\2\u0132"+
		"d\3\2\2\2\u0133\u0134\t\6\2\2\u0134\u0135\3\2\2\2\u0135\u0136\b\63\2\2"+
		"\u0136f\3\2\2\2\u0137\u0138\7\61\2\2\u0138\u0139\7\61\2\2\u0139\u013d"+
		"\3\2\2\2\u013a\u013c\n\7\2\2\u013b\u013a\3\2\2\2\u013c\u013f\3\2\2\2\u013d"+
		"\u013b\3\2\2\2\u013d\u013e\3\2\2\2\u013eh\3\2\2\2\u013f\u013d\3\2\2\2"+
		"\13\2\u010e\u0114\u0116\u011c\u0124\u0128\u012e\u013d\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}