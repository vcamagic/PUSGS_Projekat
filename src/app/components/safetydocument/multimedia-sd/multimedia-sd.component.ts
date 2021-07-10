import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Multimedia } from 'src/app/entities/multimedia';
import { MultimediaIncident } from 'src/app/entities/multimedia-incident';
import { SafetydocumentService } from 'src/app/services/safetydocument.service';

@Component({
  selector: 'app-multimedia-sd',
  templateUrl: './multimedia-sd.component.html',
  styleUrls: ['./multimedia-sd.component.css']
})
export class MultimediaSdComponent implements OnInit {

  page = 10;
  pageSize = 2;


  files: File[] = [];
  id : number = 0;
  p : number = 0;
  url : string = '';

  @Output() pressedButton = new EventEmitter<string>();
  constructor(public sdService: SafetydocumentService) { }

  ngOnInit(): void {
  }

  save(){
    this.pressedButton.emit('Checklist');
  }

  onSelect(event : any) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event : any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  upload(){


    for(var item of this.files){
      var reader = new FileReader();
      reader.readAsDataURL(item);
      reader.onload = (event:any) =>{
        let url = event.target.result;
        let multimedia = new MultimediaIncident();
        multimedia.url = url;

        this.sdService.postDataMultimedia(multimedia).subscribe(res => {
          multimedia = res as Multimedia;
          this.sdService.formData.multimedia.push(multimedia);

        });
        }
    }
    this.files.splice(0,this.files.length);
  }

  delete(id : number){
    if(confirm('Do you want to delete item?')){
      this.sdService.deleteDataMultimedia(id).subscribe(res => {
        this.sdService.formData.multimedia = this.sdService.formData.multimedia.filter(item => item.id !== id);
      });
    }
  }

  onSave(){
    this.pressedButton.emit('CheckList');
  }
}
