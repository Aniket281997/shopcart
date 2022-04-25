import { CustomerProductServicesService } from './../../services/customer-product-services.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {
  products:any=[]
  sortOptions!: SelectItem[];
  sortOrder!: number;
  sortField!: string;
  customerId:any = localStorage.getItem('id')
  likedItem:any
  liked:any
  Addlike:any
  likeIds:any
  constructor(
    private productservice:CustomerProductServicesService,
    
    ) { }

  ngOnInit(): void {
    this.displayProduct()
    this.getUser()
  }

  getUser(){
    this.productservice.getCustomer().subscribe((res:any)=>{
      let user = res.filter((ele:any)=>ele.id ===this.customerId)
      console.log(user);
      
      
    })
  }
  displayProduct(){
      this.productservice.getProduct().subscribe((res:any)=>{
        this.products =res 
        const findC = res.filter((ele:any)=>{  
          let likes = ele.liked_by.filter((fruit =ele.liked_by)=> fruit == this.customerId)
          if(likes.length === 0){ 
            this.likeIds = 'pi pi-heart'
          }else{
            this.likeIds = 'pi pi-heart-fill'
          }             
       })     
     })
  }
  likedProduct(obj:any){
    const like = obj.liked_by.filter((fruit = obj.liked_by) => fruit == this.customerId)
    let likeIndex = like.indexOf(this.customerId)
    if(like == this.customerId){  
      obj.liked_by.splice(likeIndex,1)
    }else{
      obj.liked_by.push(this.customerId)
    }
    this.productservice.putProductLike(obj.id,obj).subscribe((a:any)=>{
      this.displayProduct()
    })
  } 

}