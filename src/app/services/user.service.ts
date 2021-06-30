
import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient,HttpParams } from '@angular/common/http';
import { User ,RegisteredUser} from '../entities/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  invalidLogin : boolean = true;
  constructor(private http : HttpClient,public router: Router) {

  }

  readonly usersUrl = 'https://localhost:44396/api/Users';

  getAllUsers(): Observable<User[]>  {
    return this.http.get<User[]>(this.usersUrl);
  }

  login(form : NgForm){
    const credentials = {
      'email' : form.value.email,
      'password': form.value.password
    };

    this.http.post(this.usersUrl + "/login",credentials).subscribe(res =>{
      const token = (<any>res).token;
      localStorage.setItem("jwt",token);
      this.invalidLogin = false;
      this.router.navigate(["/incidents"])
    },
    err => {
      this.invalidLogin = true;
    });
  }
  getAllRegisteredUsers(): Observable<RegisteredUser[]>  {
    return this.http.get<RegisteredUser[]>(this.usersUrl);
  }
  activateUser(username:string) {
    const params = new HttpParams().append('username',username);

    this.http.put("https://localhost:44396/api/Users/Verification",null,{params: params})
    .subscribe(
      error=>console.log('greska',error)
    );

    return;
  }
  declineUser(username:string) {
    const params = new HttpParams().append('username',username);
    this.http.put("https://localhost:44396/api/Users/Declineverification",null,{params: params})
    .subscribe(
      error=>console.log('greska',error)
    );

    return;
  }

}
