import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'apps/gridstackmf/remote2',
    loadChildren: () =>
      import('apps/gridstackmf/remote2/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'apps/gridstackmf/remote1',
    loadChildren: () =>
      import('apps/gridstackmf/remote1/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
