/// <reference types='leaflet-sidebar-v2' />

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LeafletModule} from '@asymmetrik/ngx-leaflet';
import { OsmMapComponent} from "./osm-map/osm-map.component";
import { AppComponent } from './app.component';
import { NgxLeafletFullscreenModule } from '@runette/ngx-leaflet-fullscreen';
import { NgxLoadingControlModule } from '@runette/ngx-leaflet-loading';
import { NgxLeafletLocateModule } from '@runette/ngx-leaflet-locate';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxSidebarControlModule } from '@runette/ngx-leaflet-sidebar';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LeafletModule,
    NgxLeafletFullscreenModule,
    NgxLoadingControlModule,
    NgxLeafletLocateModule,
    MatSlideToggleModule,
    MatGridListModule,
    NgxSidebarControlModule
  ],
  declarations: [ AppComponent, OsmMapComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
