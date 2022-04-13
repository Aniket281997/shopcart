import { CustomerServiceService } from './../../services/customer-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
customer:any[] =[]
  constructor(private service:CustomerServiceService) { }
  
  ngOnInit(): void {
    this.getcustomer()
  }
  getcustomer(){
    this.service.getcustomerList().subscribe((res:any)=>{
      this.customer = res 
    })
  }

}
