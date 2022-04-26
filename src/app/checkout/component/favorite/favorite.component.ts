import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CheckoutServiceService } from '../../services/checkout-service.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
editId:any
products:any =[]
  constructor(
    private route:ActivatedRoute,
    private checkoutService: CheckoutServiceService
  ) { }

  ngOnInit(): void {
    this.editId = this.route.snapshot.params['id']
    this.showFav()
  }
  showFav(){
      this.checkoutService.getWishlist().subscribe((res:any)=>{
        const findC = res.filter((ele:any)=>{   
          let likes1 = ele.liked_by.filter((like =ele.liked_by)=> like == this.editId)   
            if(likes1.length !== 0){
              this.products.push(ele) 
            }
         })
      })
    }
  deleteProduct(obj:any){
    console.log(obj);
    let findProd = obj.liked_by.filter((ind = obj.liked_by)=> ind == this.editId)
    console.log(findProd)
    let likeIndex = findProd.indexOf(this.editId)
    console.log(likeIndex);
    if(findProd == this.editId){  
      obj.liked_by.splice(likeIndex,1)
    }
    this.checkoutService.putProduct(obj.id,obj).subscribe((a:any)=>{    
    })
  }

}
