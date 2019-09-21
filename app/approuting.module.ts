import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import {Routes,Route, RouterModule} from '@angular/router';
import { SportsComponent } from './news/sports/sports.component';
import { PolComponent } from './news/pol/pol.component';
import { Sport2Component } from './sport2/sport2.component';
import { AuthGuard } from './auth.guard';
const routes:Route[] = [
    {path:'sports',canActivate:[AuthGuard],component:Sport2Component},
    {path:'',component:HomeComponent},
{path:'contact/:name/:job',component:ContactComponent},
{path:'news',component:NewsComponent ,children:[{path:'sports',component:SportsComponent},
{path:'pol',component:PolComponent},
{path:'**',redirectTo:'/'}
]},

];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations: [HomeComponent, ContactComponent, NewsComponent, SportsComponent, PolComponent, Sport2Component]
})
export class AppRouting{

}