/// <reference path="./Base.ts"/>
module Nodes{
  export class NCondition extends Node{
    cval:Node;
    tval:Node;
    fval:Node;
    constructor(cval:Node, tval:Node, fval:Node){this.cval = cval; this.tval= tval; this.fval=fval; super();}
    exec(arendelle):string{
      var res:string = "";
      res = res.concat("if(", this.cval.exec(arendelle), ")");
      res = res.concat("\n { \n", this.tval.exec(arendelle), "\n } \n");
      if(this.fval !== null)
        res = res.concat("else \n { \n", this.fval.exec(arendelle), "\n } \n");
      super.exec(arendelle);
      return res;
    }
  }
}
