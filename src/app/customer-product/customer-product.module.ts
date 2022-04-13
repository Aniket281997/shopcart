import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerProductRoutingModule } from './customer-product-routing.module';
import { ProductShowComponent } from './component/product-show/product-show.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';


@NgModule({
  declarations: [
    ProductShowComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomerProductRoutingModule
  ]
})
export class CustomerProductModule { }
