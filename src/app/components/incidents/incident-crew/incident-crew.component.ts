import { Component, OnInit } from '@angular/core';
import { Crew } from 'src/app/entities/crew';
import { CrewService } from 'src/app/services/crew.service';
import { IncidentsService } from 'src/app/services/incidents.service';

@Component({
  selector: 'app-incident-crew',
  templateUrl: './incident-crew.component.html',
  styleUrls: ['./incident-crew.component.css']
})
export class IncidentCrewComponent implements OnInit {

  crews : Crew[] = [];

  page = 10;
  pageSize = 3;
  headElements = ['id', 'name', 'crewMembers'];
  showBtn : boolean = true;

  constructor(private crewService: CrewService,public incidentService: IncidentsService) { }

  ngOnInit() {
    this.getCrews();
  }

  getCrews(){
    this.crewService.loadlCrew().subscribe(res=>{
      this.crews = res as Crew[];
    },err=>{
      console.log(err);
    })
  }

  onChange(crew : Crew){
    this.incidentService.putCrewInIncident(crew).subscribe(res=>{
      this.showBtn = false;
    },err=>{
      console.log(err);
    });

  }

}
