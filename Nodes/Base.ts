module Nodes{
  export class Node{
    exec(arendelle):string{arendelle.nodeNo+=1;return "";}
  }

  export class NBlock extends Node{
    statements : Array<Node>;
    constructor(){this.statements = new Array;super();}
    exec(arendelle):string{
      var res:string;
      res = "{\n";
      for(var i in this.statements)
      {
        res = res.concat(this.statements[i].exec(arendelle));
      }
      res = res.concat("\n}");
      super.exec(arendelle);
      return res;
      }
  }

}
