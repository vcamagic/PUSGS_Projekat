import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { Element } from 'src/app/entities/element/element';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  list : Element[]= []

  constructor(private http: HttpClient) {

  }


  loadElements(): Observable<IElement[]>{
    return this.http.get<IElement[]>("https://localhost:44396/api/Elements");
  }
  loadUsedElements(allElementsInput : IElement[]): IElement[]{



    let allElements = allElementsInput;
    let usedElements = Array<IElement>();


   /* for(let element of allElements) {
      if (element.inSafetyDocument == true) {
        usedElements.push(element);

      }
    }*/


    return usedElements;
  }

  moveElementToUsedElements(id: string, usedElements: Element[]) : Element[]{

    let params = new HttpParams();
    params = params.append("id", id);
    this.http.put("https://localhost:44396/api/Elements/ChangeElement", null, {params: params})
    .subscribe(
      data => usedElements.push(data as Element)
    );
    return usedElements;
  }

  moveElementToAllElements(id: string, allElements: Element[]) : Element[]{

    console.log("Pomjerammm u sve");
    let params = new HttpParams();
    params = params.append("id", id);
    this.http.put("https://localhost:44396/api/Elements/RemoveElement", null, {params: params})
    .subscribe(
      data => allElements.push(data as Element)
    );
    return allElements;
  }

  saveElement(element: Element) {
    return this.http.post<Element>("https://localhost:44396/api/Elements/SaveElement", element); //httpoptions .pipe catch error..
  }


}

export interface IElement {
    type: string;
    id: number;
    name: string;
    address: string;
    coordinateX: string;
    coordinateY: string;
    inSafetyDocument: boolean;

}

