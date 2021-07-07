import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Incident } from 'src/app/entities/incident/incident';
import { IncidentsService } from 'src/app/services/incidents.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {
  @Input() incID : number = 0;
  @Output() basicInfoNotify = new EventEmitter<Incident>();
  isChecked= false;
  incident = new Incident("",0,"",false,"","","","","",0,0,0,"");
  incidentForm : FormGroup;

  constructor(public service: IncidentsService,private userService: UserService) {
    this.incidentForm = new FormGroup({
      "type" : new FormControl(),
      "priority" : new FormControl(),
      "address" : new FormControl(),
      "status" : new FormControl(),
      "eta" : new FormControl(),
      "ata" : new FormControl(),
      "timeOfIncident" : new FormControl(),
      "etr" : new FormControl(),
      "calls" : new FormControl(),
      "voltage" : new FormControl(),
      "affectedConsumers" :  new FormControl(),
      "sheduledTime" :  new FormControl(),
    })
   }

  ngOnInit(): void {
  }

  save(){
    this.incident = new Incident(this.incidentForm.controls["type"].value,this.incidentForm.controls["priority"].value,this.incidentForm.controls["address"].value,
    this.isChecked,this.incidentForm.controls["status"].value,this.incidentForm.controls["eta"].value,
    this.incidentForm.controls["ata"].value,this.incidentForm.controls["timeOfIncident"].value,this.incidentForm.controls["etr"].value,
    this.incidentForm.controls["calls"].value,this.incidentForm.controls["voltage"].value,this.incidentForm.controls["affectedConsumers"].value,this.incidentForm.controls["sheduledTime"].value);
    this.incident.creator = this.userService.currentUser.email;
    console.log(this.incident);
    this.service.AddIncident(this.incident);
  }

}
