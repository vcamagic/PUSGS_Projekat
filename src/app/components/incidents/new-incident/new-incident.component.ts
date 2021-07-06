import { Component, OnInit } from '@angular/core';
import { Call } from 'src/app/entities/call/call';
import { Incident } from 'src/app/entities/incident/incident';
import { IncidentsService } from 'src/app/services/incidents.service';

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.css']
})
export class NewIncidentComponent implements OnInit {

  incNum : number = 0;
  pressedButton: string;
  callModel : Call[] = [];


  constructor(private incidentsService: IncidentsService) {
    this.pressedButton ='BasicInfo';
  }

  setButton(pressedButton:string){

      if(pressedButton == "BasicInfo"){
        this.pressedButton = "BasicInfo";
      }
      else if( pressedButton == "Devices"){
        this.pressedButton = "Devices";
      }
      else if( pressedButton == "Resolution"){
        this.pressedButton = "Resolution";
      }
      else if( pressedButton == "Calls"){
        this.pressedButton = "Calls";
      }
      else if( pressedButton == "Multimedia"){
        this.pressedButton = "Multimedia";
      }
      else if( pressedButton == "Crew"){
        this.pressedButton = "Crew";
      }
      else if( pressedButton == "Equipment"){
        this.pressedButton = "Equipment";
      }

  }

  ngOnInit(): void {
    this.incidentsService.getAllIncidents()
    .subscribe(response => {this.incNum = response.length;
    },err =>{
        console.log(err);
    });
  }

}
