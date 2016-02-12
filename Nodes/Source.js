var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Nodes;
(function (Nodes) {
    var NSource = (function (_super) {
        __extends(NSource, _super);
        function NSource(value) {
            this.value = value;
            _super.call(this);
        }
        NSource.prototype.exec = function (arendelle) {
            var srcJS;
            srcJS = "";
            switch (this.value) {
                case "#i":
                    srcJS = "_max_x";
                    break;
                case "#width":
                    srcJS = "_max_x";
                    break;
                case "#j":
                    srcJS = "_max_y";
                    break;
                case "#height":
                    srcJS = "_max_y";
                    break;
                case "#x":
                    srcJS = "_d_x";
                    break;
                case "#y":
                    srcJS = "_d_y";
                    break;
                case "#pi":
                    srcJS = "Math.PI";
                    break;
                case "#rnd":
                    srcJS = "Math.random()";
                    break;
            }
            _super.prototype.exec.call(this, arendelle);
            return srcJS;
        };
        return NSource;
    }(Nodes.Node));
    Nodes.NSource = NSource;
})(Nodes || (Nodes = {}));
