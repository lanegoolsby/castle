import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LeftNavComponent } from './components/leftnav/leftnav.component';
import { RoomComponent } from './components/room_comp/room.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: LeftNavComponent },
  { path: 'room', component: RoomComponent }
];

export const routing = RouterModule.forRoot(routes);
