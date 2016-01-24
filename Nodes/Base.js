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
        Node.prototype.exec = function (arendelle) { };
        return Node;
    }());
    Nodes.Node = Node;
    var NBlock = (function (_super) {
        __extends(NBlock, _super);
        function NBlock() {
            _super.apply(this, arguments);
        }
        NBlock.prototype.exec = function (arendelle) {
            for (var stmt in this.statements) {
                stmt.exec(arendelle);
            }
            _super.prototype.exec.call(this, arendelle);
        };
        return NBlock;
    }(Node));
    Nodes.NBlock = NBlock;
})(Nodes || (Nodes = {}));
