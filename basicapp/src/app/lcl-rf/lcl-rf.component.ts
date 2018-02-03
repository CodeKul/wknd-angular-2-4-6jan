import { Component, OnInit, ElementRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-lcl-rf',
  templateUrl: './lcl-rf.component.html',
  styleUrls: ['./lcl-rf.component.css']
})
export class LclRfComponent implements OnInit {

  ttl: string;

  @ViewChild('anyThng')
  anything : ElementRef

  @ContentChild('anyThng')
  any1thing : ElementRef

  @ContentChild('any2Thng')
  any2thing : ElementRef

  constructor() { }

  ngOnInit() {
  }

  onBtn(anyThng?: string) {
    this.ttl = `${this.anything.nativeElement.value} and date is ${new Date().toString()} `
  }
}
