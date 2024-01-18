import { Component } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.css']
})
export class LeafletComponent {


  private map: any;

  private initMap(): void {
    

    //osm layer
    const map = L.map(this.map).setView([51.5,-0.09],13);
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/?mlat=29.860&mlon=67.852#map=5/29.860/67.852&layers=T.png',  {
     
      attribution: '&copy; <a href="https://www.openstreetmap.org/#map=0/30/8&layers=T">OpenStreetMap</a>',
      maxZoom: 10 ,
      minZoom:15,
    });

    tiles.addTo(this.map);
    L.marker([51.5,-0.09]).addTo(this.map)
      .bindPopup("Hello")
      .openPopup();

    //marker
    // const singleMarker1 = L.marker([27.113899,15.935186]).addTo(this.map);
    // singleMarker1.addTo(this.map);

    // const singleMarker2 = L.marker([20.5937, 78.9629]).addTo(this.map);
    // singleMarker2.addTo(this.map);

    // const singleMarker3 = L.marker([56.096555, 48.626517]).addTo(this.map);
    // singleMarker3.addTo(this.map);
    // const singleMarker4 = L.marker([56.096555, 48.626517]).addTo(this.map);
    // singleMarker4.addTo(this.map);

    // const popup = singleMarker1.bindPopup('This is a popup')
    // popup.addTo(this.map);


  }


  

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
   }


}
