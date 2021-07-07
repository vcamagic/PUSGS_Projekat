
import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient,HttpParams } from '@angular/common/http';
import { User ,RegisteredUser} from '../entities/user/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  invalidLogin : boolean = true;
  currentUser : User = new User("","","","","","","","","","","",);
  constructor(private http : HttpClient,public router: Router,private jwtHelper: JwtHelperService) {

  }

  readonly usersUrl = 'https://localhost:44396/api/Users';

  getAllUsers(): Observable<User[]>  {
    return this.http.get<User[]>(this.usersUrl);
  }
  getAllRegisteredUsers(): Observable<RegisteredUser[]>  {
    return this.http.get<RegisteredUser[]>(this.usersUrl);
  }

  loadUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>("https://localhost:44396/api/Users")
  }
  login(form : NgForm){
    const credentials = {
      'email' : form.value.email,
      'password': form.value.password
    };

    console.log(credentials);
    this.http.post(this.usersUrl + "/login",credentials).subscribe(res =>{
      const token = (<any>res).token;
      localStorage.setItem("jwt",token);
      this.invalidLogin = false;
      this.http.get(`${this.usersUrl}/${credentials.email}`).subscribe(res=>{
        this.currentUser=res as User;
        console.log(this.currentUser.email);
      })
      this.router.navigate(["/incidents"])
    },
    err => {
      console.log(err);
      this.invalidLogin = true;
    });
  }

  logout(){
    localStorage.removeItem("jwt");
    this.invalidLogin = true;
    this.router.navigate(["/login"]);
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

  isUserAuthenticated(): boolean{
    const token = localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    else{
      return false;
    }
  }

}
export interface IUser{
    username : string;
    firstName : string;
    lastName: string;
    email : string;
    password : string;
    birthDate : string;
    address : string;
    inputState:any;
    picture:any;
    activeStatus: string;
    type: string;
}
