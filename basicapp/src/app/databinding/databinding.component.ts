import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  mobile = '9762548833'
  nm = 'android'
  typ = 'text'
  dt = ''
  brd = ''
  isJmb = false

  anNm = {
    nm: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onOkay() {
    this.dt = this.mobile
    this.brd = '1px solid red'
    this.isJmb = !this.isJmb
  }
}
