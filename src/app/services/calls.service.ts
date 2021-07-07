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
    this.getAllCalls();
  }

  readonly callsUrl = 'https://localhost:44396/api/Calls';

  getAllCalls(){
     this.http.get<Call[]>(this.callsUrl).subscribe(res=>{
       this.incidentList = res as Call[];
       console.log(this.incidentList);
     },err=>{
       console.log(err);
     });
  }

  postData(call: Call){
    this.http.post(this.callsUrl + "/AddCall",call).subscribe(res =>{
      //this.router.navigate(["/login"]);
    },
    err => {
      console.log(err);

    });
  }
}
