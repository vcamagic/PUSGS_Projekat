import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Workplan } from '../entities/workplan/workplan';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WorkplansService {
  constructor(private http : HttpClient) { 
    this.getAllWorkplans();
  }

  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  
  // Service message commands


  readonly workPlanUrl = 'https://localhost:44396/api/WorkPlans';

  getAllWorkplans(): Observable<Workplan[]>{
    return this.http.get<Workplan[]>(this.workPlanUrl);
  }
  emitChange(change: any) {
      this.emitChangeSource.next(change);

       
}

}
