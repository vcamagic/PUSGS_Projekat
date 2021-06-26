import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegisteredUser, User } from '../entities/user/user';
import { RegistracijaModel } from '../models/registracijaModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) {

  }

  readonly usersUrl = 'https://localhost:44396/api/Users';

  getAllUsers(): Observable<User[]>  {
    return this.http.get<User[]>(this.usersUrl);
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
