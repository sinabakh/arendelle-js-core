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
"<"                      return 'TCLT'
">"                      return 'TCGT'
"="                      return 'TEQUAL'
"=="                     return 'TCEQ'
"%"                      return 'TMOD'
"("                      return 'TLPAREN'
")"                      return 'TRPAREN'
"{"                      return 'TLBRACE'
"}"                      return 'TRBRACE'
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

%left 'TCLT' 'TCLE' 'TCGT' 'TCGE'
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
    : cmd | space_decl | mel | loop | condition
    ;

loop
    : TLBRACK mel TCOMMA stmts TRBRACK {$$ = new Nodes.NLoop($2, $4);}
    ;

condition
    : TLBRACE mel TCOMMA expr TRBRACE {$$ = new Nodes.NCondition($2, $4, null);}
    | TLBRACE mel TCOMMA expr TCOMMA expr TRBRACE {$$ = new Nodes.NCondition($2, $4, $6);}
    ;

cmd
    : TCMD {console.log("I am command!"); $$ = new Nodes.NCommand($1);}
    ;

space_decl
    : TLPAREN TTEXT TCOMMA mel TRPAREN {$$ = new Nodes.NSpaceDecl($2, $4);}
    ;

space
    : TSPACE{$$ = new Nodes.NSpace($1);}
    ;

mel
    : numman
    ;

numman
    : numman TPLUS numman
        {$$ = new Nodes.NOperation($1,$3,$2, "math");}
    | numman TMINUS numman
        {$$ = new Nodes.NOperation($1,$3,$2, "math");}
    | numman TMUL numman
        {$$ = new Nodes.NOperation($1,$3,$2, "math");}
    | numman TDIV numman
        {$$ = new Nodes.NOperation($1,$3,$2, "math");}
    | numman TPOW numman
        {$$ = new Nodes.NOperation($1,$3,$2, "math");}
    | numman TNOT TEQUAL numman
        {$$ = new Nodes.NOperation($1,$4,"!=", "comp");}
    | numman TMOD numman
        {$$ = new Nodes.NOperation($1,$3,$2, "math");}
    //| TMINUS numman %prec UMINUS
    //    {$$ = -$2;}
    | numman TCLT numman
      {$$ = new Nodes.NOperation($1,$3,$2, "comp");}
    | numman TCLT TEQUAL numman
      {$$ = new Nodes.NOperation($1,$4,"<=", "comp");}
    | numman TCGT numman
      {$$ = new Nodes.NOperation($1,$3,$2, "comp");}
    | numman TCGT TEQUAL numman
      {$$ = new Nodes.NOperation($1,$4,">=", "comp");}
    | TLPAREN numman TRPAREN
        {$$ = $2;}
    | space
    | TNUMBER
        {$$ = new Nodes.NNumber(yytext);}
    ;
