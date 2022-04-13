import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { CustomerOrderComponent } from './component/customer-order/customer-order.component';
import { AllOrdersComponent } from './component/all-orders/all-orders.component';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerOrderComponent,
    AllOrdersComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomerModule { }
