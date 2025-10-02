import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', loadComponent: () => import('./menu.component').then(m => m.MenuComponent) },
  { path: '**', redirectTo: '' }
];