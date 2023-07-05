import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeparmentListComponent } from './deparment-list/deparment-list.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';



const routes: Routes = [
  {
    path: '',
    component: DeparmentListComponent
  },
  {
    path:'add',
    component:AddDepartmentComponent
  },
  {
    path:'edit/:id',
    component:EditDepartmentComponent
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
export class DeparmentRoutingModule { }
