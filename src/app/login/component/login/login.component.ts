import { NgToastService } from 'ng-angular-popup';
import { HttpClient } from '@angular/common/http';
import { LoginServiceService } from './../../services/login-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginform!: FormGroup   
  newrole:any
  profileName:any
  userid:any
  constructor(private service:LoginServiceService, private httpclient:HttpClient,
              private router:Router, private fb:FormBuilder,
              private ngtoast:NgToastService) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      tel: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  loginsubmit(){
    this.service.postlogin().subscribe((res:any) =>{
      const user = res.find((logindata:any) =>{
         this.newrole = logindata.role
         this.profileName = logindata.first_name
         this.userid = logindata.id
        return (
          logindata.tel === this.loginform.value.tel && logindata.password === this.loginform.value.password
        )
        
      })
        if(user){
          if(this.newrole =='customer'){
            this.ngtoast.success({detail:"SUCCESS",summary:'Login Success',duration:2000});
            this.router.navigate(['/'])
            localStorage.setItem('role',this.newrole)
            localStorage.setItem('profile',this.profileName)
            localStorage.setItem('id',this.userid)
          }else{
            this.ngtoast.success({detail:"SUCCESS",summary:'Login Success',duration:2000});
            this.router.navigate(['/product-list'])
            localStorage.setItem('role',this.newrole)
            localStorage.setItem('profile',this.profileName)
          }
        } else{       
          this.ngtoast.error({detail:"ERROR",summary:'Please enter valid number and password',duration:2000});
        }
    })
  }
}
