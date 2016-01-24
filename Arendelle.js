//import parser = require('./Jison/LexParse');
function exec(input) {
    return parse(input);
}
var AST = exec("r");
console.log(AST.statements);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Nodes;
(function (Nodes) {
    var Node = (function () {
        function Node() {
        }
        Node.prototype.exec = function (arendelle) { };
        return Node;
    })();
    Nodes.Node = Node;
    var NBlock = (function (_super) {
        __extends(NBlock, _super);
        function NBlock() {
            _super.apply(this, arguments);
        }
        NBlock.prototype.exec = function (arendelle) {
            for (var stmt in this.statements) {
                stmt.exec(arendelle);
            }
            _super.prototype.exec.call(this, arendelle);
        };
        return NBlock;
    })(Node);
    Nodes.NBlock = NBlock;
})(Nodes || (Nodes = {}));
/// <reference path="./Base.ts"/>
var Nodes;
(function (Nodes) {
    var NCommand = (function (_super) {
        __extends(NCommand, _super);
        function NCommand(command) {
            this.command = command;
            _super.call(this);
        }
        NCommand.prototype.exec = function (arendelle) {
            console.log("What I mean Is: " + this.command);
            _super.prototype.exec.call(this, arendelle);
        };
        return NCommand;
    })(Nodes.Node);
    Nodes.NCommand = NCommand;
})(Nodes || (Nodes = {}));
/// <reference path="./Base.ts"/>
/// <reference path="./Command.ts"/>
