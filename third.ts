class Employee{
    private id:number;
    salary:number;
    protected bonus:number;
    static count:number;
    constructor(id:number,private name:string){
        this.id= id;
    }
    show():void{
        console.log(`Id is ${this.id} Name is ${this.name}`);
    }
}
var ram:Employee = new Employee(1001,"Ram");
ram.show();