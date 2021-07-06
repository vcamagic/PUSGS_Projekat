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
  page = 10;
  pageSize = 3;

  headElements = ['id', 'startDate', 'phoneNo', 'address', 'status', 'type', 'priority', 'confirmed', 'eta', 'ata', 'etr', 'affectedCustomers', 'callsNum', 'voltage'];

  constructor(public incidentsService: IncidentsService,private cdref: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.getIncidents();
  }

  ngAfterContentChecked(){
      this.cdref.detectChanges();
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
