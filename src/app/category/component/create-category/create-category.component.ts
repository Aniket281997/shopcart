import { NgToastService } from 'ng-angular-popup';
import { CategoryServicesService } from './../../services/category-services.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  data:any
  addCategory!:FormGroup
  constructor(
    private fb:FormBuilder,
    private service:CategoryServicesService,
    private ngtoast:NgToastService
    ) { }

  ngOnInit(): void {
    this.addCategory = this.fb.group({
      category:['',Validators.required]  
    })
  }
  get categoryVal() 
  { return this.addCategory.controls}
  createCategory(){
    this.service.postCategory(this.addCategory.value).subscribe((res:any)=>{
      this.ngtoast.success({detail:'category Added',summary:res.message,duration:2000})
      this.addCategory.reset()
      this.data
    })
  }
onrefresh(){
  this.addCategory.reset()
}
}
