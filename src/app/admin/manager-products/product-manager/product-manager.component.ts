import { Component, OnInit } from '@angular/core';
import { data } from '../../../MockProduct';
import { Product } from '../../../product';
import { ProductService } from '../../../product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  products: Product[] = [];

  getProduct(){
    return this.productService.getProduct().subscribe(data => {
      this.products = data;
    });
  }

  removeProduct(id : number){
    return this.productService.deteleProduct(id).subscribe(data => {
      this.updateNewData(id);
    })
  }
  updateNewData(id : number){
    let i = 0;
    this.products.map(x => {
      if (x.id === id) {
        this.products.splice(i, 1);
      }
      i++;
    });
  }




}
