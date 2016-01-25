var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
            var rVal = this.value.exec(arendelle);
            res = res.concat(rVal, ";", "\n");
            _super.prototype.exec.call(this, arendelle);
            return res;
        };
        return TSpaceDecl;
    }(Nodes.Node));
    Nodes.TSpaceDecl = TSpaceDecl;
})(Nodes || (Nodes = {}));
