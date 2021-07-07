import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Consumer } from 'src/app/entities/consumers';
import { Router } from '@angular/router';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { ConsumersService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-new-consumer',
  templateUrl: './new-consumer.component.html',
  styleUrls: ['./new-consumer.component.css']
})
export class NewConsumerComponent implements OnInit {

  consumerForm!:FormGroup;

  nameR:boolean = false;
  surnameR:boolean = false;
  streetR:boolean = false;
  cityR:boolean = false;
  phoneR:boolean = false;
  typeR:boolean = false;

  constructor(private fb: FormBuilder, private consumerService:ConsumersService, private router:Router) { }

  ngOnInit(): void {

    this.consumerForm = this.fb.group({
        name: ['', [Validators.required]],
        surname: ['', [Validators.required]],
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        type: ['', [Validators.required]]
    })
  }


  save(){
    if(this.validate()){
      let consumer = new Consumer(this.consumerForm.controls.name.value, this.consumerForm.controls.surname.value, 
        this.consumerForm.controls.street.value, this.consumerForm.controls.city.value,
        this.consumerForm.controls.phone.value, this.consumerForm.controls.type.value);

      this.consumerService.saveConsumer(consumer);
      this.consumerService.setIdValue(-1);
      this.router.navigate(['/consumers']);
      
      }
  }

  validate():boolean{
    let retVal = true;
    if(this.consumerForm.controls.type.hasError('required')){
      this.typeR = true;
      retVal = false;
    }else{
      this.typeR = false;
    }
    if(this.consumerForm.controls.street.hasError('required')){
      this.streetR = true;
      retVal = false;
    }else{
      this.streetR = false;
    }
    if(this.consumerForm.controls.name.hasError('required')){
      this.nameR = true;
      retVal = false;
    }else{
      this.nameR = false;
    }
    if(this.consumerForm.controls.surname.hasError('required')){
      this.surnameR = true;
      retVal = false;
    }else{
      this.surnameR = false;
    }
    if(this.consumerForm.controls.phone.hasError('required')){
      this.phoneR = true;
      retVal = false;
    }else{
      this.phoneR = false;
    }
    if(this.consumerForm.controls.city.hasError('required')){
      this.cityR = true;
      retVal = false;
    }else{
      this.cityR = false;
    }

    return retVal;
  }

}
