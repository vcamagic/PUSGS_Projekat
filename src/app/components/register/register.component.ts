import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormControl, FormGroup,  } from '@angular/forms';
import {RegistracijaModel} from 'src/app/models/registracijaModel';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : RegistracijaModel = {
    UserName : '',
    FirstName : '',
    LastName : '',
    Email : '',
    Password : '',
    BirthdayDate : '',
    Address : '',
    State : '',
  
  };

  registerForm = new FormGroup({
    username : new FormControl(),
    firstname : new FormControl(),
    lastname : new FormControl(),
    email : new FormControl(),
    password : new FormControl(),
    birthdayDate : new FormControl(),
    address : new FormControl(),
    inputState : new FormControl()
  })
 /*registerForm = this.fb.group({
    username : ['gagaga',Validators.required],
    firstname : ['',Validators.required],
    lastname : ['', Validators.required],
    email : ['', Validators.required],
    password : ['',Validators.required] ,
    birthdayDate : [''],
    address : [''],
  });*/

  
  constructor(private fb : FormBuilder) { }
 

  submit()
  {
    this.user = this.registerForm.value;
    console.log(this.user);
    console.log("Form submitted")
  }
  ngOnInit(): void {
  }

}
