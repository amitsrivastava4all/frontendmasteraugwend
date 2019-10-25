import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child1child2Component } from './child1child2/child1child2.component';
import { Child2Component } from './child1/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child1child2Component,
    Child2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
