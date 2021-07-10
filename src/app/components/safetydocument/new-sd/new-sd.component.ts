import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-sd',
  templateUrl: './new-sd.component.html',
  styleUrls: ['./new-sd.component.css']
})
export class NewSdComponent implements OnInit {

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
      else if( pressedButton == "CheckList"){
        this.pressedButton = "CheckList";
      }

  }

  ngOnInit() {

  }


}
