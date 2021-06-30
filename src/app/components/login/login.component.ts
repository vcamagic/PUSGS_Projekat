import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import{User} from '../../entities/user/user';
import {CallsService} from 'src/app/services/calls.service';
import { threadId } from 'node:worker_threads';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userList : User[] = [];
 // loginForm : FormGroup;



  constructor(private router: Router,  private modalService: NgbModal,public userService : UserService,private callservice: CallsService) {
    /*this.loginForm = new FormGroup({
      'email': new FormControl("",Validators.email),
      'password': new FormControl("",[Validators.required,Validators.minLength(5)])
    });*/
  }

  ngOnInit(): void {
    this.getUsers();
  }


  print(){
  this.userList.forEach(element => {
        console.log(element.email);
        console.log(element.password);
    });
  }

  login(form: NgForm){
    this.userService.login(form);
  }

  getUsers() {
    this.userService.getAllUsers()
      .subscribe(users => this.userList = users);
  }

 /* onSubmit() {
    this.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value);
    this.router.navigate(['incidents']);
  }*/

  open(content : any){

      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {});
  }

  report(){

  }
}
