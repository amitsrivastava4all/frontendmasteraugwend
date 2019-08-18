var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.name = name;
        this.id = id;
    }
    Employee.prototype.show = function () {
        console.log("Id is " + this.id + " Name is " + this.name);
    };
    return Employee;
}());
var ram = new Employee(1001, "Ram");
ram.show();
