import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitMeasurementListComponent } from './unit-measurement-list/unit-measurement-list.component';
import { UnitMeasurementRoutingModule } from './unit-measurement-routing.module';



@NgModule({
  declarations: [
    UnitMeasurementListComponent
  ],
  imports: [
    CommonModule,
    UnitMeasurementRoutingModule
  ]
})
export class UnitMeasurementModule { }
