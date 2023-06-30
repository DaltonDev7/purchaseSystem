import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeparmentComponent } from './deparment/deparment.component';
import { ProvidersComponent } from './providers/providers.component';
import { ArticlesComponent } from './articles/articles.component';
import { UnitMeasurementComponent } from './unit-measurement/unit-measurement.component';
import { PurchaseOrdersComponent } from './purchase-orders/purchase-orders.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    DashboardComponent,
    DeparmentComponent,
    ProvidersComponent,
    ArticlesComponent,
    UnitMeasurementComponent,
    PurchaseOrdersComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
