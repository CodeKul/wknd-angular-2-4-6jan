import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  user: string;
  country: string;

  cards = [
    '', '', ''
  ]
  constructor(
    private rt: Router,
    private acRt: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.acRt)
    console.log(this.acRt.snapshot.params)
    this.user = this.acRt.snapshot.params.usNm

    this.acRt.params.subscribe(prms => this.user = prms.usNm)

    this.acRt.queryParams.subscribe(qprm => this.country = qprm.country)
  }

  callSelf(usNm: string) {
    this.rt.navigate(['dash', usNm])
  }
}
