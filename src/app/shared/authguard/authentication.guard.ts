import { MainService } from './../services/main.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private mainservice:MainService, private router:Router){}
  canActivate(){
    if(this.mainservice.islogin()){
      return true
    }else{
      this.router.navigate(['login'])
      return false
    }
  }
  
}
