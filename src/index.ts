import { ANTLRInputStream, CharStreams, CommonTokenStream } from 'antlr4ts';
import * as fs from 'fs';

import { FirebaseRulesLexer } from './FirebaseRulesLexer';
import { FirebaseRulesParser } from './FirebaseRulesParser';

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
  const inputStream = new ANTLRInputStream(rules);
  const lexer = new FirebaseRulesLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  return new FirebaseRulesParser(tokenStream);
}

// const parser = parseFirebaseRules(file);
// const service = parser.service();
// const namespace = service.namespace();
// // tslint:disable-next-line: no-console
// console.log(namespace.text);
