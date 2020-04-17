import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from '../../admin/manager-products/product-add/product-add.component';
import { ProductManagerComponent } from '../../admin/manager-products/product-manager/product-manager.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductUpdateComponent } from '../../admin/manager-products/product-update/product-update.component';
import { AdminComponent } from '../../admin/admin.component';

const routes: Routes = [
  { path: 'product-list', component:ListProductComponent  },
  { path: 'product-list/:id', component:ProductDetailComponent  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
