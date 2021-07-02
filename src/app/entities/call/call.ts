export class Call {
    id? : number;
    reason : string;
    hazard : string;
    comment : string;
    name?  : string;
    lastName? : string;
    address? : string;
    priority?: number;

    constructor( reason : string,  hazard : string, comment :string ,address : string){

        this.reason = reason;
        this.hazard = hazard;
        this.comment = comment;
        this.address = address;
    }
}
