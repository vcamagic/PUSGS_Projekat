import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { NotificationService } from 'src/app/services/notification.service';

import { Notification } from 'src/app/entities/notifications/notification'

import { element } from 'protractor';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications: Notification[] = [];
  showNotifications: Notification[] = [];
  page = 10;
  pageSize = 4;
  option:string = "All";


  constructor(private notService:NotificationService, private router:Router, private detector:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.notService.loadNotifications().subscribe
      (data => { this.notifications = data
      this.showNotifications = data});

  }

finish(id:Number){
  console.log(id);
  this.notService.modifyNotifcation(id);
  console.log(this.option);
  if(this.option === "Unread"){
    
      this.showNotifications.forEach(x => {
        if(x.id == id){
          x.status = "Read";
        }
      });
      this.showNotifications = this.transform(this.showNotifications, "Unread");
        this.detector.detectChanges();
      }    
}

getBackgroundColor(type:string){
  
  if(type === "Success")
  {
  return {'background-color' : 'lightgreen'};
  }else if(type === "Warning")
  {
  return {'background-color' : 'lightsalmon'};
  }else if(type === "Info")
  {
    return {'background-color' : 'lightblue'};
  }else
  {
      return {'background-color' : 'orangered'};
  }
}

btnClick(type:string){
  this.notService.loadNotifications().subscribe
      (data => { this.notifications = data});
  this.option = type;
  this.showNotifications = this.transform(this.notifications, type);
  console.log(this.option);
}

clearAll(){
  this.notService.clearAll();
  this.showNotifications = [];
  console.log(this.notifications);
}

markAllAsRead(){
  this.notService.markAllAsRead();
  
  this.showNotifications.forEach(x =>{
    x.status = "Read";
  }
    )
    if(this.option === "Unread"){
      this.showNotifications = this.transform(this.showNotifications, "Unread");
    }
  }


transform(list: any[], value: string): any[]{

  if(value === "All"){
    return list;
  }

  if(value === "Unread"){
    return list.filter(item => item.status === value);
  }
/*
  if(value === "Clear"){
    return [];
  }

  if(value === "Mark"){
    return list.filter(item => item.status = 'Read');
  }
*/
  return value ? list.filter(item => item.type === value) : list;

  
}

}
