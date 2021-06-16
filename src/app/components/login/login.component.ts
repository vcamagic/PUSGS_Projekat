import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import{User, UserType} from '../../entities/user/user';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  exists: boolean;
  


  constructor(private router: Router, private loginService : LoginService, private modalWindow: NgbModal) {
    this.exists = false;
    this.loginForm = new FormGroup({
      'email': new FormControl("",Validators.email),
      'password': new FormControl("",[Validators.required,Validators.minLength(5)])
    });
  }

  ngOnInit(): void {
    
  }

  open(content : any){
    this.modalWindow.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {});
  }
  
  onSubmit() {

    this.loginService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value);
    
  }

  report(){
    this.modalWindow.dismissAll('Save click');

  }

  addressChange(){
    
  }

}
