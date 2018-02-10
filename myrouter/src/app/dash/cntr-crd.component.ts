import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cntr-crd',
  templateUrl: './cntr-crd.component.html',
  styleUrls: ['./cntr-crd.component.css']
})
export class CntrCrdComponent implements OnInit {

  constructor(
    private rt: Router,
    private actRt: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  child(btn: string) {
    if (btn === 'prf') {
      this.rt.navigate(['prf'], { relativeTo: this.actRt })
    } else {
      this.rt.navigate(['usr'], { relativeTo: this.actRt })
    }
  }
}
