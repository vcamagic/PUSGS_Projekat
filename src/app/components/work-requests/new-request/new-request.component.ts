import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { WorkRequest } from 'src/app/entities/work-request/work-request';
import { WorkRequestsService } from 'src/app/services/work-requests.service';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {

  pressedButton: string;

  constructor() { 
    this.pressedButton ='BasicInfo';
  }
    setButton(pressedButton:string){

      if(pressedButton == "BasicInfo"){
        this.pressedButton = "BasicInfo";
      }
      else if( pressedButton == "History"){
        this.pressedButton = "History";
      }
      else if( pressedButton == "Equipment"){
        this.pressedButton = "Equipment";
      }
      else if( pressedButton == "Multimedia"){
        this.pressedButton = "Multimedia";
      }

  }

  ngOnInit() {
   
  }
  

}
