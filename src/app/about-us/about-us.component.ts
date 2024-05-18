import { Component, HostBinding } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GetInTouchComponent } from '../get-in-touch/get-in-touch.component';
import { routeAnimationTrigger } from '../shared/triggerAnimations';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterLink, GetInTouchComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
  animations: [routeAnimationTrigger],
})
export class AboutUsComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
}
