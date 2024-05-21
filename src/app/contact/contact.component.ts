import { Component, HostBinding } from '@angular/core';
import { routeAnimationTrigger } from '../shared/triggerAnimations';
import { CommonModule, } from '@angular/common';
import { LocationsDestinationComponent } from '../locations-destination/locations-destination.component';
import { FormsModule, } from '@angular/forms';


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
  emailErrorMessage: string = 'Can´t be Empty';
  phoneInput: string = '';
  messageInput: string = '';

  SetName(e: Event): void {
    const inputElement = e.target as HTMLInputElement;
    this.nameInput = inputElement.value;
  }

  SetEmail(e: Event): void {
    const inputElement = e.target as HTMLInputElement;
    this.emailInput = inputElement.value;
  }
  SetPhone(e: Event): void {
    const inputElement = e.target as HTMLInputElement;
    this.phoneInput = inputElement.value;
  }
  SetMessage(e: Event): void {
    const inputElement = e.target as HTMLInputElement;
    this.messageInput = inputElement.value;
  }





  OnBlur(event: FocusEvent) {
    const inputElement = event.target as HTMLInputElement;
    const element = document.querySelector(`#${inputElement.id} + .error`);

    if (inputElement.value !== '') {
      element.classList.replace('show', 'hide');
    }
  }

  OnSubmit(e: Event) {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    const nameInputElement = document.querySelector('#nameInputEl + .error');
    const emailInputElement = document.querySelector('#emailInputEl + .error');
    const phoneInputElement = document.querySelector('#phoneInputEl + .error');
    const messageInputElement = document.querySelector('#messageInputEl + .error');

    if (this.nameInput === '') {
      if (nameInputElement) {
        nameInputElement.classList.replace('hide', 'show');
      }
    }

    if (this.emailInput === '') {
      if (emailInputElement) {
        this.emailErrorMessage = 'Can´t be Empty';
        emailInputElement.classList.replace('hide', 'show');
      }
    }

    if (!emailRegex.test(this.emailInput) && this.emailInput !== '') {
      if (emailInputElement) {
        emailInputElement.classList.replace('hide', 'show');
        this.emailErrorMessage = 'Please use a valid email address';
      }
    }

    if (this.phoneInput === '') {
      if (phoneInputElement) {
        phoneInputElement.classList.replace('hide', 'show');
      }
    }

    if (this.messageInput === '') {
      if (messageInputElement) {
        messageInputElement.classList.replace('hide', 'show');
      }
    }

    if (this.nameInput !== '' && this.emailInput !== '' && emailRegex.test(this.emailInput) && this.phoneInput !== '' && this.messageInput !== '') {
      this.nameInput = '';
      this.emailInput = '';
      this.phoneInput = '';
      this.messageInput = '';
    }
  }
}

