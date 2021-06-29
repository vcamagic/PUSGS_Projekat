import { Component, OnInit } from '@angular/core';
import { RegisteredUser, User } from 'src/app/entities/user/user';
import {RegistracijaModel} from 'src/app/models/registracijaModel';
import { UserService } from 'src/app/services/user.service';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-verification-user',
  templateUrl: './verification-user.component.html',
  styleUrls: ['./verification-user.component.css']
})
export class VerificationUserComponent implements OnInit {

  type!: string;
  public allUsers : RegisteredUser[] = [];
  public page = 10;
  public pageSize = 5;

  constructor(private userService: UserService, private http: HttpClient ) { }

  ngOnInit(): void {
      this.userService.getAllRegisteredUsers().subscribe(data => this.allUsers = data);
  }
  activate(username:string){
    this.userService.activateUser(username);
    location.reload();
  }
  decline(username:string){
    this.userService.declineUser(username);
    location.reload();
  }

}
