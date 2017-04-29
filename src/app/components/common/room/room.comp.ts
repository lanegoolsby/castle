import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'reducers/root.reducer';
import { RoomActions, ThingActions } from 'actions/actions';
import { Room } from 'reducers/room';
import { Thing } from 'reducers/thing';
import { ModalTypes } from 'lib/constants';

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

    deleteRoom(event) {
        this.ngRedux.dispatch(this.roomActions.delete(event.data));
    }

    processModalResult(event) {
        if (event.data) {
            if (event.type === ModalTypes.ROOM) {
                if (event.data.id) {
                    this.ngRedux.dispatch(this.roomActions.edit(event.data));
                } else {
                    this.ngRedux.dispatch(this.roomActions.add(event.data));
                }
            } else {
                this.ngRedux.dispatch(this.thingActions.add(event.data));
            }
        }
    }
}
