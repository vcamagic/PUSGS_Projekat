import { Component, OnInit , ChangeDetectorRef, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Resolution } from 'src/app/entities/resolution';
import { IncidentsService } from 'src/app/services/incidents.service';

@Component({
  selector: 'app-resolution',
  templateUrl: './resolution.component.html',
  styleUrls: ['./resolution.component.css']
})
export class ResolutionComponent implements OnInit {

  headElements = ['id', 'cause', 'subCause', 'construction', 'material'];
  resolutin : Resolution = new Resolution("","","","");
  page = 10;
  pageSize = 3;
  @Output() pressedButton = new  EventEmitter<string>();
  resForm : FormGroup;

  constructor(private modalService : NgbModal,public incidentService: IncidentsService,private cdref: ChangeDetectorRef) {

    this.resForm = new FormGroup({
      "cause" : new FormControl(),
      "subcause" : new FormControl(),
      "construction" : new FormControl(),
      "material" : new FormControl()
    })
   }

  ngOnInit(): void {

  }

  ngAfterContentChecked(){
    this.cdref.detectChanges();
  }


  open(content: any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result)=>{});
  }

  add(){
      this.modalService.dismissAll('Save click');
      this.resolutin= new Resolution(this.resForm.controls["cause"].value,this.resForm.controls["subcause"].value,this.resForm.controls["construction"].value,this.resForm.controls["material"].value)
      this.incidentService.putResolutionInIncident(this.resolutin).subscribe(res=>{

      },err =>{
        console.log(err);
      })

      this.incidentService.incident.resolutions.push(this.resolutin);
  }

  next(){
    this.pressedButton.emit('Calls');
  }

}
