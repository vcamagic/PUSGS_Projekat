import { Call } from "../call/call";
import {} from "../element/element"
import { Multimedia } from "../multimedia";
import { Resolution } from "../resolution";
import {Element} from "../element/element"

export class Incident {
  id : number = 0;
  type: string = '';
  priority: number = 0;
  address : string = '';
  confirmed : boolean = false;
  status: string = 'Drafted';
  eta: string = '';
  ata: string = '';
  timeOfIncident: string ='';
  etr: string = '';
  calls: number = 0;
  voltage : number = 0;
  affectedConsumers :number = 0;
  sheduledTime : string = '';
  creator? : string = '';
  elements : Element[] = [];
  call : Call[] = [];
  resolutions : Resolution[] = [];
  multimedia : Multimedia[] = [];
  //crew : any = [];
  //version : number = 0;


  constructor(type: string,priority: number,address : string,confirmed : boolean,
    status: string,
    eta: string,
    ata: string,
    timeOfIncident: string,
    etr: string,
    calls: number,
    voltage : number,
    affectedConsumers :number,
    sheduledTime : string ){
      this.type = type;
      this.priority =priority;
      this.address =address;
      this.confirmed = confirmed;
      this.status = status;
      this.eta = eta;
      this.ata = ata;
      this.timeOfIncident = timeOfIncident;
      this.etr = etr;
      this.calls = calls;
      this.voltage =  voltage;
      this.affectedConsumers =  affectedConsumers;
      this.sheduledTime =  sheduledTime;
    }

}
