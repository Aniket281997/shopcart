import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  profileval:any = localStorage.getItem('profile')
  customerId:any = localStorage.getItem('id')
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  loggin(){
    return localStorage.getItem('role')
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/']);
    
  }
  profile(){
    this.profileval
  }

}
