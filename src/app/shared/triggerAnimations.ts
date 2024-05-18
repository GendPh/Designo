import { trigger, transition, style, animate } from '@angular/animations';

export const routeAnimationTrigger = trigger('routeAnimationTrigger', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(300)
  ]),
]);
