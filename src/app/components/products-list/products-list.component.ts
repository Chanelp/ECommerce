import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total: number = 0;
  today = new Date();
  fecha2 = new Date(2022, 11, 26)

  products: Product[] = [];

  constructor(
    private storeServie: StoreService,
    private productService: ProductsService
    ) {
    this.myShoppingCart =  this.storeServie.getShoppingCart();
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next:(products) => {
        this.products = products;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {}
    });
  }

  onAddToShoppingCart(product: Product){
    this.storeServie.addProduct(product);
    this.total = this.storeServie.getTotal();
  }
}
