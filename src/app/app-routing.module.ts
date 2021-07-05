import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentsComponent } from './components/incidents/incidents.component';
import { LoginComponent } from './components/login/login.component';
import { NewIncidentComponent } from './components/incidents/new-incident/new-incident.component';
import { IncidentComponent } from './components/incidents/incident/incident.component';
import { RegisterComponent } from './components/register/register.component';
import { VerificationUserComponent } from './components/verification-user/verification-user.component';
import { NewWorkplanComponent } from './components/workplans/new-workplan/new-workplan.component';
import { WorkplanComponent } from './components/workplans/workplans.component';
import { AuthGuard } from 'src/guards/auth-guard';
import { WorkRequestsComponent } from './components/work-requests/work-requests.component';
import {NewRequestComponent } from './components/work-requests/new-request/new-request.component';
import {BasicInfoWrComponent } from './components/work-requests/basic-info-wr/basic-info-wr.component';
import {MultimediaWrComponent } from './components/work-requests/multimedia-wr/multimedia-wr.component';
import { HistoryWrComponent } from './components/work-requests/history-wr/history-wr.component';
import {EquipmentWrComponent} from './components/work-requests/equipment-wr/equipment-wr.component';
import { SafetydocumentComponent } from './components/safetydocument/safetydocument.component';
import { NewSdComponent } from './components/safetydocument/new-sd/new-sd.component';
import { BasicInfoSdComponent } from './components/safetydocument/basic-info-sd/basic-info-sd.component';
import { HistorySdComponent } from './components/safetydocument/history-sd/history-sd.component';
import { EquipmentSdComponent } from './components/safetydocument/equipment-sd/equipment-sd.component';
import { MultimediaSdComponent } from './components/safetydocument/multimedia-sd/multimedia-sd.component';
import { ChecklistSdComponent } from './components/safetydocument/checklist-sd/checklist-sd.component';
import { DevicesComponent } from './components/incidents/devices/devices.component';
const routes: Routes = [
  {
    path:"",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path : "login",
    component: LoginComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
  {
    path: "incidents",
    component: IncidentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"incidents/newincident",
    component: NewIncidentComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"reportincident",
    component: IncidentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "workplans",
    component: WorkplanComponent
  },
  {
    path:"workplans/newworkplan",
    component: NewWorkplanComponent
  },
  {
    path:"verify",
    component: VerificationUserComponent
  },

  {
    path:"safetydocuments",
    component: SafetydocumentComponent,
  },
  {
    path:"safetydocuments/new",
    component: NewSdComponent,
  },
  {
    path:"safetydocuments/new/basic-info",
    component: BasicInfoSdComponent,
  },
  {
    path:"safetydocuments/new/history",
    component: HistorySdComponent,
  },
  {
    path:"safetydocuments/new/equipment",
    component: EquipmentSdComponent,
  },
  {
    path:"safetydocuments/new/multimedia",
    component: MultimediaSdComponent,
  },
  {
    path:"safetydocuments/new/checklist",
    component: ChecklistSdComponent,
  },
  {
    path:"workrequests",
    component: WorkRequestsComponent,
  },
  {
    path: 'workrequests/new',
        component: NewRequestComponent,
  },

  {
    path:'workrequests/new/basic-info',
    component: BasicInfoWrComponent
  },
  {
    path:'workrequests/new/history',
    component:HistoryWrComponent
  },
  {
    path:'workrequests/new/multimedia',
    component:MultimediaWrComponent
  },
  {
    path:'workrequests/new/equipment',
    component:EquipmentWrComponent
  },
  {
    path: 'devices',
    component: DevicesComponent
  }



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
