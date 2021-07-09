
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
  page = 10;
  pageSize = 3;
  username! : string;
  id!:string;
  collectionSize = 0;
  workRequests : WorkRequest[] = [];
  mineWorkRequests : WorkRequest[] = [];
  displayedColumns = ['startDate', 'phoneNum','status','street','endDate','createdByUser'];
 
  
  constructor(public workRequestService: WorkRequestsService,private router: Router) {

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
  approve(IdWr:string)
  {
    this.workRequestService.Approve(IdWr);
    this.router.navigate(['/workrequests/new']);
  }
  cancel(IdWr:string)
  {
    this.workRequestService.Cancel(IdWr);
    this.router.navigate(['/workrequests/new']);
  }
  allWR()
  {
    this.getAll();
  }
  mineWR()
  {
    this.mineWorkRequests.length = 0;
    this.username = localStorage.getItem('username')!;
    this.workRequests.forEach(element=>{
      if(element.createdByUser == this.username )
      {
        this.mineWorkRequests.push(element);
      }
    })
    this.workRequests = this.mineWorkRequests;
    
    this.router.navigate(['/workrequests']);
  }
}
