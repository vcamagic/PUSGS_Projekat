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

     
     

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
