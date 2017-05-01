import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'reducers';
import { ThingActions, ThingTypeActions } from 'actions';
import { Thing, ThingType } from 'model/index';
import { ModalTypes } from 'lib/constants';

@Component({
    selector: 'cstl-thing',
    templateUrl: 'thing.comp.html'
})

export class ThingComponent implements OnInit {
    modalTypes = ModalTypes;
    @Input() thing: Thing;
    thingType$: Observable<ThingType>;

    constructor(
        private ngRedux: NgRedux<IAppState>,
        private thingActions: ThingActions,
        private thingTypeActions: ThingTypeActions) {
    }

    ngOnInit() {
        this.ngRedux.dispatch(this.thingTypeActions.load());
        this.thingType$ = this.ngRedux.select<ThingType[]>('thingTypes').map(data => data.find(e => e.id === this.thing.thingTypeId));

        let t: ThingType = {
            id: -1,
            name: 'dummy ' + this.thing.name,
            loading: false
        };

        this.ngRedux.dispatch(this.thingTypeActions.add(t));
    }

    processModalResult(event) {
        if (event) {
            if (event.data.id) {
                this.ngRedux.dispatch(this.thingActions.edit(event.data));
            } else {
                this.ngRedux.dispatch(this.thingActions.add(event.data));
            }
        }
    }

    deleteThing() {
        this.ngRedux.dispatch(this.thingActions.remove(this.thing));
    }
}
