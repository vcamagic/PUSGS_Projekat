import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IncidentsService } from 'src/app/services/incidents.service';
import { WorkRequestsService } from 'src/app/services/work-requests.service';

@Component({
  selector: 'app-basic-info-wr',
  templateUrl: './basic-info-wr.component.html',
  styleUrls: ['./basic-info-wr.component.css']
})
export class BasicInfoWrComponent implements OnInit {

  basicInfoForm = new FormGroup({
    type: new FormControl(''),
    status: new FormControl('Draft'),
    workplan: new FormControl(''),
    
    street: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
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
  public component = "basic-info";
  public toNavbar = [this.basicInfoForm, this.component];
 

  constructor(private router: Router, private _workService: WorkRequestsService) { }

  ngOnInit(): void {
    this.userCreated = localStorage.username;
    this.currentDate =new Date().toISOString().split('T')[0];
    console.log(this.currentDate);

  }
  onSave() {
    
    this._workService.emitChange(this.toNavbar);
    this.router.navigate(['/workrequests/new/history']);
  }

}
