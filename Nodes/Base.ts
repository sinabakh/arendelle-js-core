module Nodes{
  export class Node{
    exec(arendelle){}
  }

  export class NBlock extends Node{
    statements : Array<Node>;

    exec(arendelle){
      for(var stmt in this.statements)
      {
        stmt.exec(arendelle);
      }
      super.exec(arendelle);
      }
  }

}
