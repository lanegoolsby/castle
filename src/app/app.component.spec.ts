import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { StoreCreator } from 'redux';

import { ThingActions } from './things/things.actions';

const mockNgRedux: any = {
  configureStore: () => {},
  dispatch: () => {},
  select: () => {},
};
NgRedux.instance = mockNgRedux;

const mockDevToolsExtension = {
  isEnabled: () => false,
  enhancer: (): StoreCreator => null,
};

const mockThingActions = {
  increment: () => {},
  decrement: () => {},
};

describe('App', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
            providers: [
        { provide: NgRedux, useValue: mockNgRedux },
        { provide: DevToolsExtension, useValue: mockDevToolsExtension },
        { provide: ThingActions, useValue: mockThingActions },
      ],
    }).compileComponents();
  }));

  it('should have an url', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Castle .01');
  }));
});
