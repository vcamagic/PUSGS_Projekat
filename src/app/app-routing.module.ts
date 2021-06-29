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
    component: IncidentsComponent
  },
  {
    path:"incidents/newincident",
    component: NewIncidentComponent
  },
  {
    path:"reportincident",
    component: IncidentComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
