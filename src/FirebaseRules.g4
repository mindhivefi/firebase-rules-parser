grammar FirebaseRules;
/* This will be the entry point of our parser.*/
service: Service namespaceIdentifier namespaceBlock;

namespaceIdentifier: id (Dot id)*;
/**
 * Namespace definition shown after service
 */
// namespace: NamespaceIdentifier;

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

getPathVariable: Identifier;

pathVariable: CurlyOpen Identifier ('=' '**')? CurlyClose;

arg: expression;

arguments: arg? (',' arg)*;

memberArg: expression;

memberArguments: memberArg? (',' memberArg)*;

argDeclaration: Identifier;

argDeclarations: argDeclaration? (',' argDeclaration)*;

functionDeclaration:
	Function Identifier BracketOpen argDeclarations BracketClose CurlyOpen Return expression ';'
		CurlyClose;

fieldReference:
	Dot id												# fieldReferenceWithIdentifier
	| SquareBracketOpen expression SquareBracketClose	# fieldReferenceWithMemberRef;

// memberFunction: Dot id BracketOpen arguments BracketClose;

/*
 * Id is a set of all possible id's with reserved words. This should be used only with object
 * references
 */
id:
	Identifier
	| Allow
	| Match
	| If
	| Exists
	| True
	| False
	| List
	| Create
	| Update
	| Read
	| Write
	| Delete
	| Function
	| Return
	| Null
	| Service;

// stringRange: SquareBracketOpen expression (Colon expression)? SquareBracketClose;

/**
 * Any supported expression
 */
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
	) expression																		# arithmeticExpression
	| expression InOperator expression													# inExpression
	| expression Dot id																	# memberReferenceExpression
	| expression Dot id BracketOpen memberArguments BracketClose						# memberFunctionExpression
	| expression SquareBracketOpen expression (Colon expression)? SquareBracketClose	#
		rangeExpression
	| SquareBracketOpen expression? (Comma expression)* SquareBracketClose	# arrayExpression
	| (LogicalNot | ArithmeticSub) expression								# unaryExpression
	| String																# stringExpression
	| Number																# numberExpression
	| (True | False)														# booleanExpression
	| Identifier															# objectReferenceExpression
	| ruleFunctionCall														# getExpression
	| functionCall															# functionExpression
	| BracketOpen expression BracketClose									# parenthesisExpression;

objectReference: Identifier; // (fieldReference)*;

getPathExpressionVariable:
	PathVariableBracket expression BracketClose;

getPath: (Slash (getPathVariable | getPathExpressionVariable))+;
/* Firestore rules own function call that have special input args */
ruleFunctionCall:
	(Get | Exists) BracketOpen getPath BracketClose;
// ( fieldReference )*;

functionCall: Identifier BracketOpen arguments BracketClose;
// ( fieldReference )*;

matchPath: (Slash (Identifier | pathVariable))+;

/* Structural  */

CurlyOpen: '{';
CurlyClose: '}';

BracketOpen: '(';
BracketClose: ')';

PathVariableBracket: '$(';

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

InOperator: 'in';

/* Reserved words */

Allow: 'allow';
Match: 'match';
If: 'if';
Get: 'get';
Exists: 'exists';

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

// TODO unicode character support for identifiers
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