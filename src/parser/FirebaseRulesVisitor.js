// Generated from FirebaseRules.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by FirebaseRulesParser.

function FirebaseRulesVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

FirebaseRulesVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
FirebaseRulesVisitor.prototype.constructor = FirebaseRulesVisitor;

// Visit a parse tree produced by FirebaseRulesParser#service.
FirebaseRulesVisitor.prototype.visitService = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#namespace.
FirebaseRulesVisitor.prototype.visitNamespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#namespaceBlock.
FirebaseRulesVisitor.prototype.visitNamespaceBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#matchBlock.
FirebaseRulesVisitor.prototype.visitMatchBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#allowKey.
FirebaseRulesVisitor.prototype.visitAllowKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#comment.
FirebaseRulesVisitor.prototype.visitComment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#matcher.
FirebaseRulesVisitor.prototype.visitMatcher = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#allow.
FirebaseRulesVisitor.prototype.visitAllow = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#pathVariableReplace.
FirebaseRulesVisitor.prototype.visitPathVariableReplace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#pathVariable.
FirebaseRulesVisitor.prototype.visitPathVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#arguments.
FirebaseRulesVisitor.prototype.visitArguments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#functionDeclaration.
FirebaseRulesVisitor.prototype.visitFunctionDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#numberExpression.
FirebaseRulesVisitor.prototype.visitNumberExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#objectReferenceExpression.
FirebaseRulesVisitor.prototype.visitObjectReferenceExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#parenthesisExpression.
FirebaseRulesVisitor.prototype.visitParenthesisExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#identifierReferenceExpression.
FirebaseRulesVisitor.prototype.visitIdentifierReferenceExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#arithmeticExpression.
FirebaseRulesVisitor.prototype.visitArithmeticExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#booleanExpression.
FirebaseRulesVisitor.prototype.visitBooleanExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#functionExpression.
FirebaseRulesVisitor.prototype.visitFunctionExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#compareExpression.
FirebaseRulesVisitor.prototype.visitCompareExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#binaryExpression.
FirebaseRulesVisitor.prototype.visitBinaryExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#LogicalExpression.
FirebaseRulesVisitor.prototype.visitLogicalExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#getExpression.
FirebaseRulesVisitor.prototype.visitGetExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#stringExpression.
FirebaseRulesVisitor.prototype.visitStringExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#nullExpression.
FirebaseRulesVisitor.prototype.visitNullExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#unaryExpression.
FirebaseRulesVisitor.prototype.visitUnaryExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#get.
FirebaseRulesVisitor.prototype.visitGet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#functionCall.
FirebaseRulesVisitor.prototype.visitFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#getPath.
FirebaseRulesVisitor.prototype.visitGetPath = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FirebaseRulesParser#matchPath.
FirebaseRulesVisitor.prototype.visitMatchPath = function(ctx) {
  return this.visitChildren(ctx);
};



exports.FirebaseRulesVisitor = FirebaseRulesVisitor;