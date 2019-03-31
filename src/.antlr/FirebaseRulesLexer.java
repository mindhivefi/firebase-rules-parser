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
		T__0=1, T__1=2, CurlyOpen=3, CurlyClose=4, BracketOpen=5, BracketClose=6, 
		PathVariableBracket=7, SquareBracketOpen=8, SquareBracketClose=9, Dot=10, 
		Colon=11, Comma=12, Semicolon=13, LessThan=14, LessOrEqual=15, GreaterOrEqual=16, 
		GreaterThan=17, Equals=18, Unequal=19, LogicalAnd=20, LogicalOr=21, LogicalNot=22, 
		BinaryAnd=23, BinaryOr=24, ArithmeticAdd=25, ArithmeticSub=26, ArithmeticMul=27, 
		ArithmeticExp=28, ArithmeticModus=29, Allow=30, Match=31, If=32, Get=33, 
		Exists=34, True=35, False=36, List=37, Create=38, Update=39, Read=40, 
		Write=41, Delete=42, Function=43, Return=44, Null=45, Service=46, Number=47, 
		String=48, Identifier=49, Slash=50, WS=51, Comment=52;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "CurlyOpen", "CurlyClose", "BracketOpen", "BracketClose", 
		"PathVariableBracket", "SquareBracketOpen", "SquareBracketClose", "Dot", 
		"Colon", "Comma", "Semicolon", "LessThan", "LessOrEqual", "GreaterOrEqual", 
		"GreaterThan", "Equals", "Unequal", "LogicalAnd", "LogicalOr", "LogicalNot", 
		"BinaryAnd", "BinaryOr", "ArithmeticAdd", "ArithmeticSub", "ArithmeticMul", 
		"ArithmeticExp", "ArithmeticModus", "Allow", "Match", "If", "Get", "Exists", 
		"True", "False", "List", "Create", "Update", "Read", "Write", "Delete", 
		"Function", "Return", "Null", "Service", "Number", "String", "Identifier", 
		"Slash", "WS", "Comment"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\66\u0149\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t"+
		" \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t"+
		"+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64"+
		"\t\64\4\65\t\65\3\2\3\2\3\3\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3"+
		"\b\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3"+
		"\17\3\20\3\20\3\20\3\21\3\21\3\21\3\22\3\22\3\23\3\23\3\23\3\24\3\24\3"+
		"\24\3\25\3\25\3\25\3\26\3\26\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3\32\3"+
		"\32\3\33\3\33\3\34\3\34\3\35\3\35\3\36\3\36\3\37\3\37\3\37\3\37\3\37\3"+
		"\37\3 \3 \3 \3 \3 \3 \3!\3!\3!\3\"\3\"\3\"\3\"\3#\3#\3#\3#\3#\3#\3#\3"+
		"$\3$\3$\3$\3$\3%\3%\3%\3%\3%\3%\3&\3&\3&\3&\3&\3\'\3\'\3\'\3\'\3\'\3\'"+
		"\3\'\3(\3(\3(\3(\3(\3(\3(\3)\3)\3)\3)\3)\3*\3*\3*\3*\3*\3*\3+\3+\3+\3"+
		"+\3+\3+\3+\3,\3,\3,\3,\3,\3,\3,\3,\3,\3-\3-\3-\3-\3-\3-\3-\3.\3.\3.\3"+
		".\3.\3/\3/\3/\3/\3/\3/\3/\3/\3\60\6\60\u0116\n\60\r\60\16\60\u0117\3\60"+
		"\3\60\6\60\u011c\n\60\r\60\16\60\u011d\5\60\u0120\n\60\3\61\3\61\7\61"+
		"\u0124\n\61\f\61\16\61\u0127\13\61\3\61\3\61\3\61\7\61\u012c\n\61\f\61"+
		"\16\61\u012f\13\61\3\61\5\61\u0132\n\61\3\62\3\62\7\62\u0136\n\62\f\62"+
		"\16\62\u0139\13\62\3\63\3\63\3\64\3\64\3\64\3\64\3\65\3\65\3\65\3\65\7"+
		"\65\u0145\n\65\f\65\16\65\u0148\13\65\2\2\66\3\3\5\4\7\5\t\6\13\7\r\b"+
		"\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26"+
		"+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S"+
		"+U,W-Y.[/]\60_\61a\62c\63e\64g\65i\66\3\2\b\3\2))\3\2$$\5\2C\\aac|\7\2"+
		"//\62;C\\aac|\5\2\13\f\17\17\"\"\3\2\f\f\2\u0150\2\3\3\2\2\2\2\5\3\2\2"+
		"\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21"+
		"\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2"+
		"\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3"+
		"\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3"+
		"\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3"+
		"\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2"+
		"\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2"+
		"Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3"+
		"\2\2\2\2g\3\2\2\2\2i\3\2\2\2\3k\3\2\2\2\5m\3\2\2\2\7p\3\2\2\2\tr\3\2\2"+
		"\2\13t\3\2\2\2\rv\3\2\2\2\17x\3\2\2\2\21{\3\2\2\2\23}\3\2\2\2\25\177\3"+
		"\2\2\2\27\u0081\3\2\2\2\31\u0083\3\2\2\2\33\u0085\3\2\2\2\35\u0087\3\2"+
		"\2\2\37\u0089\3\2\2\2!\u008c\3\2\2\2#\u008f\3\2\2\2%\u0091\3\2\2\2\'\u0094"+
		"\3\2\2\2)\u0097\3\2\2\2+\u009a\3\2\2\2-\u009d\3\2\2\2/\u009f\3\2\2\2\61"+
		"\u00a1\3\2\2\2\63\u00a3\3\2\2\2\65\u00a5\3\2\2\2\67\u00a7\3\2\2\29\u00a9"+
		"\3\2\2\2;\u00ab\3\2\2\2=\u00ad\3\2\2\2?\u00b3\3\2\2\2A\u00b9\3\2\2\2C"+
		"\u00bc\3\2\2\2E\u00c0\3\2\2\2G\u00c7\3\2\2\2I\u00cc\3\2\2\2K\u00d2\3\2"+
		"\2\2M\u00d7\3\2\2\2O\u00de\3\2\2\2Q\u00e5\3\2\2\2S\u00ea\3\2\2\2U\u00f0"+
		"\3\2\2\2W\u00f7\3\2\2\2Y\u0100\3\2\2\2[\u0107\3\2\2\2]\u010c\3\2\2\2_"+
		"\u0115\3\2\2\2a\u0131\3\2\2\2c\u0133\3\2\2\2e\u013a\3\2\2\2g\u013c\3\2"+
		"\2\2i\u0140\3\2\2\2kl\7?\2\2l\4\3\2\2\2mn\7,\2\2no\7,\2\2o\6\3\2\2\2p"+
		"q\7}\2\2q\b\3\2\2\2rs\7\177\2\2s\n\3\2\2\2tu\7*\2\2u\f\3\2\2\2vw\7+\2"+
		"\2w\16\3\2\2\2xy\7&\2\2yz\7*\2\2z\20\3\2\2\2{|\7]\2\2|\22\3\2\2\2}~\7"+
		"_\2\2~\24\3\2\2\2\177\u0080\7\60\2\2\u0080\26\3\2\2\2\u0081\u0082\7<\2"+
		"\2\u0082\30\3\2\2\2\u0083\u0084\7.\2\2\u0084\32\3\2\2\2\u0085\u0086\7"+
		"=\2\2\u0086\34\3\2\2\2\u0087\u0088\7>\2\2\u0088\36\3\2\2\2\u0089\u008a"+
		"\7>\2\2\u008a\u008b\7?\2\2\u008b \3\2\2\2\u008c\u008d\7@\2\2\u008d\u008e"+
		"\7?\2\2\u008e\"\3\2\2\2\u008f\u0090\7@\2\2\u0090$\3\2\2\2\u0091\u0092"+
		"\7?\2\2\u0092\u0093\7?\2\2\u0093&\3\2\2\2\u0094\u0095\7#\2\2\u0095\u0096"+
		"\7?\2\2\u0096(\3\2\2\2\u0097\u0098\7(\2\2\u0098\u0099\7(\2\2\u0099*\3"+
		"\2\2\2\u009a\u009b\7~\2\2\u009b\u009c\7~\2\2\u009c,\3\2\2\2\u009d\u009e"+
		"\7#\2\2\u009e.\3\2\2\2\u009f\u00a0\7(\2\2\u00a0\60\3\2\2\2\u00a1\u00a2"+
		"\7~\2\2\u00a2\62\3\2\2\2\u00a3\u00a4\7-\2\2\u00a4\64\3\2\2\2\u00a5\u00a6"+
		"\7/\2\2\u00a6\66\3\2\2\2\u00a7\u00a8\7,\2\2\u00a88\3\2\2\2\u00a9\u00aa"+
		"\7`\2\2\u00aa:\3\2\2\2\u00ab\u00ac\7\'\2\2\u00ac<\3\2\2\2\u00ad\u00ae"+
		"\7c\2\2\u00ae\u00af\7n\2\2\u00af\u00b0\7n\2\2\u00b0\u00b1\7q\2\2\u00b1"+
		"\u00b2\7y\2\2\u00b2>\3\2\2\2\u00b3\u00b4\7o\2\2\u00b4\u00b5\7c\2\2\u00b5"+
		"\u00b6\7v\2\2\u00b6\u00b7\7e\2\2\u00b7\u00b8\7j\2\2\u00b8@\3\2\2\2\u00b9"+
		"\u00ba\7k\2\2\u00ba\u00bb\7h\2\2\u00bbB\3\2\2\2\u00bc\u00bd\7i\2\2\u00bd"+
		"\u00be\7g\2\2\u00be\u00bf\7v\2\2\u00bfD\3\2\2\2\u00c0\u00c1\7g\2\2\u00c1"+
		"\u00c2\7z\2\2\u00c2\u00c3\7k\2\2\u00c3\u00c4\7u\2\2\u00c4\u00c5\7v\2\2"+
		"\u00c5\u00c6\7u\2\2\u00c6F\3\2\2\2\u00c7\u00c8\7v\2\2\u00c8\u00c9\7t\2"+
		"\2\u00c9\u00ca\7w\2\2\u00ca\u00cb\7g\2\2\u00cbH\3\2\2\2\u00cc\u00cd\7"+
		"h\2\2\u00cd\u00ce\7c\2\2\u00ce\u00cf\7n\2\2\u00cf\u00d0\7u\2\2\u00d0\u00d1"+
		"\7g\2\2\u00d1J\3\2\2\2\u00d2\u00d3\7n\2\2\u00d3\u00d4\7k\2\2\u00d4\u00d5"+
		"\7u\2\2\u00d5\u00d6\7v\2\2\u00d6L\3\2\2\2\u00d7\u00d8\7e\2\2\u00d8\u00d9"+
		"\7t\2\2\u00d9\u00da\7g\2\2\u00da\u00db\7c\2\2\u00db\u00dc\7v\2\2\u00dc"+
		"\u00dd\7g\2\2\u00ddN\3\2\2\2\u00de\u00df\7w\2\2\u00df\u00e0\7r\2\2\u00e0"+
		"\u00e1\7f\2\2\u00e1\u00e2\7c\2\2\u00e2\u00e3\7v\2\2\u00e3\u00e4\7g\2\2"+
		"\u00e4P\3\2\2\2\u00e5\u00e6\7t\2\2\u00e6\u00e7\7g\2\2\u00e7\u00e8\7c\2"+
		"\2\u00e8\u00e9\7f\2\2\u00e9R\3\2\2\2\u00ea\u00eb\7y\2\2\u00eb\u00ec\7"+
		"t\2\2\u00ec\u00ed\7k\2\2\u00ed\u00ee\7v\2\2\u00ee\u00ef\7g\2\2\u00efT"+
		"\3\2\2\2\u00f0\u00f1\7f\2\2\u00f1\u00f2\7g\2\2\u00f2\u00f3\7n\2\2\u00f3"+
		"\u00f4\7g\2\2\u00f4\u00f5\7v\2\2\u00f5\u00f6\7g\2\2\u00f6V\3\2\2\2\u00f7"+
		"\u00f8\7h\2\2\u00f8\u00f9\7w\2\2\u00f9\u00fa\7p\2\2\u00fa\u00fb\7e\2\2"+
		"\u00fb\u00fc\7v\2\2\u00fc\u00fd\7k\2\2\u00fd\u00fe\7q\2\2\u00fe\u00ff"+
		"\7p\2\2\u00ffX\3\2\2\2\u0100\u0101\7t\2\2\u0101\u0102\7g\2\2\u0102\u0103"+
		"\7v\2\2\u0103\u0104\7w\2\2\u0104\u0105\7t\2\2\u0105\u0106\7p\2\2\u0106"+
		"Z\3\2\2\2\u0107\u0108\7p\2\2\u0108\u0109\7w\2\2\u0109\u010a\7n\2\2\u010a"+
		"\u010b\7n\2\2\u010b\\\3\2\2\2\u010c\u010d\7u\2\2\u010d\u010e\7g\2\2\u010e"+
		"\u010f\7t\2\2\u010f\u0110\7x\2\2\u0110\u0111\7k\2\2\u0111\u0112\7e\2\2"+
		"\u0112\u0113\7g\2\2\u0113^\3\2\2\2\u0114\u0116\4\62;\2\u0115\u0114\3\2"+
		"\2\2\u0116\u0117\3\2\2\2\u0117\u0115\3\2\2\2\u0117\u0118\3\2\2\2\u0118"+
		"\u011f\3\2\2\2\u0119\u011b\7\60\2\2\u011a\u011c\4\62;\2\u011b\u011a\3"+
		"\2\2\2\u011c\u011d\3\2\2\2\u011d\u011b\3\2\2\2\u011d\u011e\3\2\2\2\u011e"+
		"\u0120\3\2\2\2\u011f\u0119\3\2\2\2\u011f\u0120\3\2\2\2\u0120`\3\2\2\2"+
		"\u0121\u0125\7)\2\2\u0122\u0124\n\2\2\2\u0123\u0122\3\2\2\2\u0124\u0127"+
		"\3\2\2\2\u0125\u0123\3\2\2\2\u0125\u0126\3\2\2\2\u0126\u0128\3\2\2\2\u0127"+
		"\u0125\3\2\2\2\u0128\u0132\7)\2\2\u0129\u012d\7$\2\2\u012a\u012c\n\3\2"+
		"\2\u012b\u012a\3\2\2\2\u012c\u012f\3\2\2\2\u012d\u012b\3\2\2\2\u012d\u012e"+
		"\3\2\2\2\u012e\u0130\3\2\2\2\u012f\u012d\3\2\2\2\u0130\u0132\7$\2\2\u0131"+
		"\u0121\3\2\2\2\u0131\u0129\3\2\2\2\u0132b\3\2\2\2\u0133\u0137\t\4\2\2"+
		"\u0134\u0136\t\5\2\2\u0135\u0134\3\2\2\2\u0136\u0139\3\2\2\2\u0137\u0135"+
		"\3\2\2\2\u0137\u0138\3\2\2\2\u0138d\3\2\2\2\u0139\u0137\3\2\2\2\u013a"+
		"\u013b\7\61\2\2\u013bf\3\2\2\2\u013c\u013d\t\6\2\2\u013d\u013e\3\2\2\2"+
		"\u013e\u013f\b\64\2\2\u013fh\3\2\2\2\u0140\u0141\7\61\2\2\u0141\u0142"+
		"\7\61\2\2\u0142\u0146\3\2\2\2\u0143\u0145\n\7\2\2\u0144\u0143\3\2\2\2"+
		"\u0145\u0148\3\2\2\2\u0146\u0144\3\2\2\2\u0146\u0147\3\2\2\2\u0147j\3"+
		"\2\2\2\u0148\u0146\3\2\2\2\13\2\u0117\u011d\u011f\u0125\u012d\u0131\u0137"+
		"\u0146\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}