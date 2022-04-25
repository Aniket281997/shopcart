import { CategoryListComponent } from './component/category-list/category-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCategoryComponent } from './component/create-category/create-category.component';

const routes: Routes = [
  {path:'category-list', component:CategoryListComponent},
  {path:'add-category',component:CreateCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
