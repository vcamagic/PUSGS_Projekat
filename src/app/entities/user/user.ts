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

    constructor(email:string,password:string,userType:UserType){
        this.email=email;
        this.password=password;
        this.userType=userType
    }
}
