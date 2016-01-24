var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Nodes;
(function (Nodes) {
    var NCommand = (function (_super) {
        __extends(NCommand, _super);
        function NCommand(command) {
            this.command = command;
            _super.call(this);
        }
        NCommand.prototype.exec = function (arendelle) {
            console.log("What I mean Is: " + this.command);
            _super.prototype.exec.call(this, arendelle);
        };
        return NCommand;
    }(Nodes.Node));
    Nodes.NCommand = NCommand;
})(Nodes || (Nodes = {}));
