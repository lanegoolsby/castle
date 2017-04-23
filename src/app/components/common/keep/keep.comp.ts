import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../../reducers/root.reducer';
import { Keep } from '../../../reducers/keep';
import { Room } from '../../../reducers/room';
import { RoomActions } from '../../../actions/actions';

@Component({
    selector: 'cstl-keep',
    templateUrl: 'keep.comp.html'
})

export class KeepComponent implements OnInit {

    @Input() selectedKeep: Keep;
    rooms$: Observable<Room[]>;

    constructor(private ngRedux: NgRedux<IAppState>,
        private roomActions: RoomActions) {
        this.rooms$ = ngRedux.select<Room[]>('rooms').map(data => data.filter(r => r.keepId === this.selectedKeep.id));
    }

    ngOnInit() {
    }
    add() {
        let room: Room = {
            id: Math.random(),
            keepId: this.selectedKeep.id,
            name: 'Dummy',
            loading: false
        };

        this.ngRedux.dispatch(this.roomActions.add(room));
    }
    decrement() {
        this.ngRedux.dispatch(null);
    }
}
