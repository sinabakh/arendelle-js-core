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
            res = "";
            for (var i in this.statements) {
                res = res.concat(this.statements[i].exec(arendelle));
            }
            //res = res.concat("\n}");
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
                    case "i":
                        cmdJS = cmdJS.concat("goToOrigin(); \n");
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
    var NCondition = (function (_super) {
        __extends(NCondition, _super);
        function NCondition(cval, tval, fval) {
            this.cval = cval;
            this.tval = tval;
            this.fval = fval;
            _super.call(this);
        }
        NCondition.prototype.exec = function (arendelle) {
            var res = "";
            res = res.concat("if(", this.cval.exec(arendelle), ")");
            res = res.concat("\n { \n", this.tval.exec(arendelle), "\n } \n");
            if (this.fval !== null)
                res = res.concat("else \n { \n", this.fval.exec(arendelle), "\n } \n");
            _super.prototype.exec.call(this, arendelle);
            return res;
        };
        return NCondition;
    })(Nodes.Node);
    Nodes.NCondition = NCondition;
})(Nodes || (Nodes = {}));
/// <reference path="./Base.ts"/>
var Nodes;
(function (Nodes) {
    var NLoop = (function (_super) {
        __extends(NLoop, _super);
        function NLoop(times, val) {
            this.times = times;
            this.value = val;
            _super.call(this);
        }
        NLoop.prototype.exec = function (arendelle) {
            var res = "";
            var itVar = "";
            var valStr = this.times.exec(arendelle);
            if (this.times.hasOwnProperty("type")) {
                if (this.times.type == "comp") {
                    res = res.concat("while(", valStr, ")");
                    var wtd = this.value.exec(arendelle);
                    res = res.concat("{\n", wtd, "}");
                    _super.prototype.exec.call(this, arendelle);
                    return res;
                }
            }
            itVar = itVar.concat("_loop_var_", arendelle.context, "_", arendelle.nodeNo, "_");
            res = res.concat("for(var ", itVar, "=0; ");
            res = res.concat(itVar, "<", valStr, ";", itVar, "+=1", ")", "\n");
            var wtd = this.value.exec(arendelle);
            res = res.concat("{\n", wtd, "}");
            _super.prototype.exec.call(this, arendelle);
            return res;
        };
        return NLoop;
    })(Nodes.Node);
    Nodes.NLoop = NLoop;
})(Nodes || (Nodes = {}));
/// <reference path="./Base.ts"/>
/// <reference path="./Command.ts"/>
/// <reference path="./Base.ts"/>
var Nodes;
(function (Nodes) {
    var NNumber = (function (_super) {
        __extends(NNumber, _super);
        function NNumber(val) {
            this.value = val;
            _super.call(this);
        }
        NNumber.prototype.exec = function (arendelle) {
            var res;
            res = this.value;
            _super.prototype.exec.call(this, arendelle);
            return res;
        };
        return NNumber;
    })(Nodes.Node);
    Nodes.NNumber = NNumber;
})(Nodes || (Nodes = {}));
/// <reference path="./Base.ts"/>
var Nodes;
(function (Nodes) {
    var NOperation = (function (_super) {
        __extends(NOperation, _super);
        function NOperation(lVal, rVal, operator, type) {
            this.lVal = lVal;
            this.rVal = rVal;
            this.operator = operator;
            this.type = type;
            _super.call(this);
        }
        NOperation.prototype.exec = function (arendelle) {
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
        return NOperation;
    })(Nodes.Node);
    Nodes.NOperation = NOperation;
})(Nodes || (Nodes = {}));
/// <reference path="./Base.ts"/>
var Nodes;
(function (Nodes) {
    var NRawJS = (function (_super) {
        __extends(NRawJS, _super);
        function NRawJS(val) {
            this.value = val;
            _super.call(this);
        }
        NRawJS.prototype.exec = function (arendelle) {
            var res;
            res = this.value;
            _super.prototype.exec.call(this, arendelle);
            return res;
        };
        return NRawJS;
    })(Nodes.Node);
    Nodes.NRawJS = NRawJS;
})(Nodes || (Nodes = {}));
/// <reference path="./Base.ts"/>
var Nodes;
(function (Nodes) {
    var NSource = (function (_super) {
        __extends(NSource, _super);
        function NSource(value) {
            this.value = value;
            _super.call(this);
        }
        NSource.prototype.exec = function (arendelle) {
            var srcJS;
            srcJS = "";
            switch (this.value) {
                case "#i":
                    srcJS = "_max_x";
                    break;
                case "#width":
                    srcJS = "_max_x";
                    break;
                case "#j":
                    srcJS = "_max_y";
                    break;
                case "#height":
                    srcJS = "_max_y";
                    break;
                /*case "#n":
                  srcJS = "_d_op";
                  break;*/
                case "#x":
                    srcJS = "_d_x";
                    break;
                case "#y":
                    srcJS = "_d_y";
                    break;
                case "#pi":
                    srcJS = "Math.PI";
                    break;
                case "#rnd":
                    srcJS = "Math.random()";
                    break;
            }
            _super.prototype.exec.call(this, arendelle);
            return srcJS;
        };
        return NSource;
    })(Nodes.Node);
    Nodes.NSource = NSource;
})(Nodes || (Nodes = {}));
/// <reference path="./Base.ts"/>
var Nodes;
(function (Nodes) {
    var NSpaceDecl = (function (_super) {
        __extends(NSpaceDecl, _super);
        function NSpaceDecl(id, val) {
            this.name = id;
            this.value = val;
            _super.call(this);
        }
        NSpaceDecl.prototype.exec = function (arendelle) {
            var res = "";
            res = res.concat("var ", this.name, "_", arendelle.context, "=");
            var cVal = this.value.exec(arendelle);
            res = res.concat(cVal, ";", "\n");
            _super.prototype.exec.call(this, arendelle);
            return res;
        };
        return NSpaceDecl;
    })(Nodes.Node);
    Nodes.NSpaceDecl = NSpaceDecl;
    var NSpace = (function (_super) {
        __extends(NSpace, _super);
        function NSpace(id) {
            this.name = id.substring(1);
            _super.call(this);
        }
        NSpace.prototype.exec = function (arendelle) {
            var res = "";
            res = res.concat(this.name, "_", arendelle.context);
            _super.prototype.exec.call(this, arendelle);
            return res;
        };
        return NSpace;
    })(Nodes.Node);
    Nodes.NSpace = NSpace;
})(Nodes || (Nodes = {}));
