import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';

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
  }

}
