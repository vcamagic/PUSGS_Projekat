import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HistorySafeDoc } from 'src/app/entities/HistorySafeDoc';
import { SafetyDocument } from 'src/app/entities/safetydoc/safetydocument';
import { SafetydocumentService } from 'src/app/services/safetydocument.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-history-sd',
  templateUrl: './history-sd.component.html',
  styleUrls: ['./history-sd.component.css']
})
export class HistorySdComponent implements OnInit {

  @Output() pressedButton = new EventEmitter<string>();
  list : SafetyDocument[] = [];
  constructor(public safetySevice: SafetydocumentService,private userSercie: UserService) { }

  ngOnInit(): void {
  }

  save(){
    this.pressedButton.emit('Equipment');
  }

  issue(){
    let history = new HistorySafeDoc("","Approved","");
    history.email = this.userSercie.currentUser.email;
    this.safetySevice.postDataHistory(history).subscribe(res=>{
      history = res as HistorySafeDoc;
      this.safetySevice.formData.history.push(history);
      this.safetySevice.formData.state = "Approved";
    },err=>{
      console.log(err);
    })
  }

  cancle(){
    let history = new HistorySafeDoc("","Canceled","");
    history.email = this.userSercie.currentUser.email;

    this.safetySevice.postDataHistory(history).subscribe(res => {
      history = res as HistorySafeDoc;
      this.safetySevice.formData.history.push(history);
      this.safetySevice.formData.state = "Canceled";
    });
  }

}
