import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ElementsService } from 'src/app/services/elements.service';
import { Element } from '../../entities/element/element'

@Component({
  selector: 'app-devices-all',
  templateUrl: './devices-all.component.html',
  styleUrls: ['./devices-all.component.css']
})
export class DevicesAllComponent implements OnInit {

  constructor(public elementsService: ElementsService,private cdref: ChangeDetectorRef) { }
  IncEles : Element[] = [];

  headElements = ['id', 'type', 'name', 'address', 'coordinateX', 'coordinateY'];

  page = 10;
  pageSize = 3;

  ngOnInit() {
    this.getElements();
  }

  ngAfterContentChecked(){
    this.cdref.detectChanges();
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


}
