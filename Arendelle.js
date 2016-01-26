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
        Node.prototype.exec = function (arendelle) { arendelle.nodeNo += 1; return ""; };
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
var Nodes;
(function (Nodes) {
    var TLoop = (function (_super) {
        __extends(TLoop, _super);
        function TLoop(times, val) {
            this.times = times;
            this.value = val;
            _super.call(this);
        }
        TLoop.prototype.exec = function (arendelle) {
            var res = "";
            var itVar = "";
            var valStr = this.times.exec(arendelle);
            itVar = itVar.concat("_loop_var_", arendelle.context, "_", arendelle.nodeNo, "_");
            res = res.concat("for(var ", itVar, "=0; ");
            res = res.concat(itVar, "<", valStr, ";", itVar, "+=1", ")", "\n");
            var wtd = this.value.exec(arendelle);
            res = res.concat("{\n", wtd, "}");
            _super.prototype.exec.call(this, arendelle);
            return res;
        };
        return TLoop;
    })(Nodes.Node);
    Nodes.TLoop = TLoop;
})(Nodes || (Nodes = {}));
/// <reference path="./Base.ts"/>
/// <reference path="./Command.ts"/>
/// <reference path="./Base.ts"/>
var Nodes;
(function (Nodes) {
    var TNumber = (function (_super) {
        __extends(TNumber, _super);
        function TNumber(val) {
            this.value = val;
            _super.call(this);
        }
        TNumber.prototype.exec = function (arendelle) {
            var res;
            res = this.value;
            _super.prototype.exec.call(this, arendelle);
            return res;
        };
        return TNumber;
    })(Nodes.Node);
    Nodes.TNumber = TNumber;
})(Nodes || (Nodes = {}));
/// <reference path="./Base.ts"/>
var Nodes;
(function (Nodes) {
    var TOperation = (function (_super) {
        __extends(TOperation, _super);
        function TOperation(lVal, rVal, operator) {
            this.lVal = lVal;
            this.rVal = rVal;
            this.operator = operator;
            _super.call(this);
        }
        TOperation.prototype.exec = function (arendelle) {
            var res = "";
            switch (this.operator) {
                case "^":
                    res = res.concat("Math.pow(", this.lVal.exec(arendelle), ",", this.rVal.exec(arendelle), ")");
                    break;
                default:
                    res = res.concat(this.lVal.exec(arendelle), this.operator, this.rVal.exec(arendelle));
                    break;
            }
            _super.prototype.exec.call(this, arendelle);
            return res;
        };
        return TOperation;
    })(Nodes.Node);
    Nodes.TOperation = TOperation;
})(Nodes || (Nodes = {}));
/// <reference path="./Base.ts"/>
var Nodes;
(function (Nodes) {
    var TRawJS = (function (_super) {
        __extends(TRawJS, _super);
        function TRawJS(val) {
            this.value = val;
            _super.call(this);
        }
        TRawJS.prototype.exec = function (arendelle) {
            var res;
            res = this.value;
            _super.prototype.exec.call(this, arendelle);
            return res;
        };
        return TRawJS;
    })(Nodes.Node);
    Nodes.TRawJS = TRawJS;
})(Nodes || (Nodes = {}));
/// <reference path="./Base.ts"/>
var Nodes;
(function (Nodes) {
    var TSpaceDecl = (function (_super) {
        __extends(TSpaceDecl, _super);
        function TSpaceDecl(id, val) {
            this.name = id;
            this.value = val;
            _super.call(this);
        }
        TSpaceDecl.prototype.exec = function (arendelle) {
            var res = "";
            res = res.concat("var ", this.name, "_", arendelle.context, "=");
            var cVal = this.value.exec(arendelle);
            res = res.concat(cVal, ";", "\n");
            _super.prototype.exec.call(this, arendelle);
            return res;
        };
        return TSpaceDecl;
    })(Nodes.Node);
    Nodes.TSpaceDecl = TSpaceDecl;
    var TSpace = (function (_super) {
        __extends(TSpace, _super);
        function TSpace(id) {
            this.name = id.substring(1);
            _super.call(this);
        }
        TSpace.prototype.exec = function (arendelle) {
            var res = "";
            res = res.concat(this.name, "_", arendelle.context);
            _super.prototype.exec.call(this, arendelle);
            return res;
        };
        return TSpace;
    })(Nodes.Node);
    Nodes.TSpace = TSpace;
})(Nodes || (Nodes = {}));
