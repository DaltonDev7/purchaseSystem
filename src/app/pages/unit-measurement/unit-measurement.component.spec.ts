import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitMeasurementComponent } from './unit-measurement.component';

describe('UnitMeasurementComponent', () => {
  let component: UnitMeasurementComponent;
  let fixture: ComponentFixture<UnitMeasurementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitMeasurementComponent]
    });
    fixture = TestBed.createComponent(UnitMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
