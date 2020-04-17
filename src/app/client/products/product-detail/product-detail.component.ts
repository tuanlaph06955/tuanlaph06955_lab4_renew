import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product';
import { data } from '../../../Mockproduct';
import { ProductService } from '../../../product.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product:Product;
  constructor(
    public activatedRoute : ActivatedRoute,
    public productService : ProductService,
    public route : Router

  ) { }

  ngOnInit() {
    this.getIdProduct();
  }
  getIdProduct(){
    this.activatedRoute.params.subscribe(product => {
      this.productService.getProductByID(product.id).subscribe(data=> {
        this.product = data;
      })
    })
  }
}
