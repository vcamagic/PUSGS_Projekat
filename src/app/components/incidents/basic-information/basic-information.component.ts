import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Incident } from 'src/app/entities/incident/incident';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {

  @Input() incID : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  save(form: NgForm){

  }

}
