import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  products: Product[] = [];
  categoryId: number | any = 0;
  limit: number = 10;
  offset: number = 0;
  productId: number | any = 0;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    // Para evitar el callback hell con susbcribes usamos el operador switchMap
    this.route.paramMap.pipe(
      switchMap(params => {
        this.categoryId = params.get('id');
        if (this.categoryId) {
          return this.productsService.getByCategory(this.categoryId, this.limit, this.offset);
        }
      return [];
    })
    )
    .subscribe((data) => {
      this.products = data;
    });

    this.route.queryParamMap.subscribe((params => {
      this.productId = params.get('product');
    }))
  }

  loadMore() {
    this.productsService
      .getAllProducts(this.limit, this.offset)
      .subscribe((data) => {
        this.products = [...this.products, ...data];
        this.offset += this.limit;
      });
  }
}
