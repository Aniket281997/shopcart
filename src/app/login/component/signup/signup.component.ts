import { Router } from '@angular/router';
import { LoginServiceService } from './../../services/login-service.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private http:HttpClient, private service:LoginServiceService, 
    private fb:FormBuilder, private ngtoast:NgToastService,
    private router:Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group (
      {
        first_name : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')]) ],
        last_name : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
        email : ['',Validators.compose([Validators.required,Validators.email])],
        tel : ['',Validators.compose([Validators.required,Validators.minLength(10),Validators.pattern('^[0-9]*$')])],
        birth : ['',Validators.required],
        password : ['',Validators.compose([ Validators.required,Validators.minLength(6)])],
        role:['customer']
      }
    )
  }
 get rval() { return this.registerForm.controls}

  regSubmit(){
    this.service.getRegister(this.registerForm.value).subscribe((res:any)=>{
      this.registerForm.reset()
      this.ngtoast.success({detail:"SUCCESS",summary:'Registeration Success',duration:2000});
      this.router.navigate(['/login'])
    })
  }
  onReset() {
        this.registerForm.reset();
    }
}
