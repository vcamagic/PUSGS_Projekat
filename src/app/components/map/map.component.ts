
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Crew } from 'src/app/entities/crew';
import { CrewService } from 'src/app/services/crew.service';
import {MapService} from 'src/app/services/map.service';
import {Map} from 'src/app/entities/map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public maxLat = 45.26;
  public minLat = 45.23;

  public x! : number;
  public y! : number;
  private map: any;
  private centroid: L.LatLngExpression = [45.267136, 19.833549];
  public allCrews: Crew[] = [];
  public allMaps : Map[] = [];

 
  private initMap(): void{
    this.map = L.map('map', {
      center:this.centroid,
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    const crew = L.icon({
      iconUrl: '/assets/crew.jpg',
      iconSize: [41, 25]
      // ...
   });
   const incident = L.icon({
    iconUrl: '/assets/incident.jpg',
    iconSize: [25, 25]
    // ...
 });



    tiles.addTo(this.map);

   
        

        this.allMaps.forEach(element => {
        this.x = parseFloat(element.x);
        this.y = parseFloat(element.y);
        
        L.marker([ this.x, this.y], {icon:crew}).addTo(this.map).bindPopup("Name of crew: " + element.crewName + ", Id: " + element.id);
        L.marker([ this.x + 0.1, this.y + 0.1], {icon:incident}).addTo(this.map).bindPopup("Incident id: " + element.incidentId ); 
        });
   
        
  

    //nakon klika na mapu kordinate se smestaju u ove dve promenjice
    var xlng;
    var xlat;

    //klik na mapu
    this.map.on('click', function(e:any){
      console.log(e.latlng.lat,e.latlng.lng);
      xlng=e.latlng.lng
      xlat=e.latlng.lat
    });



  }


  constructor(private crewService: CrewService,private mapService: MapService) {
    this.map = "";
    
    
   }

  ngOnInit() {
   /* this.crewService.loadlCrew().subscribe(data => {this.allCrews = data as Crew[]
      console.log(this.allCrews);*/
      
      this.mapService.loadMap().subscribe(data2 => {this.allMaps = data2 as Map[]
      console.log(this.allMaps);
      this.initMap();
      
    });
   

    
  }

  
}