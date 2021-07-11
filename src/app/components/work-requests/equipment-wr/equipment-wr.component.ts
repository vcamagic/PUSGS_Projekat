import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementsService } from 'src/app/services/elements.service';
import { SharedService } from 'src/app/services/shared.service';
import { Element } from 'src/app/entities/element/element';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-equipment-wr',
  templateUrl: './equipment-wr.component.html',
  styleUrls: ['./equipment-wr.component.css']
})


  export class EquipmentWrComponent implements OnInit {

    //public component = "devices";
    //public toNavbar = ["", this.component];
    public elementToPush!:Element;
    public allElements : Element[] = [];
    public usedElements : Element[] = [];
    allElementsList: Element[][];
    public page = 10;
    public pageUsed = 10;
    public pageSize = 3;
    public pageSizeUsed = 3;
    
    constructor(private router: Router, private _sharedService: SharedService, private elementsService: ElementsService,private documentService: DocumentService) { 
      this.allElementsList = new Array<Array<Element>>();
  
    }
  
    ngOnInit(): void {
      this.elementsService.loadElements()
      .subscribe((data: string | any[]) => {
          for(let i=0; i<data.length; i++)
          {
          if(data[i].inSafetyDocument === false)
            {
              this.allElements.push(data[i]);
            } else {
              this.usedElements.push(data[i]);
            } 
            
          }
        }
        );
      this.usedElements = this.elementsService.loadUsedElements(this.allElements);
      
    }
  
  
    onSave() {
   
      this.documentService.saveElement(this.elementToPush.address);
      this.router.navigate(['/workrequests']);
    }
  
    onSelect(elementId : string) {
    console.log("ID EL"+elementId);

     this.usedElements = this.elementsService.moveElementToUsedElements(elementId, this.usedElements);
     
     this.elementToPush = this.allElements.find(x=>x.id.toString()==elementId)!;
     console.log("EL TU PUS: "+this.elementToPush.address);
    // console.log("USED: "+this.usedElements.length);
     // console.log("ALL :"+this.allElements.length);
     this.allElements = this.allElements.filter(item => item.id.toString() != elementId);
     
    }
    onRemove(elementId : string) {
      
     console.log(elementId);
     this.allElements = this.elementsService.moveElementToAllElements(elementId, this.allElements);
     this.usedElements = this.usedElements.filter(item => item.id.toString() != elementId);
     
    }
  
  }
