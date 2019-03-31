// Generated from FirebaseRules.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FirebaseRulesListener = require('./FirebaseRulesListener').FirebaseRulesListener;
var FirebaseRulesVisitor = require('./FirebaseRulesVisitor').FirebaseRulesVisitor;

var grammarFileName = "FirebaseRules.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00035\u00ee\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u00049\n\u0004\f\u0004",
    "\u000e\u0004<\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005E\n\u0005\f\u0005",
    "\u000e\u0005H\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0007\tX\n\t\f\t\u000e\t[\u000b\t\u0003\t",
    "\u0003\t\u0003\t\u0005\t`\n\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b",
    "l\n\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0005\rs\n",
    "\r\u0003\r\u0003\r\u0007\rw\n\r\f\r\u000e\rz\u000b\r\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0005\u000f\u007f\n\u000f\u0003\u000f\u0003\u000f",
    "\u0007\u000f\u0083\n\u000f\f\u000f\u000e\u000f\u0086\u000b\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u0099",
    "\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00a9\n\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0007",
    "\u0012\u00b7\n\u0012\f\u0012\u000e\u0012\u00ba\u000b\u0012\u0003\u0013",
    "\u0003\u0013\u0007\u0013\u00be\n\u0013\f\u0013\u000e\u0013\u00c1\u000b",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00cd",
    "\n\u0014\u0003\u0014\u0005\u0014\u00d0\n\u0014\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0007\u0015\u00d7\n\u0015\f\u0015",
    "\u000e\u0015\u00da\u000b\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0005",
    "\u0016\u00df\n\u0016\u0006\u0016\u00e1\n\u0016\r\u0016\u000e\u0016\u00e2",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u00e8\n\u0017\u0006",
    "\u0017\u00ea\n\u0017\r\u0017\u000e\u0017\u00eb\u0003\u0017\u0002\u0003",
    "\"\u0018\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,\u0002\n\u0004\u0002##&+\u0003\u000202\u0004",
    "\u0002\u0018\u0018\u001c\u001c\u0003\u0002$%\u0003\u0002\u0010\u0015",
    "\u0003\u0002\u0016\u0017\u0003\u0002\u0019\u001a\u0004\u0002\u001b\u001f",
    "33\u0002\u00fb\u0002.\u0003\u0002\u0002\u0002\u00042\u0003\u0002\u0002",
    "\u0002\u00064\u0003\u0002\u0002\u0002\b?\u0003\u0002\u0002\u0002\nK",
    "\u0003\u0002\u0002\u0002\fM\u0003\u0002\u0002\u0002\u000eO\u0003\u0002",
    "\u0002\u0002\u0010S\u0003\u0002\u0002\u0002\u0012c\u0003\u0002\u0002",
    "\u0002\u0014g\u0003\u0002\u0002\u0002\u0016o\u0003\u0002\u0002\u0002",
    "\u0018r\u0003\u0002\u0002\u0002\u001a{\u0003\u0002\u0002\u0002\u001c",
    "~\u0003\u0002\u0002\u0002\u001e\u0087\u0003\u0002\u0002\u0002 \u0098",
    "\u0003\u0002\u0002\u0002\"\u00a8\u0003\u0002\u0002\u0002$\u00bb\u0003",
    "\u0002\u0002\u0002&\u00c2\u0003\u0002\u0002\u0002(\u00d1\u0003\u0002",
    "\u0002\u0002*\u00e0\u0003\u0002\u0002\u0002,\u00e9\u0003\u0002\u0002",
    "\u0002./\u0007/\u0002\u0002/0\u0005\u0004\u0003\u000201\u0005\u0006",
    "\u0004\u00021\u0003\u0003\u0002\u0002\u000223\u0005$\u0013\u00023\u0005",
    "\u0003\u0002\u0002\u00024:\u0007\u0006\u0002\u000259\u0005\u000e\b\u0002",
    "69\u0005\f\u0007\u000279\u0005\u001e\u0010\u000285\u0003\u0002\u0002",
    "\u000286\u0003\u0002\u0002\u000287\u0003\u0002\u0002\u00029<\u0003\u0002",
    "\u0002\u0002:8\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002;=\u0003",
    "\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002=>\u0007\u0007\u0002\u0002",
    ">\u0007\u0003\u0002\u0002\u0002?F\u0007\u0006\u0002\u0002@E\u0005\u0010",
    "\t\u0002AE\u0005\u000e\b\u0002BE\u00075\u0002\u0002CE\u0005\u001e\u0010",
    "\u0002D@\u0003\u0002\u0002\u0002DA\u0003\u0002\u0002\u0002DB\u0003\u0002",
    "\u0002\u0002DC\u0003\u0002\u0002\u0002EH\u0003\u0002\u0002\u0002FD\u0003",
    "\u0002\u0002\u0002FG\u0003\u0002\u0002\u0002GI\u0003\u0002\u0002\u0002",
    "HF\u0003\u0002\u0002\u0002IJ\u0007\u0007\u0002\u0002J\t\u0003\u0002",
    "\u0002\u0002KL\t\u0002\u0002\u0002L\u000b\u0003\u0002\u0002\u0002MN",
    "\u00075\u0002\u0002N\r\u0003\u0002\u0002\u0002OP\u0007!\u0002\u0002",
    "PQ\u0005,\u0017\u0002QR\u0005\b\u0005\u0002R\u000f\u0003\u0002\u0002",
    "\u0002ST\u0007 \u0002\u0002TY\u0005\n\u0006\u0002UV\u0007\u000e\u0002",
    "\u0002VX\u0005\n\u0006\u0002WU\u0003\u0002\u0002\u0002X[\u0003\u0002",
    "\u0002\u0002YW\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Z_\u0003",
    "\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002\\]\u0007\r\u0002\u0002",
    "]^\u0007\"\u0002\u0002^`\u0005\"\u0012\u0002_\\\u0003\u0002\u0002\u0002",
    "_`\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002ab\u0007\u000f\u0002",
    "\u0002b\u0011\u0003\u0002\u0002\u0002cd\u0007\u0003\u0002\u0002de\t",
    "\u0003\u0002\u0002ef\u0007\t\u0002\u0002f\u0013\u0003\u0002\u0002\u0002",
    "gh\u0007\u0006\u0002\u0002hk\u00072\u0002\u0002ij\u0007\u0004\u0002",
    "\u0002jl\u0007\u0005\u0002\u0002ki\u0003\u0002\u0002\u0002kl\u0003\u0002",
    "\u0002\u0002lm\u0003\u0002\u0002\u0002mn\u0007\u0007\u0002\u0002n\u0015",
    "\u0003\u0002\u0002\u0002op\u0005\"\u0012\u0002p\u0017\u0003\u0002\u0002",
    "\u0002qs\u0005\u0016\f\u0002rq\u0003\u0002\u0002\u0002rs\u0003\u0002",
    "\u0002\u0002sx\u0003\u0002\u0002\u0002tu\u0007\u000e\u0002\u0002uw\u0005",
    "\u0016\f\u0002vt\u0003\u0002\u0002\u0002wz\u0003\u0002\u0002\u0002x",
    "v\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002y\u0019\u0003\u0002",
    "\u0002\u0002zx\u0003\u0002\u0002\u0002{|\u00072\u0002\u0002|\u001b\u0003",
    "\u0002\u0002\u0002}\u007f\u0005\u001a\u000e\u0002~}\u0003\u0002\u0002",
    "\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0084\u0003\u0002\u0002",
    "\u0002\u0080\u0081\u0007\u000e\u0002\u0002\u0081\u0083\u0005\u001a\u000e",
    "\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0083\u0086\u0003\u0002\u0002",
    "\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002",
    "\u0002\u0085\u001d\u0003\u0002\u0002\u0002\u0086\u0084\u0003\u0002\u0002",
    "\u0002\u0087\u0088\u0007,\u0002\u0002\u0088\u0089\u00072\u0002\u0002",
    "\u0089\u008a\u0007\b\u0002\u0002\u008a\u008b\u0005\u001c\u000f\u0002",
    "\u008b\u008c\u0007\t\u0002\u0002\u008c\u008d\u0007\u0006\u0002\u0002",
    "\u008d\u008e\u0007-\u0002\u0002\u008e\u008f\u0005\"\u0012\u0002\u008f",
    "\u0090\u0007\u000f\u0002\u0002\u0090\u0091\u0007\u0007\u0002\u0002\u0091",
    "\u001f\u0003\u0002\u0002\u0002\u0092\u0093\u0007\f\u0002\u0002\u0093",
    "\u0099\u00072\u0002\u0002\u0094\u0095\u0007\n\u0002\u0002\u0095\u0096",
    "\u0005\"\u0012\u0002\u0096\u0097\u0007\u000b\u0002\u0002\u0097\u0099",
    "\u0003\u0002\u0002\u0002\u0098\u0092\u0003\u0002\u0002\u0002\u0098\u0094",
    "\u0003\u0002\u0002\u0002\u0099!\u0003\u0002\u0002\u0002\u009a\u009b",
    "\b\u0012\u0001\u0002\u009b\u00a9\u0007.\u0002\u0002\u009c\u009d\t\u0004",
    "\u0002\u0002\u009d\u00a9\u0005\"\u0012\n\u009e\u00a9\u00071\u0002\u0002",
    "\u009f\u00a9\u00070\u0002\u0002\u00a0\u00a9\t\u0005\u0002\u0002\u00a1",
    "\u00a9\u0005$\u0013\u0002\u00a2\u00a9\u0005&\u0014\u0002\u00a3\u00a9",
    "\u0005(\u0015\u0002\u00a4\u00a5\u0007\b\u0002\u0002\u00a5\u00a6\u0005",
    "\"\u0012\u0002\u00a6\u00a7\u0007\t\u0002\u0002\u00a7\u00a9\u0003\u0002",
    "\u0002\u0002\u00a8\u009a\u0003\u0002\u0002\u0002\u00a8\u009c\u0003\u0002",
    "\u0002\u0002\u00a8\u009e\u0003\u0002\u0002\u0002\u00a8\u009f\u0003\u0002",
    "\u0002\u0002\u00a8\u00a0\u0003\u0002\u0002\u0002\u00a8\u00a1\u0003\u0002",
    "\u0002\u0002\u00a8\u00a2\u0003\u0002\u0002\u0002\u00a8\u00a3\u0003\u0002",
    "\u0002\u0002\u00a8\u00a4\u0003\u0002\u0002\u0002\u00a9\u00b8\u0003\u0002",
    "\u0002\u0002\u00aa\u00ab\f\u000e\u0002\u0002\u00ab\u00ac\t\u0006\u0002",
    "\u0002\u00ac\u00b7\u0005\"\u0012\u000f\u00ad\u00ae\f\r\u0002\u0002\u00ae",
    "\u00af\t\u0007\u0002\u0002\u00af\u00b7\u0005\"\u0012\u000e\u00b0\u00b1",
    "\f\f\u0002\u0002\u00b1\u00b2\t\b\u0002\u0002\u00b2\u00b7\u0005\"\u0012",
    "\r\u00b3\u00b4\f\u000b\u0002\u0002\u00b4\u00b5\t\t\u0002\u0002\u00b5",
    "\u00b7\u0005\"\u0012\f\u00b6\u00aa\u0003\u0002\u0002\u0002\u00b6\u00ad",
    "\u0003\u0002\u0002\u0002\u00b6\u00b0\u0003\u0002\u0002\u0002\u00b6\u00b3",
    "\u0003\u0002\u0002\u0002\u00b7\u00ba\u0003\u0002\u0002\u0002\u00b8\u00b6",
    "\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002\u0002\u00b9#",
    "\u0003\u0002\u0002\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00bb\u00bf",
    "\u00072\u0002\u0002\u00bc\u00be\u0005 \u0011\u0002\u00bd\u00bc\u0003",
    "\u0002\u0002\u0002\u00be\u00c1\u0003\u0002\u0002\u0002\u00bf\u00bd\u0003",
    "\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002\u00c0%\u0003",
    "\u0002\u0002\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007",
    "#\u0002\u0002\u00c3\u00c4\u0007\b\u0002\u0002\u00c4\u00c5\u0005*\u0016",
    "\u0002\u00c5\u00c6\u0007\t\u0002\u0002\u00c6\u00c7\u0007\f\u0002\u0002",
    "\u00c7\u00cf\u00072\u0002\u0002\u00c8\u00cc\u0007\n\u0002\u0002\u00c9",
    "\u00cd\u00071\u0002\u0002\u00ca\u00cd\u00070\u0002\u0002\u00cb\u00cd",
    "\u0005$\u0013\u0002\u00cc\u00c9\u0003\u0002\u0002\u0002\u00cc\u00ca",
    "\u0003\u0002\u0002\u0002\u00cc\u00cb\u0003\u0002\u0002\u0002\u00cd\u00ce",
    "\u0003\u0002\u0002\u0002\u00ce\u00d0\u0007\u000b\u0002\u0002\u00cf\u00c8",
    "\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003\u0002\u0002\u0002\u00d0\'",
    "\u0003\u0002\u0002\u0002\u00d1\u00d2\u00072\u0002\u0002\u00d2\u00d3",
    "\u0007\b\u0002\u0002\u00d3\u00d4\u0005\u0018\r\u0002\u00d4\u00d8\u0007",
    "\t\u0002\u0002\u00d5\u00d7\u0005 \u0011\u0002\u00d6\u00d5\u0003\u0002",
    "\u0002\u0002\u00d7\u00da\u0003\u0002\u0002\u0002\u00d8\u00d6\u0003\u0002",
    "\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002\u00d9)\u0003\u0002",
    "\u0002\u0002\u00da\u00d8\u0003\u0002\u0002\u0002\u00db\u00de\u00073",
    "\u0002\u0002\u00dc\u00df\u00072\u0002\u0002\u00dd\u00df\u0005\u0012",
    "\n\u0002\u00de\u00dc\u0003\u0002\u0002\u0002\u00de\u00dd\u0003\u0002",
    "\u0002\u0002\u00df\u00e1\u0003\u0002\u0002\u0002\u00e0\u00db\u0003\u0002",
    "\u0002\u0002\u00e1\u00e2\u0003\u0002\u0002\u0002\u00e2\u00e0\u0003\u0002",
    "\u0002\u0002\u00e2\u00e3\u0003\u0002\u0002\u0002\u00e3+\u0003\u0002",
    "\u0002\u0002\u00e4\u00e7\u00073\u0002\u0002\u00e5\u00e8\u00072\u0002",
    "\u0002\u00e6\u00e8\u0005\u0014\u000b\u0002\u00e7\u00e5\u0003\u0002\u0002",
    "\u0002\u00e7\u00e6\u0003\u0002\u0002\u0002\u00e8\u00ea\u0003\u0002\u0002",
    "\u0002\u00e9\u00e4\u0003\u0002\u0002\u0002\u00ea\u00eb\u0003\u0002\u0002",
    "\u0002\u00eb\u00e9\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003\u0002\u0002",
    "\u0002\u00ec-\u0003\u0002\u0002\u0002\u00198:DFY_krx~\u0084\u0098\u00a8",
    "\u00b6\u00b8\u00bf\u00cc\u00cf\u00d8\u00de\u00e2\u00e7\u00eb"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'$('", "'='", "'**'", "'{'", "'}'", "'('", "')'", 
                     "'['", "']'", "'.'", "':'", "','", "';'", "'<'", "'<='", 
                     "'>='", "'>'", "'=='", "'!='", "'&&'", "'||'", "'!'", 
                     "'&'", "'|'", "'+'", "'-'", "'*'", "'^'", "'%'", "'allow'", 
                     "'match'", "'if'", "'get'", "'true'", "'false'", "'list'", 
                     "'create'", "'update'", "'read'", "'write'", "'delete'", 
                     "'function'", "'return'", "'null'", "'service'", null, 
                     null, null, "'/'" ];

