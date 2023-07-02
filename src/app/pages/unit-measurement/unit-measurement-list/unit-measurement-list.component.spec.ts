import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitMeasurementListComponent } from './unit-measurement-list.component';

describe('UnitMeasurementListComponent', () => {
  let component: UnitMeasurementListComponent;
  let fixture: ComponentFixture<UnitMeasurementListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitMeasurementListComponent]
    });
    fixture = TestBed.createComponent(UnitMeasurementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
