import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Workplan } from '../entities/workplan/workplan';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SafetyDocument } from '../entities/safetydoc/safetydocument';

@Injectable({
  providedIn: 'root'
})
export class SafetydocumentService {

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
}
