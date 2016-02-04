var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
    }(Nodes.Node));
    Nodes.NCondition = NCondition;
})(Nodes || (Nodes = {}));
