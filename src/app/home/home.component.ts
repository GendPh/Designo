import { Component, HostBinding, } from '@angular/core';
import { GetInTouchComponent } from '../get-in-touch/get-in-touch.component';
import { RouterLink } from '@angular/router';
import { routeAnimationTrigger } from '../shared/triggerAnimations';
import { ProjectDestinationsComponent } from '../project-destinations/project-destinations.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProjectDestinationsComponent, GetInTouchComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [routeAnimationTrigger]
})

export class HomeComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
}

