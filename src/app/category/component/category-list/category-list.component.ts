import { NgToastService } from 'ng-angular-popup';
import { Component, Input, OnInit } from '@angular/core';
import { CategoryServicesService } from '../../services/category-services.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  @Input() message:any
  categoryList:any
  del:any
  showcategory:any=[]
  constructor(private service:CategoryServicesService,
    private ngtoast:NgToastService) { }

  ngOnInit(): void {
    this.categories()
    this.message = this.categories()
  }
  categories(){
    this.service.getCategory().subscribe((res:any)=>{
     this.showcategory=res;
    })  
  }

  delCategory(id:any){
    this.service.deleteCategory(id).subscribe((res:any)=>{
      this.ngtoast.success({detail:'category deleted',summary:res.message,duration:2000})
      this.categories()
    })
  }
}