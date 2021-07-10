import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Element } from 'src/app/entities/element/element';
import { ElementsService } from 'src/app/services/elements.service';
import { SafetydocumentService } from 'src/app/services/safetydocument.service';

@Component({
  selector: 'app-equipment-sd',
  templateUrl: './equipment-sd.component.html',
  styleUrls: ['./equipment-sd.component.css']
})
export class EquipmentSdComponent implements OnInit {

  @Output() pressedButton = new EventEmitter<string>();
  constructor(public sdService: SafetydocumentService,public elementsService: ElementsService,private modalService: NgbModal) { }

  headElements = ['id', 'type', 'name', 'address', 'coordinateX', 'coordinateY'];
  Eles : Element[]=[];
  page = 10;
  pageSize = 3;

  ngOnInit(): void {
    this.getElements();
  }

  save(){
    this.pressedButton.emit('Multimedia');
  }

  open(content : any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result)=>{});
  }

  getElements(){
    this.elementsService.loadElements().subscribe(res=>{
        this.Eles = res;
        console.log(res);
        console.log(this.Eles);
    },err=>{
        console.log(err);
    })
  }

  find(element : Element):boolean{
    let retVal = false;
    for(var item of this.sdService.formData.elements){
      if(item.id==element.id){
        retVal = true;
        break;
      }
    }
    return retVal;
}


  onChange(element : Element){

  console.log(element);
    this.sdService.postDataElement(element).subscribe(res=>{
        this.modalService.dismissAll('Save');
    },err=>{
      console.log(err);
    })

    this.sdService.formData.elements.push(element);
  }

  add(){
    this.modalService.dismissAll('Save');
  }

  delete(id : number){
    if(confirm("Do you want to delete item?")){
      this.sdService.deleteDataElement(id).subscribe(res =>{
        this.sdService.formData.elements = this.sdService.formData.elements.filter(item => item.id !== id);
      });
    }
  }

}
