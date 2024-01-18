import {Component, OnInit,  } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';

import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";



@Component({
  selector: 'app-amchartsmap',
  templateUrl: './amchartsmap.component.html',
  styleUrls: ['./amchartsmap.component.css']
})
export class AmchartsmapComponent implements OnInit {
  private chart: am4maps.MapChart | undefined;

  constructor() { }

  ngOnInit(): void {
    // Create a map instance
    this.chart = am4core.create('chartdiv', am4maps.MapChart);
    this.chart.geodata = am4geodata_worldLow;

    // Set the map projection
    this.chart.projection = new am4maps.projections.Miller();

    // Create a series for markers
    const series = this.chart.series.push(new am4maps.MapImageSeries());
    const imageTemplate = series.mapImages.template;
    imageTemplate.propertyFields.longitude = 'longitude';
    imageTemplate.propertyFields.latitude = 'latitude';
    imageTemplate.nonScaling = true;

    // Create a custom marker
    const marker = imageTemplate.createChild(am4core.Image);
    marker.href = 'custom-marker.png'; // Change this to your custom marker image URL
    marker.width = 20;
    marker.height = 20;
    marker.horizontalCenter = 'middle';
    marker.verticalCenter = 'middle';
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.dispose();
    }
  }
 
    
  }

