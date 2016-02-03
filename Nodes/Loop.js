var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
    }(Nodes.Node));
    Nodes.NLoop = NLoop;
})(Nodes || (Nodes = {}));
