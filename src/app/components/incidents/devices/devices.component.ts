import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Incident } from 'src/app/entities/incident/incident';
import { ElementsService } from 'src/app/services/elements.service';
import { IncidentsService } from 'src/app/services/incidents.service';
import { UserService } from 'src/app/services/user.service';
import { Element } from "../../../entities/element/element"

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  constructor(public elementsService: ElementsService,public incidentService: IncidentsService,private router: Router,private modalService : NgbModal,private cdref: ChangeDetectorRef,public us: UserService) { }
  IncEles : Element[] = [];

  headElements = ['id', 'type', 'name', 'address', 'coordinateX', 'coordinateY'];

  page = 10;
  pageSize = 3;
  @Output() pressedButton = new  EventEmitter<string>();

  ngOnInit(): void {
    this.getElements();

  }

  ngAfterContentChecked(){
    this.cdref.detectChanges();
  }

  onChange(element : Element){

    console.log(element);
      this.incidentService.putElementInIncident(element).subscribe(res=>{
          this.modalService.dismissAll('Save');
      },err=>{
        console.log(err);
      })

      this.incidentService.incident.elements.push(element);
  }

  find(element : Element):boolean{
      let retVal = false;
      for(var item of this.incidentService.incident.elements){
        if(item.id==element.id){
          retVal = true;
          break;
        }
      }
      return retVal;
  }

  add(){

  }

  open(content: any){
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result)=>{});
  }

  getElements(){
    this.elementsService.loadElements().subscribe(res=>{
        this.IncEles = res;
        console.log(res);
        console.log(this.IncEles);
    },err=>{
        console.log(err);
    })
  }

  next(){
    this.pressedButton.emit('Resolution');
  }

  cancle(){
    this.incidentService.deleteData(this.incidentService.incident.id).subscribe(res=>{
      this.incidentService.incident = new Incident("",0,"",false,"","","","","",0,0,0,"");
    })
    this.router.navigate(["incidents"]);
  }

  delete(id : number){
    if(confirm("Do you want to delete item?"))
    {
      this.incidentService.deleteDataElement(id).subscribe(res =>{
        this.incidentService.incident.elements = this.incidentService.incident.elements.filter(item => item.id !== id);
      });
    }
  }

}
