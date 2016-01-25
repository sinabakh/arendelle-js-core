/// <reference path="./Base.ts"/>
module Nodes{
  export class TSpaceDecl extends Node{
    name:string;
    value:Node;
    constructor(id:string, val:Node){this.name = id; this.value=val; super();}
    exec(arendelle):string{
      var res:string = "";
      res = res.concat("var ", this.name, "_", arendelle.context, "=");
      var rVal:string = this.value.exec(arendelle);
      res = res.concat(rVal, ";", "\n");
      super.exec(arendelle);
      return res;
    }
  }
}
