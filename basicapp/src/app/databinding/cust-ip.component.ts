import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-cust-ip',
  template: `
   <div [class]="cls">
   <strong>Well done!</strong> {{inf}}
   </div>  
  `,
  styles: []
})
export class CustIpComponent implements OnInit, OnChanges {

  @Input()
  alTy: string;

  @Input()
  inf: string;

  cls: string;

  constructor() { }

  ngOnInit() {
    this.cls = `alert ${this.alTy}`
  }

  ngOnChanges() {
    if (this.alTy === 'success') this.cls = `alert alert-success`
    else if (this.alTy === 'danger') this.cls = `alert alert-danger`
    else if (this.alTy === 'info') this.cls = `alert alert-info`
    else if (this.alTy === 'warning') this.cls = `alert alert-warning`
  }
}
