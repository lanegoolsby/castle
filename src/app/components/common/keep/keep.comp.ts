import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../../reducers/root.reducer';
import { Keep } from '../../../reducers/keep';
import { Room } from '../../../reducers/room';
import { RoomActions, KeepActions } from '../../../actions/actions';
import { ModalTypes } from '../../../lib/constants';

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
        private roomActions: RoomActions,
        private keepActions: KeepActions) {
        this.rooms$ = ngRedux.select<Room[]>('rooms').map(data => data.filter(r => r.keepId === this.selectedKeep.id));
    }

    processResult(event) {
        if (event) {
            if (event.id) {
                this.ngRedux.dispatch(this.roomActions.add(event));
            } else {
                this.ngRedux.dispatch(this.keepActions.add(event));
            }
        }
    }
}
