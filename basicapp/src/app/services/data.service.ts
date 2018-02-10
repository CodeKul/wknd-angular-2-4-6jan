import { OtherService } from './other.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/interval'

@Injectable()
export class DataService {

  msg: string;
  private em: EventEmitter<string>

  constructor(
    private othSr : OtherService
  ) {
    this.em = new EventEmitter()

    Observable.interval(1500).subscribe(
      it => this.chnMsg(new Date().toString())
    )
  }

  chnMsg(msg: string) {
    this.msg = msg
    this.em.emit(msg)
  }

  subMsgChng(cb: (msg: string) => void) {
    this.em.subscribe(msg =>
      cb(msg)
    )
  }
}
