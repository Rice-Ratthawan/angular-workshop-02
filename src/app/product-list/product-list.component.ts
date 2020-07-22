import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  filterData: string = '';

  constructor(public service: ProductService) { }

  ngOnInit(): void {
    /*Assume data this data is in component. It should in service so go to product service
    const p1 = new Product('aaa', '01', 'Name 01', 50.00, true, 10.0);
    const p2 = new Product('bbb', '02', 'Name 02', 150.00, true, 8.0);
    const p3 = new Product('ccc', '03', 'Name 03', 60.00, true, 9.4);
    this.products.push(p1, p2, p3);*/
    /* feature5
    this.products = this.service.getAllProduct();
    */
    this.getAll();
  }

  getAll(): void {
    this.service.getAllProduct().subscribe((products) => {
      return (this.products = products);
    });
  }

}
