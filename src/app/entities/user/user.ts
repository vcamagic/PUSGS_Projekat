
export class User {
    username : string = "";
    email: string = "";
    password: string= "";
    userType: string = "";
    nameAndLastname = ""
    address: string = "";
    dateOfBirth:string = "";
    activeStatus: string = "";
    imageData: string = "";
    type: string = "";

    constructor(username:string,email:string,password:string,userType:string, nameAndLastname:string,address: string,dateOfBirth: string,activeStatus: string,imageData: string,type:string){
        this.username = username;
        this.email=email;
        this.password=password;
        this.userType=userType;
        this.nameAndLastname = nameAndLastname;
        this.address=address;
        this.dateOfBirth = dateOfBirth;
        this.activeStatus = activeStatus;
        this.imageData = imageData;
        this.type = type;
    }
}
export class RegisteredUser
{
        UserName! : string;
        FirstName! : string;
        LastName!: string;
        Email! : string;
        Password! : string;
        BirthDate! : string;
        Address! : string;
        State!:any;
        Picture!:any;
        activeStatus!: string;



}
