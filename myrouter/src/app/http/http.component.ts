import { Observable } from 'rxjs/Observable';
import { RootObject } from './domain';
import { WebService } from './web.service';
import { Component, OnInit } from '@angular/core';
import { IntervalObservable } from "rxjs/observable/IntervalObservable"

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers: [WebService]
})
export class HttpComponent implements OnInit {

  wthr: RootObject;
  rslt : number
  cntr : number = 0;

  constructor(
    private web: WebService
  ) { }

  ngOnInit() {
    IntervalObservable.create(2500).subscribe(
      () => this.cntr += 2
    )
  }

  goClicked(city: string) {
    this.web.weatherByCity(city, res => {
      this.wthr = res
      console.log(res)
    })
    console.log(`Btn clicked`)
  }

  calc(num1: number, op: string, num2: number) {
    this.web.makeCalc(num1, op, num2, res => {
      this.rslt = res.res
      console.log(res)
    })
  }
}
