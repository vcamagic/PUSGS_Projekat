import { User } from "../user/user";

export class TeamMember {
    id : number = 0;
    email : string = "";
    name : string = "";
    lastName : string = "";
    teamName : string = "";

    constructor(user : User){
        this.name = user.name;
        this.email = user.email;
        this.lastName = user.lastname;
        this.teamName = user.teamName;
    }
}
