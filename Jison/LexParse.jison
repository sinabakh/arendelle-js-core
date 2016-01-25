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
    : TLBRACK mel TCOMMA expr TRBRACK {$$ = new Nodes.TLoop($2, $4);}
    ;

cmd
    : TCMD {console.log("I am command!"); $$ = new Nodes.NCommand($1);}
    ;

space_decl
    : TLPAREN TTEXT TCOMMA mel TRPAREN {$$ = new Nodes.TSpaceDecl($2, $4);}
    ;

mel
    : numman{$$ = new Nodes.TNumber($1);}
    ;

numman
    : numman TPLUS numman
        {$$ = $1+$3;}
    | numman TMINUS numman
        {$$ = $1-$3;}
    | numman TMUL numman
        {$$ = $1*$3;}
    | numman TDIV numman
        {$$ = $1/$3;}
    | numman TPOW numman
        {$$ = Math.pow($1, $3);}
    | numman TNOT
        {{
          $$ = (function fact (n) { return n==0 ? 1 : fact(n-1) * n })($1);
        }}
    | numman TMOD
        {$$ = $1/100;}
    //| TMINUS numman %prec UMINUS
    //    {$$ = -$2;}
    | TLPAREN numman TRPAREN
        {$$ = $2;}
    | TNUMBER
        {$$ = Number(yytext);}
    ;
