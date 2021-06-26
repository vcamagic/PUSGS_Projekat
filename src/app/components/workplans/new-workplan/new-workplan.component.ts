import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-workplan',
  templateUrl: './new-workplan.component.html',
  styleUrls: ['./new-workplan.component.css']
})
export class NewWorkplanComponent implements OnInit {

  pressedButton: string;

  constructor() { 
    this.pressedButton ='BasicInfo';
  }

  setButton(pressedButton:string){

      if(pressedButton == "BasicInfo"){
        this.pressedButton = "BasicInfo";
      }
      else if( pressedButton == "HistoryOfDataChanges"){
        this.pressedButton = "HistoryOfDataChanges";
      }
      else if( pressedButton == "MultimediaAtt"){
        this.pressedButton = "MultimediaAtt";
      }
      else if( pressedButton == "Equi"){
        this.pressedButton = "Equi";
      }
      else if( pressedButton == "SwitchInstr"){
        this.pressedButton = "SwitchInstr";
      }     
      
  }

  ngOnInit(): void {
  }

}
