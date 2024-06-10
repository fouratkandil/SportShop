import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritypayementComponent } from './securitypayement.component';

describe('SecuritypayementComponent', () => {
  let component: SecuritypayementComponent;
  let fixture: ComponentFixture<SecuritypayementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuritypayementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritypayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
