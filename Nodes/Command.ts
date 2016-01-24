/// <reference path="./Base.ts"/>
module Nodes{
  export class NCommand extends Node{
    command : string;
    constructor(command:string){this.command = command; super();}
    exec(arendelle){
      console.log("What I mean Is: " + this.command );
      super.exec(arendelle);
      }
  }
}
