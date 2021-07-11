import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Crew } from 'src/app/entities/crew';
import { Incident } from 'src/app/entities/incident/incident';
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
  @Output() pressedButton = new  EventEmitter<string>();

  constructor(private crewService: CrewService,public incidentService: IncidentsService,private router: Router) { }

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

  next(){
    this.pressedButton.emit('Multimedia');
  }

  cancle(){
    this.incidentService.deleteData(this.incidentService.incident.id).subscribe(res=>{
      this.incidentService.incident = new Incident("",0,"",false,"","","","","",0,0,0,"");
    })
    this.router.navigate(["incidents"]);
  }

}
