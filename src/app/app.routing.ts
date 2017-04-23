import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DevicesComponent } from './components/devices/devices.comp';
import { SettingsComponent } from './components/settings_comp/settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'settings', component: SettingsComponent }
];

export const routing = RouterModule.forRoot(routes);
