export class HistoryState {
    id!: string;
    documentId: string;
    changeBy: string;
    dateChange!: string;
    newStatus: string


    constructor( 
    changeBy: string,
    Id: string,
    newStatus: string
        )       
    {
        this.changeBy = changeBy;
        this.documentId = Id;
        this.newStatus = newStatus;
        
    }
}