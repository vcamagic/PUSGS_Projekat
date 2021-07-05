
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkRequestsService } from 'src/app/services/work-requests.service';
import { SwpInteractionService } from 'src/app/services/swp-interactions.service';
import { HistoryState } from 'src/app/entities/spHistoryState';
import { DocumentService } from 'src/app/services/document.service';
@Component({
  selector: 'app-history-wr',
  templateUrl: './history-wr.component.html',
  styleUrls: ['./history-wr.component.css']
})
export class HistoryWrComponent implements OnInit {

  basicInfo!: FormGroup
  form!: FormGroup
  historyStates: HistoryState[] = [];

  public page = 10;
  public pageSize = 3;
 

  constructor(private documentService: DocumentService, private rootFormGroup: FormGroupDirective, private router:Router, private swpService: SwpInteractionService) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get('historyState') as FormGroup
    this.basicInfo = this.rootFormGroup.control.get('basicInfo') as FormGroup
    
    if(this.basicInfo.controls.id.value != null){
    this.documentService.getHistoryStates(this.basicInfo.controls.id.value).subscribe(
      data => {
        this.historyStates = data as HistoryState[];
      }
    )
    }
  }

  

  save(){
    if(this.validate()){
      console.log("tu sam")
      if(this.basicInfo.controls.id.value != null){
      if(this.form.controls.newStatus.value != null){
        console.log("Speman novo stanje")
        let newState = new HistoryState(localStorage.getItem('username') || "", this.basicInfo.controls.id.value, this.form.controls.newStatus.value);
        this.documentService.saveHistoryState(newState);
      }
    }else{
      console.log("Dokument jos ne postoji");
    }

      this.router.navigate(['/switching-plans/new/multimedia']);
      this.swpService.sendMessage(3);
    }
  }

  validate(): boolean{
    return true;
  }

  back(){
    this.router.navigate(['/switching-plans/new/basic-info']);
    this.swpService.sendMessage(1);
  }

}
