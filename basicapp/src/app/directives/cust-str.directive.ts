import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[cst]'
})
export class CustStrDirective implements OnChanges {

  @Input()
  cst: boolean;

  constructor(
    private tmRf: TemplateRef<any>,
    private vcRf: ViewContainerRef
  ) {

  }

  ngOnChanges(): void {
    console.log(this.vcRf)
    if (!this.cst) {
      this.vcRf.createEmbeddedView(this.tmRf)
    }
    else {
      this.vcRf.clear()
    }
  }
}