grammar FirebaseRules;
/* This will be the entry point of our parser. */
service: Service namespace namespaceBlock;

/**
 * Namespace definition shown after service
 */
namespace: Identifier | ObjectReference;

/**
 * Namespace block can only contain matchers, functions and comments
 */
namespaceBlock: '{' (matcher | Comment | function)* '}';

matchBlock: '{' (allow | matcher | Comment | function)* '}';

allowKey: (Read | Write | Update | Delete | Create | List | Get);

/**
 * Path matcher, can be:fragment /collection/doc/sub/ /collection/{doc}/ /collection/{doc=**}/
 * /collection/{doc=path*}/
 */
matcher: Match matchPath matchBlock;

allow: Allow allowKey (',' allowKey)* (':' If expression)? ';';

pathVariableReplace:
	'$(' (Identifier | String | Number | ObjectReference) ')';

pathVariable: '{' Identifier ('=' '**')? '}';

arguments: Identifier? (',' Identifier)*;

function:
	Function Identifier '(' arguments ')' '{' Return expression ';' '}';

expression:
	nullValue
	| expression compareOperator expression
	| expression logicalOperator expression
	| expression binaryOperator expression
	| expression arithmeticOperator expression
	| unaryOperator expression
	| stringValue
	| numberValue
	| booleanValue
	| objectRef
	| get
	| functionCall
	| identifierRef
	| parenthesisExpression;

parenthesisExpression: '(' expression ')';

numberValue: Number;

stringValue: String;

nullValue: Null;

objectRef: ObjectReference;

identifierRef: Identifier;

compareOperator: '<' | '<=' | '==' | '>' | '>=' | '!=';

logicalOperator: '&&' | '||';

binaryOperator: '&' | '|' | '%';

arithmeticOperator: '+' | '-' | '/' | '*';

unaryOperator: LogicalNot | '-';

get:
	Get '(' getPath ')' '.' (
		(Identifier | ObjectReference) (
			'[' (ObjectReference | String | Number) ']'
		)?
	);

functionCall: Identifier '(' arguments ')';

booleanValue: True | False;

getPath: (Slash (Identifier | pathVariableReplace))+;

matchPath: (Slash (Identifier | pathVariable))+;

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

LogicalAnd: '&&';
LogicalOr: '||';
LogicalNot: '!';

Return: 'return';
Null: 'null';
Service: 'service';

ObjectReference: Identifier ('.' Identifier)+;

/* A number: can be an integer value, or a decimal value */
Number: ('0' ..'9')+ ('.' ('0' ..'9')+)?;

//String: '\'' ~('\'')*;
String: '\'' (~'\'')* '\'';

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