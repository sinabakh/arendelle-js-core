/// <reference path="./Base.ts"/>
module Nodes{
  export class TLoop extends Node{
    times:Node;
    value:Node;
    constructor(times:Node, val:Node){this.times = times; this.value=val; super();}
    exec(arendelle):string{
      var res:string = "";
      var itVar:string = "";
      var valStr:string = this.times.exec(arendelle);
      itVar = itVar.concat("_loop_var_", arendelle.context, "_", arendelle.nodeNo, "_");
      res = res.concat("for(var ", itVar, "=0; ");
      res = res.concat(itVar, "<", valStr, ";", itVar, "+=1", ")", "\n");

      var wtd:string = this.value.exec(arendelle);

      res = res.concat("{\n", wtd, "}");

      super.exec(arendelle);
      return res;
    }
  }
}
