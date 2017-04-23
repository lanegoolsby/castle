import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../../reducers/root.reducer';
import { Keep } from '../../../reducers/keep';
import { Room } from '../../../reducers/room';

@Component({
    selector: 'cstl-keep',
    templateUrl: 'keep.comp.html'
})

export class KeepComponent implements OnInit {

    @Input() selectedKeep: Keep;
    rooms$: Observable<Room[]>;

    constructor(private ngRedux: NgRedux<IAppState>) {
        this.rooms$ = ngRedux.select<Room[]>('rooms').map(data => data.filter(r => r.keepId === this.selectedKeep.id));
    }

    ngOnInit() {
    }
    decrement() {
        this.ngRedux.dispatch(null);
    }
}
