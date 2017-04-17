import { Component, ChangeDetectionStrategy } from '@angular/core';

import '../style/app.scss';

@Component({
  selector: 'cstl-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Castle .01';
}
