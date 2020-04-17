import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  product:Product;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.getIdProduct();
  }

  getIdProduct(){
    this.activatedRoute.params.subscribe(product =>{
      this.productService.getProductByID(product.id).subscribe(data => {
        this.product = data;
      })
    })
  }

  updateProduct(){
    this.productService.updateProduct(this.product).subscribe(data => {
      this.route.navigateByUrl('/admin');
    })
  }
}
