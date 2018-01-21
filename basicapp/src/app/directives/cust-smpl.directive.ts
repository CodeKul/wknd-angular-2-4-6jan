import {
  Renderer2,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[custSmpl]'
})
export class CustSmplDirective implements OnInit{

  @HostBinding(`style.border`)
  brd: string;

  @HostBinding(`style.width`)
  wd: string;

  @Input(`custSmpl`)
  obj :{};

  @HostListener(`mouseenter`)
  whnIn() {
    this.wd = `500px`
  }

  @HostListener(`mouseleave`)
  whnOt() {
    this.wd = `300px`
  }

  @HostListener(`keyup`, ['$event'])
  whnKy(ky: KeyboardEvent) {
    console.log(ky)
  }

  constructor(
    private elRf: ElementRef,
    private rend: Renderer2
  ) {
    //elRf.nativeElement.style.border = '1px solid red'
    //this.rend.setStyle(elRf.nativeElement, 'border', '1px solid red');
    //this.brd = `1px solid red`
    //this.wd = `300px`
  }
  ngOnInit() {
    this.brd = this.obj['brd']
    this.wd = this.obj['wd']
  }
}
