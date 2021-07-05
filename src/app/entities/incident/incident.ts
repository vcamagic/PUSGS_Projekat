import { Call } from "../call/call";
import {} from "../element/element"

export class Incident {
    id : string;
    startDate : string;
    phoneNo : string;
    address : string;
    status : string;
    type : string = '';
    priority: string = '';
    confirmed : boolean = false;
    eta: string = '';
    ata: string = '';
    timeOfIncident: string = '';
    etr: string = '';
    callsNum: number= 0;
    voltage: number = 0;
    affectedConsumers : number = 0;
    scheduleTime : string = '';
    creator : string = '';
    elements? : Element[];
    calls : Call[]= [];
    resolution : any[] =[];
    multimedia : any[] = [];
    crew : any[] = [];


    constructor(id : string, startDate: string,phoneNo : string,address:string, status: string, type: string, priority: string, confirmed: boolean, eta: string, ata: string, etr:string, affectedCustomers:number, callsNum:number, voltage:number){
        this.id=id;
        this.startDate = startDate;
        this.phoneNo = phoneNo;
        this.address = address
        this.status = status;
        this.type = type;
        this.priority = priority;
        this.confirmed = confirmed;
        this.eta = eta;
        this.ata = ata;
        this.etr = etr;
        this.affectedConsumers = affectedCustomers;
        this.callsNum = callsNum;
        this.voltage = voltage;
    }
}
