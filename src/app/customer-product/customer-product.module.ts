import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerProductRoutingModule } from './customer-product-routing.module';
import { ProductShowComponent } from './component/product-show/product-show.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [
    ProductShowComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomerProductRoutingModule,
    SharedModule
  ],
  exports:[ProductShowComponent]
})
export class CustomerProductModule { }
