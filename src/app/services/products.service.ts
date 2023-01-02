import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
  HttpStatusCode
} from '@angular/common/http';
import {
  CreateProductDTO,
  Product,
  UpdateProductDTO,
} from '../models/product.model';
import { Observable } from 'rxjs';
import { retry, catchError, throwError, map } from 'rxjs';
import { environment } from './../../environments/environment';

import { th } from 'date-fns/locale';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = `${environment.API_URL}/api/products`;

  constructor(private http: HttpClient) {}

  getAllProducts(limit?: number, offset?: number): Observable<Product[]> {
    let params = new HttpParams();

    if (limit !== undefined && offset !== undefined) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }

    return this.http.get<Product[]>(this.apiUrl, { params })
    .pipe(
      retry(3),
      map(products => products.map(item => {
        return {
          ...item,
          taxes: .19 * item.price
        }
      }))
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === HttpStatusCode.Conflict) {
            return throwError('Algo está fallando en el server');
          }
          if (error.status === HttpStatusCode.NotFound) {
            return throwError('El producto no existe');
          }
          if (error.status === HttpStatusCode.Unauthorized) {
            return throwError('No estás autorizado');
          }
          return throwError('Upss algo salió mal');
        })
      );
  }

  create(dto: CreateProductDTO): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, dto);
  }

  update(id: number, dto: UpdateProductDTO): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: number) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
