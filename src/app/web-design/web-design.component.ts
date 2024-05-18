import { Component, HostBinding } from '@angular/core';
import { routeAnimationTrigger } from '../shared/triggerAnimations';
import { GetInTouchComponent } from '../get-in-touch/get-in-touch.component';
import { CommonModule } from '@angular/common';
import { ProjectDestinationsComponent } from '../project-destinations/project-destinations.component';

@Component({
  selector: 'app-web-design',
  standalone: true,
  imports: [CommonModule, ProjectDestinationsComponent, GetInTouchComponent,],
  templateUrl: './web-design.component.html',
  styleUrl: './web-design.component.css',
  animations: [routeAnimationTrigger]
})
export class WebDesignComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
}
