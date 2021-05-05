import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import{User, UserType} from '../../entities/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
implements OnInit {

  loginForm : FormGroup;
  userList: Array<User>;
  exists: boolean;


  constructor(private router: Router) {
    this.exists = false;
    this.userList = new Array<User>();
    this.loginForm = new FormGroup({
      'email': new FormControl("",Validators.email),
      'password': new FormControl("",[Validators.required,Validators.minLength(5)])
    });
  }

  ngOnInit(): void {
    this.userList.push(new User("pera@gmail.com","pera123",UserType.CrewMember));
    this.userList.push(new User("vcamagic@yahoo.com","zvucnik123",UserType.Admin));
    this.userList.push(new User("djole@uns.ac.rs","djole123",UserType.Dispatcher));
  }

  
  onSubmit() {

    this.userList.forEach(element => {
        if(element.email == this.loginForm.get('email')?.value){
            if(element.password == this.loginForm.get('password')?.value)
              this.exists=true;
        }
    });

    if(!this.exists){
      alert("Username or password invalid.");
      this.loginForm.reset();
      return;
    }

    alert("Login succesful!");
    this.loginForm.reset();
    this.router.navigate(['incidents'])
    
  }
}
