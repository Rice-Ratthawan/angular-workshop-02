import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product';

@Pipe({
  name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform {
  ProductDataModel = [];
  transform(products: Product[], name: string): Product[] {

    console.log(">>>>" + name)
    return products.filter((p) => p.name.indexOf(name) != -1);
  }

}
