import { EditProductComponent } from './component/edit-product/edit-product.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'add-product', component: CreateProductComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'edit-product/:id', component:EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminProductRoutingModule {}
