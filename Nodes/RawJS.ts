/// <reference path="./Base.ts"/>
module Nodes{
  export class TRawJS extends Node{
    value:string;
    constructor(val:string){this.value = val; super();}
    exec(arendelle):string{
      var res:string;
      res = this.value;
      super.exec(arendelle);
      return res;
    }
  }
}
