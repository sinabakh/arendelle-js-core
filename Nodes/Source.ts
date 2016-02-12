/// <reference path="./Base.ts"/>
module Nodes{
  export class NSource extends Node{
    value : string;
    constructor(value:string){this.value = value; super();}
    exec(arendelle):string{
      var srcJS:string;
      srcJS = "";
        switch(this.value)
        {
          case "#i":
            srcJS = "_max_x";
            break;
          case "#width":
            srcJS = "_max_x";
            break;
          case "#j":
            srcJS = "_max_y";
            break;
          case "#height":
            srcJS = "_max_y";
            break;
          /*case "#n":
            srcJS = "_d_op";
            break;*/
          case "#x":
            srcJS = "_d_x";
            break;
          case "#y":
            srcJS = "_d_y";
            break;
          case "#pi":
            srcJS = "Math.PI";
            break;
          case "#rnd":
            srcJS = "Math.random()";
            break;
        }
      super.exec(arendelle);
      return srcJS;
      }
  }
}
