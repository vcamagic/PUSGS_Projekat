import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.css']
})
export class NewIncidentComponent implements OnInit {

  pressedButton: string;

  constructor() { 
    this.pressedButton ='BasicInfo';
  }

  setButton(pressedButton:string){
      if(pressedButton == "BasicInfo"){
        this.pressedButton = "BasicInfo";
      }
      else if( pressedButton == "Devices"){
        this.pressedButton = "Devices";
      }
      else if( pressedButton == "Resolution"){
        this.pressedButton = "Resolution";
      }
      else if( pressedButton == "Calls"){
        this.pressedButton = "Calls";
      }
      else if( pressedButton == "Multimedia"){
        this.pressedButton = "Multimedia";
      }
      else if( pressedButton == "Crew"){
        this.pressedButton = "Crew";
      }
      else if( pressedButton == "Equipment"){
        this.pressedButton = "Equipment";
      }
  }

  ngOnInit(): void {
  }

}
