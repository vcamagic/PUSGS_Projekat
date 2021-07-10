
import { AfterViewInit,OnInit, Component, ViewChild,ChangeDetectorRef  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SafetyDocument } from 'src/app/entities/safetydoc/safetydocument';
import { SafetydocumentService } from 'src/app/services/safetydocument.service';
import { UserService } from 'src/app/services/user.service';


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
  displayedColumns = ['id', 'type','switchingPlan','status','creator','crew','details','notes','phone','date'];
  searchStatus : string = "";
  searchType : string = "";
  searchList : SafetyDocument[]= [];


  constructor(public safetyDocumentsService: SafetydocumentService,public userService: UserService,private router: Router) {

  }
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.safetyDocumentsService.getAllSafetyDocuments()
      .subscribe(res=>{
        this.safetyDocuments = res as SafetyDocument[];
        this.searchList = res as SafetyDocument[];
      },err=>{
        console.log(err);
      });
  }

  all(){
    console.log(this.safetyDocuments);
  }

  search(){

  }

  reset(){

  }

  delete(item : SafetyDocument){
    if(confirm('Are you sure to delete item')){
      this.safetyDocumentsService.deleteData(item.id).subscribe(res =>{
          this.getAll();

      });
    }
  }

  details(item: SafetyDocument){

  }

}
