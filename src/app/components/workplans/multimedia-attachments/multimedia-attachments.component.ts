import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { WorkRequestsService } from 'src/app/services/work-requests.service';
import { WorkplansService } from 'src/app/services/workplans.service';

@Component({
  selector: 'app-multimedia-attachments',
  templateUrl: './multimedia-attachments.component.html',
  styleUrls: ['./multimedia-attachments.component.css']
})
export class MultimediaAttachmentsComponent implements OnInit {

  form!:FormGroup;
  progress: any;
  message: any;
  imagePath1!: {dbPath: ''};


  image: string = "";


  constructor( private router:Router, private http:HttpClient, private wrService:WorkplansService) { }

  ngOnInit(): void {
    
  }


  save(){
    if(this.validate()){
      console.log("tu sam")
      this.wrService.sendMessage(4);
      this.router.navigate(['/workrequests/new/equipment']);
    }
  }

  validate(): boolean{
    return true;
  }

  back(){
    this.wrService.sendMessage(2);
    this.router.navigate(['/workrequests']);
  }



  ///IMAGE

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
          this.image = this.imagePath1.dbPath.toString();
          this.form.value.imageData = this.image;
          console.log("Upload zavrsen" + this.form.value.imageData)
          this.form.setValue({
              imageData: this.image 
            
          })
        }
    });


  }

  imagePath(path:string): string {
    if(!(path == null || path == "")){
      console.log(path);
    const retVal = 'https://localhost:44396/' + path;
    return retVal;
    }else{
      return "";
    }
  }

}
