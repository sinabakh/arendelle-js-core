/* description: Parses Arendelle expressions. */



/* lexical grammar */
%lex
%%

[@]+[a-zA-Z._]*[a-zA-Z]+ return 'TSPACE'
[0-9]+("."[0-9]+)?\b     return 'TNUMBER'
"*"                      return 'TMUL'
"/"                      return 'TDIV'
"-"                      return 'TMINUS'
"+"                      return 'TPLUS'
"^"                      return 'TPOW'
"!"                      return 'TNOT'
"%"                      return 'TMOD'
"("                      return 'TLPAREN'
")"                      return 'TRPAREN'
[p|r|d|l|u|n|c|i|w|e]+   return 'TCMD'
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
    : cmd | space_decl | mel{$$ = new Nodes.TNumber($1);}
    ;

cmd
    : TCMD {console.log("I am command!"); $$ = new Nodes.NCommand($1);}
    ;

//space_decl

mel
    : mel TPLUS mel
        {$$ = $1+$3;}
    | mel TMINUS mel
        {$$ = $1-$3;}
    | mel TMUL mel
        {$$ = $1*$3;}
    | mel TDIV mel
        {$$ = $1/$3;}
    | mel TPOW mel
        {$$ = Math.pow($1, $3);}
    | mel TNOT
        {{
          $$ = (function fact (n) { return n==0 ? 1 : fact(n-1) * n })($1);
        }}
    | mel TMOD
        {$$ = $1/100;}
    | '-' mel %prec UMINUS
        {$$ = -$2;}
    | '(' mel ')'
        {$$ = $2;}
    | TNUMBER
        {$$ = Number(yytext);}
    ;
