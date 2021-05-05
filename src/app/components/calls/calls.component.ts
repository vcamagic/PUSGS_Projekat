import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements OnInit {

 new:string;
 
  constructor() { 
    this.new = "no";
  }

  ngOnInit(): void {
  }

  OnNew():void {
    this.new = "yes";
  }

}
