import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrdersListComponent } from './purchase-orders-list/purchase-orders-list.component';
import { PurchaseOrdersRoutingModule } from './purchase-orders-routing.module';



@NgModule({
  declarations: [
    PurchaseOrdersListComponent
  ],
  imports: [
    CommonModule,
    PurchaseOrdersRoutingModule
  ]
})
export class PurchaseOrdersModule { }
