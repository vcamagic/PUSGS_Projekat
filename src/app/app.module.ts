import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IncidentsComponent } from './components/incidents/incidents.component';
import { NewIncidentComponent } from './components/incidents/new-incident/new-incident.component'
import { BasicInformationComponent } from './components/incidents/basic-information/basic-information.component';
import { DevicesComponent } from './components/incidents/devices/devices.component';
import { ResolutionComponent } from './components/incidents/resolution/resolution.component';
import { CallsComponent } from './components/incidents/calls/calls.component';
import { CrewComponent } from './components/incidents/crew/crew.component';
import { MultimediaComponent } from './components/incidents/multimedia/multimedia.component';
import{IncidentComponent} from './components/incidents/incident/incident.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './components/register/register.component';
import { HistoryOfStateChangesComponent } from './components/workplans/history-of-state-changes/history-of-state-changes.component';
import { MultimediaAttachmentsComponent } from './components/workplans/multimedia-attachments/multimedia-attachments.component';
import { EquipmentComponent } from './components/workplans/equipment/equipment.component';
import { SwitchingInstructionsComponent } from './components/workplans/switching-instructions/switching-instructions.component';
import { WorkplanComponent } from './components/workplans/workplans.component';
import { NewWorkplanComponent } from './components/workplans/new-workplan/new-workplan.component';
import { BasicInfoComponent } from './components/workplans/basic-info/basic-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    IncidentsComponent,
    NewIncidentComponent,
    ResolutionComponent,
    CallsComponent,
    CrewComponent,
    DevicesComponent,
    BasicInformationComponent,
    MultimediaComponent,
    IncidentComponent,
    DashboardComponent,
    RegisterComponent,
    WorkplanComponent,
    HistoryOfStateChangesComponent,
    MultimediaAttachmentsComponent,
    EquipmentComponent,
    SwitchingInstructionsComponent,
    WorkplanComponent,
    BasicInformationComponent,
    NewWorkplanComponent,
    BasicInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