var symbolicNames = [ null, null, null, null, "CurlyOpen", "CurlyClose", 
                      "BracketOpen", "BracketClose", "SquareBracketOpen", 
                      "SquareBracketClose", "Dot", "Colon", "Comma", "Semicolon", 
                      "LessThan", "LessOrEqual", "GreaterOrEqual", "GreaterThan", 
                      "Equals", "Unequal", "LogicalAnd", "LogicalOr", "LogicalNot", 
                      "BinaryAnd", "BinaryOr", "ArithmeticAdd", "ArithmeticSub", 
                      "ArithmeticMul", "ArithmeticExp", "ArithmeticModus", 
                      "Allow", "Match", "If", "Get", "True", "False", "List", 
                      "Create", "Update", "Read", "Write", "Delete", "Function", 
                      "Return", "Null", "Service", "Number", "String", "Identifier", 
                      "Slash", "WS", "Comment" ];

var ruleNames =  [ "service", "namespace", "namespaceBlock", "matchBlock", 
                   "allowKey", "comment", "matcher", "allow", "pathVariableReplace", 
                   "pathVariable", "arg", "arguments", "argDeclaration", 
                   "argDeclarations", "functionDeclaration", "fieldReference", 
                   "expression", "objectReference", "get", "functionCall", 
                   "getPath", "matchPath" ];

function FirebaseRulesParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FirebaseRulesParser.prototype = Object.create(antlr4.Parser.prototype);
FirebaseRulesParser.prototype.constructor = FirebaseRulesParser;

Object.defineProperty(FirebaseRulesParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

FirebaseRulesParser.EOF = antlr4.Token.EOF;
FirebaseRulesParser.T__0 = 1;
FirebaseRulesParser.T__1 = 2;
FirebaseRulesParser.T__2 = 3;
FirebaseRulesParser.CurlyOpen = 4;
FirebaseRulesParser.CurlyClose = 5;
FirebaseRulesParser.BracketOpen = 6;
FirebaseRulesParser.BracketClose = 7;
FirebaseRulesParser.SquareBracketOpen = 8;
FirebaseRulesParser.SquareBracketClose = 9;
FirebaseRulesParser.Dot = 10;
FirebaseRulesParser.Colon = 11;
FirebaseRulesParser.Comma = 12;
FirebaseRulesParser.Semicolon = 13;
FirebaseRulesParser.LessThan = 14;
FirebaseRulesParser.LessOrEqual = 15;
FirebaseRulesParser.GreaterOrEqual = 16;
FirebaseRulesParser.GreaterThan = 17;
FirebaseRulesParser.Equals = 18;
FirebaseRulesParser.Unequal = 19;
FirebaseRulesParser.LogicalAnd = 20;
FirebaseRulesParser.LogicalOr = 21;
FirebaseRulesParser.LogicalNot = 22;
FirebaseRulesParser.BinaryAnd = 23;
FirebaseRulesParser.BinaryOr = 24;
FirebaseRulesParser.ArithmeticAdd = 25;
FirebaseRulesParser.ArithmeticSub = 26;
FirebaseRulesParser.ArithmeticMul = 27;
FirebaseRulesParser.ArithmeticExp = 28;
FirebaseRulesParser.ArithmeticModus = 29;
FirebaseRulesParser.Allow = 30;
FirebaseRulesParser.Match = 31;
FirebaseRulesParser.If = 32;
FirebaseRulesParser.Get = 33;
FirebaseRulesParser.True = 34;
FirebaseRulesParser.False = 35;
FirebaseRulesParser.List = 36;
FirebaseRulesParser.Create = 37;
FirebaseRulesParser.Update = 38;
FirebaseRulesParser.Read = 39;
FirebaseRulesParser.Write = 40;
FirebaseRulesParser.Delete = 41;
FirebaseRulesParser.Function = 42;
FirebaseRulesParser.Return = 43;
FirebaseRulesParser.Null = 44;
FirebaseRulesParser.Service = 45;
FirebaseRulesParser.Number = 46;
FirebaseRulesParser.String = 47;
FirebaseRulesParser.Identifier = 48;
FirebaseRulesParser.Slash = 49;
FirebaseRulesParser.WS = 50;
FirebaseRulesParser.Comment = 51;

FirebaseRulesParser.RULE_service = 0;
FirebaseRulesParser.RULE_namespace = 1;
FirebaseRulesParser.RULE_namespaceBlock = 2;
FirebaseRulesParser.RULE_matchBlock = 3;
FirebaseRulesParser.RULE_allowKey = 4;
FirebaseRulesParser.RULE_comment = 5;
FirebaseRulesParser.RULE_matcher = 6;
FirebaseRulesParser.RULE_allow = 7;
FirebaseRulesParser.RULE_pathVariableReplace = 8;
FirebaseRulesParser.RULE_pathVariable = 9;
FirebaseRulesParser.RULE_arg = 10;
FirebaseRulesParser.RULE_arguments = 11;
FirebaseRulesParser.RULE_argDeclaration = 12;
FirebaseRulesParser.RULE_argDeclarations = 13;
FirebaseRulesParser.RULE_functionDeclaration = 14;
FirebaseRulesParser.RULE_fieldReference = 15;
FirebaseRulesParser.RULE_expression = 16;
FirebaseRulesParser.RULE_objectReference = 17;
FirebaseRulesParser.RULE_get = 18;
FirebaseRulesParser.RULE_functionCall = 19;
FirebaseRulesParser.RULE_getPath = 20;
FirebaseRulesParser.RULE_matchPath = 21;

function ServiceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_service;
    return this;
}

ServiceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ServiceContext.prototype.constructor = ServiceContext;

ServiceContext.prototype.Service = function() {
    return this.getToken(FirebaseRulesParser.Service, 0);
};

ServiceContext.prototype.namespace = function() {
    return this.getTypedRuleContext(NamespaceContext,0);
};

ServiceContext.prototype.namespaceBlock = function() {
    return this.getTypedRuleContext(NamespaceBlockContext,0);
};

ServiceContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterService(this);
	}
};

ServiceContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitService(this);
	}
};

ServiceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitService(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.ServiceContext = ServiceContext;

FirebaseRulesParser.prototype.service = function() {

    var localctx = new ServiceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FirebaseRulesParser.RULE_service);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this.match(FirebaseRulesParser.Service);
        this.state = 45;
        this.namespace();
        this.state = 46;
        this.namespaceBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamespaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_namespace;
    return this;
}

NamespaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceContext.prototype.constructor = NamespaceContext;

NamespaceContext.prototype.objectReference = function() {
    return this.getTypedRuleContext(ObjectReferenceContext,0);
};

NamespaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterNamespace(this);
	}
};

NamespaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitNamespace(this);
	}
};

NamespaceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitNamespace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.NamespaceContext = NamespaceContext;

FirebaseRulesParser.prototype.namespace = function() {

    var localctx = new NamespaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FirebaseRulesParser.RULE_namespace);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this.objectReference();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamespaceBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_namespaceBlock;
    return this;
}

NamespaceBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceBlockContext.prototype.constructor = NamespaceBlockContext;

NamespaceBlockContext.prototype.CurlyOpen = function() {
    return this.getToken(FirebaseRulesParser.CurlyOpen, 0);
};

NamespaceBlockContext.prototype.CurlyClose = function() {
    return this.getToken(FirebaseRulesParser.CurlyClose, 0);
};

NamespaceBlockContext.prototype.matcher = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MatcherContext);
    } else {
        return this.getTypedRuleContext(MatcherContext,i);
    }
};

NamespaceBlockContext.prototype.comment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CommentContext);
    } else {
        return this.getTypedRuleContext(CommentContext,i);
    }
};

NamespaceBlockContext.prototype.functionDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunctionDeclarationContext);
    } else {
        return this.getTypedRuleContext(FunctionDeclarationContext,i);
    }
};

NamespaceBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterNamespaceBlock(this);
	}
};

NamespaceBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitNamespaceBlock(this);
	}
};

NamespaceBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitNamespaceBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.NamespaceBlockContext = NamespaceBlockContext;

FirebaseRulesParser.prototype.namespaceBlock = function() {

    var localctx = new NamespaceBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, FirebaseRulesParser.RULE_namespaceBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.match(FirebaseRulesParser.CurlyOpen);
        this.state = 56;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (FirebaseRulesParser.Match - 31)) | (1 << (FirebaseRulesParser.Function - 31)) | (1 << (FirebaseRulesParser.Comment - 31)))) !== 0)) {
            this.state = 54;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case FirebaseRulesParser.Match:
                this.state = 51;
                this.matcher();
                break;
            case FirebaseRulesParser.Comment:
                this.state = 52;
                this.comment();
                break;
            case FirebaseRulesParser.Function:
                this.state = 53;
                this.functionDeclaration();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 58;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 59;
        this.match(FirebaseRulesParser.CurlyClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MatchBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_matchBlock;
    return this;
}

MatchBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatchBlockContext.prototype.constructor = MatchBlockContext;

MatchBlockContext.prototype.CurlyOpen = function() {
    return this.getToken(FirebaseRulesParser.CurlyOpen, 0);
};

MatchBlockContext.prototype.CurlyClose = function() {
    return this.getToken(FirebaseRulesParser.CurlyClose, 0);
};

MatchBlockContext.prototype.allow = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AllowContext);
    } else {
        return this.getTypedRuleContext(AllowContext,i);
    }
};

MatchBlockContext.prototype.matcher = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MatcherContext);
    } else {
        return this.getTypedRuleContext(MatcherContext,i);
    }
};

