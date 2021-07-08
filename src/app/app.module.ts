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

import { IncidentCrewComponent } from '../app/components/incidents/incident-crew/incident-crew.component';
import { MultimediaComponent } from './components/incidents/multimedia/multimedia.component';
import{IncidentComponent} from './components/incidents/incident/incident.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './components/register/register.component'
import { JwtModule } from '@auth0/angular-jwt'
import { VerificationUserComponent } from './components/verification-user/verification-user.component';
import { WorkplanComponent } from './components/workplans/workplans.component';
import { BasicInfoComponent } from './components/workplans/basic-info/basic-info.component';
import { EquipmentComponent } from './components/workplans/equipment/equipment.component';
import { HistoryOfStateChangesComponent } from './components/workplans/history-of-state-changes/history-of-state-changes.component';
import { MultimediaAttachmentsComponent } from './components/workplans/multimedia-attachments/multimedia-attachments.component';
import { NewWorkplanComponent } from './components/workplans/new-workplan/new-workplan.component';
import { SwitchingInstructionsComponent } from './components/workplans/switching-instructions/switching-instructions.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


import { AuthGuard } from 'src/guards/auth-guard';
import { WorkRequestsComponent } from './components/work-requests/work-requests.component';
import { BasicInfoWrComponent } from './components/work-requests/basic-info-wr/basic-info-wr.component';
import { EquipmentWrComponent } from './components/work-requests/equipment-wr/equipment-wr.component';
import { HistoryWrComponent } from './components/work-requests/history-wr/history-wr.component';
import { MultimediaWrComponent } from './components/work-requests/multimedia-wr/multimedia-wr.component';
import { NewRequestComponent } from './components/work-requests/new-request/new-request.component';
import { SafetydocumentComponent } from './components/safetydocument/safetydocument.component';
import { BasicInfoSdComponent } from './components/safetydocument/basic-info-sd/basic-info-sd.component';
import { HistorySdComponent } from './components/safetydocument/history-sd/history-sd.component';
import { ChecklistSdComponent } from './components/safetydocument/checklist-sd/checklist-sd.component';
import { NewSdComponent } from './components/safetydocument/new-sd/new-sd.component';
import { MultimediaSdComponent } from './components/safetydocument/multimedia-sd/multimedia-sd.component';
import { EquipmentSdComponent } from './components/safetydocument/equipment-sd/equipment-sd.component';
import { TableFilterPipe } from './components/pipes/table-filter.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import {CrewComponent} from './components/crew/crew.component';
import { MapComponent } from './components/map/map.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ConsumersComponent } from './components/consumers/consumers/consumers.component';
import { ModifyConsumerComponent } from './components/consumers/modify-consumer/modify-consumer.component';
import { NewConsumerComponent } from './components/consumers/new-consumer/new-consumer.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AdminSettingsComponent } from './components/admin-settings/admin-settings.component';
import { DevicesAllComponent } from './components/devices-all/devices-all.component';

export function tokenGetter(){
  return localStorage.getItem('jwt');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    IncidentsComponent,
    NewIncidentComponent,
    ResolutionComponent,
    CallsComponent,
    IncidentCrewComponent,
    DevicesComponent,
    BasicInformationComponent,
    MultimediaComponent,
    IncidentComponent,
    DashboardComponent,
    RegisterComponent,
    VerificationUserComponent,
    WorkplanComponent,
    BasicInfoComponent,
    EquipmentComponent,
    HistoryOfStateChangesComponent,
    MultimediaAttachmentsComponent,
    NewWorkplanComponent,
    SwitchingInstructionsComponent,
    WorkRequestsComponent,
    BasicInfoWrComponent,
    EquipmentWrComponent,
    HistoryWrComponent,
    MultimediaWrComponent,
    NewRequestComponent,
    SafetydocumentComponent,
    BasicInfoSdComponent,
    HistorySdComponent,
    ChecklistSdComponent,
    NewSdComponent,
    MultimediaSdComponent,
    EquipmentSdComponent,
    TableFilterPipe,
    ProfileComponent,
    CrewComponent,
    MapComponent,
    NotificationsComponent,
    ConsumersComponent,
    ModifyConsumerComponent,
    NewConsumerComponent,
    SettingsComponent,
    AdminSettingsComponent,
    DevicesAllComponent
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
    NgbModule,
    NgMultiSelectDropDownModule,
    NgSelectModule,
    JwtModule.forRoot({
      config: {
        tokenGetter : tokenGetter,
        allowedDomains: ["localhost:44396","localhost:5000"],
        disallowedRoutes: []
      }
    }),
    BrowserAnimationsModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSortModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    NgxDropzoneModule

  ],
  providers: [AuthGuard,
    DatePipe,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
