import { Component, OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren, ViewChild, ChangeDetectorRef, Renderer2, ElementRef, RendererFactory2, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {Incident} from '../../entities/incident/incident'
import { IncidentsService } from 'src/app/services/incidents.service';
import { MdbTablePaginationComponent, MdbTableDirective} from 'angular-bootstrap-md'
import { DOCUMENT } from '@angular/common';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit, AfterViewInit {
  @ViewChild("incidentsTable") IncTable : ElementRef = new ElementRef(document.getElementById("incidentsTable"));
  /*@ViewChild(MdbTablePaginationComponent, { static:true }) mdbTablePagination = new MdbTablePaginationComponent(this.cdRef);*/
  @ViewChild(MdbTablePaginationComponent, {static:true}) mdbTablePagination = new MdbTablePaginationComponent(this.cdRef);
  /*@ViewChild(MdbTableDirective, { static:true }) mdbTable = new MdbTableDirective(this.IncTable,this.renderer);*/
  @ViewChild(MdbTableDirective,{static:true}) mdbTable = new MdbTableDirective(this.IncTable,this.renderer);
 

  incidents : Array<Incident> = new Array<Incident>();
  pervious: Array<Incident> = new Array<Incident>();
  headElements = ['id', 'startDate', 'phoneNo', 'address', 'status', 'type', 'priority', 'confirmed', 'eta', 'ata', 'etr', 'affectedCustomers', 'callsNum', 'voltage'];

  constructor(private incidentsService: IncidentsService, private cdRef: ChangeDetectorRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.getIncidents();

    this.mdbTable.setDataSource(this.incidents);
    this.incidents = this.mdbTable.getDataSource();
    this.pervious = this.mdbTable.getDataSource();
  }

  ngAfterViewInit(){
     this.mdbTablePagination?.setMaxVisibleItemsNumberTo(5);

     this.mdbTablePagination?.calculateFirstItemIndex();
     this.mdbTablePagination?.calculateLastItemIndex();
     this.cdRef.detectChanges();
  }

  getIncidents(){
    this.incidents = this.incidentsService.getIncidents();
  }

  onSort(){
    // resetting other headers
    
  }
}
