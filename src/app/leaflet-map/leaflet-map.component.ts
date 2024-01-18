import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class LeafletMapComponent implements AfterViewInit {
  private map_Darkshade: any;

  private initMapDarkshade(): void {
    this.map_Darkshade = L.map('map-Darkshade', {
      center: [0, 0],
      zoom: 2,
      maxZoom: 2, 
      minZoom: 2,
    });

    var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      // maxZoom: 20
    });
    CartoDB_DarkMatter.addTo(this.map_Darkshade);

    // Create an array of marker data, including coordinates and custom icons
    const markerData = [
      {
        latlng: [17.385044, 78.486671] as L.LatLngExpression,
        iconUrl: 'assets/custom-icon1.png',
      },
      {
        latlng: [40.7128, -74.0060] as L.LatLngExpression,
        iconUrl: 'assets/green-color-icon.png',
      },
      {
        latlng: [-14.2350, -51.9253] as L.LatLngExpression,
        iconUrl: 'assets/marker-icon.png',
      },
      {
        latlng: [24.967100389831334, -106.72650845888246] as L.LatLngExpression,
        iconUrl: 'assets/brown-color.png',
      },
    ];

    for (const data of markerData) {
      const customIcon = L.icon({
        iconUrl: data.iconUrl,
        iconSize: [32, 32], // Adjust the size as needed
      });

      const marker = L.marker(data.latlng, { icon: customIcon }).addTo(this.map_Darkshade);
      marker.bindPopup('Popup content for marker'); // You can customize the popup content
    }
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.initMapDarkshade();
  }

}