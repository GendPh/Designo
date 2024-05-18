import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'project-destinations',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-destinations.component.html',
  styleUrl: './project-destinations.component.css'
})
export class ProjectDestinationsComponent {
  @Input('HiddenProject') hidden: string = 'none';
}
