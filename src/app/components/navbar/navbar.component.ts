import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router,public userService: UserService) { }
  admin! : boolean;
  ngOnInit(): void {
    const type = localStorage.getItem("type");
    console.log(type);

      if(type === 'Admin'){
        
        this.admin = true;
      }else{
      this.admin = false;
      }
  }

  logout(){
    this.userService.logout();
  }

}
