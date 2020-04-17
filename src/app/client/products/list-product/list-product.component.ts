import { Component, OnInit } from '@angular/core';
import { Product } from "../../../product";
import { data } from '../../../MockProduct';
import { ProductService } from '../../../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  constructor(
    private activatedRoute : ActivatedRoute,
    private productService : ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  products: Product[] = [];

  getProduct(){
    return this.productService.getProduct().subscribe(data => {
      this.products = data;
    })
  }

}
