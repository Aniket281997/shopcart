import { CustomerServiceService } from './../../services/customer-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
customer:any[] =[]
checked: boolean =true;
  status: any;
  role:any ='customer';
  value:any
  constructor(private service:CustomerServiceService) { }
  
  ngOnInit(): void {
    this.getcustomer()
  }

  change(userid:any){
     if(userid == '2'){
       userid ='2'
       alert(userid)

    }else{
       userid ='1'
       alert(userid)
    }
    
  }

  getcustomer(){
    this.service.getcustomerList().subscribe((res:any)=>{     
      const filterUser =  res.filter((ele:any)=>{
        this.value =ele.status
        return ele.role  === this.role
      }) 
        this.customer =filterUser 
    })
  }
  // ststusUpdate(){
  //   this.service.putStatus()
  // }

}
