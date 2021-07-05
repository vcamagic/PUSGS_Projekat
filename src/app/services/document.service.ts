import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SwitchingPlan } from 'src/app/entities/switchingPlan';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HistoryState } from 'src/app/entities/spHistoryState';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  params: new HttpParams()
};


@Injectable({
  providedIn: 'root'
})

export class DocumentService {

  constructor(private http: HttpClient) { }

  getHistoryStates(id:number){
    return this.http.get("https://localhost:44396/api/Document/GetHistoryState?id="+id);
  }

  saveHistoryState(historyState:HistoryState){
    return this.http.post("https://localhost:44396/api/Document/SaveHistoryState", historyState).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
