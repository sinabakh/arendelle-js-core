var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
    }(Nodes.Node));
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
    }(Nodes.Node));
    Nodes.NSpace = NSpace;
})(Nodes || (Nodes = {}));
