import { Call } from "../call/call";
import {} from "../element/element"

export class Incident {
    id : string;
    startDate : Date;
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
    affectedCustomers : number = 0;
    scheduleTime : string = '';
    creator : string = '';
    elements? : Element[];
    calls : Call[]= [];
    resolution : any[] =[];
    multimedia : any[] = [];
    crew : any[] = [];

    constructor(id : string, startDate: Date,phoneNo : string,address:string, status: string){
        this.id=id;
        this.startDate = startDate;
        this.phoneNo = phoneNo;
        this.address = address
        this.status = status;
    }
}
