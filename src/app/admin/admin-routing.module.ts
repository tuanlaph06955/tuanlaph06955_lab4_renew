import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './manager-products/product-add/product-add.component';
import { ProductManagerComponent } from './manager-products/product-manager/product-manager.component';
import { ProductUpdateComponent } from './manager-products/product-update/product-update.component';
import { ManagerPDetailComponent } from './manager-products/manager-p-detail/manager-p-detail.component';

const routes: Routes = [
  { path: 'admin/product-add', component:ProductAddComponent  },
  { path: 'admin/product-manager', component:ProductManagerComponent  },
  { path: 'admin/product-manager/edit/:id', component:ProductUpdateComponent  },
  { path: 'admin/product-manager/:id', component:ManagerPDetailComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
