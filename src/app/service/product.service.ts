import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductList } from '../models/product-list.model';
import { Observable } from 'rxjs';
import { Pageable } from '../models/pageable.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getPageableProductList(
    page: number,
    itemsPerPage: number
  ): Observable<Pageable<ProductList>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<Pageable<ProductList>>(
      `https://localhost:7256/api/product/pageable?Page=${page}&ItemsPerPage=${itemsPerPage}`,
      { headers: headers }
    );
  }
}
