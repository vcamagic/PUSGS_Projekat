
export class User {
    username : string = "";
    email: string = "";
    password: string= "";
    userType: string = "";
    name: string = "";
    lastname: string = "";
    address: string = "";
    dateOfBirth:string = "";
    activeStatus: string = "";
    imageData: string = "";
    type: string = "";
    teamName: string = "";

    constructor(username:string,email:string,password:string,userType:string, name:string,lastname:string,address: string,dateOfBirth: string,activeStatus: string,imageData: string,type:string){
        this.username = username;
        this.email=email;
        this.password=password;
        this.userType=userType;
        this.name = name;
        this.lastname = lastname;
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
