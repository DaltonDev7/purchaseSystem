import { Component, OnInit } from '@angular/core';
import { ModalManagerService } from 'src/app/core/services/modal-manager.service';
import { ProvidersService } from 'src/app/core/services/providers.service';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.scss']
})
export class ProvidersListComponent implements OnInit {

  
  dataList!: any[]

  constructor(
    private modalManagerService: ModalManagerService, 
    private providerService: ProvidersService) { }


  ngOnInit(): void {
    this.providerService.list().subscribe({
      next: ((data) => {
        console.log(data);

        this.dataList = data
      })
    })
  }

  public open() {
    this.modalManagerService.openDeparmentCreateEdit()
  }

}
