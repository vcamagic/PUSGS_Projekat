import { Component, OnInit } from '@angular/core';
import { Consumer } from 'src/app/entities/consumers'
import { Router } from '@angular/router';
import { ConsumersService } from 'src/app/services/consumer.service';
import { SELECT_PANEL_INDENT_PADDING_X } from '@angular/material/select';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.css']
})
export class ConsumersComponent implements OnInit {

  consumers: Consumer[] = [];

  public page = 10;
  public pageSize = 5;

  activeId!:number;

  constructor(private router:Router, private consumerService: ConsumersService) { }

  ngOnInit(): void {
  this.consumerService.getConsumers().subscribe(
    data => {
      this.consumers = data as Consumer[];
    }
  )


  this.activeId = this.consumerService.getIdValue();
  if(this.activeId == -1){
    (async () => { 
      console.log("Primljena");
      await this.delay(1000);
      console.log("Izvrsena")
    this.consumerService.getConsumers().subscribe(
      data => {
        this.consumers = data as Consumer[];
      }
    )
  })();
    
  }

  }

newConsumer(){
  this.router.navigate(['consumers/newConsumer']);
}

delete(id:number){
  this.consumerService.deleteConsumer(id);
  this.consumers.forEach((item, index) => {
    if(item.id == id){
      this.consumers.splice(index, 1);
    }
  }
    )
}

modify(id:number){
  this.consumerService.setIdValue(id);
  this.router.navigate(['consumers/modifyConsumer']);
}

async delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}


}
