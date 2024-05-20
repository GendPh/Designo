import { Component, HostBinding } from '@angular/core';
import { routeAnimationTrigger } from '../shared/triggerAnimations';
import { LocationsMapComponent } from '../locations-map/locations-map.component';
import { CommonModule } from '@angular/common';
import { Location } from '../../Model/location.model';
import { GetInTouchComponent } from '../get-in-touch/get-in-touch.component';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, LocationsMapComponent, GetInTouchComponent,],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css',
  animations: [routeAnimationTrigger,],
})
export class LocationsComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
  locations = [
    new Location('Canada', '3886 Wellington Street', 'Toronto, Ontario M9C 3J5', ' + 1 253 - 863 - 8967', 'contact@designo.co', [43.6440066, -79.3945388]),
    new Location('Australia', '19 Balonne Street', 'New South Wales 2443', '(02) 6720 9092', 'contact@designo.au', [-30.3293985, 149.7870731]),
    new Location('United Kingdom', '13 Colorado Way', 'Rhyd-y-fro SA8 9GA', '078 3115 1400', 'contact@designo.uk', [51.732253, -3.861982]),
  ]
}
