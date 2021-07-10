import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Crew } from 'src/app/entities/crew';
import { SafetyDocument } from 'src/app/entities/safetydoc/safetydocument';
import { Workplan } from 'src/app/entities/workplan/workplan';
import { CrewService } from 'src/app/services/crew.service';
import { IncidentsService } from 'src/app/services/incidents.service';
import { SafetydocumentService } from 'src/app/services/safetydocument.service';
import { WorkplansService } from 'src/app/services/workplans.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-basic-info-sd',
  templateUrl: './basic-info-sd.component.html',
  styleUrls: ['./basic-info-sd.component.css']
})
export class BasicInfoSdComponent implements OnInit {


  list : SafetyDocument[] = [];
  workplans: Workplan[]=[]
  searchList : SafetyDocument[] = [];
  crews : Crew[] = [];
  date : Date = new Date();
  @Output() pressedButton = new EventEmitter<string>();

  safteyDocument : SafetyDocument = new SafetyDocument();

    basicInfoForm = new FormGroup({
      'type': new FormControl('',Validators.required),
      'plan': new FormControl('',Validators.required),
      'status': new FormControl('Draft',Validators.required),
      'createdByUser' : new FormControl(localStorage.username),
      'crew' : new FormControl('',Validators.required),
      'details' : new FormControl('',Validators.required),
      'notes' : new FormControl('',Validators.required),
      'phoneNum' : new FormControl('',Validators.required),
      'datetimecreate': new FormControl('',Validators.required),


  });
  public currentDate : any;
  public userCreated = "";
  public component = "basic-info";
  public toNavbar = [this.basicInfoForm, this.component];


  constructor(private router: Router, public _workService: SafetydocumentService,private wpService: WorkplansService
    ,private cs: CrewService,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.userCreated = localStorage.username;
    console.log(this.currentDate);
    this.getWorkplans();
    this.getCrews();
    this.getDate();
  }

  onSave() {
    console.log(this.basicInfoForm.controls["type"].value);
    this.safteyDocument.type =  this.basicInfoForm.controls["type"].value;
    this.safteyDocument.switchingPlan =  parseInt(this.basicInfoForm.controls["plan"].value);
   this.safteyDocument.creator =  this.basicInfoForm.controls["createdByUser"].value;
    this.safteyDocument.crew =  this.basicInfoForm.controls["crew"].value;
    this.safteyDocument.details =  this.basicInfoForm.controls["details"].value;
    this.safteyDocument.notes =  this.basicInfoForm.controls["notes"].value;
    this.safteyDocument.phone =  this.basicInfoForm.controls["phoneNum"].value;
    this.safteyDocument.date =  this.currentDate;
    console.log(this.safteyDocument);
    this._workService.postData(this.safteyDocument).subscribe(res=>{
          this._workService.formData= res as SafetyDocument;
    },err=>{
      console.log(err);
    });
    this.pressedButton.emit('History');

  }

  getWorkplans(){
    this.wpService.getAllWorkPlans().subscribe(res=>{
      this.workplans = res as Workplan[];
    },err=>{
      console.log(err);
    })
  }

  getCrews(){
    this.cs.loadlCrew().subscribe(res=>{
      this.crews = res as Crew[];
    },err=>{
      console.log(err);
    })
  }

  getDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.currentDate = mm.toString() + '/' + dd.toString() + '/' + yyyy.toString();
  }
}
