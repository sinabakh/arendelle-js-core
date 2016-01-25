/* description: Parses Arendelle expressions. */



/* lexical grammar */
%lex
%%


//[0-9]+("."[0-9]+)?\b     return 'NUMBER'
[p|r|d|l|u|n|c|i|w|e]+   return 'TCMD'
<<EOF>>                  return 'EOF'
\s+                      /* skip whitespace */
.                        return 'INVALID'

/lex

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
    : cmd
    ;

cmd
    : TCMD {console.log("I am command!"); $$ = new Nodes.NCommand($1);}
    ;
