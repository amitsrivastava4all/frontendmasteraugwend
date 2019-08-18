var Test = /** @class */ (function () {
    function Test() {
        Test.count++;
        console.log('Test Obj Created...' + Test.count);
    }
    Test.count = 0;
    return Test;
}());
var test1 = new Test();
var test2 = new Test();
var test3 = new Test();
