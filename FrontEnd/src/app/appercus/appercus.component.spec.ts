import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppercusComponent } from './appercus.component';

describe('AppercusComponent', () => {
  let component: AppercusComponent;
  let fixture: ComponentFixture<AppercusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppercusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppercusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
