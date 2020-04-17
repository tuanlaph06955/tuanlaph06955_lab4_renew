import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product';
import { ProductService } from '../../../product.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-manager-p-detail',
  templateUrl: './manager-p-detail.component.html',
  styleUrls: ['./manager-p-detail.component.scss']
})
export class ManagerPDetailComponent implements OnInit {

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
