import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Call } from 'src/app/entities/call/call';
import { IncidentsService } from 'src/app/services/incidents.service';


@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  constructor(private incidentsService: IncidentsService) { }

  ngOnInit(): void {
  }


  /*save(reason: string, hazard : string, comment : string, name : string, lastName : string, address : string, priority : string ){
    this.incidentsService.incdients.forEach( (incident) => {
        if(incident.address === address){
          incident.calls.push(new Call(this.incidentsService.incdients.length,reason,hazard,comment,name,lastName,address,+priority));
        }
    });
    this.incidentsService.router.navigate(['login']);
  }*/

  save(reason : string , comment : string, hazard: string , name: string, lastname: string, address: string, priority: string){

  }

}
