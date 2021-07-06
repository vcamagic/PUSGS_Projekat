import { Component, OnInit } from '@angular/core';
import { RegisteredUser, User} from 'src/app/entities/user/user';
import {RegistracijaModel} from 'src/app/models/registracijaModel';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-verification-user',
  templateUrl: './verification-user.component.html',
  styleUrls: ['./verification-user.component.css']
})
export class VerificationUserComponent implements OnInit {

  type!: string;
  public allUsers : User[] = [];
  public page = 10;
  public pageSize = 5;

  constructor(private userService: UserService,  public dialog: MatDialog) { }

  ngOnInit(): void {
      this.userService.loadUsers().subscribe(data => this.allUsers = data);
      console.log("Juzeeri " +this.allUsers)
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
