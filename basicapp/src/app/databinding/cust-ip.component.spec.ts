import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustIpComponent } from './cust-ip.component';

describe('CustIpComponent', () => {
  let component: CustIpComponent;
  let fixture: ComponentFixture<CustIpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustIpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
