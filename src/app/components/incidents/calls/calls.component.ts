import { Component, OnInit, Output ,EventEmitter, ChangeDetectorRef} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Call } from 'src/app/entities/call/call';
import { Street } from 'src/app/entities/street';
import { CallsService } from 'src/app/services/calls.service';
import { IncidentsService } from 'src/app/services/incidents.service';
import { SettingsService } from 'src/app/services/settings.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements OnInit {

  @Output() calls = new EventEmitter<Call[]>();
  new:string;
  IncCalls : Call[] = [];
  page = 10;
  pageSize = 3;
  headElements = ['id', 'reason', 'hazard', 'comment','address'];
  call : Call = new Call ("","","","","","");
  currentIncCalls : Call[] = [];
  @Output() pressedButton = new  EventEmitter<string>();
  streets : Street[] = [];


  reportForm : FormGroup;

  constructor(public callsService: CallsService, private modalService: NgbModal,public incidentService: IncidentsService,private cdref: ChangeDetectorRef,
    private userService: UserService,private settingsService: SettingsService) {
    this.new = "no";
    this.reportForm = new FormGroup({
      'reason': new FormControl(),
      'comment': new FormControl(),
      'hazard': new FormControl(),
      'address': new FormControl()
    });
  }

  ngOnInit(): void {
    this.getStreets();
  }

  ngAfterContentChecked(){
    this.cdref.detectChanges();
  }

  getStreets(){
    this.settingsService.loadStreets().subscribe(res=>{
        this.streets=res as Street[];
    },err=>{
      console.log();
    })
  }

  find(call : Call):boolean{
    let retVal = false;
    for(var item of this.incidentService.incident.call){
      if(item.id==call.id){
        retVal = true;
        break;
      }
    }
    return retVal;
  }

  onChange(call: Call):void {
      console.log("dupe call"+call.address);
      this.incidentService.putCallInIncident(call).subscribe(res=>{
        this.incidentService.incident.call.push(call);
      },err=>{
        console.log(err);
      })
  }

  open(content : any){

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {});
  }

  report(){
    this.call = new Call(this.reportForm.controls["reason"].value,this.reportForm.controls["hazard"].value,this.reportForm.controls["comment"].value,
      this.userService.currentUser.firstName,this.userService.currentUser.lastName,this.userService.currentUser.address);
    this.callsService.postData(this.call);
    this.incidentService.putCallInIncident(this.call).subscribe(res=>{

    },err=>{
      console.log(err);
    });
  }

  next(){
    this.pressedButton.emit('Crew');
  }
}
