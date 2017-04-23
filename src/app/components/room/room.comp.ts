import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { RoomActions, ThingActions } from '../../actions/actions';
import { IAppState } from '../../reducers/root.reducer';
import { Room } from '../../reducers/room';
import { Thing, THING_TYPES } from '../../reducers/thing';

@Component({
  selector: 'cstl-room',
  templateUrl: './room.comp.html',
  styleUrls: ['./room.comp.scss']
})
export class RoomComponent implements OnInit {
  readonly things$: Observable<Thing>;
  readonly rooms$: Observable<Room[]>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private thingActions: ThingActions,
    private roomActions: RoomActions) {
    this.things$ = ngRedux.select<Thing>('things');
    this.rooms$ = ngRedux.select<Room[]>('rooms');
  }


  ngOnInit() {
    console.log('Hello room');
  }

  increment() {
    let thing: Thing = {
      type: THING_TYPES.LIGHT,
      name: 'asdf',
      loading: false
    };

    this.ngRedux.dispatch(this.thingActions.add(thing));
    this.ngRedux.dispatch(this.roomActions.addThing(thing));
  }
  decrement() {
    this.ngRedux.dispatch(this.thingActions.remove(null));
    this.ngRedux.dispatch(this.roomActions.delete(null));
  }
}
