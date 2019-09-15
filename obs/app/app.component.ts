import { Component } from '@angular/core';
import {ServercallService} from './servercall.service';
import {Observable} from 'rxjs';
import { Item } from './item';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ajaxdemo';
  stream:number;
  stream2:number;
  streamobs:any;
  items:Item[] = [];
  constructor(private ser:ServercallService){

  
  }
  addInCart(id){
    console.log('Item Added ',id);
  }
  getAjax(){
    this.ser.getData().subscribe(data=>{
        this.items = data['mobiles'];
        console.log('Data is ',this.items);
    },err=>{
      console.log('Err ',err);
    },()=>{
      console.log('Finish ');
    });
  }
  stop():void{
    this.streamobs.unsubscribe();
  }
  start2():void{
    var obs:Observable<number> = this.ser.understand();
     obs.subscribe(data=>{
      this.stream2 = data;
    },err=>{
      this.stream2 = err;
    },()=>{
      this.stream2=0;
    })
  }
  start():void{
    var obs:Observable<number> = this.ser.understand();
    this.streamobs = obs.subscribe(data=>{
      this.stream = data;
    },err=>{
      this.stream = err;
    },()=>{
      this.stream=0;
    })
  }
}
