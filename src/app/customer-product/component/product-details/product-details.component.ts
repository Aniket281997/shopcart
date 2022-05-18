import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CustomerProductServicesService } from '../../services/customer-product-services.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products:any =[]
  customerId:any = localStorage.getItem('id')
  prodId:any
  addCart:any
  stock:any
  likeIds:any
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private service:CustomerProductServicesService,
    private ngtoast:NgToastService
    ) { }
  ngOnInit(): void {
    this.prodId = this.route.snapshot.params['id']  
    this.addCart={
      userId: this.customerId,
      product: []
    }
    if(this.prodId){
      this.productDetail(this.prodId)
    }
  }
  productDetail(id:any){
    this.service.getProdbyId(id).subscribe((res:any)=>{
      this.products =res
      this.stock = res.product_qty
     const likes = res.liked_by.findIndex((fruit =res.liked_by)=> fruit == this.customerId)
       if(likes === -1){ 
         this.likeIds = 'pi pi-heart'
      }else{
              this.likeIds = 'pi pi-heart-fill'
            } 
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
    this.service.putProductLike(obj.id,obj).subscribe((a:any)=>{
      this.productDetail(obj.id)
    })
  } 
  addtoCart(obj:any){
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
    this.service.postCart(this.addCart).subscribe((res:any)=>{  
      this.ngtoast.success({detail:"SUCCESS",summary:'Added to cart',duration:2000});
      this.router.navigate([`/viewcart/${this.customerId}`])
    })

  }
}
