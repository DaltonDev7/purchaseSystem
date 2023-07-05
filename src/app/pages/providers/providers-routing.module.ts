import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProvidersListComponent } from './providers-list/providers-list.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { EditArticleComponent } from '../articles/edit-article/edit-article.component';
import { EditProviderComponent } from './edit-provider/edit-provider.component';


const routes: Routes = [
  {
    path: '',
    component: ProvidersListComponent
  },
  {
    path:'add',
    component: AddProviderComponent
  },
  {
    path:'edit/:id',
    component: EditProviderComponent
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
export class ProvidersRoutingModule { }
