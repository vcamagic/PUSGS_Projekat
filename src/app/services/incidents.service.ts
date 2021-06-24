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
  incidentList : Incident[] = [];

  constructor(private http : HttpClient) {
      this.getAllIncidents();
  }

  readonly incidentsUrl = 'https://localhost:44396/api/Incidents';
   getAllIncidents(): Observable<Incident[]>{
    return this.http.get<Incident[]>(this.incidentsUrl);
  }

}
