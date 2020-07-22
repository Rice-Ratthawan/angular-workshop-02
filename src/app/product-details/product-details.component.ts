import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  product: Product;

  public productCode: string;

  constructor(public service: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    /*Accessing URL Parameters
    this.productCode = this.route.snapshot.paramMap.get('id');*/
    this.route.paramMap.subscribe(params => {
      this.productCode = params.get("id")
    });

  }



}

