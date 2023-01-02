import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './components/todo/todo.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { NavComponent } from './components/nav/nav.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ReplaceVowelsPipe } from './pipes/replace-vowels.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ImageErrorDirective } from './directives/image-error.directive';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    LoginComponent,
    TodoComponent,
    ProductComponent,
    ProductsListComponent,
    NavComponent,
    ReversePipe,
    TimeAgoPipe,
    ReplaceVowelsPipe,
    HighlightDirective,
    ImageErrorDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
