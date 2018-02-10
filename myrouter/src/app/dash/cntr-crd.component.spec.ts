import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CntrCrdComponent } from './cntr-crd.component';

describe('CntrCrdComponent', () => {
  let component: CntrCrdComponent;
  let fixture: ComponentFixture<CntrCrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CntrCrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CntrCrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
