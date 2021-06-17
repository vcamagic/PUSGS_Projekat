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

  getAllUsers() : Observable<User[]> {
    return this.http.get('http://localhost:4200/assets/users.json').pipe(
      map( data => {
        return data as Array<User>;
      })
    );
  }

}
