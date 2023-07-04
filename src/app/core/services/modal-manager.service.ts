import { Injectable } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CreateEditDeparmentComponent } from 'src/app/shared/components/create-edit-deparment/create-edit-deparment.component';

@Injectable({
  providedIn: 'root'
})
export class ModalManagerService {

  constructor(public dialog: MatDialog) {}

  public openDeparmentCreateEdit(){
    let dialogRef = this.dialog.open(CreateEditDeparmentComponent, {
      width: '550px',
    })
  }

}
