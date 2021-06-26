export class HistoryState {
    id!: number;
    documentId: number;
    changeBy: string;
    dateChange!: string;
    newStatus: string


    constructor( 
    changeBy: string,
    documentId: number,
    newStatus: string
        )       
    {
        this.changeBy = changeBy;
        this.documentId = documentId;
        this.newStatus = newStatus;
        
    }
}