import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Incident } from '../entities/incident/incident';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class IncidentsService {
  incidentList : Incident[];

  constructor(private http : HttpClient) {
      this.incidentList = [];
      this.getAllIncidents();
  }

   getAllIncidents(){
    /*return this.http.get('http://localhost:4200/assets/incidents.json').pipe(
      map( data => {
        console.log(data);
        return data as Array<Incident>;
      })
    );*/

      this.http.get(`http://localhost:4200/assets/incidents.json`).toPromise().then( res =>{
          this.incidentList = res as Incident[];
        }
      ).catch(() => 'error.');
  }

}
