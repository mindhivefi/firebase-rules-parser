grammar FirebaseRules;
/* This will be the entry point of our parser.*/
service: Service namespace namespaceBlock;

/**
 * Namespace definition shown after service
 */
namespace: objectReference;

/**
 * Namespace block can only contain matchers, functions and comments
 */
namespaceBlock:
	CurlyOpen (matcher | comment | functionDeclaration)* CurlyClose;

matchBlock:
	CurlyOpen (allow | matcher | Comment | functionDeclaration)* CurlyClose;

allowKey: (Read | Write | Update | Delete | Create | List | Get);

comment: Comment;
/**
 * Path matcher, can be:fragment /collection/doc/sub/ /collection/{doc}/ /collection/{doc=**}/
 * /collection/{doc=path*}/
 */
matcher: Match matchPath matchBlock;

allow:
	Allow allowKey (Comma allowKey)* (Colon If expression)? Semicolon;

pathVariableReplace: '$(' (Identifier | String | Number) ')';

pathVariable: CurlyOpen Identifier ('=' '**')? CurlyClose;

arg: expression;

arguments: arg? (',' arg)*;

argDeclaration: Identifier;

argDeclarations: argDeclaration? (',' argDeclaration)*;

functionDeclaration:
	Function Identifier BracketOpen argDeclarations BracketClose CurlyOpen Return expression ';'
		CurlyClose;

fieldReference:
	(Dot Identifier)									# fieldReferenceWithIdentifier
	| (SquareBracketOpen expression SquareBracketClose)	# fieldReferenceWithMemberRef;

expression:
	Null # nullExpression
	| expression (
		LessThan
		| LessOrEqual
		| Equals
		| Unequal
		| GreaterThan
		| GreaterOrEqual
	) expression										# compareExpression
	| expression (LogicalAnd | LogicalOr) expression	# LogicalExpression
	| expression (BinaryAnd | BinaryOr) expression		# binaryExpression
	| expression (
		ArithmeticAdd
		| ArithmeticSub
		| ArithmeticMul
		| Slash
		| ArithmeticExp
		| ArithmeticModus
	) expression								# arithmeticExpression
	| (LogicalNot | ArithmeticSub) expression	# unaryExpression
	| String									# stringExpression
	| Number									# numberExpression
	| (True | False)							# booleanExpression
	| objectReference							# objectReferenceExpression
	| get										# getExpression
	| functionCall								# functionExpression
	// | Identifier (fieldReference)*			# identifierReferenceExpression
	| BracketOpen expression BracketClose # parenthesisExpression;

objectReference: Identifier (fieldReference)*;

get:
	Get BracketOpen getPath BracketClose Dot (
		(Identifier) (
			SquareBracketOpen (String | Number | objectReference) SquareBracketClose
		)?
	);

functionCall:
	Identifier BracketOpen arguments BracketClose (
		fieldReference
	)*;

getPath: (Slash (Identifier | pathVariableReplace))+;

matchPath: (Slash (Identifier | pathVariable))+;

/* Structural  */

CurlyOpen: '{';
CurlyClose: '}';

BracketOpen: '(';
BracketClose: ')';

SquareBracketOpen: '[';
SquareBracketClose: ']';

Dot: '.';
Colon: ':';
Comma: ',';
Semicolon: ';';

/* Operators */
LessThan: '<';
LessOrEqual: '<=';
GreaterOrEqual: '>=';
GreaterThan: '>';
Equals: '==';
Unequal: '!=';

LogicalAnd: '&&';
LogicalOr: '||';
LogicalNot: '!';

BinaryAnd: '&';
BinaryOr: '|';

ArithmeticAdd: '+';
ArithmeticSub: '-';
ArithmeticMul: '*';
ArithmeticExp: '^';
ArithmeticModus: '%';

/* Reserved words */

Allow: 'allow';
Match: 'match';
If: 'if';
Get: 'get';

True: 'true';
False: 'false';

/** Allow keys */
List: 'list';
Create: 'create';
Update: 'update';
Read: 'read';
Write: 'write';
Delete: 'delete';

Function: 'function';

Return: 'return';
Null: 'null';
Service: 'service';

/* A number: can be an integer value, or a decimal value */
Number: ('0' ..'9')+ ('.' ('0' ..'9')+)?;

String: ('\'' (~'\'')* '\'') | ('"' (~'"')* '"');

Identifier: ('a' ..'z' | 'A' ..'Z' | '_') (
		'a' ..'z'
		| 'A' ..'Z'
		| '0' ..'9'
		| '_'
		| '-'
	)*;

Slash: '/';

/* We're going to ignore all white space characters */
WS: (' ' | '\t' | '\r' | '\n') -> skip;

Comment: '//' ~('\n')*;