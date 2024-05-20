import { Component, HostBinding } from '@angular/core';
import { routeAnimationTrigger } from '../shared/triggerAnimations';
import { CommonModule } from '@angular/common';
import { LocationsDestinationComponent } from '../locations-destination/locations-destination.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LocationsDestinationComponent,],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [routeAnimationTrigger,],
})
export class ContactComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
}
