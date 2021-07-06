import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Call } from 'src/app/entities/call/call';
import { CallsService } from 'src/app/services/calls.service';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements OnInit {

  @Output() calls = new EventEmitter<Call[]>();
  new:string;
  IncCalls : Call[] = [];
  page = 10;
  pageSize = 3;
  headElements = ['id', 'reason', 'hazard', 'comment'];



  constructor(private callsService: CallsService) {
    this.new = "no";
  }

  ngOnInit(): void {
    this.callsService.getAllIncidents().subscribe(res=>
      this.IncCalls = res);
  }

  OnNew():void {
    this.new = "yes";
  }

}
