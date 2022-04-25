import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductShowComponent } from './component/product-show/product-show.component';

const routes: Routes = [
  {path:'home',component:ProductShowComponent},
  {path:'product/:id',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerProductRoutingModule { }
