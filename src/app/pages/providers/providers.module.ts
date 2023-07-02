import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersListComponent } from './providers-list/providers-list.component';
import { ProvidersRoutingModule } from './providers-routing.module';



@NgModule({
  declarations: [
    ProvidersListComponent
  ],
  imports: [
    CommonModule,
    ProvidersRoutingModule
  ]
})
export class ProvidersModule { }
