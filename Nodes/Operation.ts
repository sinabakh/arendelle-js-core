/// <reference path="./Base.ts"/>
module Nodes{
  export class TOperation extends Node{
    lVal:Node;
    rVal:Node;
    operator:string;
    constructor(lVal:Node, rVal:Node, operator:string){this.lVal = lVal; this.rVal = rVal; this.operator = operator; super();}
    exec(arendelle):string{
      var res:string="";
      switch(this.operator)
      {
        case "^":
          res = res.concat("Math.pow(", this.lVal.exec(arendelle), ",", this.rVal.exec(arendelle), ")");
          break;
        default:
          res = res.concat(this.lVal.exec(arendelle), this.operator, this.rVal.exec(arendelle));
          break;
      }
      super.exec(arendelle);
      return res;
    }
  }
}
