function exec(input) {
    console.log("Executing Code...");
    return LexParse.parse(input);
}
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
        Node.prototype.exec = function (arendelle) { return ""; };
        return Node;
    })();
    Nodes.Node = Node;
    var NBlock = (function (_super) {
        __extends(NBlock, _super);
        function NBlock() {
            this.statements = new Array;
            _super.call(this);
        }
        NBlock.prototype.exec = function (arendelle) {
            var res;
            res = "{\n";
            for (var i in this.statements) {
                res = res.concat(this.statements[i].exec(arendelle));
            }
            res = res.concat("\n}");
            _super.prototype.exec.call(this, arendelle);
            return res;
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
            //console.log("What I mean Is: " + this.command );
            var cmdJS;
            cmdJS = "";
            for (var it = 0; it < this.command.length; it++) {
                switch (this.command[it]) {
                    case "r":
                        cmdJS = cmdJS.concat("goRight(); \n");
                        break;
                    case "l":
                        cmdJS = cmdJS.concat("goLeft(); \n");
                        break;
                    case "d":
                        cmdJS = cmdJS.concat("goDown(); \n");
                        break;
                    case "u":
                        cmdJS = cmdJS.concat("goUp(); \n");
                        break;
                    case "p":
                        cmdJS = cmdJS.concat("Paint(); \n");
                        break;
                    case "w":
                        cmdJS = cmdJS.concat("Wait(); \n");
                        break;
                    case "c":
                        cmdJS = cmdJS.concat("clearCurrentDot(); \n");
                        break;
                    case "n":
                        cmdJS = cmdJS.concat("nextColor(); \n");
                        break;
                    case "e":
                        cmdJS = cmdJS.concat("break; \n");
                        break;
                }
            }
            _super.prototype.exec.call(this, arendelle);
            return cmdJS;
        };
        return NCommand;
    })(Nodes.Node);
    Nodes.NCommand = NCommand;
})(Nodes || (Nodes = {}));
/// <reference path="./Base.ts"/>
/// <reference path="./Command.ts"/>
