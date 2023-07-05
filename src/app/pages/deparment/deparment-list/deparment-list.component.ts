import { Component, OnInit } from '@angular/core';
import { Deparment } from 'src/app/core/models/deparment';
import { DeparmentService } from 'src/app/core/services/deparment.service';
import { ModalManagerService } from 'src/app/core/services/modal-manager.service';

@Component({
  selector: 'app-deparment-list',
  templateUrl: './deparment-list.component.html',
  styleUrls: ['./deparment-list.component.scss']
})
export class DeparmentListComponent implements OnInit {


  dataList!:Deparment[]

  constructor(private modalManagerService: ModalManagerService , private deparmentService :DeparmentService) { }


  ngOnInit(): void {
    this.deparmentService.list().subscribe({
      next:((data)=>{
        console.log(data);
        
         this.dataList = data
      })
    })
  }

  public open(){
    this.modalManagerService.openDeparmentCreateEdit()
  }

}
