import { Component, HostBinding } from '@angular/core';
import { ProjectDestinationsComponent } from '../project-destinations/project-destinations.component';
import { GetInTouchComponent } from '../get-in-touch/get-in-touch.component';
import { routeAnimationTrigger } from '../shared/triggerAnimations';

@Component({
  selector: 'app-app-design',
  standalone: true,
  imports: [ProjectDestinationsComponent, GetInTouchComponent],
  templateUrl: './app-design.component.html',
  styleUrl: './app-design.component.css',
  animations: [routeAnimationTrigger]
})
export class AppDesignComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
}
