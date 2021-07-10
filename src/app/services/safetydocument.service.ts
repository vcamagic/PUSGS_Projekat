import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Workplan } from '../entities/workplan/workplan';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SafetyDocument } from '../entities/safetydoc/safetydocument';
import { HistorySafeDoc } from '../entities/HistorySafeDoc';
import { Element } from '../entities/element/element';
import { Multimedia } from '../entities/multimedia';

@Injectable({
  providedIn: 'root'
})
export class SafetydocumentService {

  formData: SafetyDocument = new SafetyDocument();


  constructor(private http : HttpClient) {
    this.getAllSafetyDocuments();
  }

  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();

  // Service message commands


  readonly safetydocUrl = 'https://localhost:44396/api/SafetyDocuments';

  getAllSafetyDocuments(): Observable<SafetyDocument[]>{
    return this.http.get<SafetyDocument[]>(this.safetydocUrl);
  }
  emitChange(change: any) {
      this.emitChangeSource.next(change);
  }

  postData(sd : SafetyDocument){
    return this.http.post(`${this.safetydocUrl}`,sd);
  }

  postDataHistory(history : HistorySafeDoc){
    return this.http.post(`${this.safetydocUrl}/${this.formData.id}/history`,history);
  }

  postDataElement(element : Element){
    return this.http.post(`${this.safetydocUrl}/${this.formData.id}/devices`,element);
  }

  postDataMultimedia(multimedia : Multimedia){
    return this.http.post(`${this.safetydocUrl}/${this.formData.id}/multimedia`,multimedia);
  }

  deleteData(id : number){
    return this.http.delete(`${this.safetydocUrl}/${id}`);
  }
  deleteDataElement(elementId : number){
    return this.http.delete(`${this.safetydocUrl}/${this.formData.id}/${elementId}/devices`);
  }
  deleteDataMultimedia(multimediaId : number){
    return this.http.delete(`${this.safetydocUrl}/${this.formData.id}/${multimediaId}/multimedia`);
  }

  putData(){
    return this.http.put(`${this.safetydocUrl}/${this.formData.id}`,this.formData);
  }

}
