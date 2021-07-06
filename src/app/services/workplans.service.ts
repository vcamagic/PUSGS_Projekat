import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Workplan } from '../entities/workplan/workplan';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WorkplansService {
  private activeId = new Subject<number>();
  currentActiveId$ = this.activeId.asObservable();
  constructor(private http : HttpClient) { 
    this.getAllWorkPlans();
  }

  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  
  // Service message commands


  readonly workplanUrl = 'https://localhost:44396/api/WorkPlan';

  getAllWorkPlans(): Observable<Workplan[]>{
    return this.http.get<Workplan[]>(this.workplanUrl);
  }
  emitChange(change: any) {
      this.emitChangeSource.next(change);

    }
    saveWorkPlan(wr : Workplan)      
    {
      this.http.post("https://localhost:44396/api/WorkPlan/AddWorkPlan", wr/*, httpOptions*/)
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

      this.http.put("https://localhost:44396/api/WorkPlan/Approve", null,{params: params}
      )
      .subscribe(
        data => console.log('oops', data)
      );
     
    }

    Cancel(phoneNum : string)
    {
      const params = new HttpParams().append('phoneNum',phoneNum);
      this.http.put("https://localhost:44396/api/WorkPlan/Cancel", null,{params: params})
      .subscribe(
        data => console.log('oops', data)
      );
    
    }

}
