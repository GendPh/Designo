import { Component } from '@angular/core';
import { GetInTouchComponent } from '../get-in-touch/get-in-touch.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GetInTouchComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

}
