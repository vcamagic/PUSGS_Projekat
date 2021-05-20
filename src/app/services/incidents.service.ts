import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Incident } from '../entities/incident/incident';




@Injectable({
  providedIn: 'root'
})
export class IncidentsService {

  incdients : Array<Incident>;

  constructor(public router: Router) {
    this.incdients = new Array<Incident>();
    this.incdients.push(new Incident('1',new Date(2021,5,29),'351-1231',"Kralja Petra 12",'Drafted'));
    this.incdients.push(new Incident('2',new Date(2021,6,11),'351-131',"Bul Oslobodjenja 77",'Drafted'));
    this.incdients.push(new Incident('3',new Date(2021,12,13),'351-66764',"Janka Cmelika 88",'Solved'));
    this.incdients.push(new Incident('4',new Date(2021,7,1),'351-8888',"Patra Drapsanina 88",'Solved'));
    this.incdients.push(new Incident('5',new Date(2021,8,6),'351-967611',"Djurdja Smederevca 18a",'Drafted'));
    this.incdients.push(new Incident('5',new Date(2021,8,6),'351-967611',"Djurdja Smederevca 18a",'Drafted'));
    this.incdients.push(new Incident('5',new Date(2021,8,6),'351-967611',"Djurdja Smederevca 18a",'Drafted'));
    this.incdients.push(new Incident('5',new Date(2021,8,6),'351-967611',"Djurdja Smederevca 18a",'Drafted'));
    this.incdients.push(new Incident('5',new Date(2021,8,6),'351-967611',"Djurdja Smederevca 18a",'Drafted'));
    this.incdients.push(new Incident('5',new Date(2021,8,6),'351-967611',"Djurdja Smederevca 18a",'Drafted'));
    this.incdients.push(new Incident('5',new Date(2021,8,6),'351-967611',"Djurdja Smederevca 18a",'Drafted'));
    this.incdients.push(new Incident('5',new Date(2021,8,6),'351-967611',"Djurdja Smederevca 18a",'Drafted'));
    this.incdients.push(new Incident('5',new Date(2021,8,6),'351-967611',"Djurdja Smederevca 18a",'Drafted'));
    this.incdients.push(new Incident('5',new Date(2021,8,6),'351-967611',"Djurdja Smederevca 18a",'Drafted'));
    this.incdients.push(new Incident('5',new Date(2021,8,6),'351-967611',"Djurdja Smederevca 18a",'Drafted'));
    this.incdients.push(new Incident('5',new Date(2021,8,6),'351-967611',"Djurdja Smederevca 18a",'Drafted'));
    this.incdients.push(new Incident('5',new Date(2021,8,6),'351-967611',"Djurdja Smederevca 18a",'Drafted'));
    this.incdients.push(new Incident('5',new Date(2021,8,6),'351-967611',"Djurdja Smederevca 18a",'Drafted'));
    
   }

  
  getIncidents(): Array<Incident>{
    return this.incdients;
  }
}
