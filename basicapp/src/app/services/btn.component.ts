import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  template: `
    <div>
      <input type="button" value="Okay" class="btn btn-info" (click)="btnClk()"/>
    </div>
  `,
  styles: []
})
export class BtnComponent implements OnInit {

  constructor(
    private dtSr : DataService
  ) { }

  ngOnInit() {
  }

  btnClk() {
    this.dtSr.chnMsg(new Date().toString())    
  }
}
