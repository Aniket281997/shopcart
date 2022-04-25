import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminProductServicesService } from './../../services/admin-product-services.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
size=[7,8,9]
color = ['red','blue','white','black']
quantity= [5,10,20,30];
categoryAll:any[]=[]
newproduct!:FormGroup
uploadedFiles: any;
editId:any
cateAll: any;
  constructor(
    private httpclient:HttpClient,
    private service:AdminProductServicesService,
    private fb:FormBuilder,
    private router:Router, 
    private ngtoast:NgToastService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.editId = this.route.snapshot.params['id']
      this.newproduct = this.fb.group(
        {
          product_title:['',Validators.required],
          product_brand:['',Validators.required],
          product_category:['',Validators.required],
          product_size:['',Validators.required],
          product_color:['',Validators.required],
          product_qty:['',Validators.required],
          product_price:['',Validators.required],
          // product_img:[this.uploadedFiles,Validators.required]
        })
        this.categoryShow()
        if(this.editId){
          this.getProductbyid(this.editId)
        }
  }

  get prodval(){return this.newproduct.controls}

   getProductbyid(id:any){
      this.service.getProductbyId(id).subscribe((res)=>{
        this.newproduct.patchValue(res)
      })
  }
    categoryShow(){
    this.service.getCategory().subscribe((res:any)=>{
      const findCategory = res.filter((a:any)=>{
          this.cateAll = a.category
          this.categoryAll.push(this.cateAll) 
      })    
    })
  }

editProduct(editId:any,newproduct:any){
  this.service.putProduct(editId,newproduct.value).subscribe((res:any)=>{
     this.newproduct.reset()
      this.ngtoast.success({detail:"SUCCESS",summary:'Added new product',duration:2000});
      this.router.navigate(['/product-list'])
  })
}

}