MatchBlockContext.prototype.Comment = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FirebaseRulesParser.Comment);
    } else {
        return this.getToken(FirebaseRulesParser.Comment, i);
    }
};


MatchBlockContext.prototype.functionDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunctionDeclarationContext);
    } else {
        return this.getTypedRuleContext(FunctionDeclarationContext,i);
    }
};

MatchBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterMatchBlock(this);
	}
};

MatchBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitMatchBlock(this);
	}
};

MatchBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitMatchBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.MatchBlockContext = MatchBlockContext;

FirebaseRulesParser.prototype.matchBlock = function() {

    var localctx = new MatchBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FirebaseRulesParser.RULE_matchBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this.match(FirebaseRulesParser.CurlyOpen);
        this.state = 68;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 30)) & ~0x1f) == 0 && ((1 << (_la - 30)) & ((1 << (FirebaseRulesParser.Allow - 30)) | (1 << (FirebaseRulesParser.Match - 30)) | (1 << (FirebaseRulesParser.Function - 30)) | (1 << (FirebaseRulesParser.Comment - 30)))) !== 0)) {
            this.state = 66;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case FirebaseRulesParser.Allow:
                this.state = 62;
                this.allow();
                break;
            case FirebaseRulesParser.Match:
                this.state = 63;
                this.matcher();
                break;
            case FirebaseRulesParser.Comment:
                this.state = 64;
                this.match(FirebaseRulesParser.Comment);
                break;
            case FirebaseRulesParser.Function:
                this.state = 65;
                this.functionDeclaration();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 70;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 71;
        this.match(FirebaseRulesParser.CurlyClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AllowKeyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_allowKey;
    return this;
}

AllowKeyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AllowKeyContext.prototype.constructor = AllowKeyContext;

AllowKeyContext.prototype.Read = function() {
    return this.getToken(FirebaseRulesParser.Read, 0);
};

AllowKeyContext.prototype.Write = function() {
    return this.getToken(FirebaseRulesParser.Write, 0);
};

AllowKeyContext.prototype.Update = function() {
    return this.getToken(FirebaseRulesParser.Update, 0);
};

AllowKeyContext.prototype.Delete = function() {
    return this.getToken(FirebaseRulesParser.Delete, 0);
};

AllowKeyContext.prototype.Create = function() {
    return this.getToken(FirebaseRulesParser.Create, 0);
};

AllowKeyContext.prototype.List = function() {
    return this.getToken(FirebaseRulesParser.List, 0);
};

AllowKeyContext.prototype.Get = function() {
    return this.getToken(FirebaseRulesParser.Get, 0);
};

AllowKeyContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterAllowKey(this);
	}
};

AllowKeyContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitAllowKey(this);
	}
};

AllowKeyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitAllowKey(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.AllowKeyContext = AllowKeyContext;

FirebaseRulesParser.prototype.allowKey = function() {

    var localctx = new AllowKeyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, FirebaseRulesParser.RULE_allowKey);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        _la = this._input.LA(1);
        if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (FirebaseRulesParser.Get - 33)) | (1 << (FirebaseRulesParser.List - 33)) | (1 << (FirebaseRulesParser.Create - 33)) | (1 << (FirebaseRulesParser.Update - 33)) | (1 << (FirebaseRulesParser.Read - 33)) | (1 << (FirebaseRulesParser.Write - 33)) | (1 << (FirebaseRulesParser.Delete - 33)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CommentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_comment;
    return this;
}

CommentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommentContext.prototype.constructor = CommentContext;

CommentContext.prototype.Comment = function() {
    return this.getToken(FirebaseRulesParser.Comment, 0);
};

CommentContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterComment(this);
	}
};

CommentContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitComment(this);
	}
};

CommentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitComment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.CommentContext = CommentContext;

FirebaseRulesParser.prototype.comment = function() {

    var localctx = new CommentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, FirebaseRulesParser.RULE_comment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.match(FirebaseRulesParser.Comment);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MatcherContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_matcher;
    return this;
}

MatcherContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatcherContext.prototype.constructor = MatcherContext;

MatcherContext.prototype.Match = function() {
    return this.getToken(FirebaseRulesParser.Match, 0);
};

MatcherContext.prototype.matchPath = function() {
    return this.getTypedRuleContext(MatchPathContext,0);
};

MatcherContext.prototype.matchBlock = function() {
    return this.getTypedRuleContext(MatchBlockContext,0);
};

MatcherContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterMatcher(this);
	}
};

MatcherContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitMatcher(this);
	}
};

MatcherContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitMatcher(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.MatcherContext = MatcherContext;

FirebaseRulesParser.prototype.matcher = function() {

    var localctx = new MatcherContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FirebaseRulesParser.RULE_matcher);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.match(FirebaseRulesParser.Match);
        this.state = 78;
        this.matchPath();
        this.state = 79;
        this.matchBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AllowContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_allow;
    return this;
}

AllowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AllowContext.prototype.constructor = AllowContext;

AllowContext.prototype.Allow = function() {
    return this.getToken(FirebaseRulesParser.Allow, 0);
};

AllowContext.prototype.allowKey = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AllowKeyContext);
    } else {
        return this.getTypedRuleContext(AllowKeyContext,i);
    }
};

AllowContext.prototype.Semicolon = function() {
    return this.getToken(FirebaseRulesParser.Semicolon, 0);
};

AllowContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FirebaseRulesParser.Comma);
    } else {
        return this.getToken(FirebaseRulesParser.Comma, i);
    }
};


AllowContext.prototype.Colon = function() {
    return this.getToken(FirebaseRulesParser.Colon, 0);
};

AllowContext.prototype.If = function() {
    return this.getToken(FirebaseRulesParser.If, 0);
};

AllowContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AllowContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterAllow(this);
	}
};

AllowContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitAllow(this);
	}
};

AllowContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitAllow(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.AllowContext = AllowContext;

FirebaseRulesParser.prototype.allow = function() {

    var localctx = new AllowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, FirebaseRulesParser.RULE_allow);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this.match(FirebaseRulesParser.Allow);
        this.state = 82;
        this.allowKey();
        this.state = 87;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FirebaseRulesParser.Comma) {
            this.state = 83;
            this.match(FirebaseRulesParser.Comma);
            this.state = 84;
            this.allowKey();
            this.state = 89;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 93;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FirebaseRulesParser.Colon) {
            this.state = 90;
            this.match(FirebaseRulesParser.Colon);
            this.state = 91;
            this.match(FirebaseRulesParser.If);
            this.state = 92;
            this.expression(0);
        }

        this.state = 95;
        this.match(FirebaseRulesParser.Semicolon);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PathVariableReplaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_pathVariableReplace;
    return this;
}

PathVariableReplaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PathVariableReplaceContext.prototype.constructor = PathVariableReplaceContext;

PathVariableReplaceContext.prototype.Identifier = function() {
    return this.getToken(FirebaseRulesParser.Identifier, 0);
};

PathVariableReplaceContext.prototype.String = function() {
    return this.getToken(FirebaseRulesParser.String, 0);
};

PathVariableReplaceContext.prototype.Number = function() {
    return this.getToken(FirebaseRulesParser.Number, 0);
};

PathVariableReplaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterPathVariableReplace(this);
	}
};

PathVariableReplaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitPathVariableReplace(this);
	}
};

PathVariableReplaceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitPathVariableReplace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.PathVariableReplaceContext = PathVariableReplaceContext;

FirebaseRulesParser.prototype.pathVariableReplace = function() {

    var localctx = new PathVariableReplaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, FirebaseRulesParser.RULE_pathVariableReplace);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this.match(FirebaseRulesParser.T__0);
        this.state = 98;
        _la = this._input.LA(1);
        if(!(((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (FirebaseRulesParser.Number - 46)) | (1 << (FirebaseRulesParser.String - 46)) | (1 << (FirebaseRulesParser.Identifier - 46)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 99;
        this.match(FirebaseRulesParser.BracketClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PathVariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_pathVariable;
    return this;
}

PathVariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PathVariableContext.prototype.constructor = PathVariableContext;

PathVariableContext.prototype.CurlyOpen = function() {
    return this.getToken(FirebaseRulesParser.CurlyOpen, 0);
};

PathVariableContext.prototype.Identifier = function() {
    return this.getToken(FirebaseRulesParser.Identifier, 0);
};

PathVariableContext.prototype.CurlyClose = function() {
    return this.getToken(FirebaseRulesParser.CurlyClose, 0);
};

PathVariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterPathVariable(this);
	}
};

PathVariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitPathVariable(this);
	}
};

PathVariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitPathVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.PathVariableContext = PathVariableContext;

