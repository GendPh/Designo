import { Component } from '@angular/core';
import e from 'express';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  NavButtonClick() {
    const buttonElement = document.getElementById('nav-button');
    const navBackDivElement = document.getElementById('nav-open-bg');
    const mobileNavBarElement = document.getElementById('mobile-nav-bar');
    const bodyElement = document.querySelector('body');

    if (buttonElement) {
      if (buttonElement.classList.contains('open')) {
        buttonElement.classList.replace('open', 'close');
        navBackDivElement.classList.remove('open');
        bodyElement.classList.remove('pointer-events-none', 'overflow-hidden');
        mobileNavBarElement.classList.add('close');
      } else {
        buttonElement.classList.replace('close', 'open');
        navBackDivElement.classList.add('open');
        bodyElement.classList.add('pointer-events-none', 'overflow-hidden');
        mobileNavBarElement.classList.remove('close');
      }
    }
  }
}
