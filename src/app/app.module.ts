import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { TodoComponent } from './components/todo/todo.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    LoginComponent,
    TodoComponent,
    ProductComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
