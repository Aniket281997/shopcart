import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileServicesService {

  constructor(private httpclient:HttpClient) { }
   getUser(id: number) {
    return this.httpclient.get(`/registers/${id}`);
  }
  putPassword(id:number, data:any){
    return this.httpclient.put<any>(`/registers/${id}`,data)
  }
}
