import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home Page',
    loadChildren: () =>
      import('./app/shared/shared.module').then((m) => m.SharedModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
