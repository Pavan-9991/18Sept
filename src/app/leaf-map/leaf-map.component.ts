import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Icon, icon, Marker, marker } from 'leaflet';

@Component({
  selector: 'app-leaf-map',
  templateUrl: './leaf-map.component.html',
  styleUrls: ['./leaf-map.component.css']
})
export class LeafMapComponent {
  private defaultIcon: Icon = icon({
    iconUrl: 'assets/marker-icon.png',
    shadowUrl: 'assets/marker-shadow.png',
    iconSize: [21, 31], // => random values you have to choose right ones for your case
    iconAnchor: [10, 41], // => random values too
    popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]

  });


  private map: any;

  
  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    Marker.prototype.options.icon = this.defaultIcon;
    this.map = L.map('map', {
      center: [0, 0],
      zoom: 1, // Set your desired zoom level here
      zoomControl: false, // Disable zoom control
      dragging: false, // Disable map dragging
      scrollWheelZoom: false, // Disable scroll wheel zoom
      doubleClickZoom: false, // Disable double-click zoom
      boxZoom: false, // Disable box zoom
      keyboard: false // Disable keyboard navigation
    });

    // const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 15, // Set your desired fixed zoom level
    //   minZoom: 15,
    //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // });

    // tiles.addTo(this.map);

    
    

    
    
    var Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});
    Esri_WorldStreetMap.addTo(this.map)


// marker




const marker = L.marker([28.2096, 83.9856],).bindPopup('this is a popup')

.addTo(this.map);

const marker1 = L.marker([26.2041, 28.0473],).bindPopup('this is a popup')

.addTo(this.map);
  }


}
