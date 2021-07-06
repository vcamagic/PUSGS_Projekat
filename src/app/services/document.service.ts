import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SwitchingPlan } from 'src/app/entities/switchingPlan';
import { Instruction } from 'src/app/entities/instructions';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HistoryState } from 'src/app/entities/spHistoryState';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  params: new HttpParams()
};


@Injectable({
  providedIn: 'root'
})

export class DocumentService {

  constructor(private http: HttpClient) { }

  saveSwitchingPlan(switchingPlan: SwitchingPlan) {
    return this.http.post<SwitchingPlan>("https://localhost:44396/api/Document/SaveSwitchingPlan", switchingPlan);
  }

  loadHistory(): Observable<IHistory[]>{
    return this.http.get<IHistory[]>("https://localhost:44396/api/Document"); 
  }

  

  getHistory() : Observable<HistoryState[]> {

    return this.http.get<HistoryState[]>("https://localhost:44396/api/Document");
  }
  getSwitchingPlans(): Observable<SwitchingPlan[]>{
    return this.http.get<SwitchingPlan[]>("https://localhost:44396/api/Document/GetSwitchingPlans"); 
  }

  saveInstruction(instruction: Instruction) {
    return this.http.post<Instruction>("https://localhost:44396/api/Document/SaveInstruction", instruction);
  }

  getInstructions(): Observable<Instruction[]>{
    return this.http.get<Instruction[]>("https://localhost:44396/api/Document/GetInstructions"); 
  }

  getSwitchingPlan(id: number): any{
    const param = new HttpParams().append('id', id.toString());
    httpOptions.params = param;

    let sw = null;

    return this.http.get("https://localhost:44396/api/Document/GetSwitchingPlan?id="+id)

    
  }


  
  executeInstruction(id:number){
    console.log("Id: " + id)
    return this.http.put("https://localhost:44396/api/Document/ExecuteInstruction", id)
    .subscribe(
      data => {
        console.log(data);
      }
    )
  }

  deleteInstruction(id:number){
    console.log("Id: " + id)
    return this.http.put("https://localhost:44396/api/Document/DeleteInstruction", id)
    .subscribe(
      data => {
        console.log(data);
      }
    )
  }

  deleteAllInstructions(id:number){
    console.log("Id: " + id)
    return this.http.put("https://localhost:44396/api/Document/DeleteAllInstructions", id)
    .subscribe(
      data => {
        console.log(data);
      }
    )
  }

  getHistoryStates(id:number){
    return this.http.get("https://localhost:44396/api/Document/GetHistoryState?id="+id);
  }

  saveHistoryState(historyState:HistoryState){
    return this.http.post("https://localhost:44396/api/Document/SaveHistoryState", historyState).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}


export interface IHistory {
  Id: string;
  DocumentId: string;
  DateChange: string;
  ChangeBy: string;
  NewStatus: string;
}