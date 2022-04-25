import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartComponent } from './component/cart/cart.component';
import { FavoriteComponent } from './component/favorite/favorite.component';
import { MyOrderComponent } from './component/my-order/my-order.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [
    CartComponent,
    FavoriteComponent,
    MyOrderComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedModule
  ]
})
export class CheckoutModule { }
