import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IncidentsService } from 'src/app/services/incidents.service';
import { SafetydocumentService } from 'src/app/services/safetydocument.service';

@Component({
  selector: 'app-basic-info-sd',
  templateUrl: './basic-info-sd.component.html',
  styleUrls: ['./basic-info-sd.component.css']
})
export class BasicInfoSdComponent implements OnInit {

    basicInfoForm = new FormGroup({
      type: new FormControl(''),
      workplan: new FormControl(''),
      status: new FormControl('Draft'),  
      createdByUser: new FormControl(localStorage.username),
      crew: new FormControl(''),
      endDate: new FormControl(''),
      details: new FormControl(''),
      notes: new FormControl(''),
      phoneNum: new FormControl(''),
      datetimecreate: new FormControl(''), 

    
  });
  public currentDate : any;
  public userCreated = "";
  public component = "basic-info";
  public toNavbar = [this.basicInfoForm, this.component];
 

  constructor(private router: Router, private _workService: SafetydocumentService) { }

  ngOnInit(): void {
    this.userCreated = localStorage.username;
    this.currentDate =new Date().toISOString().split('T')[0];
    console.log(this.currentDate);

  }
  onSave() {
    
    this._workService.emitChange(this.toNavbar);
    this.router.navigate(['/safetydocuments/new/history']);
  }
}
