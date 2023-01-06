import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UpdateProductDTO, CreateProductDTO, Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';
import { switchMap } from 'rxjs';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  myShoppingCart: Product[] = [];
  total: number = 0;

  @Input() products: Product[] = [];
  @Output() onLoadMore: EventEmitter<string> = new EventEmitter<string>();

  showProductDetail: boolean = false;
  productChosen: Product = {
    id: 0,
    price: 0,
    title: '',
    description: '',
    category: {
      id: 0,
      name: '',
      typeImg: '',
    },
    images: [],
  };

  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';


  constructor( private storeService: StoreService, private productsService: ProductsService )
  {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {

  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: number) {
    this.statusDetail = 'loading';
    this.toggleProductDetail();
    this.productsService.getProduct(id)
    .subscribe((data) => {
      this.productChosen = data;
      this.statusDetail = 'success'
    },
    errorMsg => {
      this.statusDetail = 'error';
      Swal.fire({
        title: errorMsg,
        text: errorMsg,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    });
  }

  readAndUpdate(id: number) {
    this.productsService.getProduct(id)
    .pipe(
      switchMap((product) => this.productsService.update(product.id, {title: 'Change'})),
    )
    .subscribe(data => {
      console.log(data);
    });

    this.productsService.fetchReadandUpdate(id, {title: 'Nombre cambió'})
    .subscribe(response => {
      const read = response[0];
      const update = response[1];
    })
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'Pink product',
      price: 400,
      images: ['https://placeimg.com/640/480/arch'],
      description: 'So cute ugh',
      categoryId: 1,
    };
    this.productsService.create(product).subscribe((data) => {
      this.products.unshift(data);
    });
  }

  updateProduct() {
    const changes: UpdateProductDTO = {
      title: 'Nuevo titulo editado',
      description: 'Actualizada la description',
    };
    const id = this.productChosen.id;

    this.productsService.update(id, changes).subscribe((data) => {
      const productIndex = this.products.findIndex(
        (item) => item.id === this.productChosen.id
      );

      this.products[productIndex] = data;
      this.productChosen = data;
    });
  }

  deleteProduct() {
    const id = this.productChosen.id;

    this.productsService.delete(id).subscribe(() => {
      const productIndex = this.products.findIndex(
        (item) => item.id === this.productChosen.id
      );
      this.products.splice(productIndex, 1);
      this.showProductDetail = false;
    });
  }

  loadMore() {
    this.onLoadMore.emit();
  }

  // loadData() {
  //   this.productsService
  //     .getAllProducts(this.limit, this.offset)
  //     .subscribe((data) => {
  //       this.products = [...this.products, ...data];
  //       this.offset += this.limit;
  //     });
  // }

}
