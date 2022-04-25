import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CreateCategoryComponent } from './component/create-category/create-category.component';
import { CategoryListComponent } from './component/category-list/category-list.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [
    CreateCategoryComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
