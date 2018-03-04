import { Observable } from 'rxjs/Observable';
import { RootObject } from './domain';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class WebService {

  private readonly weather = `https://api.openweathermap.org/data/2.5/weather?APPID=7406c21bb1cb9f59d936a59c4e890279`

  private errHnd(err) {
    console.log(err)
  }

  constructor(
    private http: HttpClient
  ) {
    this.myObservable().subscribe(
      cnt => console.log(cnt)
    )
  }

  weatherByCity(city: string, cb: (res: RootObject) => void) {
    this.http.get(`${this.weather}&q=${city}`).subscribe(
      res => cb(res as RootObject),
      this.errHnd,
      () => console.log(`Completed`)
    )
  }

  makeCalc(num1: number, op: string, num2: number, cb: (res) => void) {

    let reqObj = {
      num1: num1,
      operation: op,
      num2: num2
    }

    let opts = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    this.http.post(
      'http://localhost:3000/calcv2',
      reqObj,
      opts
    ).subscribe(
      res => cb(res),
      this.errHnd
    )
  }

  myObservable(): Observable<number> {
    return Observable.create(
      sub => {
        for (let i = 0; i < 100; i++) {
          sub.next(i)
        }
        sub.complete()
      }
    );
  }
}
