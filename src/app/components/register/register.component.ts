import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators,FormControl, FormGroup,NgForm } from '@angular/forms';
import {RegistracijaModel} from 'src/app/models/registracijaModel';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  imageUri! : string;
  fileToUpload : any;
  selectedFile : any = null; 
  credentials : any;
  files: any;
  progress: any;
  message: any;
  imagePath!: {dbPath: ''};
  


  user : RegistracijaModel = {
    UserName : '',
    FirstName : '',
    LastName : '',
    Email : '',
    Password : '',
    BirthdayDate : '',
    Address : '',
    State : '',
    Picture:''
  
  };

  registerForm = new FormGroup({
    username : new FormControl(),
    firstname : new FormControl(),
    lastname : new FormControl(),
    email : new FormControl(),
    password : new FormControl(),
    birthdayDate : new FormControl(),
    address : new FormControl(),
    inputState : new FormControl(),
    inputImage : new FormControl(),
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

  
  constructor(private router: Router, private http: HttpClient) { }
 
  onFileChanged(event:any) {
    if (event.target.files && event.target.files[0]) {
  
      const file = event.target.files[0];
  
      const reader = new FileReader();
      
      reader.onload = e => {this.user.Picture = reader.result!.toString().split(',')[1]; 
      console.log(this.user.Picture);this.imageUri=this.user.Picture };
    
  
      reader.readAsDataURL(file);
      console.log(file);
     // this.user.Document = file;
    }

  }
  submit()
  {
    this.user = this.registerForm.value;
    console.log(this.user);
    
  }
  ngOnInit(): void {
  }
 

}