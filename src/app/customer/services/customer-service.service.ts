import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor( private httpclient:HttpClient) { }
   getcustomerList(){
    return this.httpclient.get('/register');
  }
}
