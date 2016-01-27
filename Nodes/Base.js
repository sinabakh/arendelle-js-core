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
    }());
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
            _super.prototype.exec.call(this, arendelle);
            return res;
        };
        return NBlock;
    }(Node));
    Nodes.NBlock = NBlock;
})(Nodes || (Nodes = {}));
