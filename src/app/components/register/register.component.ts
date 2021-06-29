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
  imageUrl!: "/assets/Placeholder.jpg"
  imageUri! : string;
  picturehelp : any;
  fileToUpload : any;
  selectedFile : any = null; 
  invalidLogin!: boolean;
  files: any;
  progress: any;
  message: any;
  imagePath!: {dbPath: ''};
  credentials : any;
  


  user : RegistracijaModel = {
    UserName : '',
    FirstName : '',
    LastName : '',
    Email : '',
    Password : '',
    BirthDate : '',
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
    birthDate : new FormControl(),
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
      
      reader.onload = (e:any) => {
        this.user.Picture = reader.result!.toString().split(',')[1]; 
        this.picturehelp = this.user.Picture;
        this.imageUrl = e.target!.result;
     console.log(this.user.Picture);this.imageUri=this.user.Picture };
      
  
      reader.readAsDataURL(file);
      console.log(file);
     // this.user.Document = file;
    }

  }
  submit()
  {
   
    this.user = this.registerForm.value;
    this.user.Picture = this.picturehelp;
    console.log(this.user);
    this.credentials = JSON.stringify(this.user);
    this.http.post("https://localhost:44396/api/Users/Register",this.credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      const username = (<any>response).username;
      localStorage.setItem("username", username);
      this.invalidLogin = false;
      this.router.navigate(["login"]);
    }, err => {
      this.invalidLogin = true;
    });
    
  }
  ngOnInit(): void {
  }
 

}