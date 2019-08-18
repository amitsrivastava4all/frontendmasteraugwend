enum WeekDay {
    SUNDAY = 1,
    MONDAY 
}
var e11 = 2;
var d:WeekDay = WeekDay.MONDAY;
if(e11 == d){
    console.log('Day Match');
}
var arr1:number[] = [10,20,30];
var tup:[string,number, boolean] = ["",0,true];
console.log(tup[0]);
console.log(tup[1]);
console.log(tup[2]);
function dbError():never{
    throw new Error('Showing Error');
}
function noReturn():void{
    
}
