
import { AfterViewInit,OnInit, Component, ViewChild,ChangeDetectorRef  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SafetyDocument } from 'src/app/entities/safetydoc/safetydocument';
import { SafetydocumentService } from 'src/app/services/safetydocument.service';


@Component({
  selector: 'app-safetydocument',
  templateUrl: './safetydocument.component.html',
  styleUrls: ['./safetydocument.component.css']
})
export class SafetydocumentComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize = 0;
  safetyDocuments : SafetyDocument[] = [];
  displayedColumns = ['id', 'name','startdate','phonenumber','status','address'];
 
  
  constructor(public safetyDocumentsService: SafetydocumentService) {

  } 
  ngOnInit(): void {

    this.getAll();
  }

  getAll() {
    this.safetyDocumentsService.getAllSafetyDocuments()
      .subscribe(safetyDocuments => this.safetyDocuments = safetyDocuments);
  }

  all(){
    console.log(this.safetyDocuments);
  }

}
