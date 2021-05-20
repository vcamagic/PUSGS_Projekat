export enum UserType{
    CrewMember,
    Dispatcher,
    Worker,
    Admin
}

export class User {
    email: string;
    password: string;
    userType: UserType;
    name : string;
    lastname: string;
    address: string;
    dateOfBirth: Date;

    constructor(email:string,password:string,userType:UserType, name:string,lastname:string,address: string,dateOfBirth: Date){
        this.email=email;
        this.password=password;
        this.userType=userType;
        this.name=name;
        this.lastname=lastname;
        this.address=address;
        this.dateOfBirth = dateOfBirth;
    }
}
