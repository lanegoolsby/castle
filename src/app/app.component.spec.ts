import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';

import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { FormsModule } from '@angular/forms';
import { StoreCreator } from 'redux';

import { ThingActions } from './actions/actions';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DevicesComponent } from './components/devices/devices.comp';
import { KeepComponent } from './components/common/keep/keep_comp';

const mockNgRedux: any = {
  configureStore: () => { },
  dispatch: () => { },
  select: () => { },
};
NgRedux.instance = mockNgRedux;

const mockDevToolsExtension = {
  isEnabled: () => false,
  enhancer: (): StoreCreator => null,
};

const mockThingActions = {
  increment: () => { },
  decrement: () => { },
};

describe('App', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule.forRoot(),
        FormsModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        DevicesComponent,
        KeepComponent
      ],
      providers: [
        { provide: NgRedux, useValue: mockNgRedux },
        { provide: DevToolsExtension, useValue: mockDevToolsExtension },
        { provide: ThingActions, useValue: mockThingActions },
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
    }).compileComponents();
  }));

  it('should have an url', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Castle');
  }));
});
