import { Component, HostBinding } from '@angular/core';
import { routeAnimationTrigger } from '../shared/triggerAnimations';
import { CommonModule } from '@angular/common';
import { LocationsDestinationComponent } from '../locations-destination/locations-destination.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, LocationsDestinationComponent,],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [routeAnimationTrigger,],
})
export class ContactComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
  nameInput: string = '';
  emailInput: string = '';
  phoneInput: string = '';
  messageInput: string = '';

  OnBlur(event: FocusEvent) {
    const inputElement = event.target as HTMLInputElement;
    const element = document.querySelector(`#${inputElement.id} + .error`);

    if (inputElement.value !== '') {
      element.classList.replace('show', 'hide');
    }
  }

  OnSubmit(e: Event) {
    e.preventDefault();

    if (this.nameInput === '') {
      const nameInputElement = document.querySelector('#nameInputEl + .error');
      if (nameInputElement) {
        nameInputElement.classList.replace('hide', 'show');
      }
    }

    if (this.emailInput === '') {
      const emailInputElement = document.querySelector('#emailInputEl + .error');
      if (emailInputElement) {
        emailInputElement.classList.replace('hide', 'show');
      }
    }

    if (this.phoneInput === '') {
      const phoneInputElement = document.querySelector('#phoneInputEl + .error');
      if (phoneInputElement) {
        phoneInputElement.classList.replace('hide', 'show');
      }
    }

    if (this.messageInput === '') {
      const messageInputElement = document.querySelector('#messageInputEl + .error');
      if (messageInputElement) {
        messageInputElement.classList.replace('hide', 'show');
      }
    }

    

    console.log('Name: ' + this.nameInput);
    console.log('Email: ' + this.emailInput);
    console.log('Phone: ' + this.phoneInput);
    console.log('Message: ' + this.messageInput);
  }
}
