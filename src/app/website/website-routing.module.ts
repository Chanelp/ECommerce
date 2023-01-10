import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoComponent } from './components/todo/todo.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login/login.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { AuthGuard } from '../guards/auth.guard';
import { RegisterComponent } from './pages/register/register.component';
import { ExitGuard } from '../guards/exit.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'category',
        loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule),
        data: {
          preload: true
        }
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      },
      {
        path: 'register',
        canDeactivate: [ExitGuard],
        component: RegisterComponent
      },
      {
        path: 'todo',
        component: TodoComponent
      },
      {
        path: 'profile',
        canActivate: [ AuthGuard ],
        component: ProfileComponent
      },
      {
        path: 'recovery',
        component: RecoveryComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
