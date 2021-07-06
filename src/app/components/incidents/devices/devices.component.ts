import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ElementsService } from 'src/app/services/elements.service';
import { IncidentsService } from 'src/app/services/incidents.service';
import { Element } from "../../../entities/element/element"

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  constructor(public elementsService: ElementsService,public incidentService: IncidentsService,private modalService : NgbModal) { }
  IncEles : Element[] = [];

  headElements = ['id', 'type', 'name', 'address', 'coordinateX', 'coordinateY'];

  page = 10;
  pageSize = 3;

  ngOnInit(): void {
  }

  onChange(element : Element){

  }

  find(element : Element):boolean{
      return true;
  }

  add(){

  }

  open(content: any){
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result)=>{});
  }

}
