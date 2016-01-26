/// <reference path="./Base.ts"/>
module Nodes{
  export class TSpaceDecl extends Node{
    name:string;
    value:Node;
    constructor(id:string, val:Node){this.name = id; this.value=val; super();}
    exec(arendelle):string{
      var res:string = "";
      res = res.concat("var ", this.name, "_", arendelle.context, "=");
      var cVal:string = this.value.exec(arendelle);
      res = res.concat(cVal, ";", "\n");
      super.exec(arendelle);
      return res;
    }
  }

  export class TSpace extends Node{
    name:string;
    constructor(id:string){this.name = id.substring(1); super();}
    exec(arendelle):string{
      var res:string = "";
      res = res.concat(this.name, "_", arendelle.context);
      super.exec(arendelle);
      return res;
    }
  }

}
