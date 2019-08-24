abstract class Employee{
    private _id:number;
    constructor(id, private name:string){
        this._id = id;

    }
    set id(id:number){
        this._id = id;
    }
    get id(){
        return this._id;
    }
    abstract show():void;
    print():void{
        console.log('Id '+this._id+' NAme is '+this.name);
    }
}
class PartTimeEmployee extends Employee{
    constructor(private salary){
        super(1,'Ram');
        console.log('Part Time Emp');
    }
    show(){
        console.log('Show Call');
    }
    print(){
        super.print();
        console.log('Salary is '+this.salary);
    }
}
// var ram:Employee = new Employee(1001, "Ram");
// ram.id  = 1002;
// console.log(ram.id);
var ram:PartTimeEmployee = new PartTimeEmployee(9999);
ram.print();
ram.show();