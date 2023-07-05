import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersListComponent } from './providers-list/providers-list.component';
import { ProvidersRoutingModule } from './providers-routing.module';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { EditProviderComponent } from './edit-provider/edit-provider.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProvidersListComponent,
    AddProviderComponent,
    EditProviderComponent
  ],
  imports: [
    CommonModule,
    ProvidersRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProvidersModule { }
