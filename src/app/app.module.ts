import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IncidentsComponent } from './components/incidents/incidents.component';
import { NewIncidentComponent } from './components/new-incident/new-incident.component';
import { BasicInformationComponent } from './components/basic-information/basic-information.component';
import { DevicesComponent } from './components/devices/devices.component';
import { ResolutionComponent } from './components/resolution/resolution.component';
import { CallsComponent } from './components/calls/calls.component';
import { CrewComponent } from './components/crew/crew.component';
import { MultimediaComponent } from './components/multimedia/multimedia.component';
import { EquipmentComponent } from './components/equipment/equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    IncidentsComponent,
    NewIncidentComponent,
    BasicInformationComponent,
    DevicesComponent,
    ResolutionComponent,
    CallsComponent,
    CrewComponent,
    MultimediaComponent,
    EquipmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
