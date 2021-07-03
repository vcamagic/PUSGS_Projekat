
import { AfterViewInit,OnInit, Component, ViewChild,ChangeDetectorRef  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { WorkRequestsDataSource, WorkRequestsItem } from 'src/app/components/work-requests/work-requests-datasaource';
import { Router } from '@angular/router';
import {WorkRequest } from 'src/app/entities/work-request/work-request';
import {WorkRequestsService} from 'src/app/services/work-requests.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-work-requests',
  templateUrl: './work-requests.component.html',
  styleUrls: ['./work-requests.component.css']
})
export class WorkRequestsComponent implements OnInit {
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  workRequests : WorkRequest[] = [];
  displayedColumns = ['id', 'name','startdate','phonenumber','status','address'];
 
  
  constructor(public workRequestService: WorkRequestsService) {

  } 
  ngOnInit(): void {

    this.getAll();
  }

  getAll() {
    this.workRequestService.getAllWorkRequests()
      .subscribe(workRequests => this.workRequests = workRequests);
  }

  all(){
    console.log(this.workRequests);
  }
}
