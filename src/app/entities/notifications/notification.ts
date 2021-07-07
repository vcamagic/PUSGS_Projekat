export class Notification {
    id: number;
    status: string;
    deleted: boolean;
    type: string;
    text: string;
    timeStamp: string;
    user: string;

    

    constructor(
        id: number,
        status: string,
        deleted: boolean,
        type: string, 
        text: string,
        timeStamp: string,
        user: string
        )       
    {
        this.id = id;
        this.status = status;
        this.deleted = deleted;
        this.type = type;
        this.text = text;
        this.timeStamp = timeStamp;
        this.user = user;
        
    }

}