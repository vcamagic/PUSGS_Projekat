import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Incident } from 'src/app/entities/incident/incident';
import { WorkRequest } from 'src/app/entities/work-request/work-request';
import {IncidentsService } from 'src/app/services/incidents.service'
import { WorkRequestsService } from 'src/app/services/work-requests.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic-info-wr',
  templateUrl: './basic-info-wr.component.html',
  styleUrls: ['./basic-info-wr.component.css']
})
export class BasicInfoWrComponent implements OnInit {
  workRequest! : WorkRequest;
  incidentStreet : any;
  allIncidents: Incident[] = [];
  basicInfoForm = new FormGroup({
    type: new FormControl(''),
    status: new FormControl('Draft'),
  incident: new FormControl(''),
    
   
    startDate: new FormControl('',Validators.required),
    endDate: new FormControl('',Validators.required),
    createdByUser: new FormControl(localStorage.username),
    purpose: new FormControl(''),
    phoneNum: new FormControl(''),
    company: new FormControl(''),
    details: new FormControl(''),
    notes: new FormControl(''),
    dateCreated: new FormControl(''),

    
  });
  public currentDate : any;
  public userCreated = "";
  
 

  constructor(private router: Router, private _workService: WorkRequestsService, public incidentsService : IncidentsService,private modalService : NgbModal,private cdref: ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.userCreated = localStorage.username;
    this.currentDate =new Date().toISOString().split('T')[0];
    this.getIncidents();
    console.log(this.currentDate);

  }
  onSave() {
    this.workRequest = this.basicInfoForm.value;
    this.workRequest.street = this.incidentStreet;
    this.workRequest.incident = this.incidentStreet;
    console.log(this.workRequest.street);
    //this._workService.emitChange(this.toNavbar);
    this._workService.saveWorkRequest(this.workRequest)
    this.router.navigate(['/workrequests']);
  }
  getIncidents() {
    this.incidentsService.getAllIncidents()
      .subscribe(response => {this.allIncidents = response;
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

  find(element : Incident):boolean{
      let retVal = false;
      for(var item of this.allIncidents){
        if(item.id==element.id){
          retVal = true;
          break;
        }
      }
      return retVal;
  }
  

  open(content: any){
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result)=>{});
  }
}
