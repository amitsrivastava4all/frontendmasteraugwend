
class MathOpr{
    private constructor(){}
    static cos(){

    }
    static sin(){}
}
class A{
    readonly a:number = 10;
    show(){
        const w = 100;
    }
}
class B extends A{

}
MathOpr.cos();
interface MyType{
    x:number;
    y:string;
    z:boolean;
}
function disp(obj:MyType):void{
  console.log('Disp Called');  
}
var obj:MyType = {x:101, y:'Hello',z:true};
disp(obj);
interface Calc{
    (x:number, y:number):number;
}
var e:Calc = function(x:number,y :number):number{
    return x + y;
}
// var e2:Calc= function(){

// }
// What to Do
interface ITAccount{
    
}
interface Loan{
    emi();
    roi();
}
interface Mix extends ITAccount, Loan{

}
// How to do
class HomeLoan implements Loan, ITAccount{
    emi() {
        console.log('Emi Call');
    }    
    roi() {
        console.log('ROI Call')
    }

    
}
