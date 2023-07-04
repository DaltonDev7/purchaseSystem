import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditDeparmentComponent } from './create-edit-deparment.component';

describe('CreateEditDeparmentComponent', () => {
  let component: CreateEditDeparmentComponent;
  let fixture: ComponentFixture<CreateEditDeparmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEditDeparmentComponent]
    });
    fixture = TestBed.createComponent(CreateEditDeparmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
