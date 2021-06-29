import { Call } from "../call/call";
import {} from "../element/element"

export class Workplan {
    id : string;
    startDate : string;
    phoneNo : string;
    address : string;
    status : string;



    constructor(id : string, startDate: string,phoneNo : string,address:string, status: string){
        this.id=id;
        this.startDate = startDate;
        this.phoneNo = phoneNo;
        this.address = address
        this.status = status;

    }
}