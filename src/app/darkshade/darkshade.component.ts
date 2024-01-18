import { Component,AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-darkshade',
  templateUrl: './darkshade.component.html',
  styleUrls: ['./darkshade.component.css']
})
export class DarkshadeComponent implements AfterViewInit {
  
  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();

    // Add markers with specific coordinates
    this.addMarker(40.7128, -74.0060, 'New York City');
    this.addMarker(34.0522, -118.2437, 'Los Angeles');
    this.addMarker(51.5074, -0.1278, 'London');
  }

  addMarker(latitude: number, longitude: number, title: string): void {
    const marker = L.marker([latitude, longitude]).addTo(this.map);
    marker.bindPopup(title); // Add a popup with the title to the marker
  }

}
