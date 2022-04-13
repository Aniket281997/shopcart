import { ProfileServicesService } from './../../services/profile-services.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-psw',
  templateUrl: './change-psw.component.html',
  styleUrls: ['./change-psw.component.css']
})
export class ChangePswComponent implements OnInit {
  formval!:FormGroup
  constructor(private fb:FormBuilder, private service:ProfileServicesService) { }

  ngOnInit(): void {
    this.formval = this.fb.group({
      old_psw:[''],
      new_psw:[''],
      confirm_psw:['']
    })
   // const userId = JSON.parse(localStorage.getItem('id')!)
    // if(userId){
  //     this.changePsw(userId)
  //   }
  // }
  // changePsw(userId:number){
  // }
  // changeNew(pswdata:any,userId:number){
  //   this.service.putPassword(pswdata.value,userId).subscribe((res:any)=>{
  //     console.log(res,'response psw')
  //   })
   }

}
