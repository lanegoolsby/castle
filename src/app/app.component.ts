import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { ThingActions } from './things/things.actions';
import { IAppState } from './store/root.types';

import '../style/app.scss';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Castle .01';
  readonly count$: Observable<number>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: ThingActions) {
    this.count$ = ngRedux.select<number>('count');
  }

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  }
  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }

}
