import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../entities/user/user';

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

}
