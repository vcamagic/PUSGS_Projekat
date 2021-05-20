import { Injectable } from '@angular/core';
import { Call } from '../entities/call/call';

@Injectable({
  providedIn: 'root'
})
export class CallsService {

  calls : Array<Call> = new Array<Call>();
  constructor() {
    this.getCalls();
  }


  getCalls(){
    this.calls.push(new Call(1,"Power Outage", "No struja no fun.","Brrr","Brka", "Brkic", "br br 21",21));
    this.calls.push(new Call(2,"Power Outage", "No struja no fun.","Brrr","Brka", "Brkic", "br br 21",21));
    this.calls.push(new Call(2,"Power Outage", "No struja no fun.","Brrr","Brka", "Brkic", "br br 21",21));
  }
}
