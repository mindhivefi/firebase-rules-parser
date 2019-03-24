grammar FirestoreRules;
/* This will be the entry point of our parser. */
service: 'service' namespace namespaceBlock;

namespace: Identifier | ObjectReference;

namespaceBlock: '{' (matcher | Comment | function)* '}';

matchBlock: '{' (allow | matcher | Comment | function)* '}';

allowKey: (Read | Write | Update | Delete | Create | List | Get);

allow:
	'allow' allowKey (',' allowKey)* (':' If expression)? ';';

pathVariableReplace:
	'$(' (Identifier | String | Number | ObjectReference) ')';

pathVariable: '{' Identifier ('=' '**')? '}';

// condition: booleanValue | expression;

arguments: Identifier? (',' Identifier)*;

function:
	'function' Identifier '(' arguments ')' '{' Return expression ';' '}';

expression:
	Null
	| expression compareOperator expression
	| String
	| Number
	| booleanValue
	| ObjectReference
	| get
	| functionCall
	| Identifier
	| '(' expression ')';

compareOperator: '<' | '==' | '>' | '!=' | '&&' | '||';

get:
	'get' '(' getPath ')' '.' (
		(Identifier | ObjectReference) (
			'[' (ObjectReference | String | Number) ']'
		)?
	);

functionCall: Identifier '(' arguments ')';
booleanValue: True | False;

getPath: (Slash (Identifier | pathVariableReplace))+;

matchPath: (Slash (Identifier | pathVariable))+;
/**
 * Path matcher, can be:fragment /collection/doc/sub/ /collection/{doc}/ /collection/{doc=**}/
 * /collection/{doc=path*}/
 */
matcher: Match matchPath matchBlock;

/* Addition and subtraction have the lowest precedence. */
additionExp: multiplyExp ('+' multiplyExp | '-' multiplyExp)*;

/* Multiplication and division have a higher precedence. */
multiplyExp: atomExp ( '*' atomExp | '/' atomExp)*;

/* An expression atom is the smallest part of an expression: a number. Or when we encounter
 parenthesis, we're making a recursive call back to the rule 'additionExp'. As you can see, an
 'atomExp' has the highest precedence.
 */
atomExp: Number | '(' additionExp ')';

/* Reserved words */
Match: 'match';
If: 'if';

True: 'true';
False: 'false';

/** Allow keys */
List: 'list';
Get: 'get';
Create: 'create';
Update: 'update';
Read: 'read';
Write: 'write';
Delete: 'delete';

Return: 'return';
Null: 'null';

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