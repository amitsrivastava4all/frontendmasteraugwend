import { Component } from '@angular/core';

@Component({
  selector:'app-myroot',
 // template:`<h1>I am App Component</h1>`
 templateUrl:'./app.component.html',
 styleUrls:['./app.component.css']
})
export class AppComponent{
  title:string;
  myclass:string;
  flag:boolean ;
  counter:number;
  amount:number;
  constructor(){
    this.amount = 0;
    this.counter = 0;
    this.flag = true;
    this.myclass = 'red';
    this.title="Hello Angular - 2019";
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