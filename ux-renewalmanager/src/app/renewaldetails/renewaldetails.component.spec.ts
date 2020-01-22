import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewaldetailsComponent } from './renewaldetails.component';

describe('RenewaldetailsComponent', () => {
  let component: RenewaldetailsComponent;
  let fixture: ComponentFixture<RenewaldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewaldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
