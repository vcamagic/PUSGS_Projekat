import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Workplan } from '../entities/workplan/workplan';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  
  private activeId = new Subject<number>();
  currentActiveId$ = this.activeId.asObservable();
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
    saveWorkRequest(wr : WorkRequest)      
    {
      this.http.post("https://localhost:44396/api/WorkRequests/AddWorkRequest", wr/*, httpOptions*/)
      .subscribe(
        data => console.log('oops', data)
      );
    }

    sendMessage(message: number){
      this.activeId.next(message);
    }
    Approve (phoneNum : string){
      console.log(phoneNum);
     
      const params = new HttpParams().append('phoneNum',phoneNum);

      
    
      this.http.put("https://localhost:44396/api/WorkRequests/Approve", null,{params: params}
      )
      .subscribe(
        data => console.log('oops', data)
      );
     
    }
    Cancel(phoneNum : string)
    {
      const params = new HttpParams().append('phoneNum',phoneNum);
      this.http.post("https://localhost:44396/api/WorkRequests/Cancel", null,{params: params})
      .subscribe(
        data => console.log('oops', data)
      );
    
    }
}