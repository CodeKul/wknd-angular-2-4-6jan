import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alt',
  template: `
    <div class="alert alert-success">
      {{msg}}
    </div>
  `,
  styles: []
})
export class AltComponent implements OnInit {

  msg = `This is alert box`
  constructor(
    private dtSr : DataService
  ) { }

  ngOnInit() {
    this.msg = this.dtSr.msg
    this.dtSr.subMsgChng( 
      msg => this.msg = msg
    )
  }
}
