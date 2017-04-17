import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cstl-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello from Settings');
  }

}
