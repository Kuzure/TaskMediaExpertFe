import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGetProduct, IProduct } from '../models/product.model';
import { Observable } from 'rxjs';
import { Pageable } from '../models/pageable.model';
import { ResultModel } from '../models/result.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:7256/api/product';

  constructor(private http: HttpClient) {}

  getPageableProductList(
    page: number,
    itemsPerPage: number
  ): Observable<Pageable<IGetProduct>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<Pageable<IGetProduct>>(
      `${this.apiUrl}/pageable?Page=${page}&ItemsPerPage=${itemsPerPage}`,
      { headers: headers }
    );
  }
  addProduct(product: IProduct) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<ResultModel>(`${this.apiUrl}`, product, { headers });
  }
}
