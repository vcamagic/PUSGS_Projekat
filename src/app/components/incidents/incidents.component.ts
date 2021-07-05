import { Component, OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren, ViewChild, ChangeDetectorRef, Renderer2, ElementRef, RendererFactory2, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {Incident} from '../../entities/incident/incident'
import { IncidentsService } from 'src/app/services/incidents.service';
import { DOCUMENT } from '@angular/common';
import { element } from 'protractor';




@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit{


  incidents : Incident[] = [];
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  headElements = ['id', 'startDate', 'phoneNo', 'address', 'status', 'type', 'priority', 'confirmed', 'eta', 'ata', 'etr', 'affectedConsumers', 'callsNum', 'voltage'];

  constructor(public incidentsService: IncidentsService) {

  }

  ngOnInit(): void {
    this.getIncidents();
  }


  getIncidents() {
    this.incidentsService.getAllIncidents()
      .subscribe(response => {this.incidents = response;
      },err =>{
          console.log(err);
      });
  }

  all(){
    console.log(this.incidents);
  }

  onSort(){
    // resetting other headers

  }
}
