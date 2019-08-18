var a = 100; // Implicit type
//a= 'amit';
var b:number ;
b = 1000;
var e:string= 'Hello';
var m:boolean= true;
type mytype = {id:number,name:string};
var m2:mytype = {id:1001, name:'Ram'};
var m3:mytype = {id:1002, name:'Shyam'};
var bb:mytype[] = [{id:1001, name:'Ram'},{id:1001, name:'Shyam'}];
var g:number|string = 9000;
g = 'Hello';
var g2:number = parseInt("1000");
let w3:number = 1000;
//g = true;
// var m2:{id:number,name:string} = {id:1001, name:'Ram'};
// var m3:{id:number,name:string} = {id:1002, name:'Shyam'};
var arr:string[] = ['Hello','Hi'];
var dd:number[] = [10,20,30];
var mm:any[] = [10,20,true,'Hello'];
var ff:any = 100;
ff = 'Hello';
function add(a:number, b:number):number{
    return a + b;
}
var e1:number = add(1000,2000);


