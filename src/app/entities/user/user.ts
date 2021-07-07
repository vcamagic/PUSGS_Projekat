
/*export class User {
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
}*/
export class User {
    username! : string;
    firstName! : string;
    lastName!: string;
    email! : string;
    password! : string;
    birthDate! : string;
    address! : string;
    inputState!:any;
    picture!:any;
    activeStatus!: string;
    type!:string;

    constructor(username : string, firstName: string, lastName:string, 
        email:string, password: string, birthDate:string, address:string, inputState:any,picture:any,activeStatus:string){

        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.birthDate = birthDate;
        this.address = address;
        this.inputState = inputState;
        this.activeStatus = activeStatus;
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


        constructor(UserName : string, FirstName: string, LastName:string, 
            Email:string, Password: string, BirthDate:string, Address:string, State:any,Picture:any,activeStatus:string){

            this.UserName = UserName;
            this.FirstName = FirstName;
            this.LastName = LastName;;
            this.Email = Email;
            this.Password = Password;
            this.BirthDate = BirthDate;
            this.Address = Address;
            this.State = State;
            this.Picture = Picture;
            this.activeStatus = activeStatus;
            
        }


}
