import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeparmentListComponent } from './deparment-list/deparment-list.component';



const routes: Routes = [
  {
    path: '',
    component: DeparmentListComponent
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
