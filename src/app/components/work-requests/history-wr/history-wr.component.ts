import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup,FormControl, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkRequestsService } from 'src/app/services/work-requests.service';
import { HistoryState } from 'src/app/entities/spHistoryState';
import { DocumentService } from 'src/app/services/document.service';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-history-wr',
  templateUrl: './history-wr.component.html',
  styleUrls: ['./history-wr.component.css']
})
export class HistoryWrComponent implements OnInit {

  public allElements : HistoryState[] = [];
  historyStates: HistoryState[] = [];
  public page = 10;
  public pageSize = 3;

  
  displayedColumns = ['Id', 'Date','Changed by','Status'];
  constructor(private documentService : DocumentService, private router: Router, 
             ) { }

  ngOnInit(): void {
    this.getAll();
    
    
  }

  
  getAll() {
    this.documentService.loadHistory()
    .subscribe((data: string | any[]) => {
        for(let i=0; i<data.length; i++)
        {
       
            this.allElements.push(data[i]);
          
       
          
          
        }
      }
      );
     
    }




}