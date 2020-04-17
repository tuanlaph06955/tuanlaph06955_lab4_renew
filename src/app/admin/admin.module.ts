import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ManagerPDetailComponent } from './manager-products/manager-p-detail/manager-p-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HeaderComponent,
    SideBarComponent
  ],
  declarations: [
    AdminComponent,
    ContentComponent,
    ManagerPDetailComponent,

  ]
})
export class AdminModule {}
