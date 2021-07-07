export class Call {
    id? : number;
    reason : string;
    hazard : string;
    comment : string;
    name?  : string;
    lastName? : string;
    address? : string;
    priority?: number;

    constructor( reason : string,  hazard : string, comment :string ,name:string,lastname:string,address:string){

        this.reason = reason;
        this.hazard = hazard;
        this.comment = comment;
        this.name=name;
        this.lastName=lastname;
        this.address=address;
    }
}
