/// <reference path="./Base.ts"/>
module Nodes{
  export class NNumber extends Node{
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
