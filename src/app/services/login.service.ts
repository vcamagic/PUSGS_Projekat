import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User, UserType } from '../entities/user/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userList : Array<User>;
  exists : Boolean;

  constructor( private router: Router) {
    this.userList = new Array<User>();
    this.exists = false;
    this.userList.push(new User("pera@gmail.com","pera123",UserType.CrewMember,'Petar','Petrovic','Djure Jaksica 152',new Date(1982,8,23)));
    this.userList.push(new User("vcamagic@yahoo.com","zvucnik123",UserType.Admin, 'Vladimir','Camagic','Janka Cmelika 29b',new Date(1998,5,28)));
    this.userList.push(new User("djole@uns.ac.rs","djole123",UserType.Dispatcher,'Djordje','Djordjevic','Bore Petkovica 88',new Date(1990,12,22)));
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
    this.router.navigate(['dashboard']);
  }
}
