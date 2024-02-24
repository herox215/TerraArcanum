import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.scss']
})
export class MapDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Initialisieren der Karte
    const map = L.map('map', {
      center: [51.505, -0.09], // Dies sollte auf den Mittelpunkt Ihres Bildes angepasst werden
      zoom: 13
    });

    // Optional: Hinzufügen einer minimalen oder transparenten Basiskarte
    L.tileLayer('', {
      attribution: 'Your Attribution Here'
    }).addTo(map);

    // Pfad zu Ihrem Bild
    const imageUrl = './assets/map.png';
    // Geografische Koordinaten der Ecken Ihres Bildes
    const imageBounds: L.LatLngBoundsExpression = [
      [51.49, -0.08], // Untere linke Ecke
      [51.5, -0.06]  // Obere rechte Ecke
    ];

    // Hinzufügen Ihres Bildes als Overlay
    L.imageOverlay(imageUrl, imageBounds).addTo(map);
  }
}
