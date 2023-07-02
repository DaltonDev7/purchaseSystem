import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeparmentListComponent } from './deparment-list/deparment-list.component';
import { DeparmentRoutingModule } from './deparment-routing.module';



@NgModule({
  declarations: [
    DeparmentListComponent
  ],
  imports: [
    CommonModule,
    DeparmentRoutingModule
  ]
})
export class DeparmentModule { }
