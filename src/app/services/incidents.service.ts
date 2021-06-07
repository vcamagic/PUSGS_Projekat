import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Incident } from '../entities/incident/incident'




@Injectable({
  providedIn: 'root'
})
export class IncidentsService {
  incdients: Array<Incident>;

  constructor(public router: Router) {
    this.incdients = new Array<Incident>();
    this.incdients.push(new Incident('1',new Date(2021,5,29),'351-1231',"Kralja Petra 12",'Drafted','Hazarddd','2',true,'15-05-2020','15-05-2020','15-05-2020',213,6,120));
    this.incdients.push(new Incident('1',new Date(2021,5,29),'351-1231',"Kralja Petra 12",'Drafted','Hazarddd','2',true,'15-05-2020','15-05-2020','15-05-2020',213,6,120));
    this.incdients.push(new Incident('1',new Date(2021,5,29),'351-1231',"Kralja Petra 12",'Drafted','Hazarddd','2',true,'15-05-2020','15-05-2020','15-05-2020',213,6,120));
    this.incdients.push(new Incident('1',new Date(2021,5,29),'351-1231',"Kralja Petra 12",'Drafted','Hazarddd','2',true,'15-05-2020','15-05-2020','15-05-2020',213,6,120));
    this.incdients.push(new Incident('1',new Date(2021,5,29),'351-1231',"Kralja Petra 12",'Drafted','Hazarddd','2',true,'15-05-2020','15-05-2020','15-05-2020',213,6,120));
    this.incdients.push(new Incident('1',new Date(2021,5,29),'351-1231',"Kralja Petra 12",'Drafted','Hazarddd','2',true,'15-05-2020','15-05-2020','15-05-2020',213,6,120));
    this.incdients.push(new Incident('1',new Date(2021,5,29),'351-1231',"Kralja Petra 12",'Drafted','Hazarddd','2',true,'15-05-2020','15-05-2020','15-05-2020',213,6,120));
    this.incdients.push(new Incident('1',new Date(2021,5,29),'351-1231',"Kralja Petra 12",'Drafted','Hazarddd','2',true,'15-05-2020','15-05-2020','15-05-2020',213,6,120));
    this.incdients.push(new Incident('1',new Date(2021,5,29),'351-1231',"Kralja Petra 12",'Drafted','Hazarddd','2',true,'15-05-2020','15-05-2020','15-05-2020',213,6,120));
    this.incdients.push(new Incident('1',new Date(2021,5,29),'351-1231',"Kralja Petra 12",'Drafted','Hazarddd','2',true,'15-05-2020','15-05-2020','15-05-2020',213,6,120));
    this.incdients.push(new Incident('1',new Date(2021,5,29),'351-1231',"Kralja Petra 12",'Drafted','Hazarddd','2',true,'15-05-2020','15-05-2020','15-05-2020',213,6,120));
    this.incdients.push(new Incident('1',new Date(2021,5,29),'351-1231',"Kralja Petra 12",'Drafted','Hazarddd','2',true,'15-05-2020','15-05-2020','15-05-2020',213,6,120));
    this.incdients.push(new Incident('1',new Date(2021,5,29),'351-1231',"Kralja Petra 12",'Drafted','Hazarddd','2',true,'15-05-2020','15-05-2020','15-05-2020',213,6,120));
    this.incdients.push(new Incident('1',new Date(2021,5,29),'351-1231',"Kralja Petra 12",'Drafted','Hazarddd','2',true,'15-05-2020','15-05-2020','15-05-2020',213,6,120));
    this.incdients.push(new Incident('1',new Date(2021,5,29),'351-1231',"Kralja Petra 12",'Drafted','Hazarddd','2',true,'15-05-2020','15-05-2020','15-05-2020',213,6,120));
    this.incdients.push(new Incident('1',new Date(2021,5,29),'351-1231',"Kralja Petra 12",'Drafted','Hazarddd','2',true,'15-05-2020','15-05-2020','15-05-2020',213,6,120));
   }

  getIncidents(): Array<Incident>{
    return this.incdients;
  }

}
