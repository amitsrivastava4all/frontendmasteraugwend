import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { SearchComponent } from './shop/search/search.component';
import { SortComponent } from './shop/sort/sort.component';
import { ListComponent } from './shop/list/list.component';
import { ItemComponent } from './shop/list/item/item.component';
import { ItemcountComponent } from './shop/itemcount/itemcount.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    SearchComponent,
    SortComponent,
    ListComponent,
    ItemComponent,
    ItemcountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
