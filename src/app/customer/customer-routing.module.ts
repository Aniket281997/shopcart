import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOrdersComponent } from './component/all-orders/all-orders.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';

const routes: Routes = [
  {path:'customer-list',component:CustomerListComponent},
  {path:'all-order', component:AllOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
