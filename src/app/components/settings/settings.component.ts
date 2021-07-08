import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { JsonObjectExpression } from 'typescript';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  minimumCharacters:boolean = false;
  invalidPassword:boolean = false;
 

  constructor(private router:Router, private http:HttpClient, private userService:UserService) { }

  changePassword(form:NgForm){
    var form1 = form;
    if(this.validate(form)){
    const credentials = JSON.stringify(form1.value);
    this.userService.changeUserPassword(credentials);
    localStorage.clear();
    this.router.navigate(['/workplans']);
    }
  }

  validate(form:NgForm):boolean{
    const credentials = JSON.stringify(form.value);
    console.log('password: ' + credentials);
    var password = JSON.parse(credentials);
    password = password['password'].toString();
    console.log("Password: " + password.legth)
    if(password.length < 5){  //validacija za duzinu sifre
      this.minimumCharacters = true;
      return false;
    }
    if(password.length != password.replace(/\s/g, "").length){  //validacija za razmake
      this.invalidPassword = true;
      return false;
    }
    return true;
  }


  ngOnInit(): void {

  }

}
