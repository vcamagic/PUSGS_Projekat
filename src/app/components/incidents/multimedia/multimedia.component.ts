import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Multimedia } from 'src/app/entities/multimedia';
import { MultimediaIncident } from 'src/app/entities/multimedia-incident';
import { IncidentsService } from 'src/app/services/incidents.service';


@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.css']
})
export class MultimediaComponent implements OnInit {

  constructor(public incidentService: IncidentsService,private router: Router) { }

  ngOnInit(): void {
  }
  @Output() pressedButton = new  EventEmitter<string>();

  files: File[] = [];

  onSelect(event : any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  upload(){
      for(var item of this.files){
        var reader = new FileReader();
        reader.readAsDataURL(item);
        reader.onload = (event : any)=>{
          let url = event.target.result;
          let multimedia = new MultimediaIncident();
          multimedia.url = url;
          const formData = new FormData();
          formData.append('file',item,item.name);
          this.incidentService.putMultimediaInIncident(multimedia).subscribe(res=>{
            multimedia = res as Multimedia;
            this.incidentService.incident.multimedia.push(multimedia);
          });
        }
      }
      this.files.splice(0,this.files.length);
  }

  next(){
    this.router.navigate(["incidents"]);
  }

}
