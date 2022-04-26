import { ProductDetailsComponent } from './../../../customer-product/component/product-details/product-details.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutServiceService } from '../../services/checkout-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  userID:any
  cartProducts: Array<any> = [];
  constructor( 
    private checkoutservice:CheckoutServiceService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.params['id']
    this.viewCart()
  }
  viewCart(){
    this.checkoutservice.getCartprod().subscribe((res:any)=>{
      let cartData = res.filter((ele:any)=>{ 
        return ele.userId === this.userID;
      })
      
       cartData.forEach((element: any) => {
         element.product.forEach((ele: any) => this.cartProducts.push(ele))
       });
      console.log(this.cartProducts);
    })
  }

}
