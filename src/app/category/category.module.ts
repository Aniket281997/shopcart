import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CreateCategoryComponent } from './component/create-category/create-category.component';
import { CategoryListComponent } from './component/category-list/category-list.component';


@NgModule({
  declarations: [
    CreateCategoryComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
