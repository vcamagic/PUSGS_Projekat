export class Instruction {
    id!: number;
    documentId!: number;
    action: string;
    element: string;
    deleted: boolean;
    executed: boolean;


    constructor( 
        action: string,
        element: string,
        deleted: boolean,
        executed: boolean
        )       
    {
        this.action = action;
        this.element = element;
        this.deleted = deleted;
        this.executed = executed;
        
    }
}
