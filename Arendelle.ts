
declare module LexParse{function parse(input)}

function exec (input) {
    console.log("Executing Code...");
    return LexParse.parse(input);
}
