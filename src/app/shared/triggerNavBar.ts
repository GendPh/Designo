export function CloseNavBar() {
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
    }
  }
}