import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DevicesComponent, SettingsComponent } from './components';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'settings', component: SettingsComponent }
];

export const routing = RouterModule.forRoot(routes);
