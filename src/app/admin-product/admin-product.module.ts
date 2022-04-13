import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProductRoutingModule } from './admin-product-routing.module';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { SharedModule } from './../shared/shared/shared.module';

@NgModule({
  declarations: [CreateProductComponent, ProductListComponent],
  imports: [CommonModule, AdminProductRoutingModule, SharedModule],
})
export class AdminProductModule {}
