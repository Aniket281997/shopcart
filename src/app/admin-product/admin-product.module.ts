import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProductRoutingModule } from './admin-product-routing.module';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { SharedModule } from './../shared/shared/shared.module';
import { EditProductComponent } from './component/edit-product/edit-product.component';

@NgModule({
  declarations: [CreateProductComponent, ProductListComponent, EditProductComponent],
  imports: [CommonModule, AdminProductRoutingModule, SharedModule,ReactiveFormsModule],
})
export class AdminProductModule {}
