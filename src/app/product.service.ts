import { Injectable } from '@angular/core';
import { data } from './MockProduct';
import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = 'https://5e7a13bd17314d0016133c83.mockapi.io/product';
  constructor(
    private http : HttpClient
  ) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.products);
  }

  getProductByID(id : number): Observable<Product>{
    return this.http.get<Product>(`${this.products}/${id}`)
  }

  updateProduct(product):Observable<Product>{
    return this.http.put<Product>(`${this.products}/${product.id}`, product);
  }

  deteleProduct(id : number): Observable<Product>{
    return this.http.delete<Product>(`${this.products}/${id}`)
  }

  addProduct(product): Observable<Product>{
    return this.http.post<Product>(this.products, product);
  }
}
