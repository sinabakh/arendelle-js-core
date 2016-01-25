/// <reference path="./Base.ts"/>
module Nodes{
  export class TNumber extends Node{
    value:number;
    constructor(val:string){this.value = Number(val); super();}
    exec(arendelle):string{
      var res:string;
      res = this.value.toString();
      super.exec(arendelle);
      return res;
    }
  }
}
