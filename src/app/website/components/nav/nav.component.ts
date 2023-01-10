import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  //@Input() user: string = 'chanel@gmail.com';
  activeMenu = false;
  counter = 0;
  profile: User | null = null;
  categories: Category[] = [];

  constructor(private storeService: StoreService, private authService: AuthService,
    private categoriesService: CategoriesService, private router: Router) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });

    this.getAllCategories();

    this.authService.user$
    .subscribe(data => {
      this.profile = data;
    })
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

  getAllCategories() {
    this.categoriesService.getAll()
    .subscribe(data => {
      this.categories = data;
    });
  }

  login() {
    this.authService.loginAndGet('john@mail.com', 'changeme')
    .subscribe(() => {
      this.router.navigate(['profile']);
    });

  }

  logout() {
    this.authService.logout();
    this.profile = null;
    this.router.navigate(['register']);
  }

}
