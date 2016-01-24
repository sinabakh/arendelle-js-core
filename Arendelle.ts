
//import parser = require('./Jison/LexParse');

function exec (input) {
    return parse(input);
}

var AST = exec("r");
console.log(AST.statements);