FirebaseRulesParser.prototype.pathVariable = function() {

    var localctx = new PathVariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, FirebaseRulesParser.RULE_pathVariable);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        this.match(FirebaseRulesParser.CurlyOpen);
        this.state = 102;
        this.match(FirebaseRulesParser.Identifier);
        this.state = 105;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FirebaseRulesParser.T__1) {
            this.state = 103;
            this.match(FirebaseRulesParser.T__1);
            this.state = 104;
            this.match(FirebaseRulesParser.T__2);
        }

        this.state = 107;
        this.match(FirebaseRulesParser.CurlyClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_arg;
    return this;
}

ArgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgContext.prototype.constructor = ArgContext;

ArgContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ArgContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterArg(this);
	}
};

ArgContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitArg(this);
	}
};

ArgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitArg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.ArgContext = ArgContext;

FirebaseRulesParser.prototype.arg = function() {

    var localctx = new ArgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, FirebaseRulesParser.RULE_arg);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_arguments;
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.arg = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArgContext);
    } else {
        return this.getTypedRuleContext(ArgContext,i);
    }
};

ArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterArguments(this);
	}
};

ArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitArguments(this);
	}
};

ArgumentsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitArguments(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.ArgumentsContext = ArgumentsContext;

FirebaseRulesParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, FirebaseRulesParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FirebaseRulesParser.BracketOpen) | (1 << FirebaseRulesParser.LogicalNot) | (1 << FirebaseRulesParser.ArithmeticSub))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (FirebaseRulesParser.Get - 33)) | (1 << (FirebaseRulesParser.True - 33)) | (1 << (FirebaseRulesParser.False - 33)) | (1 << (FirebaseRulesParser.Null - 33)) | (1 << (FirebaseRulesParser.Number - 33)) | (1 << (FirebaseRulesParser.String - 33)) | (1 << (FirebaseRulesParser.Identifier - 33)))) !== 0)) {
            this.state = 111;
            this.arg();
        }

        this.state = 118;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FirebaseRulesParser.Comma) {
            this.state = 114;
            this.match(FirebaseRulesParser.Comma);
            this.state = 115;
            this.arg();
            this.state = 120;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_argDeclaration;
    return this;
}

ArgDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgDeclarationContext.prototype.constructor = ArgDeclarationContext;

ArgDeclarationContext.prototype.Identifier = function() {
    return this.getToken(FirebaseRulesParser.Identifier, 0);
};

ArgDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterArgDeclaration(this);
	}
};

ArgDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitArgDeclaration(this);
	}
};

ArgDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitArgDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.ArgDeclarationContext = ArgDeclarationContext;

FirebaseRulesParser.prototype.argDeclaration = function() {

    var localctx = new ArgDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, FirebaseRulesParser.RULE_argDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        this.match(FirebaseRulesParser.Identifier);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgDeclarationsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_argDeclarations;
    return this;
}

ArgDeclarationsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgDeclarationsContext.prototype.constructor = ArgDeclarationsContext;

ArgDeclarationsContext.prototype.argDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArgDeclarationContext);
    } else {
        return this.getTypedRuleContext(ArgDeclarationContext,i);
    }
};

ArgDeclarationsContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterArgDeclarations(this);
	}
};

ArgDeclarationsContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitArgDeclarations(this);
	}
};

ArgDeclarationsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitArgDeclarations(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.ArgDeclarationsContext = ArgDeclarationsContext;

FirebaseRulesParser.prototype.argDeclarations = function() {

    var localctx = new ArgDeclarationsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, FirebaseRulesParser.RULE_argDeclarations);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FirebaseRulesParser.Identifier) {
            this.state = 123;
            this.argDeclaration();
        }

        this.state = 130;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FirebaseRulesParser.Comma) {
            this.state = 126;
            this.match(FirebaseRulesParser.Comma);
            this.state = 127;
            this.argDeclaration();
            this.state = 132;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_functionDeclaration;
    return this;
}

FunctionDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclarationContext.prototype.constructor = FunctionDeclarationContext;

FunctionDeclarationContext.prototype.Function = function() {
    return this.getToken(FirebaseRulesParser.Function, 0);
};

FunctionDeclarationContext.prototype.Identifier = function() {
    return this.getToken(FirebaseRulesParser.Identifier, 0);
};

FunctionDeclarationContext.prototype.BracketOpen = function() {
    return this.getToken(FirebaseRulesParser.BracketOpen, 0);
};

FunctionDeclarationContext.prototype.argDeclarations = function() {
    return this.getTypedRuleContext(ArgDeclarationsContext,0);
};

FunctionDeclarationContext.prototype.BracketClose = function() {
    return this.getToken(FirebaseRulesParser.BracketClose, 0);
};

FunctionDeclarationContext.prototype.CurlyOpen = function() {
    return this.getToken(FirebaseRulesParser.CurlyOpen, 0);
};

FunctionDeclarationContext.prototype.Return = function() {
    return this.getToken(FirebaseRulesParser.Return, 0);
};

FunctionDeclarationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

FunctionDeclarationContext.prototype.CurlyClose = function() {
    return this.getToken(FirebaseRulesParser.CurlyClose, 0);
};

FunctionDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitFunctionDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.FunctionDeclarationContext = FunctionDeclarationContext;

FirebaseRulesParser.prototype.functionDeclaration = function() {

    var localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, FirebaseRulesParser.RULE_functionDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this.match(FirebaseRulesParser.Function);
        this.state = 134;
        this.match(FirebaseRulesParser.Identifier);
        this.state = 135;
        this.match(FirebaseRulesParser.BracketOpen);
        this.state = 136;
        this.argDeclarations();
        this.state = 137;
        this.match(FirebaseRulesParser.BracketClose);
        this.state = 138;
        this.match(FirebaseRulesParser.CurlyOpen);
        this.state = 139;
        this.match(FirebaseRulesParser.Return);
        this.state = 140;
        this.expression(0);
        this.state = 141;
        this.match(FirebaseRulesParser.Semicolon);
        this.state = 142;
        this.match(FirebaseRulesParser.CurlyClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldReferenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_fieldReference;
    return this;
}

FieldReferenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldReferenceContext.prototype.constructor = FieldReferenceContext;


 
FieldReferenceContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function FieldReferenceWithIdentifierContext(parser, ctx) {
	FieldReferenceContext.call(this, parser);
    FieldReferenceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FieldReferenceWithIdentifierContext.prototype = Object.create(FieldReferenceContext.prototype);
FieldReferenceWithIdentifierContext.prototype.constructor = FieldReferenceWithIdentifierContext;

FirebaseRulesParser.FieldReferenceWithIdentifierContext = FieldReferenceWithIdentifierContext;

FieldReferenceWithIdentifierContext.prototype.Dot = function() {
    return this.getToken(FirebaseRulesParser.Dot, 0);
};

FieldReferenceWithIdentifierContext.prototype.Identifier = function() {
    return this.getToken(FirebaseRulesParser.Identifier, 0);
};
FieldReferenceWithIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterFieldReferenceWithIdentifier(this);
	}
};

FieldReferenceWithIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitFieldReferenceWithIdentifier(this);
	}
};

FieldReferenceWithIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitFieldReferenceWithIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FieldReferenceWithMemberRefContext(parser, ctx) {
	FieldReferenceContext.call(this, parser);
    FieldReferenceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FieldReferenceWithMemberRefContext.prototype = Object.create(FieldReferenceContext.prototype);
FieldReferenceWithMemberRefContext.prototype.constructor = FieldReferenceWithMemberRefContext;

FirebaseRulesParser.FieldReferenceWithMemberRefContext = FieldReferenceWithMemberRefContext;

FieldReferenceWithMemberRefContext.prototype.SquareBracketOpen = function() {
    return this.getToken(FirebaseRulesParser.SquareBracketOpen, 0);
};

FieldReferenceWithMemberRefContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

FieldReferenceWithMemberRefContext.prototype.SquareBracketClose = function() {
    return this.getToken(FirebaseRulesParser.SquareBracketClose, 0);
};
FieldReferenceWithMemberRefContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterFieldReferenceWithMemberRef(this);
	}
};

FieldReferenceWithMemberRefContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitFieldReferenceWithMemberRef(this);
	}
};

FieldReferenceWithMemberRefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitFieldReferenceWithMemberRef(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FirebaseRulesParser.FieldReferenceContext = FieldReferenceContext;

FirebaseRulesParser.prototype.fieldReference = function() {

    var localctx = new FieldReferenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, FirebaseRulesParser.RULE_fieldReference);
    try {
        this.state = 150;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FirebaseRulesParser.Dot:
            localctx = new FieldReferenceWithIdentifierContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 144;
            this.match(FirebaseRulesParser.Dot);
            this.state = 145;
            this.match(FirebaseRulesParser.Identifier);
            break;
        case FirebaseRulesParser.SquareBracketOpen:
            localctx = new FieldReferenceWithMemberRefContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 146;
            this.match(FirebaseRulesParser.SquareBracketOpen);
            this.state = 147;
            this.expression(0);
            this.state = 148;
            this.match(FirebaseRulesParser.SquareBracketClose);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function NumberExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NumberExpressionContext.prototype.constructor = NumberExpressionContext;

FirebaseRulesParser.NumberExpressionContext = NumberExpressionContext;

NumberExpressionContext.prototype.Number = function() {
    return this.getToken(FirebaseRulesParser.Number, 0);
};
NumberExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterNumberExpression(this);
	}
};

NumberExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitNumberExpression(this);
	}
};

NumberExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitNumberExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ObjectReferenceExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ObjectReferenceExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ObjectReferenceExpressionContext.prototype.constructor = ObjectReferenceExpressionContext;

FirebaseRulesParser.ObjectReferenceExpressionContext = ObjectReferenceExpressionContext;

ObjectReferenceExpressionContext.prototype.objectReference = function() {
    return this.getTypedRuleContext(ObjectReferenceContext,0);
};
ObjectReferenceExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterObjectReferenceExpression(this);
	}
};

ObjectReferenceExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitObjectReferenceExpression(this);
	}
};

ObjectReferenceExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitObjectReferenceExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParenthesisExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenthesisExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ParenthesisExpressionContext.prototype.constructor = ParenthesisExpressionContext;

FirebaseRulesParser.ParenthesisExpressionContext = ParenthesisExpressionContext;

ParenthesisExpressionContext.prototype.BracketOpen = function() {
    return this.getToken(FirebaseRulesParser.BracketOpen, 0);
};

ParenthesisExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ParenthesisExpressionContext.prototype.BracketClose = function() {
    return this.getToken(FirebaseRulesParser.BracketClose, 0);
};
ParenthesisExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterParenthesisExpression(this);
	}
};

ParenthesisExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitParenthesisExpression(this);
	}
};

ParenthesisExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitParenthesisExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArithmeticExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArithmeticExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ArithmeticExpressionContext.prototype.constructor = ArithmeticExpressionContext;

FirebaseRulesParser.ArithmeticExpressionContext = ArithmeticExpressionContext;

ArithmeticExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ArithmeticExpressionContext.prototype.ArithmeticAdd = function() {
    return this.getToken(FirebaseRulesParser.ArithmeticAdd, 0);
};

ArithmeticExpressionContext.prototype.ArithmeticSub = function() {
    return this.getToken(FirebaseRulesParser.ArithmeticSub, 0);
};

ArithmeticExpressionContext.prototype.ArithmeticMul = function() {
    return this.getToken(FirebaseRulesParser.ArithmeticMul, 0);
};

ArithmeticExpressionContext.prototype.Slash = function() {
    return this.getToken(FirebaseRulesParser.Slash, 0);
};

ArithmeticExpressionContext.prototype.ArithmeticExp = function() {
    return this.getToken(FirebaseRulesParser.ArithmeticExp, 0);
};

ArithmeticExpressionContext.prototype.ArithmeticModus = function() {
    return this.getToken(FirebaseRulesParser.ArithmeticModus, 0);
};
ArithmeticExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterArithmeticExpression(this);
	}
};

ArithmeticExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitArithmeticExpression(this);
	}
};

ArithmeticExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitArithmeticExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BooleanExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BooleanExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BooleanExpressionContext.prototype.constructor = BooleanExpressionContext;

FirebaseRulesParser.BooleanExpressionContext = BooleanExpressionContext;

BooleanExpressionContext.prototype.True = function() {
    return this.getToken(FirebaseRulesParser.True, 0);
};

BooleanExpressionContext.prototype.False = function() {
    return this.getToken(FirebaseRulesParser.False, 0);
};
BooleanExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterBooleanExpression(this);
	}
};

BooleanExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitBooleanExpression(this);
	}
};

BooleanExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitBooleanExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FunctionExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionExpressionContext.prototype = Object.create(ExpressionContext.prototype);
FunctionExpressionContext.prototype.constructor = FunctionExpressionContext;

FirebaseRulesParser.FunctionExpressionContext = FunctionExpressionContext;

FunctionExpressionContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};
FunctionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitFunctionExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CompareExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CompareExpressionContext.prototype = Object.create(ExpressionContext.prototype);
CompareExpressionContext.prototype.constructor = CompareExpressionContext;

FirebaseRulesParser.CompareExpressionContext = CompareExpressionContext;

CompareExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

CompareExpressionContext.prototype.LessThan = function() {
    return this.getToken(FirebaseRulesParser.LessThan, 0);
};

CompareExpressionContext.prototype.LessOrEqual = function() {
    return this.getToken(FirebaseRulesParser.LessOrEqual, 0);
};

CompareExpressionContext.prototype.Equals = function() {
    return this.getToken(FirebaseRulesParser.Equals, 0);
};

CompareExpressionContext.prototype.Unequal = function() {
    return this.getToken(FirebaseRulesParser.Unequal, 0);
};

CompareExpressionContext.prototype.GreaterThan = function() {
    return this.getToken(FirebaseRulesParser.GreaterThan, 0);
};

CompareExpressionContext.prototype.GreaterOrEqual = function() {
    return this.getToken(FirebaseRulesParser.GreaterOrEqual, 0);
};
CompareExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterCompareExpression(this);
	}
};

CompareExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitCompareExpression(this);
	}
};

CompareExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitCompareExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BinaryExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BinaryExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BinaryExpressionContext.prototype.constructor = BinaryExpressionContext;

FirebaseRulesParser.BinaryExpressionContext = BinaryExpressionContext;

BinaryExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

BinaryExpressionContext.prototype.BinaryAnd = function() {
    return this.getToken(FirebaseRulesParser.BinaryAnd, 0);
};

BinaryExpressionContext.prototype.BinaryOr = function() {
    return this.getToken(FirebaseRulesParser.BinaryOr, 0);
};
BinaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterBinaryExpression(this);
	}
};

BinaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitBinaryExpression(this);
	}
};

BinaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitBinaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LogicalExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalExpressionContext.prototype = Object.create(ExpressionContext.prototype);
LogicalExpressionContext.prototype.constructor = LogicalExpressionContext;

FirebaseRulesParser.LogicalExpressionContext = LogicalExpressionContext;

LogicalExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

LogicalExpressionContext.prototype.LogicalAnd = function() {
    return this.getToken(FirebaseRulesParser.LogicalAnd, 0);
};

LogicalExpressionContext.prototype.LogicalOr = function() {
    return this.getToken(FirebaseRulesParser.LogicalOr, 0);
};
LogicalExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterLogicalExpression(this);
	}
};

LogicalExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitLogicalExpression(this);
	}
};

LogicalExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitLogicalExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GetExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GetExpressionContext.prototype = Object.create(ExpressionContext.prototype);
GetExpressionContext.prototype.constructor = GetExpressionContext;

FirebaseRulesParser.GetExpressionContext = GetExpressionContext;

GetExpressionContext.prototype.get = function() {
    return this.getTypedRuleContext(GetContext,0);
};
GetExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterGetExpression(this);
	}
};

GetExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitGetExpression(this);
	}
};

GetExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitGetExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringExpressionContext.prototype = Object.create(ExpressionContext.prototype);
StringExpressionContext.prototype.constructor = StringExpressionContext;

FirebaseRulesParser.StringExpressionContext = StringExpressionContext;

StringExpressionContext.prototype.String = function() {
    return this.getToken(FirebaseRulesParser.String, 0);
};
StringExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterStringExpression(this);
	}
};

StringExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitStringExpression(this);
	}
};

StringExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitStringExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NullExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NullExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NullExpressionContext.prototype.constructor = NullExpressionContext;

FirebaseRulesParser.NullExpressionContext = NullExpressionContext;

NullExpressionContext.prototype.Null = function() {
    return this.getToken(FirebaseRulesParser.Null, 0);
};
NullExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterNullExpression(this);
	}
};

NullExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitNullExpression(this);
	}
};

NullExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitNullExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryExpressionContext.prototype = Object.create(ExpressionContext.prototype);
UnaryExpressionContext.prototype.constructor = UnaryExpressionContext;

FirebaseRulesParser.UnaryExpressionContext = UnaryExpressionContext;

UnaryExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

UnaryExpressionContext.prototype.LogicalNot = function() {
    return this.getToken(FirebaseRulesParser.LogicalNot, 0);
};

UnaryExpressionContext.prototype.ArithmeticSub = function() {
    return this.getToken(FirebaseRulesParser.ArithmeticSub, 0);
};
UnaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterUnaryExpression(this);
	}
};

UnaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitUnaryExpression(this);
	}
};

UnaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitUnaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FirebaseRulesParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 32;
    this.enterRecursionRule(localctx, 32, FirebaseRulesParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            localctx = new NullExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 153;
            this.match(FirebaseRulesParser.Null);
            break;

        case 2:
            localctx = new UnaryExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 154;
            _la = this._input.LA(1);
            if(!(_la===FirebaseRulesParser.LogicalNot || _la===FirebaseRulesParser.ArithmeticSub)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 155;
            this.expression(8);
            break;

        case 3:
            localctx = new StringExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 156;
            this.match(FirebaseRulesParser.String);
            break;

        case 4:
            localctx = new NumberExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 157;
            this.match(FirebaseRulesParser.Number);
            break;

        case 5:
            localctx = new BooleanExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 158;
            _la = this._input.LA(1);
            if(!(_la===FirebaseRulesParser.True || _la===FirebaseRulesParser.False)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        case 6:
            localctx = new ObjectReferenceExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 159;
            this.objectReference();
            break;

        case 7:
            localctx = new GetExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 160;
            this.get();
            break;

        case 8:
            localctx = new FunctionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 161;
            this.functionCall();
            break;

        case 9:
            localctx = new ParenthesisExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 162;
            this.match(FirebaseRulesParser.BracketOpen);
            this.state = 163;
            this.expression(0);
            this.state = 164;
            this.match(FirebaseRulesParser.BracketClose);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 182;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 180;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new CompareExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FirebaseRulesParser.RULE_expression);
                    this.state = 168;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 169;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FirebaseRulesParser.LessThan) | (1 << FirebaseRulesParser.LessOrEqual) | (1 << FirebaseRulesParser.GreaterOrEqual) | (1 << FirebaseRulesParser.GreaterThan) | (1 << FirebaseRulesParser.Equals) | (1 << FirebaseRulesParser.Unequal))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 170;
                    this.expression(13);
                    break;

                case 2:
                    localctx = new LogicalExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FirebaseRulesParser.RULE_expression);
                    this.state = 171;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 172;
                    _la = this._input.LA(1);
                    if(!(_la===FirebaseRulesParser.LogicalAnd || _la===FirebaseRulesParser.LogicalOr)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 173;
                    this.expression(12);
                    break;

                case 3:
                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FirebaseRulesParser.RULE_expression);
                    this.state = 174;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 175;
                    _la = this._input.LA(1);
                    if(!(_la===FirebaseRulesParser.BinaryAnd || _la===FirebaseRulesParser.BinaryOr)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 176;
                    this.expression(11);
                    break;

                case 4:
                    localctx = new ArithmeticExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FirebaseRulesParser.RULE_expression);
                    this.state = 177;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 178;
                    _la = this._input.LA(1);
                    if(!(((((_la - 25)) & ~0x1f) == 0 && ((1 << (_la - 25)) & ((1 << (FirebaseRulesParser.ArithmeticAdd - 25)) | (1 << (FirebaseRulesParser.ArithmeticSub - 25)) | (1 << (FirebaseRulesParser.ArithmeticMul - 25)) | (1 << (FirebaseRulesParser.ArithmeticExp - 25)) | (1 << (FirebaseRulesParser.ArithmeticModus - 25)) | (1 << (FirebaseRulesParser.Slash - 25)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 179;
                    this.expression(10);
                    break;

                } 
            }
            this.state = 184;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ObjectReferenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_objectReference;
    return this;
}

ObjectReferenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectReferenceContext.prototype.constructor = ObjectReferenceContext;

ObjectReferenceContext.prototype.Identifier = function() {
    return this.getToken(FirebaseRulesParser.Identifier, 0);
};

ObjectReferenceContext.prototype.fieldReference = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldReferenceContext);
    } else {
        return this.getTypedRuleContext(FieldReferenceContext,i);
    }
};

ObjectReferenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterObjectReference(this);
	}
};

ObjectReferenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitObjectReference(this);
	}
};

ObjectReferenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitObjectReference(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.ObjectReferenceContext = ObjectReferenceContext;

FirebaseRulesParser.prototype.objectReference = function() {

    var localctx = new ObjectReferenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, FirebaseRulesParser.RULE_objectReference);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 185;
        this.match(FirebaseRulesParser.Identifier);
        this.state = 189;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 186;
                this.fieldReference(); 
            }
            this.state = 191;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_get;
    return this;
}

GetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GetContext.prototype.constructor = GetContext;

GetContext.prototype.Get = function() {
    return this.getToken(FirebaseRulesParser.Get, 0);
};

GetContext.prototype.BracketOpen = function() {
    return this.getToken(FirebaseRulesParser.BracketOpen, 0);
};

GetContext.prototype.getPath = function() {
    return this.getTypedRuleContext(GetPathContext,0);
};

GetContext.prototype.BracketClose = function() {
    return this.getToken(FirebaseRulesParser.BracketClose, 0);
};

GetContext.prototype.Dot = function() {
    return this.getToken(FirebaseRulesParser.Dot, 0);
};

GetContext.prototype.Identifier = function() {
    return this.getToken(FirebaseRulesParser.Identifier, 0);
};

GetContext.prototype.SquareBracketOpen = function() {
    return this.getToken(FirebaseRulesParser.SquareBracketOpen, 0);
};

GetContext.prototype.SquareBracketClose = function() {
    return this.getToken(FirebaseRulesParser.SquareBracketClose, 0);
};

GetContext.prototype.String = function() {
    return this.getToken(FirebaseRulesParser.String, 0);
};

GetContext.prototype.Number = function() {
    return this.getToken(FirebaseRulesParser.Number, 0);
};

GetContext.prototype.objectReference = function() {
    return this.getTypedRuleContext(ObjectReferenceContext,0);
};

GetContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterGet(this);
	}
};

GetContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitGet(this);
	}
};

GetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitGet(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.GetContext = GetContext;

FirebaseRulesParser.prototype.get = function() {

    var localctx = new GetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, FirebaseRulesParser.RULE_get);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        this.match(FirebaseRulesParser.Get);
        this.state = 193;
        this.match(FirebaseRulesParser.BracketOpen);
        this.state = 194;
        this.getPath();
        this.state = 195;
        this.match(FirebaseRulesParser.BracketClose);
        this.state = 196;
        this.match(FirebaseRulesParser.Dot);

        this.state = 197;
        this.match(FirebaseRulesParser.Identifier);
        this.state = 205;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        if(la_===1) {
            this.state = 198;
            this.match(FirebaseRulesParser.SquareBracketOpen);
            this.state = 202;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case FirebaseRulesParser.String:
                this.state = 199;
                this.match(FirebaseRulesParser.String);
                break;
            case FirebaseRulesParser.Number:
                this.state = 200;
                this.match(FirebaseRulesParser.Number);
                break;
            case FirebaseRulesParser.Identifier:
                this.state = 201;
                this.objectReference();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 204;
            this.match(FirebaseRulesParser.SquareBracketClose);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.Identifier = function() {
    return this.getToken(FirebaseRulesParser.Identifier, 0);
};

FunctionCallContext.prototype.BracketOpen = function() {
    return this.getToken(FirebaseRulesParser.BracketOpen, 0);
};

FunctionCallContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};

FunctionCallContext.prototype.BracketClose = function() {
    return this.getToken(FirebaseRulesParser.BracketClose, 0);
};

FunctionCallContext.prototype.fieldReference = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldReferenceContext);
    } else {
        return this.getTypedRuleContext(FieldReferenceContext,i);
    }
};

FunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterFunctionCall(this);
	}
};

FunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitFunctionCall(this);
	}
};

FunctionCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitFunctionCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.FunctionCallContext = FunctionCallContext;

