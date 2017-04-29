import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'reducers/root.reducer';
import { Keep } from 'model/index';
import { KeepActions } from 'actions/actions';
import { ModalTypes } from 'lib/constants';

@Component({
  selector: 'cstl-devices',
  templateUrl: './devices.comp.html',
  styleUrls: ['./devices.comp.scss']
})
export class DevicesComponent {
  readonly keeps$: Observable<Keep[]>;
  readonly modalTypes = ModalTypes;
  readonly selectedKeep: Keep;

  constructor(
    private keepActions: KeepActions,
    private ngRedux: NgRedux<IAppState>) {
    this.keeps$ = ngRedux.select<Keep[]>('keeps');
  }

  processResult(event) {
    if (event.data) {
      if (event.data.id) {
        this.ngRedux.dispatch(this.keepActions.edit(event.data));
      } else {
        this.ngRedux.dispatch(this.keepActions.add(event.data));
      }
    }
  }
}
