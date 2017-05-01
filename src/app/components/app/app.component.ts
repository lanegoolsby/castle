import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ThingTypeActions } from 'actions';

import '../../../style/app.scss';

@Component({
  selector: 'cstl-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'Castle';

  constructor(
    private thingTypeActions: ThingTypeActions) {
  }

  toggleNav(nav: any) {
    nav.toggle();
  }


  ngOnInit() {
    this.thingTypeActions.load();
  }
}
