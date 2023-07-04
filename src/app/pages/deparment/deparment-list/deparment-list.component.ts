import { Component, OnInit } from '@angular/core';
import { ModalManagerService } from 'src/app/core/services/modal-manager.service';

@Component({
  selector: 'app-deparment-list',
  templateUrl: './deparment-list.component.html',
  styleUrls: ['./deparment-list.component.scss']
})
export class DeparmentListComponent implements OnInit {

  constructor(private modalManagerService: ModalManagerService) { }


  ngOnInit(): void {
    
  }

  public open(){
    this.modalManagerService.openDeparmentCreateEdit()
  }

}
