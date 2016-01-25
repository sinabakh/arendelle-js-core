var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
            itVar = itVar.concat("loop_var_", arendelle.context, arendelle.nodeNo);
            res = res.concat("for(var ", itVar, "=0; ");
            res = res.concat(itVar, "<", valStr, ";", itVar, "+=1", ")");
            var wtd = this.value.exec(arendelle);
            res = res.concat("{\n", wtd, "}");
            _super.prototype.exec.call(this, arendelle);
            return res;
        };
        return TLoop;
    }(Nodes.Node));
    Nodes.TLoop = TLoop;
})(Nodes || (Nodes = {}));
