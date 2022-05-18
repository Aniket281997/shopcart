import { ProductDetailsComponent } from './../../../customer-product/component/product-details/product-details.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutServiceService } from '../../services/checkout-service.service';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  userID:any
  cartProducts: Array<any> = [];
  counter:any
    constructor( 
    private checkoutservice:CheckoutServiceService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.params['id']
    this.viewCart()
    // this.grandTotal()
  }
  // Quantity
  decrement(obj:any){
    console.log(obj,'fgf');
    obj.qty
    if(obj.qty>1){
    obj.qty = obj.qty-1  
    obj.total_price = obj.price * obj.qty
    this.cartProducts.push(obj.qty)
    this.cartProducts.push(obj.total_price)
    }
   }
  increment(obj:any){
    console.log(obj,'fgf');
    obj.qty
    if(obj.qty<10){
    obj.qty = obj.qty+1  
    obj.total_price = obj.price * obj.qty
    this.cartProducts.push(obj.qty)
    this.cartProducts.push(obj.total_price)
    }  
  }
 

  viewCart(){
    this.checkoutservice.getCartprod().subscribe((res:any)=>{
      let cartData = res.filter((ele:any)=>{ 
        return ele.userId === this.userID;
      })  
       cartData.forEach((element: any) => {  
         element.product.forEach((ele: any) => this.cartProducts.push(ele))   
       });
    })
    
    
  }
  //  grandTotal(){
  //    console.log(this.cartProducts.length);
     
  //   // this.cartProducts.forEach((ele) =>{ console.log(ele.name,'d') }   )
    
      
  //    for(let i=0;i<this.cartProducts.length;i++){
  //       let grand = this.cartProducts[i]
  //       console.log(this.cartProducts[i].name);     
  //    }
  // }

}
