import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseOrdersListComponent } from './purchase-orders-list/purchase-orders-list.component';



const routes: Routes = [
  {
    path: '',
    component: PurchaseOrdersListComponent
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
export class PurchaseOrdersRoutingModule { }
