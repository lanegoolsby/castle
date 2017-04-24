import { Component, Input } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../../reducers/root.reducer';
import { ThingActions } from '../../../actions/actions';
import { Thing, THING_TYPES } from '../../../reducers/thing';

@Component({
    selector: 'cstl-thing',
    templateUrl: 'thing.comp.html'
})

export class ThingComponent {

    @Input() thing: Thing;
    THING_TYPES = THING_TYPES;

    constructor(
        private ngRedux: NgRedux<IAppState>,
        private thingActions: ThingActions) {

    }

    delete() {
        this.ngRedux.dispatch(this.thingActions.remove(this.thing));
    }
}
