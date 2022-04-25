import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CustomerProductServicesService } from '../../services/customer-product-services.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products:any =[]
  customerId:any = localStorage.getItem('id')
  prodId:any
  stock:any
  likeIds:any
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private service:CustomerProductServicesService
    ) { }
  ngOnInit(): void {
    this.prodId = this.route.snapshot.params['id']  
    if(this.prodId){
      this.productDetail(this.prodId)
    }
    
    // this.productStock()
  }
  // productStock(){
  //   if(this.stock >=10){
  //     alert('only 10left')
  //   }else{
  //     alert('ok')
  //   }
  // }
  productDetail(id:any){
    this.service.getProdbyId(id).subscribe((res:any)=>{
      this.products =res
      this.stock = res.product_qty
      // this.likeIds = res.liked_by
     const likes = res.liked_by.findIndex((fruit =res.liked_by)=> fruit == this.customerId)
     console.log(likes,'dfdf')
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

}
