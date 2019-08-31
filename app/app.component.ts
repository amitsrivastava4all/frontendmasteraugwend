import { Component } from '@angular/core';

@Component({
  selector:'app-myroot',
 // template:`<h1>I am App Component</h1>`
 templateUrl:'./app.component.html',
 styleUrls:['./app.component.css']
})
export class AppComponent{
  recFromChild:string;
  data:string;
  title:string;
  myclass:string;
  flag:boolean ;
  counter:number;
  amount:number;
  finalnum:string='0';
  buttons:number [] = [1,2,3,4,5,6,7,8,9];
  takeNumber(num){
    if(this.finalnum=='0'){
      
      this.finalnum = num.toString();
    }
    else{
    this.finalnum +=num;
    }
  }
  constructor(){
    this.amount = 0;
    this.counter = 0;
    this.flag = true;
    this.myclass = 'red';
    this.title="Hello Angular - 2019";
  }
  callParentByChild(evt){
    this.recFromChild = evt;
  }
  fillData(evt){
    this.data = evt.target.value;
  }
  takeAmount(evt){
    this.amount = evt.target.value;
  }
  takeInput(evt){
    this.title = evt.target.value;
  }
  count(){
    this.counter++;
  }
  update(){
    this.flag = !this.flag;
  }

}