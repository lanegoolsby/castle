import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LeftNavComponent } from './components/leftnav/leftnav.component';
import { RoomComponent } from './components/room_comp/room.component';
import { SettingsComponent } from './components/settings_comp/settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: LeftNavComponent },
  { path: 'room', component: RoomComponent },
  { path: 'settings', component: SettingsComponent }
];

export const routing = RouterModule.forRoot(routes);
