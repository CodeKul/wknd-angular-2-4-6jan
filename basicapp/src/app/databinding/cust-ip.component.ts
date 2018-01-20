import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-cust-ip',
  template: `
   <div [class]="cls">
   <strong>Well done!</strong> {{inf}}
   </div>  
  `,
  styles: []
})
export class CustIpComponent implements OnInit {

  @Input()
  alTy: string;

  @Input()
  inf: string;

  cls : string;

  constructor() { }

  ngOnInit() {
    this.cls = `alert ${this.alTy}`
  }
}
