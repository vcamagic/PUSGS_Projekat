export class WorkRequest {
    //basic
   public type?: string;
   public status?:string;
   public  incident?: string;
   public  street?: string;
   public startDate?: string;
   public  endDate?: string;
   public createdByUser?: string;
   public purpose?:  string;
   public phoneNum?: string;
   public company?: string;
   public details?: string;
   public notes?: string;
   public dateCreated?:string;
    //History
    public history?: string;
    public   state?:string;
    //Multimedia
    public file?:string;
    //Equipment
    public equipment?: string;
}
