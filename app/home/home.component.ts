import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { 
    
  }
  static x:number=0;
  ngOnInit() {
  }

  move(){
    HomeComponent.x++;
    console.log("X is ",HomeComponent.x);
    if(HomeComponent.x>=2){
    this.router.navigate(['/news']);
    }
    else{
      this.router.navigate(['/contact']);
    }


  }

}
