import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeparmentListComponent } from './deparment-list/deparment-list.component';
import { DeparmentRoutingModule } from './deparment-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DeparmentListComponent,
    AddDepartmentComponent,
    EditDepartmentComponent
  ],
  imports: [
    CommonModule,
    DeparmentRoutingModule,
    MatDialogModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ]
})
export class DeparmentModule { }
