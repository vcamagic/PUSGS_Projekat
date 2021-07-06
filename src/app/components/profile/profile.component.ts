import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/entities/user/user'
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  userTypes = [
    {name: "TeamMember"},
    {name: "Dispatcher"},
    {name: "Worker"},
    {name: "Admin"}
  ]

  //control!: FormControl;

  progress: any;
  message: any;
  imagePath1!: {dbPath: ''};

  user!:User;

  date!:string;

  image: string = "";

  usernameR:boolean = false;
  fullnameR:boolean = false;
  addressR:boolean = false;
  emailR:boolean = false;
  userTypeR:boolean = false;
  usernameL:boolean = false;
  usernameS:boolean = false;
  usernameW:boolean = false;
  usernameCW:boolean = false;
  emailV:boolean = false;

  profileForm =new FormGroup({
    username: new FormControl('', /*[Validators.required, Validators.minLength(5), Validators.maxLength(20)] */),
    firstname : new FormControl( ''),
    lastname : new FormControl (''),
    address: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    userType: new FormControl('', Validators.required),
    imageData: new FormControl('')
  });
  
  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit(): void {

    this.userService.getCurrentUser().subscribe(
      data => {
        this.image = data.imageData;
        this.profileForm.setValue({
          username: data.username,
          firstName : data.firstName,
          lastName : data.lastName,
          email: data.email,
          address: data.address,
          userType: data.userType,
          image : data.imageData
        })
        this.date = data.birthdate;
        console.log(this.profileForm.value.path);
      }, 
      err => {

      }
    )
    
    
    
  }

  onSubmit(){
    if(this.validate()){
      this.user = new User(
        this.profileForm.controls.username.value,
        this.profileForm.controls.firstName.value,
        this.profileForm.controls.lastName.value,
        this.profileForm.controls.email.value,
        this.profileForm.controls.password.value,
        this.profileForm.controls.birthDate.value,
        this.profileForm.controls.address.value,
        this.profileForm.controls.inputState.value,
        this.profileForm.controls.picture.value,
        this.profileForm.controls.activeStatus.value,
        this.profileForm.controls.type.value


       
      );
      this.user.picture = this.image;
      this.userService.changeProfile(this.user);

    }

  }

  validate():boolean{
    let retVal = true;
    /*
    if(this.profileForm.controls.username.hasError('required')){
      this.usernameR = true;
      retVal = false;
      
    }
    if{
      this.usernameR = false;
    }
    */
    if(this.profileForm.controls.fullname.hasError('required')){
      this.fullnameR = true;
      retVal = false;
    }else{
      this.fullnameR = false;
    }
    if(this.profileForm.controls.address.hasError('required')){
      this.addressR = true;
      retVal = false;
    }else{
      this.addressR = false;
    }
    if(this.profileForm.controls.email.hasError('required')){
      this.emailR = true;
      retVal = false;
    }else{
      this.emailR = false;
    }
    if(this.profileForm.controls.email.hasError('email') && !this.emailR){
      this.emailV = true;
      retVal = false;
    }else{
      this.emailV = false;
    }
    if(this.profileForm.controls.userType.hasError('required')){
      this.userTypeR = true;
      retVal = false;
    }else{
      this.userTypeR = false;
    }
    /*
    const str = this.profileForm.controls.username.value;
    const regex = /^$|\s+/
    const invalid = regex.test(str);
    if(regex.test(str) && !this.usernameR){
      this.usernameW = true;
      retVal = false;
    }else{
      this.usernameW = false;
    }
    if(this.profileForm.controls.username.hasError('minlength') && !this.usernameR && !this.usernameW){
      this.usernameS = true;
      retVal = false;
    }else{
      this.usernameS = false;
    }
    if(this.profileForm.controls.username.hasError('maxlength') && !this.usernameW){
      this.usernameL = true;
      retVal = false;
    }else{
      this.usernameL = false;
    }
    */
    
    
    return retVal;
  }

   removeSpaces(control: AbstractControl):any {
    if (control && control.value && !control.value.replace(/\s/g, '').length) {
      control.setValue('');
    }
    return null;
  }

  imagePath(path:string): string {
    if(!(path === "")){
    const retVal = 'https://localhost:44396/' + path;
    return retVal;
    }else{
      return "";
    }
  }

  get selectOptions(){
    return this.userTypes.map(({name})=>name);
  }

  public uploadFile = (files:any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);


    this.http.post('https://localhost:44396/api/Users/Upload', formData, {reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
      {
          const total: number = <number>event.total;  
          this.progress = Math.round(100 * event.loaded / total);
      }
        else if (event.type === HttpEventType.Response) {
          console.log(event.body);
          this.imagePath1 = event.body as {dbPath: ''};
          this.image = this.imagePath1.dbPath;
          this.profileForm.value.imageData = this.image;
        }
    });


  }


}

