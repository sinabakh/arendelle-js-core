/// <reference path="./Base.ts"/>
module Nodes{
  export class NCommand extends Node{
    command : string;
    constructor(command:string){this.command = command; super();}
    exec(arendelle):string{
      var res:string;
      res = "";
      console.log("What I mean Is: " + this.command );
      for(var it=0; it<this.command.length; it++)
      {
        var cmdJS:string;

        switch(this.command[it])
        {
          case "r":
            cmdJS = "goRight(); \n";
            break;
          case "l":
            cmdJS = "goLeft(); \n";
            break;
        }

        res = res.concat(cmdJS);
      }
      super.exec(arendelle);
      return res;
      }
  }
}
