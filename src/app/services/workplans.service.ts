import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Workplan } from '../entities/workplan/workplan';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class WorkplansService {
  workplanList : Workplan[] = [];

  constructor(private http : HttpClient) {
      this.getAllWorkplans();
  }

  readonly workplanUrl = 'https://localhost:44396/api/Workplans';
   getAllWorkplans(): Observable<Workplan[]>{
    return this.http.get<Workplan[]>(this.workplanUrl);
  }

}
