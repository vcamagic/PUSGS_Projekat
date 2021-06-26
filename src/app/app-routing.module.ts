import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentsComponent } from './components/incidents/incidents.component';
import { LoginComponent } from './components/login/login.component';
import { NewIncidentComponent } from './components/incidents/new-incident/new-incident.component';
import { NewWorkplanComponent } from './components/workplans/new-workplan/new-workplan.component';
import { IncidentComponent } from './components/incidents/incident/incident.component';
import { WorkplanComponent } from './components/workplans/workplans.component';
import { RegisterComponent } from './components/register/register.component';

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
    path: "workplans",
    component: WorkplanComponent
  },
  {
    path:"incidents/newincident",
    component: NewIncidentComponent
  },
  {
    path:"workplans/newworkplan",
    component: NewWorkplanComponent
  },
  {
    path:"reportincident",
    component: IncidentComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
