import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../../reducers/root.reducer';
import { Room } from '../../../reducers/room';
import { Thing } from '../../../reducers/thing';

@Component({
    selector: 'cstl-room',
    templateUrl: 'room.comp.html'
})

export class RoomComponent implements OnInit {

    @Input() room: Room;
    things$: Observable<Thing[]>;

    constructor(private ngRedux: NgRedux<IAppState>) {
        this.things$ = ngRedux.select<Thing[]>('things').map(data => data.filter(r => r.roomId === this.room.id));
    }

    ngOnInit() {

    }
    decrement() {
        this.ngRedux.dispatch(null);
    }
}
