import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  @Output() pressedButton = new  EventEmitter<string>();

  constructor(public service: IncidentsService,private userService: UserService,private router: Router) {
    this.incidentForm = new FormGroup({
      "type" : new FormControl("",[Validators.required]),
      "priority" : new FormControl(""),
      "address" : new FormControl(),
      "status" : new FormControl("",[Validators.required]),
      "eta" : new FormControl("",[Validators.required]),
      "ata" : new FormControl("",[Validators.required]),
      "timeOfIncident" : new FormControl("",[Validators.required]),
      "etr" : new FormControl("",[Validators.required]),
      "calls" : new FormControl(""),
      "voltage" : new FormControl("",[Validators.required,Validators.pattern("^[0-9]*$")]),
      "affectedConsumers" :  new FormControl(""),
      "sheduledTime" :  new FormControl("",[Validators.required])
    })
   }

  ngOnInit(): void {
  }

  save(){
    this.incident = new Incident(this.incidentForm.controls["type"].value,0,"",
    this.isChecked,this.incidentForm.controls["status"].value,this.incidentForm.controls["eta"].value,
    this.incidentForm.controls["ata"].value,this.incidentForm.controls["timeOfIncident"].value,this.incidentForm.controls["etr"].value,
    0,this.incidentForm.controls["voltage"].value,0,this.incidentForm.controls["sheduledTime"].value);
    this.incident.creator = this.userService.currentUser.email;
    this.service.AddIncident(this.incident);
    this.next();
  }

  next(){
    this.pressedButton.emit('Devices');
  }

  cancle(){
      this.service.incident = new Incident("",0,"",false,"","","","","",0,0,0,"");
      this.router.navigate(["incidents"]);
  }

}
