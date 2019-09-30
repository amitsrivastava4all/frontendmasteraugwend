import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'validations';

  doSubmit(form){
    if(form.invalid){
      this.title = 'Form is Invalid ';
    }
    else{
      this.title = 'Form is Valid';
    }
  }

}

