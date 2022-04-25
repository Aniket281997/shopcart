import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminProductServicesService {

  constructor(private httpclient:HttpClient) { 
  }
  postProduct(data:any){
      return this.httpclient.post(`/products`,data)
    }
  getProductlist(){
    return this.httpclient.get(`/products`)
  }
  deleteProduct(id:any){
    return this.httpclient.delete(`/products/${id}`)
  }
  getProductbyId(id:any){
    return this.httpclient.get(`/products/${id}`)
  }
  putProduct(id:any,data:any){
    return this.httpclient.put(`/products/${id}`,data)
  }
  getCategory(){
    return this.httpclient.get(`/categories`)
  }

}
