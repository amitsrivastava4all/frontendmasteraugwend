import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3.component';
import { Child4Component } from './child2/child4/child4.component';

@NgModule({
  declarations:[AppComponent, Child1Component, Child2Component, Child3Component, Child4Component],
  imports:[BrowserModule],
  bootstrap:[AppComponent]
})
export class AppModule{

}