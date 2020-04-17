import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product';
import { data } from '../../../MockProduct';
import { ProductService } from '../../../product.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  product:Product = new Product();
  constructor(
  private productService : ProductService,
  private route: Router,
  ) { }

  ngOnInit(): void {
  }
  addProduct(){
    return this.productService.addProduct(this.product).subscribe(data =>{
      if(data && data.id){
        this.route.navigateByUrl('/admin');
      }
    })
  }

}
