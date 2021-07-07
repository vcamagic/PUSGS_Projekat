import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Consumer } from 'src/app/entities/consumers'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumersService {

  constructor(private http:HttpClient) { }

  private newCons = new Subject<number>();
  currentCons$ = this.newCons.asObservable();

  private idValue: any;

  sendMessage(message: number){
    this.newCons.next(message);
  }

  getConsumers(){
    return this.http.get("https://localhost:44396/api/Consumer/GetConsumers");
  }

  getConsumer(id:number){
    return this.http.get("https://localhost:44396/api/Consumer/GetConsumer?id=" + id);
  }

  saveConsumer(consumer:Consumer){
    return this.http.post("https://localhost:44396/api/Consumer/SaveConsumer", consumer)
    .subscribe(
      data => {
        console.log(data);
      }
    );
    }
  
  modifyConsumer(consumer:Consumer){
    return this.http.put("https://localhost:44396/api/Consumer/ModifyConsumer", consumer)
    .subscribe(
      data => {
        console.log(data);
      }
    );
  }

  deleteConsumer(id:number){
    return this.http.put("https://localhost:44396/api/Consumer/DeleteConsumer", id)
    .subscribe(
      data => {
        console.log(data);
      }
    );
  }

  setIdValue(id:number){
    this.idValue = id;
  }

  getIdValue(){
    return this.idValue;
  }
}
