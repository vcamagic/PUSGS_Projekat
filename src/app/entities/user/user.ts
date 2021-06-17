export enum UserType{
    CrewMember,
    Dispatcher,
    Worker,
    Admin,
    Default
}

export class User {
    email: string = "";
    password: string= "";
    userType: string = "";
    name : string = "";
    lastname: string = "";
    address: string = "";
    dateOfBirth:string = "";

    constructor(email:string,password:string,userType:string, name:string,lastname:string,address: string,dateOfBirth: string){
        this.email=email;
        this.password=password;
        this.userType=userType;
        this.name=name;
        this.lastname=lastname;
        this.address=address;
        this.dateOfBirth = dateOfBirth;
    }
}
