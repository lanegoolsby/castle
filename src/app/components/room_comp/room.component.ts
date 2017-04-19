import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { ThingActions } from '../../actions/thing.actions';
import { IAppState } from '../../reducers/root.reducer';

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
    this.ngRedux.dispatch(this.actions.add(null));
  }
  decrement() {
    this.ngRedux.dispatch(this.actions.add(null));
  }
}
