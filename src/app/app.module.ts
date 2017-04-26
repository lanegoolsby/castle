import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DevicesComponent } from './components/devices/devices.comp';
import { SettingsComponent } from './components/settings_comp/settings.component';
import { KeepComponent } from './components/common/keep/keep.comp';
import { RoomComponent } from './components/common/room/room.comp';
import { ThingComponent } from './components/common/thing/thing.comp';
import { EditModalDialogComponent } from './components/common/modals/cstl.modal';
import { KeepModalDialogComponent } from './components/common/modals/keep.modal';
import { RoomModalDialogComponent } from './components/common/modals/room.modal';
import { ThingModalDialogComponent } from './components/common/modals/thing.modal';
import { DeleteModalDialogComponent } from './components/common/modals/delete.modal';

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
    HomeComponent,
    DevicesComponent,
    SettingsComponent,
    KeepComponent,
    RoomComponent,
    ThingComponent,
    EditModalDialogComponent,
    KeepModalDialogComponent,
    RoomModalDialogComponent,
    ThingModalDialogComponent,
    DeleteModalDialogComponent
  ],
  providers: [
    KeepActions,
    ThingActions,
    RoomActions
  ],
  entryComponents: [
    KeepModalDialogComponent,
    RoomModalDialogComponent,
    ThingModalDialogComponent,
    DeleteModalDialogComponent
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
