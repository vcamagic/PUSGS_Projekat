import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Notification } from '../entities/notifications/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient) { }


  loadNotifications(): Observable<Notification[]>{
    return this.http.get<Notification[]>("https://localhost:44396/api/Notifications");
  }

  modifyNotifcation(id:Number){
    console.log("Pokusaj put zahteva!");
    let params = new HttpParams();
    params = params.append("id", id.toString());
    this.http.put("https://localhost:44396/api/Notifications/ModifyNotification", null, {params: params})
    .subscribe(
      error => console.log('oops', error)
    );
    }

    markAllAsRead(){
      let params = new HttpParams();
      this.http.post("https://localhost:44396/api/Notifications/MarkAllAsRead", null, {params: params})
    .subscribe(
      data => console.log('oops', data)
    );
    }

    clearAll(){
      let params = new HttpParams();
      this.http.post("https://localhost:44396/api/Notifications/ClearAll", null, {params: params})
    .subscribe(
      data => console.log('oops', data)
    );
    }

}
