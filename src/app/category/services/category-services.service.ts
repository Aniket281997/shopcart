import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServicesService {
  constructor( private http:HttpClient) { }

  postCategory(data:any){
    return this.http.post(`/categories`,data)
  }
  getCategory(){
    return this.http.get(`/categories`)
  }
  deleteCategory(id:any){
    return this.http.delete(`/categories/${id}`)
  }
}
