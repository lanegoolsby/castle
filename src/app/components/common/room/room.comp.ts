import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../../reducers/root.reducer';
import { RoomActions, ThingActions } from '../../../actions/actions';
import { Room } from '../../../reducers/room';
import { Thing, THING_TYPES } from '../../../reducers/thing';
import { ModalTypes } from '../../../lib/constants';

@Component({
    selector: 'cstl-room',
    templateUrl: 'room.comp.html'
})

export class RoomComponent {

    @Input() room: Room;
    things$: Observable<Thing[]>;
    modalTypes = ModalTypes;

    constructor(private ngRedux: NgRedux<IAppState>,
        private roomActions: RoomActions,
        private thingActions: ThingActions) {
        this.things$ = ngRedux.select<Thing[]>('things').map(data => data.filter(r => r.roomId === this.room.id));
    }

    delete() {
        this.ngRedux.dispatch(this.roomActions.delete(this.room));
    }
    addThing() {
        let thing: Thing = {
            id: Math.random(),
            roomId: this.room.id,
            type: THING_TYPES.LIGHT,
            name: 'Dummy',
            loading: false
        };

        this.ngRedux.dispatch(this.thingActions.add(thing));
    }

    processResult(event) {
        if (event) {
            if (event.id) {
                this.ngRedux.dispatch(this.roomActions.edit(event));
            } else {
                this.ngRedux.dispatch(this.roomActions.add(event));
            }
        }
    }
}
