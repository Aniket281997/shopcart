import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartComponent } from './component/cart/cart.component';
import { FavoriteComponent } from './component/favorite/favorite.component';
import { MyOrderComponent } from './component/my-order/my-order.component';


@NgModule({
  declarations: [
    CartComponent,
    FavoriteComponent,
    MyOrderComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
