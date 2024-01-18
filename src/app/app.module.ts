import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { LeafletComponent } from './leaflet/leaflet.component';
import { AmchartsmapComponent } from './amchartsmap/amchartsmap.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import { LeafMapComponent } from './leaf-map/leaf-map.component';
import { DarkshadeComponent } from './darkshade/darkshade.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    LeafletComponent,
    AmchartsmapComponent,
    LeafletMapComponent,
    LeafMapComponent,
    DarkshadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
