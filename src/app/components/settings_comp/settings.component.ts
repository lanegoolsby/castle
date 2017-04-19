import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../reducers/root.reducer';
import { ThingActions } from '../../actions/thing.actions';
import { THING_TYPES } from '../../reducers/thing.reducer';

@Component({
    selector: 'cstl-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
    readonly count$: Observable<number>;

    constructor(
        private ngRedux: NgRedux<IAppState>,
        private actions: ThingActions) {
        this.count$ = ngRedux.select<number>('count');
    }

    func() {
        this.ngRedux.dispatch(this.actions.add({ type: THING_TYPES.LIGHT, name: 'asdf', loading: false }));
    }
}
