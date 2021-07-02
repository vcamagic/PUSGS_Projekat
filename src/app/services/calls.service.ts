import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Call } from '../entities/call/call';

@Injectable({
  providedIn: 'root'
})
export class CallsService {

  incidentList : Call[] = [];
  constructor(private http: HttpClient,private router: Router) {


  }

  readonly callsUrl = 'https://localhost:44396/api/Calls';

  getAllIncidents(): Observable<Call[]>{
    return this.http.get<Call[]>(this.callsUrl);
  }

  postData(call: Call){
    this.http.post(this.callsUrl + "/AddCall",call).subscribe(res =>{
      this.router.navigate(["/login"]);
    },
    err => {
      console.log(err);

    });
  }
}
