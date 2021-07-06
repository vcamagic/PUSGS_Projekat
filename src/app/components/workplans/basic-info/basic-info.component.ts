
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Workplan } from 'src/app/entities/workplan/workplan';
import { IncidentsService } from 'src/app/services/incidents.service';
import { WorkRequestsService } from 'src/app/services/work-requests.service';
import { WorkplansService } from 'src/app/services/workplans.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  workPlans! : Workplan;
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
    purpouse: new FormControl(''),
    notes: new FormControl(''),

    phoneNum: new FormControl(''),
    company: new FormControl(''),
    
    dateCreated: new FormControl(''),

    
  });
  public currentDate : any;
  public userCreated = "";
  public component = "basic-info";
  public toNavbar = [this.basicInfoForm, this.component];
 

  constructor(private router: Router, private _workService: WorkplansService) { }

  ngOnInit(): void {
    this.userCreated = localStorage.username;
    this.currentDate =new Date().toISOString().split('T')[0];
    console.log(this.currentDate);

  }
  onSave() {
    
    this.workPlans = this.basicInfoForm.value;
    //this._workService.emitChange(this.toNavbar);
    this._workService.saveWorkPlan(this.workPlans)
    this.router.navigate(['/workplans/newworkplan']);
  }
}
