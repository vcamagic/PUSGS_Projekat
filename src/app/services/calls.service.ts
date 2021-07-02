import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Call } from '../entities/call/call';

@Injectable({
  providedIn: 'root'
})
export class CallsService {

  incidentList : Call[] = [];
  constructor(private http: HttpClient) {


  }

  readonly callsUrl = 'https://localhost:44396/api/Calls';

  getAllIncidents(): Observable<Call[]>{
    return this.http.get<Call[]>(this.callsUrl);
  }

  postData(call: Call){
    return this.http.post(`${this.callsUrl}`,call);
  }
}
