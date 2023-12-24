export enum TokenType {
    ILLEGAL = "ILLEGAL",
    EOF = "EOF",
    IDENT = "IDENT",
    INT = "INT",
    ASSIGN = "=",
    PLUS = "+",
    COMMA = ",",
    SEMICOLON = ";",
    LPAREN = "(",
    RPAREN = ")",
    LBRACE = "{",
    RBRACE = "}",
    FUNCTION = "FUNCTION",
    LET = "LET"
}

export type Token = {
    tokenType: TokenType;
    tokenLiteral: string;
}