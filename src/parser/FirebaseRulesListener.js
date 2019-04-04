// Generated from FirebaseRules.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by FirebaseRulesParser.
function FirebaseRulesListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

FirebaseRulesListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
FirebaseRulesListener.prototype.constructor = FirebaseRulesListener;

// Enter a parse tree produced by FirebaseRulesParser#service.
FirebaseRulesListener.prototype.enterService = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#service.
FirebaseRulesListener.prototype.exitService = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#namespaceIdentifier.
FirebaseRulesListener.prototype.enterNamespaceIdentifier = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#namespaceIdentifier.
FirebaseRulesListener.prototype.exitNamespaceIdentifier = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#namespaceBlock.
FirebaseRulesListener.prototype.enterNamespaceBlock = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#namespaceBlock.
FirebaseRulesListener.prototype.exitNamespaceBlock = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#matchBlock.
FirebaseRulesListener.prototype.enterMatchBlock = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#matchBlock.
FirebaseRulesListener.prototype.exitMatchBlock = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#allowKey.
FirebaseRulesListener.prototype.enterAllowKey = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#allowKey.
FirebaseRulesListener.prototype.exitAllowKey = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#comment.
FirebaseRulesListener.prototype.enterComment = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#comment.
FirebaseRulesListener.prototype.exitComment = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#matcher.
FirebaseRulesListener.prototype.enterMatcher = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#matcher.
FirebaseRulesListener.prototype.exitMatcher = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#allow.
FirebaseRulesListener.prototype.enterAllow = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#allow.
FirebaseRulesListener.prototype.exitAllow = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#getPathVariable.
FirebaseRulesListener.prototype.enterGetPathVariable = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#getPathVariable.
FirebaseRulesListener.prototype.exitGetPathVariable = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#pathVariable.
FirebaseRulesListener.prototype.enterPathVariable = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#pathVariable.
FirebaseRulesListener.prototype.exitPathVariable = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#arg.
FirebaseRulesListener.prototype.enterArg = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#arg.
FirebaseRulesListener.prototype.exitArg = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#arguments.
FirebaseRulesListener.prototype.enterArguments = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#arguments.
FirebaseRulesListener.prototype.exitArguments = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#memberArg.
FirebaseRulesListener.prototype.enterMemberArg = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#memberArg.
FirebaseRulesListener.prototype.exitMemberArg = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#memberArguments.
FirebaseRulesListener.prototype.enterMemberArguments = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#memberArguments.
FirebaseRulesListener.prototype.exitMemberArguments = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#argDeclaration.
FirebaseRulesListener.prototype.enterArgDeclaration = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#argDeclaration.
FirebaseRulesListener.prototype.exitArgDeclaration = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#argDeclarations.
FirebaseRulesListener.prototype.enterArgDeclarations = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#argDeclarations.
FirebaseRulesListener.prototype.exitArgDeclarations = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#functionDeclaration.
FirebaseRulesListener.prototype.enterFunctionDeclaration = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#functionDeclaration.
FirebaseRulesListener.prototype.exitFunctionDeclaration = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#fieldReferenceWithIdentifier.
FirebaseRulesListener.prototype.enterFieldReferenceWithIdentifier = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#fieldReferenceWithIdentifier.
FirebaseRulesListener.prototype.exitFieldReferenceWithIdentifier = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#fieldReferenceWithMemberRef.
FirebaseRulesListener.prototype.enterFieldReferenceWithMemberRef = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#fieldReferenceWithMemberRef.
FirebaseRulesListener.prototype.exitFieldReferenceWithMemberRef = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#id.
FirebaseRulesListener.prototype.enterId = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#id.
FirebaseRulesListener.prototype.exitId = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#arrayExpression.
FirebaseRulesListener.prototype.enterArrayExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#arrayExpression.
FirebaseRulesListener.prototype.exitArrayExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#numberExpression.
FirebaseRulesListener.prototype.enterNumberExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#numberExpression.
FirebaseRulesListener.prototype.exitNumberExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#objectReferenceExpression.
FirebaseRulesListener.prototype.enterObjectReferenceExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#objectReferenceExpression.
FirebaseRulesListener.prototype.exitObjectReferenceExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#parenthesisExpression.
FirebaseRulesListener.prototype.enterParenthesisExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#parenthesisExpression.
FirebaseRulesListener.prototype.exitParenthesisExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#arithmeticExpression.
FirebaseRulesListener.prototype.enterArithmeticExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#arithmeticExpression.
FirebaseRulesListener.prototype.exitArithmeticExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#memberReferenceExpression.
FirebaseRulesListener.prototype.enterMemberReferenceExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#memberReferenceExpression.
FirebaseRulesListener.prototype.exitMemberReferenceExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#booleanExpression.
FirebaseRulesListener.prototype.enterBooleanExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#booleanExpression.
FirebaseRulesListener.prototype.exitBooleanExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#functionExpression.
FirebaseRulesListener.prototype.enterFunctionExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#functionExpression.
FirebaseRulesListener.prototype.exitFunctionExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#compareExpression.
FirebaseRulesListener.prototype.enterCompareExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#compareExpression.
FirebaseRulesListener.prototype.exitCompareExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#binaryExpression.
FirebaseRulesListener.prototype.enterBinaryExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#binaryExpression.
FirebaseRulesListener.prototype.exitBinaryExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#LogicalExpression.
FirebaseRulesListener.prototype.enterLogicalExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#LogicalExpression.
FirebaseRulesListener.prototype.exitLogicalExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#getExpression.
FirebaseRulesListener.prototype.enterGetExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#getExpression.
FirebaseRulesListener.prototype.exitGetExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#inExpression.
FirebaseRulesListener.prototype.enterInExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#inExpression.
FirebaseRulesListener.prototype.exitInExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#stringExpression.
FirebaseRulesListener.prototype.enterStringExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#stringExpression.
FirebaseRulesListener.prototype.exitStringExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#nullExpression.
FirebaseRulesListener.prototype.enterNullExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#nullExpression.
FirebaseRulesListener.prototype.exitNullExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#rangeExpression.
FirebaseRulesListener.prototype.enterRangeExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#rangeExpression.
FirebaseRulesListener.prototype.exitRangeExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#unaryExpression.
FirebaseRulesListener.prototype.enterUnaryExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#unaryExpression.
FirebaseRulesListener.prototype.exitUnaryExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#memberFunctionExpression.
FirebaseRulesListener.prototype.enterMemberFunctionExpression = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#memberFunctionExpression.
FirebaseRulesListener.prototype.exitMemberFunctionExpression = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#objectReference.
FirebaseRulesListener.prototype.enterObjectReference = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#objectReference.
FirebaseRulesListener.prototype.exitObjectReference = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#getPathExpressionVariable.
FirebaseRulesListener.prototype.enterGetPathExpressionVariable = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#getPathExpressionVariable.
FirebaseRulesListener.prototype.exitGetPathExpressionVariable = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#getPath.
FirebaseRulesListener.prototype.enterGetPath = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#getPath.
FirebaseRulesListener.prototype.exitGetPath = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#ruleFunctionCall.
FirebaseRulesListener.prototype.enterRuleFunctionCall = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#ruleFunctionCall.
FirebaseRulesListener.prototype.exitRuleFunctionCall = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#functionCall.
FirebaseRulesListener.prototype.enterFunctionCall = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#functionCall.
FirebaseRulesListener.prototype.exitFunctionCall = function(ctx) {
};


// Enter a parse tree produced by FirebaseRulesParser#matchPath.
FirebaseRulesListener.prototype.enterMatchPath = function(ctx) {
};

// Exit a parse tree produced by FirebaseRulesParser#matchPath.
FirebaseRulesListener.prototype.exitMatchPath = function(ctx) {
};



exports.FirebaseRulesListener = FirebaseRulesListener;