export enum UserType{
    CrewMember,
    Dispatcher,
    Worker,
    Admin
}

export class User {
    id : number = 0;
    email: string = "";
    password: string = "";
    userType: UserType = UserType.Worker;
    name : string = "";
    lastname: string = "";
    address: string = "";
    dateOfBirth: string = "";
    teamName : string = "";
    loggedin : boolean = false;

    //did admin approve account
    approved : boolean = true;


    constructor(name? : string, lastname? : string){
        if(name && lastname){
            this.name = name;
            this.lastname = lastname;
        }
    }

 
}
