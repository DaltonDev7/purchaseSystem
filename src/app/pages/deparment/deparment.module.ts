import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeparmentListComponent } from './deparment-list/deparment-list.component';
import { DeparmentRoutingModule } from './deparment-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    DeparmentListComponent
  ],
  imports: [
    CommonModule,
    DeparmentRoutingModule,
    MatDialogModule,
    MatSlideToggleModule
  ]
})
export class DeparmentModule { }
