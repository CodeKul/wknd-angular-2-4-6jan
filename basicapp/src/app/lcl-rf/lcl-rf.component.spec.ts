import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LclRfComponent } from './lcl-rf.component';

describe('LclRfComponent', () => {
  let component: LclRfComponent;
  let fixture: ComponentFixture<LclRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LclRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LclRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
