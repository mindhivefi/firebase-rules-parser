import {InputStream, Lexer} from 'antlr4';

export declare class FirebaseRulesLexer extends Lexer {
    public readonly channelNames: string[];
    public readonly modeNames: string[];
    public readonly literalNames: string[];
    public readonly symbolicNames: string[];
    public readonly ruleNames: string[];
    public readonly grammarFileName: string;

    constructor(input: InputStream);
}
