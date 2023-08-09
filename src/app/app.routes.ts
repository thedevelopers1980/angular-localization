import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', loadComponent: () => import('./home/home.component')},
  {path: 'feature', loadComponent: () => import('./feature/feature.component')},
  {path: 'privacy', loadComponent: () => import('./privacy/privacy.component')},
];
