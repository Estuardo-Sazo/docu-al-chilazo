import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'create/:document',
    loadComponent: () => import('./components/document-template/document-template.component').then((m) => m.DocumentTemplateComponent),
  },
];
