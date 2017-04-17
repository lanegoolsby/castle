import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { ThingActions } from '../../things/things.actions';
import { IAppState } from '../../store/root.types';

@Component({
  selector: 'cstl-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  readonly count$: Observable<number>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: ThingActions) {
    this.count$ = ngRedux.select<number>('count');
  }


  ngOnInit() {
    console.log('Hello room');
  }

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  }
  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }
}
