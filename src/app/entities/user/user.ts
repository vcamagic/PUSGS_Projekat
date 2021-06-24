
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

    constructor(username:string,email:string,password:string,userType:string, nameAndLastname:string,address: string,dateOfBirth: string,activeStatus: string,imageData: string){
        this.username = username;
        this.email=email;
        this.password=password;
        this.userType=userType;
        this.nameAndLastname = nameAndLastname;
        this.address=address;
        this.dateOfBirth = dateOfBirth;
        this.activeStatus = activeStatus;
        this.imageData = imageData;
    }
}
