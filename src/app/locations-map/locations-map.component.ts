import { OnInit, Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Location } from '../../Model/location.model';

@Component({
  selector: 'app-locations-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locations-map.component.html',
  styleUrls: ['./locations-map.component.css']
})
export class LocationsMapComponent implements OnInit {
  private map: any;

  @Input('GetMapInf') mapConfig: Location | null = null;

  @Input('GetMapContainer') mapContainer = 'map';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  async ngOnInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const { default: L } = await import('leaflet');
        this.initMap(L);
      } catch (error) {
        console.error('Error loading Leaflet library:', error);
      }
    }
  }

  initMap(L: any): void {
    try {
      if (this.mapConfig && this.mapConfig.coordinates) {
        console.log('Initializing map with coordinates:', this.mapConfig.coordinates);
        this.map = L.map(this.mapContainer, { zoomControl: false }).setView(this.mapConfig.coordinates, 15);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        L.marker(this.mapConfig.coordinates).addTo(this.map);
      } else {
        console.error('Map configuration or coordinates are missing:', this.mapConfig);
      }
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }
}
