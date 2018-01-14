import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sample-ui',
  templateUrl: './sample-ui.component.html',
  styleUrls: ['./sample-ui.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class SampleUiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
