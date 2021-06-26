import { Component, OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren, ViewChild, ChangeDetectorRef, Renderer2, ElementRef, RendererFactory2, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkplansService } from 'src/app/services/workplans.service';
import { DOCUMENT } from '@angular/common';
import { element } from 'protractor';
import { Workplan } from 'src/app/entities/workplan/workplan';




@Component({
  selector: 'app-workplans',
  templateUrl: './workplans.component.html',
  styleUrls: ['./workplans.component.css']
})
export class WorkplanComponent implements OnInit{


  workplans : Workplan[] = [];
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  headElements = ['id', 'startDate', 'phoneNo', 'address', 'status'];

  constructor(public workplansService: WorkplansService) {

  }

  ngOnInit(): void {
    this.getWorkplans();
  }


  getWorkplans() {
    this.workplansService.getAllWorkplans()
      .subscribe(workplans => this.workplans = workplans);
  }

  all(){
    console.log(this.workplans);
  }

  onSort(){
    // resetting other headers

  }
}
