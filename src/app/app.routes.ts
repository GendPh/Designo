import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { AppDesignComponent } from './app-design/app-design.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'web-design', component: WebDesignComponent },
  { path: 'app-design', component: AppDesignComponent },
  { path: 'graphic-design', component: GraphicDesignComponent },
  { path: 'about-us', component: AboutUsComponent },
  /* { path: '**', redirectTo: '/404' } */
];
