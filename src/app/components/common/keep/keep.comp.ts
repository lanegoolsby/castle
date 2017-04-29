import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'reducers/root.reducer';
import { Keep, Room } from 'model/index';
import { RoomActions } from 'actions/actions';
import { ModalTypes } from 'lib/constants';

@Component({
    selector: 'cstl-keep',
    templateUrl: 'keep.comp.html'
})

export class KeepComponent {

    @Input() selectedKeep: Keep;
    rooms$: Observable<Room[]>;
    modalTypes = ModalTypes;

    constructor(
        private ngRedux: NgRedux<IAppState>,
        private roomActions: RoomActions) {
        this.rooms$ = ngRedux.select<Room[]>('rooms').map(data => data.filter(r => r.keepId === this.selectedKeep.id));
    }

    processResult(event) {
        if (event.data) {
            if (event.data.id) {
                this.ngRedux.dispatch(this.roomActions.edit(event.data));
            } else {
                this.ngRedux.dispatch(this.roomActions.add(event.data));
            }
        }
    }
}
