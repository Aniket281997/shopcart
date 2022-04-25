import { NgToastService } from 'ng-angular-popup';
import { AdminProductServicesService } from './../../services/admin-product-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  showProducts:any
  del:any
  constructor(private productservice:AdminProductServicesService,private ngtoast:NgToastService) { }
  ngOnInit(): void {
    this.showProductlists()
  }

  showProductlists(){
    this.productservice.getProductlist().subscribe((res:any)=>{
      this.showProducts =res
       this.showProducts = this.showProducts.sort((a:any,b:any)=>{
        if(a.id>b.id){
          return -1;
        }else if(a.id==b.id){
          return 0;
        }else{
          return 1
        }
      })
    })
  }

  delProduct(id:any){
    this.productservice.deleteProduct(id).subscribe((res:any)=>{
      this.del = res.id
      this.ngtoast.success({detail:'Product Deleted',summary:res.message,duration:2000})
    })
  }
  // editProduct(id:any,data:any){
  //   this.productservice.putProduct(id,data).subscribe((res:any)=>{
  //     console.log('put response',res)
  //   })
  // }
}
