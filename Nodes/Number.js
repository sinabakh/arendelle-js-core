var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Nodes;
(function (Nodes) {
    var TNumber = (function (_super) {
        __extends(TNumber, _super);
        function TNumber(val) {
            this.value = Number(val);
            _super.call(this);
        }
        TNumber.prototype.exec = function (arendelle) {
            var res;
            res = this.value.toString();
            _super.prototype.exec.call(this, arendelle);
            return res;
        };
        return TNumber;
    }(Nodes.Node));
    Nodes.TNumber = TNumber;
})(Nodes || (Nodes = {}));
