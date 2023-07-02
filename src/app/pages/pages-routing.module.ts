import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'providers',
    loadChildren : () => import('./providers/providers.module').then( m => m.ProvidersModule)
  },
  {
    path: 'articles',
    loadChildren : () => import('./articles/article.module').then( m => m.ArticleModule)
  },
  {
    path: 'deparments',
    loadChildren : () => import('./deparment/deparment.module').then( m => m.DeparmentModule)
  },
  {
    path: 'purchase-orders',
    loadChildren : () => import('./purchase-orders/purchase-orders.module').then( m => m.PurchaseOrdersModule)
  },
  {
    path: 'unit-measurement',
    loadChildren : () => import('./unit-measurement/unit-measurement.module').then( m => m.UnitMeasurementModule)
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
