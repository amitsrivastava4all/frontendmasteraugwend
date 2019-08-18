class Test{
    static count:number = 0;
    constructor(){
        Test.count++;
        console.log('Test Obj Created...' + Test.count);
    }
}
var test1:Test = new Test();
var test2:Test = new Test();
var test3:Test = new Test();
test3 = null;
