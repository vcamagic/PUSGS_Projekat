import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }


  public navigation = new Subject<any>();
  public navigation$ = this.navigation.asObservable();

  
}
