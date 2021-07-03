import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Workplan } from '../entities/workplan/workplan';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkRequest } from '../entities/work-request/work-request';

export interface WorkRequestsItem {
  name: string;
  id: string;
  startdate: string;
  phonenumber: string;
  status:string;
  address:string;
}
  
@Injectable({
  providedIn: 'root'
})

export class WorkRequestsService {


  constructor(private http : HttpClient) { 
    this.getAllWorkRequests();
  }

  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  
  // Service message commands


  readonly workRequestUrl = 'https://localhost:44396/api/WorkRequests';

  getAllWorkRequests(): Observable<WorkRequest[]>{
    return this.http.get<WorkRequest[]>(this.workRequestUrl);
  }
  emitChange(change: any) {
      this.emitChangeSource.next(change);

       
}
}