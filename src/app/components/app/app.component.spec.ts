import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { FormsModule } from '@angular/forms';
import { StoreCreator } from 'redux';
import { MaterialModule } from '@angular/material';

import * as comps from 'components/index';
import { ThingActions } from 'actions';

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
        comps.AppComponent,
        comps.HomeComponent,
        comps.DevicesComponent,
        comps.KeepComponent,
        comps.RoomComponent,
        comps.ThingComponent,
        comps.EditModalDialogComponent
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
    const fixture = TestBed.createComponent(comps.AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Castle');
  }));
});
