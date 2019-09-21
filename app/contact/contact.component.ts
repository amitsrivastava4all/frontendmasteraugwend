import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  msg:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data=>{
      this.msg = data['name'] + " "+data["job"];
    })
  }

}
