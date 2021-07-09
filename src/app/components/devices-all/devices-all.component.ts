import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Street } from 'src/app/entities/street';
import { ElementsService } from 'src/app/services/elements.service';
import { SettingsService } from 'src/app/services/settings.service';
import { Element } from '../../entities/element/element'

@Component({
  selector: 'app-devices-all',
  templateUrl: './devices-all.component.html',
  styleUrls: ['./devices-all.component.css']
})
export class DevicesAllComponent implements OnInit {

  constructor(public elementsService: ElementsService,private cdref: ChangeDetectorRef,private modal: NgbModal, public settingsService: SettingsService) { }
  IncEles : Element[] = [];
  streets : Street[] = [];
  typeSearch : string = "";
  nameSearch : string = "";
  addressSearch : string = "";
  idSearch : string = "";
  headElements = ['id', 'type', 'name', 'address', 'coordinateX', 'coordinateY'];

  page = 10;
  pageSize = 3;

  ngOnInit() {
    this.getElements();
    this.getStreets();
  }

  ngAfterContentChecked(){
    this.cdref.detectChanges();
  }

  getElements(){
    this.elementsService.loadElements().subscribe(res=>{
        this.IncEles = res;
        console.log(res);
        console.log(this.IncEles);
    },err=>{
        console.log(err);
    })
  }

  getStreets(){
    this.settingsService.loadStreets().subscribe(res=>{
        this.streets = res as Street[];
        console.log(this.streets);
    },err=>{
      console.log(err);
    })
  }
  delete(id: number){
      if(confirm("Are you sure you want to delete this item?")){
          this.elementsService.deleteElement(id).subscribe(res=>{
            this.elementsService.loadElements().subscribe(res=>{
              this.IncEles= res as Element[];
            })
          },err=>{
            console.log(err);
          })
      }
  }

  open(content: any,elem : Element){
    this.elementsService.formData = elem;
    this.modal.open(content, {ariaLabelledBy: 'modal-title-basic'}).result.then((result)=>{});
  }

  save(){
    if(this.elementsService.formData.id===0){
      this.modal.dismissAll('Save click');
      this.elementsService.postElement().subscribe(res=>{
        this.elementsService.loadElements().subscribe(res=>{
          this.IncEles= res as Element[];
        })
      },err=>{
        console.log(err);
      });
    }
    else{
      this.elementsService.putElement().subscribe(res=>{
          this.getElements();
      },err=>{
        console.log(err);
      })
    }
  }

  open1(content : any){
    this.modal.open(content,{ariaLabelledBy:'modal-basic-title'}).result.then((result)=>{});
  }

  search(){
      this.IncEles = this.IncEles.filter(item=>{
        return item.type.match(this.typeSearch) &&
        item.name.match(this.nameSearch) &&
        item.address.match(this.addressSearch) &&
        (item.id.toString() === this.idSearch || this.idSearch === '');
      });
  }

  reset(){
    this.nameSearch="";
    this.typeSearch="";
    this.addressSearch="";
    this.idSearch="";
    this.getElements();
  }



}
