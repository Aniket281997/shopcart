import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileServicesService {

  constructor(private httpclient:HttpClient) { }
   getUser(id: number) {
    return this.httpclient.get(`/register/${id}`);
  }
  putPassword(id:number, data:any){
    return this.httpclient.put<any>(`/register/${id}`,data)
  }
}
