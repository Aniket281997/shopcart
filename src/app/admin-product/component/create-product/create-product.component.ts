import { NgToastService } from 'ng-angular-popup';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminProductServicesService } from './../../services/admin-product-services.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
size=[7,8,9]
color = ['red','blue','white','black']
quantity= [5,10,20,30];
cateAll:any
categoryAll:any[]=[]
newproduct!:FormGroup
uploadedFiles: any;
editId:any
isAddid!:boolean
arr:any[]=["0"]
  constructor(
    private httpclient:HttpClient, 
    private service:AdminProductServicesService,
    private fb:FormBuilder,private router:Router,
    private ngtoast:NgToastService,
    private route:ActivatedRoute
     ) { }
  ngOnInit(): void {
      // this.editId = this.route.snapshot.params['id'];
      // this.isAddid =!this.editId
      this.newproduct = this.fb.group(
        {
          product_title:['',Validators.required],
          product_brand:['',Validators.required],
          product_category:['',Validators.required],
          product_size:['',Validators.required],
          product_color:['',Validators.required],
          product_qty:['',Validators.required],
          product_price:['',Validators.required],
          liked_by:[this.arr]
          // product_img:[this.uploadedFiles,Validators.required]
        })
        this.categoryShow()
  }
  // onBasicUpload(event:any){
  //   for(let file of event.files) {
  //           this.uploadedFiles.push(file);
  //       }
  // }
  get prodval(){return this.newproduct.controls}
  // getProductbyid(id:number){
  //   console.log('id',this.editId)
  //     this.service.getProductbyId(this.editId).subscribe((res:any)=>{
  //       console.log('updateid',res)
  //       this.newproduct.patchValue(res)
  //     })
  // }
  categoryShow(){
    this.service.getCategory().subscribe((res:any)=>{
      const findCategory = res.filter((a:any)=>{
          this.cateAll = a.category
          this.categoryAll.push(this.cateAll) 
      })     
    })
  }

  // onSubmit(){
  //   if(this.isAddid){
  //     this.addProduct()   
  //   }else{
  //     this.updateProduct()
  //   }
  // }

  addProduct(){
    this.service.postProduct(this.newproduct.value).subscribe((res:any)=>{
      this.newproduct.reset()
      this.ngtoast.success({detail:"SUCCESS",summary:'Added new product',duration:2000});
      this.router.navigate(['/product-list'])
    })
  }
  // updateProduct(){
  // }

}
