import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/directivas/directivas.component').then(
        (m) => m.DirectivasComponent
      ),
  },
];
