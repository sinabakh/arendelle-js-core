/// <reference path="./Base.ts"/>
module Nodes{
  export class NCommand extends Node{
    command : string;
    constructor(command:string){this.command = command; super();}
    exec(arendelle):string{
      //console.log("What I mean Is: " + this.command );
      var cmdJS:string;
      cmdJS = "";
      for(var it=0; it<this.command.length; it++)
      {
        switch(this.command[it])
        {
          case "r":
            cmdJS = cmdJS.concat("goRight(); \n");
            break;
          case "l":
            cmdJS = cmdJS.concat("goLeft(); \n");
            break;
          case "d":
            cmdJS = cmdJS.concat("goDown(); \n");
            break;
          case "u":
            cmdJS = cmdJS.concat("goUp(); \n");
            break;
          case "p":
            cmdJS = cmdJS.concat("Paint(); \n");
            break;
          case "w":
            cmdJS = cmdJS.concat("Wait(); \n");
            break;
          case "c":
            cmdJS = cmdJS.concat("clearCurrentDot(); \n");
            break;
          case "n":
            cmdJS = cmdJS.concat("nextColor(); \n");
            break;
          case "e":
            cmdJS = cmdJS.concat("break; \n");
            break;
        }
      }
      super.exec(arendelle);
      return cmdJS;
      }
  }
}
