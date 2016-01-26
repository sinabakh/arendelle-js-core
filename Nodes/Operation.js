var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
    }(Nodes.Node));
    Nodes.TOperation = TOperation;
})(Nodes || (Nodes = {}));