FirebaseRulesParser.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, FirebaseRulesParser.RULE_functionCall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
        this.match(FirebaseRulesParser.Identifier);
        this.state = 208;
        this.match(FirebaseRulesParser.BracketOpen);
        this.state = 209;
        this.arguments();
        this.state = 210;
        this.match(FirebaseRulesParser.BracketClose);
        this.state = 214;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 211;
                this.fieldReference(); 
            }
            this.state = 216;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GetPathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_getPath;
    return this;
}

GetPathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GetPathContext.prototype.constructor = GetPathContext;

GetPathContext.prototype.Slash = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FirebaseRulesParser.Slash);
    } else {
        return this.getToken(FirebaseRulesParser.Slash, i);
    }
};


GetPathContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FirebaseRulesParser.Identifier);
    } else {
        return this.getToken(FirebaseRulesParser.Identifier, i);
    }
};


GetPathContext.prototype.pathVariableReplace = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PathVariableReplaceContext);
    } else {
        return this.getTypedRuleContext(PathVariableReplaceContext,i);
    }
};

GetPathContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterGetPath(this);
	}
};

GetPathContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitGetPath(this);
	}
};

GetPathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitGetPath(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.GetPathContext = GetPathContext;

FirebaseRulesParser.prototype.getPath = function() {

    var localctx = new GetPathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, FirebaseRulesParser.RULE_getPath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 222; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 217;
            this.match(FirebaseRulesParser.Slash);
            this.state = 220;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case FirebaseRulesParser.Identifier:
                this.state = 218;
                this.match(FirebaseRulesParser.Identifier);
                break;
            case FirebaseRulesParser.T__0:
                this.state = 219;
                this.pathVariableReplace();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 224; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===FirebaseRulesParser.Slash);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MatchPathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FirebaseRulesParser.RULE_matchPath;
    return this;
}

MatchPathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatchPathContext.prototype.constructor = MatchPathContext;

MatchPathContext.prototype.Slash = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FirebaseRulesParser.Slash);
    } else {
        return this.getToken(FirebaseRulesParser.Slash, i);
    }
};


MatchPathContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FirebaseRulesParser.Identifier);
    } else {
        return this.getToken(FirebaseRulesParser.Identifier, i);
    }
};


MatchPathContext.prototype.pathVariable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PathVariableContext);
    } else {
        return this.getTypedRuleContext(PathVariableContext,i);
    }
};

MatchPathContext.prototype.enterRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.enterMatchPath(this);
	}
};

MatchPathContext.prototype.exitRule = function(listener) {
    if(listener instanceof FirebaseRulesListener ) {
        listener.exitMatchPath(this);
	}
};

MatchPathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FirebaseRulesVisitor ) {
        return visitor.visitMatchPath(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FirebaseRulesParser.MatchPathContext = MatchPathContext;

FirebaseRulesParser.prototype.matchPath = function() {

    var localctx = new MatchPathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, FirebaseRulesParser.RULE_matchPath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 231; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 226;
            this.match(FirebaseRulesParser.Slash);
            this.state = 229;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case FirebaseRulesParser.Identifier:
                this.state = 227;
                this.match(FirebaseRulesParser.Identifier);
                break;
            case FirebaseRulesParser.CurlyOpen:
                this.state = 228;
                this.pathVariable();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 233; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===FirebaseRulesParser.Slash);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


FirebaseRulesParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 16:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

FirebaseRulesParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 12);
		case 1:
			return this.precpred(this._ctx, 11);
		case 2:
			return this.precpred(this._ctx, 10);
		case 3:
			return this.precpred(this._ctx, 9);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.FirebaseRulesParser = FirebaseRulesParser;
exports.ServiceContext = ServiceContext;
FirebaseRulesParser.ServiceContext = ServiceContext;
exports.NamespaceContext = NamespaceContext;
FirebaseRulesParser.NamespaceContext = NamespaceContext;
exports.NamespaceBlockContext = NamespaceBlockContext;
FirebaseRulesParser.NamespaceBlockContext = NamespaceBlockContext;
exports.MatchBlockContext = MatchBlockContext;
FirebaseRulesParser.MatchBlockContext = MatchBlockContext;
exports.AllowKeyContext = AllowKeyContext;
FirebaseRulesParser.AllowKeyContext = AllowKeyContext;
exports.CommentContext = CommentContext;
FirebaseRulesParser.CommentContext = CommentContext;
exports.MatcherContext = MatcherContext;
FirebaseRulesParser.MatcherContext = MatcherContext;
exports.AllowContext = AllowContext;
FirebaseRulesParser.AllowContext = AllowContext;
exports.PathVariableReplaceContext = PathVariableReplaceContext;
FirebaseRulesParser.PathVariableReplaceContext = PathVariableReplaceContext;
exports.PathVariableContext = PathVariableContext;
FirebaseRulesParser.PathVariableContext = PathVariableContext;
exports.ArgContext = ArgContext;
FirebaseRulesParser.ArgContext = ArgContext;
exports.ArgumentsContext = ArgumentsContext;
FirebaseRulesParser.ArgumentsContext = ArgumentsContext;
exports.ArgDeclarationContext = ArgDeclarationContext;
FirebaseRulesParser.ArgDeclarationContext = ArgDeclarationContext;
exports.ArgDeclarationsContext = ArgDeclarationsContext;
FirebaseRulesParser.ArgDeclarationsContext = ArgDeclarationsContext;
exports.FunctionDeclarationContext = FunctionDeclarationContext;
FirebaseRulesParser.FunctionDeclarationContext = FunctionDeclarationContext;
exports.FieldReferenceContext = FieldReferenceContext;
FirebaseRulesParser.FieldReferenceContext = FieldReferenceContext;
exports.ExpressionContext = ExpressionContext;
FirebaseRulesParser.ExpressionContext = ExpressionContext;
exports.ObjectReferenceContext = ObjectReferenceContext;
FirebaseRulesParser.ObjectReferenceContext = ObjectReferenceContext;
exports.GetContext = GetContext;
FirebaseRulesParser.GetContext = GetContext;
exports.FunctionCallContext = FunctionCallContext;
FirebaseRulesParser.FunctionCallContext = FunctionCallContext;
exports.GetPathContext = GetPathContext;
FirebaseRulesParser.GetPathContext = GetPathContext;
exports.MatchPathContext = MatchPathContext;
FirebaseRulesParser.MatchPathContext = MatchPathContext;
exports.FieldReferenceWithIdentifierContext = FieldReferenceWithIdentifierContext;
FirebaseRulesParser.FieldReferenceWithIdentifierContext = FieldReferenceWithIdentifierContext;
exports.FieldReferenceWithMemberRefContext = FieldReferenceWithMemberRefContext;
FirebaseRulesParser.FieldReferenceWithMemberRefContext = FieldReferenceWithMemberRefContext;
exports.NumberExpressionContext = NumberExpressionContext;
FirebaseRulesParser.NumberExpressionContext = NumberExpressionContext;
exports.ObjectReferenceExpressionContext = ObjectReferenceExpressionContext;
FirebaseRulesParser.ObjectReferenceExpressionContext = ObjectReferenceExpressionContext;
exports.ParenthesisExpressionContext = ParenthesisExpressionContext;
FirebaseRulesParser.ParenthesisExpressionContext = ParenthesisExpressionContext;
exports.ArithmeticExpressionContext = ArithmeticExpressionContext;
FirebaseRulesParser.ArithmeticExpressionContext = ArithmeticExpressionContext;
exports.BooleanExpressionContext = BooleanExpressionContext;
FirebaseRulesParser.BooleanExpressionContext = BooleanExpressionContext;
exports.FunctionExpressionContext = FunctionExpressionContext;
FirebaseRulesParser.FunctionExpressionContext = FunctionExpressionContext;
exports.CompareExpressionContext = CompareExpressionContext;
FirebaseRulesParser.CompareExpressionContext = CompareExpressionContext;
exports.BinaryExpressionContext = BinaryExpressionContext;
FirebaseRulesParser.BinaryExpressionContext = BinaryExpressionContext;
exports.LogicalExpressionContext = LogicalExpressionContext;
FirebaseRulesParser.LogicalExpressionContext = LogicalExpressionContext;
exports.GetExpressionContext = GetExpressionContext;
FirebaseRulesParser.GetExpressionContext = GetExpressionContext;
exports.StringExpressionContext = StringExpressionContext;
FirebaseRulesParser.StringExpressionContext = StringExpressionContext;
exports.NullExpressionContext = NullExpressionContext;
FirebaseRulesParser.NullExpressionContext = NullExpressionContext;
exports.UnaryExpressionContext = UnaryExpressionContext;
FirebaseRulesParser.UnaryExpressionContext = UnaryExpressionContext;
