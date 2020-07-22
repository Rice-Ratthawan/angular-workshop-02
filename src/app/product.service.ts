import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ProductService {

  constructor(private http: HttpClient) { }

  /* feature5
    getAllProduct(): Product[] {
      
      const products: Product[] = [];
      const p1 = new Product('aaa', '01', 'Name 01', 50.00, true, 10.0);
      const p2 = new Product('bbb', '02', 'Name 02', 150.00, true, 8.0);
      const p3 = new Product('ccc', '03', 'Name 03', 60.00, true, 9.4);
      products.push(p1, p2, p3);
      return products;
    }
  */

  getAllProduct(): Observable<Product[]> {

    /*now cannot use http 
    return this.http.get<Product[]>(
      'http://165.22.255.58:3000/products'
    );
    */

    const p1 = new Product('aaa', '01', 'Name 01', 50.00, true, 1);
    const p2 = new Product('bbb', '02', 'Name 02', 150.00, true, 2.7);
    const p3 = new Product('ccc', '03', 'Name 03', 60.00, true, 4.3);
    return of([p1, p2, p3])


  }

}
