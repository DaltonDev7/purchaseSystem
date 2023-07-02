import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitMeasurementListComponent } from './unit-measurement-list/unit-measurement-list.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: UnitMeasurementListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UnitMeasurementRoutingModule { }
