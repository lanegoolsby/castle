import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss']
})
export class LeftNavComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello from Left Nav');
  }

}
