import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  tgl = false
  maSty = {
    border : `1px solid blue`
  }

  constructor() { }

  ngOnInit() {
  }

}
