import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapContainerComponent implements OnInit {

  public map: Map;

  constructor() { }

  public ngOnInit(): void {
    this.map = new Map({
      target: 'map-canvas'
    });

    const osm = new OSM();

    const titleLayer = new TileLayer({
      source: new OSM()
    });

    this.map.addLayer(titleLayer);

    this.map.setView(
      new View({
        center: [0, 0],
        zoom: 1
      })
    );

  }

}
