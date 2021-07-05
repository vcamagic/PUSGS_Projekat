export class Element {
    id : number;
    type : string;
    name : string;
    address : string;
    coordinateX : string;
    coordinateY : string;
    inSafetyDocument : boolean;
    constructor(   id : number, type : string, name : string, address : string, coordinateX : string, coordinateY : string, inSf :boolean){
        this.id = id;
        this.type = type;
        this.name = name;
        this.address = address;
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
        this.inSafetyDocument = inSf;
    }
}
