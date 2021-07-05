export class HistoryState {
    id: string;
    documentId: string;
    changeBy: string;
    dateChange: string;
    newStatus: string


    constructor(   id : string, documentId : string, changeBy : string, dateChange : string, newStatus : string){
        this.id = id;
        this.documentId = documentId;
        this.changeBy = changeBy;
        this.dateChange = dateChange;
        this.newStatus = newStatus;

    }



}