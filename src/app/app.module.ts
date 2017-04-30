import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import * as comps from './components';

import { routing } from './app.routing';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { KeepActions, RoomActions, ThingActions } from './actions/actions';

import { rootReducer, INITIAL_STATE, IAppState } from './reducers/root.reducer';

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
    AppComponent,
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
    KeepActions,
    ThingActions,
    RoomActions
  ],
  entryComponents: [
    comps.KeepModalDialogComponent,
    comps.RoomModalDialogComponent,
    comps.ThingModalDialogComponent,
    comps.DeleteModalDialogComponent
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
