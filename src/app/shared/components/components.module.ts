import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditDeparmentComponent } from './create-edit-deparment/create-edit-deparment.component';
import { CreateEditArticleComponent } from './create-edit-article/create-edit-article.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    CreateEditDeparmentComponent,
    CreateEditArticleComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports:[
    CreateEditDeparmentComponent,
    CreateEditArticleComponent
  ]
})
export class ComponentsModule { }
