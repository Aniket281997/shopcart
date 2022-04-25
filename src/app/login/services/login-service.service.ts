import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor( private http: HttpClient) { }
  postRegister(data:any){
    // let body = {
    //   "data" : data
    // }
    return this.http.post('/registers',data);
  }
  getlogin(){
    return this.http.get('/registers');
  }

}
