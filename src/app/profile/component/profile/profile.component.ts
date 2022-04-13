import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileServicesService } from './../../services/profile-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showprofile:any
  userprofile!:FormGroup
  constructor(private profileservice:ProfileServicesService, private fb:FormBuilder) {
    this.showprofile={}
   }
  ngOnInit(): void {
    this.userprofile = this.fb.group (
      {
        first_name : [this.showprofile.first_name],
        last_name : [this.showprofile.last_name],
        email : [this.showprofile.email],
        tel : [this.showprofile.tel],
      }
    )
    const pnumber =JSON.parse(localStorage.getItem('id')!)
    if(pnumber){
      this.getUserbyNumber(pnumber)
    }
  }
  getUserbyNumber(num:number){
      this.profileservice.getUser(num).subscribe((res:any)=>{
        this.showprofile = res
        this.userprofile.patchValue(this.showprofile)
      })
  }
}
