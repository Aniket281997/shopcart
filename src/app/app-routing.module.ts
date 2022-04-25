
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'',loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path:'',loadChildren:()=>import('./admin-product/admin-product.module').then(mod=>mod.AdminProductModule)},
  {path:'',loadChildren:()=>import('./customer-product/customer-product.module').then(mod=>mod.CustomerProductModule)},
  {path:'',loadChildren:()=>import('./layout/layout.module').then(mod=>mod.LayoutModule)},
  {path:'',loadChildren:()=>import('./profile/profile.module').then(mod=>mod.ProfileModule)},
  {path:'customer',loadChildren:()=>import('./customer/customer.module').then(mod=>mod.CustomerModule)},
  {path:'',loadChildren:()=>import('./category/category.module').then(mod=>mod.CategoryModule)},
  {path:'',loadChildren:()=>import('./checkout/checkout.module').then(mod=>mod.CheckoutModule )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

