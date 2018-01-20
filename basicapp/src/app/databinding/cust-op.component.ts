import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-cust-op',
  template: `
  <button (click)= "onBtn('primary')" type="button" class="btn btn-primary">Primary</button>

  <button (click)= "onBtn('secondary')" type="button" class="btn btn-secondary">Secondary</button>
  
  <button (click)= "onBtn('success')" type="button" class="btn btn-success">Success</button>
  
  <button (click)= "onBtn('info')" type="button" class="btn btn-info">Info</button>
  
  <button (click)= "onBtn('warning')" type="button" class="btn btn-warning">Warning</button>
  
  <button (click)= "onBtn('danger')" type="button" class="btn btn-danger">Danger</button>
  
  <button (click)= "onBtn('link')" type="button" class="btn btn-link">Link</button>
  `,
  styles: []
})
export class CustOpComponent implements OnInit {

  @Output()
  whBtn: EventEmitter<string>;

  constructor() {
    this.whBtn = new EventEmitter();
   }

  ngOnInit() {
  }

  onBtn(btn: string) {
    this.whBtn.emit(btn)
  }
}
