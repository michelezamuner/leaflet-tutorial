import { Component, OnDestroy } from '@angular/core';
import { latLng, Map, MapOptions, tileLayer } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  public options: MapOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        opacity: 0.7,
        maxZoom: 19,
        detectRetina: true,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
    ],
    zoom: 1,
    center: latLng(0, 0)
  }
  public map: Map;

  ngOnDestroy() {
    this.map.clearAllEventListeners();
    this.map.remove();
  }

  onMapReady(map: Map) {
    this.map = map;
  }
}
