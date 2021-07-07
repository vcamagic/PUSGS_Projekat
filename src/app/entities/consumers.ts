export class Consumer {
    id!: number;
    name:string;
    surname:string;
    street:string;
    city:string;
    postal!:string;
    priority!:number;
    phone:string;
    type:string


    constructor( 
    name:string,
    surname:string,
    street:string,
    city:string,
    phone:string,
    type:string
        )       
    {
        this.name = name;
        this.surname = surname;
        this.street = street;
        this.city = city;
        this.phone = phone;
        this.type = type;
        
    }
}