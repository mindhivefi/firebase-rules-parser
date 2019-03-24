import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import * as fs from 'fs';
import * as path from 'path';
import { FirestoreRulesLexer } from './FirestoreRulesLexer';
import { FirestoreRulesParser } from './FirestoreRulesParser';

const file = fs.readFileSync(path.resolve(__dirname, '../test.rules'), 'utf8');

const inputStream = new ANTLRInputStream(file);
const lexer = new FirestoreRulesLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new FirestoreRulesParser(tokenStream);

const service = parser.service();
const namespace = service.namespace();
// tslint:disable-next-line: no-console
console.log(namespace.text);