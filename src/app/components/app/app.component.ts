import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import '../../../style/app.scss';

@Component({
  selector: 'cstl-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'Castle';

  constructor() {
  }

  toggleNav(nav: any) {
    nav.toggle();
  }


  ngOnInit() {
  }
}
