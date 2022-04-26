import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutServiceService {

  constructor(
    private httpclient:HttpClient
  ) { }

  getWishlist(){
    return this.httpclient.get(`/products`)
  }
  putProduct(id:any,data:any){
    return this.httpclient.put(`/products/${id}`,data)
  }
  getCartprod(){
    return this.httpclient.get(`/addcart`)
  }
}
