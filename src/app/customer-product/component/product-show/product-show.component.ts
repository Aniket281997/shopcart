import { Router } from '@angular/router';
import { CustomerProductServicesService } from './../../services/customer-product-services.service';
import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {
  products:any=[]
  customerId:any = localStorage.getItem('id')
  liked:any
  likeIds:any
  addprod:any
  addCart:any
  addobj:any
  constructor(
    private productservice:CustomerProductServicesService,
    private ngtoast:NgToastService,
    private router:Router
    ) { }

  ngOnInit(): void {
    
    this.addCart={
      userId: this.customerId,
      product: []
    }
    this.displayProduct()
    this.getUser()
  }
  getUser(){
    this.productservice.getCustomer().subscribe((res:any)=>{
      let user = res.filter((ele:any)=>ele.id ===this.customerId)
    })
  }
  displayProduct(){
      this.productservice.getProduct().subscribe((res:any)=>{
        this.products =res 
        const findC = res.filter((ele:any)=>{    
          let likes = ele.liked_by.findIndex((fruit =ele.liked_by)=> fruit == this.customerId)
          console.log(likes,'likes'); 
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
  addtoCart(obj:any){
    console.log(obj.product_price);
    
    this.addCart.product.push({
        prodid:obj.id,
        name:obj.product_title,
        brand:obj.product_brand,
        category:obj.product_category,
        size:obj.product_size,
        color:obj.product_color,
        price:obj.product_price,
        qty:1,
        total_price:obj.product_price
      });   
    this.productservice.postCart(this.addCart).subscribe((res:any)=>{  
     this.ngtoast.success({detail:"SUCCESS",summary:'Added to cart',duration:2000});
      this.router.navigate([`/viewcart/${this.customerId}`])
    })
  }

}