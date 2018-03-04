import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nums = [
    9978,
    64654,
    3232,
    93314,
    98656
  ]
  num = 123456
  nm = `Android`
  dt = new Date()

  js = {
    ver : 6,
    nm : 'Some'
  }
  constructor() { }

  ngOnInit() {
  }

  myFn() {
    return `something`
  }
}
