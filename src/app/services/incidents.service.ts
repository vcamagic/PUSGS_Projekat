import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Incident } from '../entities/incident/incident';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Element} from '../entities/element/element'



@Injectable({
  providedIn: 'root'
})
export class IncidentsService {
  incidentList : Incident[] = [];
  public incident : Incident = new Incident("",0,"",false,"","","","","",0,0,0,"");
  constructor(private http : HttpClient,private router: Router) {
      this.getAllIncidents();
  }

  readonly incidentsUrl = 'https://localhost:44396/api/Incidents';

  getAllIncidents(): Observable<Incident[]>{
    return this.http.get<Incident[]>(this.incidentsUrl);
    this.http.get(this.incidentsUrl)
  }

  AddIncident(incident : Incident ) {
    console.log(this.incident);
    return this.http.post(`${this.incidentsUrl}`+"/AddIncident",incident).subscribe(res =>{
      this.incident = res as Incident;
      console.log(this.incident);
      this.router.navigate(["/incidents/newincident"]);
    },
    err => {
      console.log(err);
    });
  }

  putElementInIncident(element: Element){
    return this.http.post(`${this.incidentsUrl}/${this.incident.id}/Devices`,element);
  }


}
