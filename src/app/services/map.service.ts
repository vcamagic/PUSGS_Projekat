
import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { User ,RegisteredUser} from '../entities/user/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import {Map} from 'src/app/entities/map';
@Injectable({
  providedIn: 'root'
})
export class MapService {

constructor(private http : HttpClient,public router: Router) { }


loadMapModels(): Observable<Map[]>{
  return this.http.get<Map[]>("https://localhost:44396/api/Map/GetMap")
}


}
export interface IMap{
  id : string;
  incidentId : number;
  x: string;
  y : string;
  crewName : string;
}
