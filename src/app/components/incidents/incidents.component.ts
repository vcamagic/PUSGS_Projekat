import { Component, OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren, ViewChild, ChangeDetectorRef, Renderer2, ElementRef, RendererFactory2, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {Incident} from '../../entities/incident/incident'
import { IncidentsService } from 'src/app/services/incidents.service';
import { DOCUMENT } from '@angular/common';
import { element } from 'protractor';
import { UserService } from 'src/app/services/user.service';




@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit{

  filter : string  = "All";
  incidents : Incident[] = [];
  searchList : Incident[] = [];
  searchType : string = '';
  searchStatus : string = '';
  page = 10;
  pageSize = 5;

  headElements = ['id', 'startDate', 'phoneNo', 'address', 'status', 'type', 'priority', 'confirmed', 'eta', 'ata', 'etr', 'affectedCustomers', 'callsNum', 'voltage'];


  constructor(public incidentsService: IncidentsService,private cdref: ChangeDetectorRef,public us: UserService,private router: Router) {

  }

  ngOnInit(): void {
    this.getIncidents();
  }

  ngAfterContentChecked(){
      this.cdref.detectChanges();
  }


  getIncidents() {
    this.incidentsService.getAllIncidents()
      .subscribe(response => {this.incidents = response as Incident[];
        this.searchList = response as Incident[];
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

  braa(){
    console.log(this.us.currentUser.email);
  }

  filterChange(){
    if(this.filter === "Mine"){
      this.incidents = this.searchList.filter(item => item.creator === this.us.currentUser.email);
    }
    else{
      this.incidents = this.searchList;
    }
  }

  search(){
    if(this.filter ==='All'){
      this.incidents = this.searchList.filter(item => item.status.match(this.searchStatus) &&
      item.type.match(this.searchType));
    }
    else if(this.filter ==='Mine'){
      this.incidents = this.searchList.filter(item => item.status.match(this.searchStatus) &&
      item.type.match(this.searchType) && item.creator === this.us.currentUser.email);
    }
  }

  reset(){
    if(this.filter ==='All')
      this.incidents = this.searchList;
    else if(this.filter ==='Mine')
      this.incidents = this.searchList.filter(item => item.creator === this.us.currentUser.email);
    this.searchType = '';
    this.searchStatus = '';
  }

  details(item : Incident){
    this.router.navigateByUrl(`incident/${item.id}/new`);
  }
  delete(item : Incident){
    if(confirm("Do you want to delete item?")){
      this.incidentsService.deleteData(item.id).subscribe(res => {
        this.getIncidents();
      },err=>{
        console.log(err);
      });
    }
  }
}
