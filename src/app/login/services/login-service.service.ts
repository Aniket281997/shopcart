import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor( private http: HttpClient) { }
  getRegister(data:any){
    return this.http.post('/register',data);
  }
  postlogin(){
    return this.http.get('/register');
  }

}
