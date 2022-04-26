import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerProductServicesService {

  constructor(private httpclient:HttpClient) { }
  getProduct(){
    return this.httpclient.get(`/products`)
  }
  putProductLike(id:any,data:any){
    return this.httpclient.put(`/products/${id}`,data)
  }
  getProdbyId(id:any){
    return this.httpclient.get(`/products/${id}`)
  }
  getCustomer(){
    return this.httpclient.get(`/registers`)
  }
  patchCustomer(id:any,data:any){
    return this.httpclient.patch(`/registers/${id}`,data)
  }
  postCart(data:any){
    console.log("ft",data);
    
    return this.httpclient.post(`/addcart`,data)
  }
}
