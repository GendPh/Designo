import { Component, HostBinding } from '@angular/core';
import { routeAnimationTrigger } from '../shared/triggerAnimations';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css',
  animations: [routeAnimationTrigger],
})
export class LocationsComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
}
