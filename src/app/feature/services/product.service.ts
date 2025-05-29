import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../../shared/models/Iproduct.model';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { Category } from '../../shared/models/Icategory.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${environment.apiUrl}/products`);
  }
  getProductDetails(id: number): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(
      `${environment.apiUrl}/products/${id}`
    );
  }

  getCategories(): Observable<Category[]> {
    return this.httpClient
      .get<string[]>(`${environment.apiUrl}/products/categories`)
      .pipe(
        map((categories) => [
          { label: 'All', value: null },
          ...categories.map((cat) => ({
            label: cat,
            value: cat,
          })),
        ])
      );
  }

  AddNewProduct(NewProduct: Iproduct): Observable<Iproduct> {
    return this.httpClient.post<Iproduct>(
      `${environment.apiUrl}/products`,
      NewProduct
    );
  }
  EditProduct(productId: number, productData: Iproduct): Observable<Iproduct> {
    return this.httpClient.put<Iproduct>(
      `${environment.apiUrl}/products/${productId}`,
      productData
    );
  }
}
