import { Component, OnInit } from '@angular/core';
import { UpdateProductDTO, CreateProductDTO, Product } from 'src/app/models/product.model';
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
  products: Product[] = [];
  showProductDetail:boolean = false;
  productChosen: Product = {
    id: 0,
    price: 0,
    title: '',
    description: '',
    category: {
      id: 0,
      name: '',
      typeImg: ''
    },
    images: []
  };

  limit: number = 10;
  offset: number = 0;

  constructor(
    private storeServie: StoreService,
    private productsService: ProductsService
    ) {
    this.myShoppingCart =  this.storeServie.getShoppingCart();
  }

  ngOnInit(): void {
    this.loadData();
  }

  onAddToShoppingCart(product: Product){
    this.storeServie.addProduct(product);
    this.total = this.storeServie.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: number){
    this.productsService.getProduct(id).subscribe(data => {
      this.toggleProductDetail();
      this.productChosen = data;
    })
  }

  createNewProduct(){
    const product: CreateProductDTO = {
      title: 'Pink product',
      price: 400,
      images: ['https://placeimg.com/640/480/arch'],
      description: 'So cute ugh',
      categoryId: 1
    }
    this.productsService.create(product)
    .subscribe(data => {
      this.products.unshift(data);
    });
  }

  updateProduct(){
    const changes: UpdateProductDTO = {
      title: 'Nuevo titulo editado',
      description: 'Actualizada la description'
    }
    const id = this.productChosen.id;

    this.productsService.update(id, changes)
    .subscribe(data => {
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);

      this.products[productIndex] = data;

      this.productChosen = data;
    });
  }

  deleteProduct(){
    const id = this.productChosen.id;

    this.productsService.delete(id)
    .subscribe(() => {
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id)
      this.products.splice(productIndex, 1);
      this.showProductDetail = false;
    });
  }

  loadData() {
    this.productsService.getAllProducts(this.limit, this.offset)
     .subscribe(data => {
      this.products = [...this.products, ...data];
      this.offset += this.limit;
     })
  }

}
