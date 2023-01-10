import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebsiteRoutingModule } from './website-routing.module';
import { QuicklinkModule } from 'ngx-quicklink';

import { SharedModule } from '../shared/shared.module';

// COMPONENTS
import { LoginComponent } from './components/login/login/login.component';
import { TodoComponent } from './components/todo/todo.component';
import { NavComponent } from './components/nav/nav.component';

// PAGES
import { HomeComponent } from './pages/home/home.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ArchivosComponent } from './components/archivos/archivos.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    LoginComponent,
    TodoComponent,
    NavComponent,
    HomeComponent,
    MycartComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ArchivosComponent,
    ProductDetailComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    FormsModule,
    SwiperModule,
    SharedModule,
    QuicklinkModule
  ]
})
export class WebsiteModule { }
