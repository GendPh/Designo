import { Component, HostBinding } from '@angular/core';
import { routeAnimationTrigger } from '../shared/triggerAnimations';
import { ProjectDestinationsComponent } from '../project-destinations/project-destinations.component';
import { GetInTouchComponent } from '../get-in-touch/get-in-touch.component';

@Component({
  selector: 'app-graphic-design',
  standalone: true,
  imports: [ProjectDestinationsComponent, GetInTouchComponent],
  templateUrl: './graphic-design.component.html',
  styleUrl: './graphic-design.component.css',
  animations: [routeAnimationTrigger],
})
export class GraphicDesignComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
}

