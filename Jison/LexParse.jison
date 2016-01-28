/* description: Parses Arendelle expressions. */



/* lexical grammar */
%lex
%%


[0-9]+("."[0-9]+)?\b     return 'TNUMBER'
","                      return 'TCOMMA'
"*"                      return 'TMUL'
"/"                      return 'TDIV'
"-"                      return 'TMINUS'
"+"                      return 'TPLUS'
"^"                      return 'TPOW'
"!"                      return 'TNOT'
"%"                      return 'TMOD'
"("                      return 'TLPAREN'
")"                      return 'TRPAREN'
"["                      return 'TLBRACK'
"]"                      return 'TRBRACK'
[p|r|d|l|u|n|c|i|w|e]+   return 'TCMD'
[@]+[a-zA-Z._]*[a-zA-Z]+ return 'TSPACE'
[a-zA-Z._]*[a-zA-Z]+     return 'TTEXT'
<<EOF>>                  return 'EOF'
\s+                      /* skip whitespace */
.                        return 'INVALID'

/lex

/* operator associations and precedence */

%left 'TPLUS' 'TMINUS'
%left 'TMUL' 'TDIV'
%left 'TPOW'
%right 'TNOT'
%right 'TMOD'
%left UMINUS


%start program

%% /* language grammar */

program
    : stmts EOF{return $1;}
    ;

stmts
    : stmt
        { $$ = new Nodes.NBlock(); $$.statements.push($1); }
    |
      stmts stmt {$1.statements.push($2);}
    ;

stmt
    : expr {}
    ;

expr
    : cmd | space_decl | mel | loop
    ;

loop
    : TLBRACK mel TCOMMA stmts TRBRACK {$$ = new Nodes.TLoop($2, $4);}
    ;

cmd
    : TCMD {console.log("I am command!"); $$ = new Nodes.NCommand($1);}
    ;

space_decl
    : TLPAREN TTEXT TCOMMA mel TRPAREN {$$ = new Nodes.TSpaceDecl($2, $4);}
    ;

space
    : TSPACE{$$ = new Nodes.TSpace($1);}
    ;

mel
    : numman
    ;

numman
    : numman TPLUS numman
        {$$ = new Nodes.TOperation($1,$3,$2);}
    | numman TMINUS numman
        {$$ = new Nodes.TOperation($1,$3,$2);}
    | numman TMUL numman
        {$$ = new Nodes.TOperation($1,$3,$2);}
    | numman TDIV numman
        {$$ = new Nodes.TOperation($1,$3,$2);}
    | numman TPOW numman
        {$$ = new Nodes.TOperation($1,$3,$2);}
    /*| numman TNOT
        {{
          $$ = (function fact (n) { return n==0 ? 1 : fact(n-1) * n })($1);
        }}*/
    | numman TMOD numman
        {$$ = new Nodes.TOperation($1,$3,$2);}
    //| TMINUS numman %prec UMINUS
    //    {$$ = -$2;}
    | TLPAREN numman TRPAREN
        {$$ = $2;}
    | space
    | TNUMBER
        {$$ = new Nodes.TNumber(yytext);}
    ;
