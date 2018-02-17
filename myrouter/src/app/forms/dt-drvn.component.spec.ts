import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtDrvnComponent } from './dt-drvn.component';

describe('DtDrvnComponent', () => {
  let component: DtDrvnComponent;
  let fixture: ComponentFixture<DtDrvnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtDrvnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtDrvnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
