import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crew } from 'src/app/entities/crew';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

constructor(private http: HttpClient) { }


loadlCrew(): Observable<Crew[]>{
  return this.http.get<Crew[]>("https://localhost:44396/api/Crew/GetCrew");
}

readonly crewsUrl = 'https://localhost:44396/api/Crew/GetCrew';

getAllCrews(): Observable<Crew[]>{
  return this.http.get<Crew[]>(this.crewsUrl);
  this.http.get(this.crewsUrl)
}

saveCrew(crew: Crew){
  return this.http.post<Crew>("https://localhost:44396/api/Crew/AddCrew", crew)
  .subscribe(
    error=>console.log('oops', error)
  );
}
deleteCrew(id: string){
  const params = new HttpParams().append('id',id);

  return this.http.put("https://localhost:44396/api/Crew/DeleteCrew", null,{params: params})
  .subscribe(
    error=>console.log('oops', error)

  );
}
}
