export class Call {
    id : number;
    reason : string;
    hazard : string;
    comment : string;
    name?  : string;
    lastName? : string;
    address? : string;
    priority?: number;

    constructor( id : number, reason : string,  hazard : string, comment : string, name  : string, lastName : string, address : string, priority: number){
        this.id = id;
        this.reason = reason;
        this.hazard = hazard;
        this.comment = comment;
        this.name = name;
        this.lastName = lastName;
        this.address = address;
        this.priority = priority;
    }
}
