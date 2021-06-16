import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User, UserType } from '../entities/user/user';
import { Router } from '@angular/router';
import { TeamMember } from '../entities/team-member/team-member';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userData : User = new User();
  userList : Array<User> = new Array<User>();
  teamMembers : TeamMember[] = [];
  exists : Boolean = false;
  logedIn : boolean = false;

  constructor(private http:HttpClient ,private router: Router) {
    
  }

  login(email: string, password: string){
    this.userList.forEach(element => {
      if(element.email == email){
          if(element.password == password)
            this.exists=true;
      }
    });

    if(!this.exists){
      alert("Username or password invalid.");
      return;
    }

    alert("Login succesful!");
    this.logedIn = true;
    this.router.navigate(['dashboard']);
  }

  getLoginStatus(): boolean{
    return this.logedIn;
  }
}
