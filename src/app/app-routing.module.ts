import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentsComponent } from './components/incidents/incidents.component';
import { LoginComponent } from './components/login/login.component';
import { NewIncidentComponent } from './components/incidents/new-incident/new-incident.component';
import { IncidentComponent } from './components/incidents/incident/incident.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
