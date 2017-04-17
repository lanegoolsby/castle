import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RoomComponent } from './components/room_comp/room.component';
import { SettingsComponent } from './components/settings_comp/settings.component';

import { routing } from './app.routing';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { ThingActions } from './things/things.actions';
import { IAppState } from './store/root.types';
import { roomReducer, INITIAL_STATE } from './things/things.reducer';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    NgReduxModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    RoomComponent,
    SettingsComponent
  ],
  providers: [
    ThingActions
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef,
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension) {
    const storeEnhancers = devTools.isEnabled() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(
      roomReducer,
      INITIAL_STATE,
      [],
      storeEnhancers);
  }

  hmrOnInit(store) {
    console.log('HMR store', store);
  }

  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
