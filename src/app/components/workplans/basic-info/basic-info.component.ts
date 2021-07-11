
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Workplan } from 'src/app/entities/workplan/workplan';
import { IncidentsService } from 'src/app/services/incidents.service';
import { WorkRequestsService } from 'src/app/services/work-requests.service';
import { WorkplansService } from 'src/app/services/workplans.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Incident } from 'src/app/entities/incident/incident';
import { Crew } from 'src/app/entities/crew';
import { CrewService } from 'src/app/services/crew.service';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  workPlans! : Workplan;
  incidentStreet : any;
  crewName : any;
  allIncidents: Incident[] = [];
  allCrews: Crew[] = [];
  basicInfoForm = new FormGroup({
    type: new FormControl(''),
    status: new FormControl('Draft'),
    workplan: new FormControl(''),
    incident: new FormControl(''),
    street: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),

    createdByUser: new FormControl(localStorage.username),
    crew: new FormControl(''),
    purpose: new FormControl(''),
    notes: new FormControl(''),

    phoneNum: new FormControl(''),
    company: new FormControl(''),
    
    dateCreated: new FormControl(''),

    
  });
  public currentDate : any;
  public userCreated = "";
  public component = "basic-info";
  public toNavbar = [this.basicInfoForm, this.component];
 

  constructor(private router: Router, private _workService: WorkplansService, private modalService : NgbModal,public incidentsService : IncidentsService,public crewService : CrewService,) { }

  ngOnInit(): void {
    this.userCreated = localStorage.username;
    this.currentDate =new Date().toISOString().split('T')[0];
    this.getCrews();
    this.getIncidents();

    console.log(this.currentDate);

  }
  onSave() {
    
    this.workPlans = this.basicInfoForm.value;
    //this._workService.emitChange(this.toNavbar);
    this.workPlans.incident = this.incidentStreet;
    this.workPlans.crew = this.crewName;
    this._workService.saveWorkPlan(this.workPlans)
    this.router.navigate(['/workplans/newworkplan']);
  }

  getIncidents() {
    this.incidentsService.getAllIncidents()
      .subscribe(response => {this.allIncidents = response;
      },err =>{
          console.log(err);
      });
  }

  getCrews() {
    this.crewService.getAllCrews()
      .subscribe(response => {this.allCrews = response;
      },err =>{
          console.log(err);
      });
  }

  onChange(element : Incident){
   
    console.log(element);
    
    this.incidentStreet = element.address;
    console.log("ovo je incident "+ this.incidentStreet);
    this.modalService.dismissAll();
  }

  onChangeCREW(element : Crew){
   
    console.log(element);
    
    this.crewName = element.name;
    console.log("ovo je crew "+ this.crewName);
    this.modalService.dismissAll();
  }

  open(content: any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result)=>{});
}

openCREW(content2: any){
  this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-title-2'}).result.then((result)=>{});
}

}
