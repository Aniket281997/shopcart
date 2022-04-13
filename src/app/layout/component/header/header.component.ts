import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  profileval:any = localStorage.getItem('profile')
  constructor() { }

  ngOnInit(): void {
    
  }

  loggin(){
    return localStorage.getItem('role')
  }
  logout(){
    localStorage.clear()
  }
  profile(){
    this.profileval
  }

}
