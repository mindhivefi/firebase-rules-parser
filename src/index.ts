import { CommonTokenStream, InputStream } from 'antlr4';
import * as fs from 'fs';

import { FirebaseRulesLexer } from './parser/FirebaseRulesLexer';
import { FirebaseRulesParser } from './parser/FirebaseRulesParser';

/**
 * Parse firebase rules from file
 * @param file Filepath to rules-file
 */
export function parseFirebaseRulesFromFile(fileName: string): FirebaseRulesParser {
  const file = fs.readFileSync(fileName, 'utf8');
  return parseFirebaseRulesFromString(file);
}

/**
 * Parse firebase rules from file
 * @param rules Inmemory file containing rules-file
 */
export function parseFirebaseRulesFromString(rules: string): FirebaseRulesParser {
  const inputStream = new InputStream(rules);
  const lexer = new FirebaseRulesLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  return new FirebaseRulesParser(tokenStream);
}

import FirebaseRulesIntepreterFacade from './intepreter/';

export default () => new FirebaseRulesIntepreterFacade();
