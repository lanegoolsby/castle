import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing } from './app.routing';
import { rootReducer, INITIAL_STATE, IAppState } from './reducers/root.reducer';
import * as comps from './components';
import * as acts from './actions/actions';


import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    NgReduxModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule
  ],
  declarations: [
    comps.AppComponent,
    comps.HomeComponent,
    comps.DevicesComponent,
    comps.SettingsComponent,
    comps.KeepComponent,
    comps.RoomComponent,
    comps.ThingComponent,
    comps.EditModalDialogComponent,
    comps.KeepModalDialogComponent,
    comps.RoomModalDialogComponent,
    comps.ThingModalDialogComponent,
    comps.DeleteModalDialogComponent
  ],
  providers: [
    acts.KeepActions,
    acts.ThingActions,
    acts.RoomActions
  ],
  entryComponents: [
    comps.KeepModalDialogComponent,
    comps.RoomModalDialogComponent,
    comps.ThingModalDialogComponent,
    comps.DeleteModalDialogComponent
  ],
  bootstrap: [
    comps.AppComponent
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef,
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension) {
    const storeEnhancers = devTools.isEnabled() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(
      rootReducer,
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
