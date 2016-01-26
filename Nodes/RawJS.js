var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
    }(Nodes.Node));
    Nodes.TRawJS = TRawJS;
})(Nodes || (Nodes = {}));
