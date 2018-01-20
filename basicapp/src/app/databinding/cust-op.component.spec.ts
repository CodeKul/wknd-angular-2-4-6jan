import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustOpComponent } from './cust-op.component';

describe('CustOpComponent', () => {
  let component: CustOpComponent;
  let fixture: ComponentFixture<CustOpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustOpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
