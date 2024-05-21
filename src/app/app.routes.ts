import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { AppDesignComponent } from './app-design/app-design.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LocationsComponent } from './locations/locations.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent, },
  { path: 'web-design', title: 'Web Design', component: WebDesignComponent, },
  { path: 'app-design', title: 'App Design', component: AppDesignComponent, },
  { path: 'graphic-design', title: 'Graphic Design', component: GraphicDesignComponent, },
  { path: 'about-us', title: 'About Us', component: AboutUsComponent, },
  { path: 'locations', title: 'Locations', component: LocationsComponent, },
  { path: 'contact', title: 'Contact', component: ContactComponent, },
  { path: '**', redirectTo: '' }
];
