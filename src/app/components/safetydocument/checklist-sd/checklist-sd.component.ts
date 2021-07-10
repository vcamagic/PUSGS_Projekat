import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SafetydocumentService } from 'src/app/services/safetydocument.service';

@Component({
  selector: 'app-checklist-sd',
  templateUrl: './checklist-sd.component.html',
  styleUrls: ['./checklist-sd.component.css']
})
export class ChecklistSdComponent implements OnInit {

  @Output() pressedButton = new EventEmitter<string>();
  constructor(public sdService: SafetydocumentService,private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    this.router.navigate(["safetydocuments"]);
  }

  change(){
    this.sdService.putData().subscribe(res => {

    });

  }

}
