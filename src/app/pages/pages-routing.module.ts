import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProvidersComponent } from './providers/providers.component';
import { ArticlesComponent } from './articles/articles.component';
import { DeparmentComponent } from './deparment/deparment.component';
import { PurchaseOrdersComponent } from './purchase-orders/purchase-orders.component';
import { UnitMeasurementComponent } from './unit-measurement/unit-measurement.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'providers',
    component: ProvidersComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'deparments',
    component: DeparmentComponent
  },
  {
    path: 'purchase-orders',
    component: PurchaseOrdersComponent
  },
  {
    path: 'unit-measurement',
    component: UnitMeasurementComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
