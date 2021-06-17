import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import{User, UserType} from '../../entities/user/user';
import {CallsService} from 'src/app/services/calls.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userList : Array<User> = [];
  exists : Boolean;
  loginForm : FormGroup;



  constructor(private router: Router, private userService : UserService,private callservice: CallsService) {
    this.exists = false;
    this.loginForm = new FormGroup({
      'email': new FormControl("",Validators.email),
      'password': new FormControl("",[Validators.required,Validators.minLength(5)])
    });
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      data => {
        this.userList = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  print(){
  this.userList.forEach(element => {
        console.log(element.email);
        console.log(element.password);
    });
  }

  login(email: string, password: string){
    this.print();
    this.userList.forEach(element => {
      if(element.email == email){
          if(element.password == password)
            this.exists=true;
      }
    });

    if(!this.exists){
      alert("Username or password invalid.");
      return;
    }

    alert("Login succesful!");
    this.router.navigate(['dashboard']);
  }


  onSubmit() {
    this.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value);
    this.router.navigate(['incidents']);
  }
}