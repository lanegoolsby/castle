import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../reducers/root.reducer';
// import { ThingActions } from '../../actions/actions';
// import { THING_TYPES } from '../../reducers/thing';

@Component({
    selector: 'cstl-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
    readonly count$: Observable<number>;

    constructor(
        private ngRedux: NgRedux<IAppState>) {
        this.count$ = ngRedux.select<number>('count');
    }

    func() {
        this.ngRedux.dispatch(null);
    }
}
