import { OnInit, Input,Output ,EventEmitter,Component } from '@angular/core';
import {DataService} from '../data.service';
import {Table} from "../table";
@Component({
  moduleId: module.id,
  selector: 'seats-comp',
  templateUrl: 'seats.component.html',
  styleUrls: ['seats.component.css'],
  providers: [DataService]
})
export class SeatsComponent implements OnInit  {
  @Input() table: Table;
  tables: Table[];
  constructor(private dataService: DataService){}

  upQuantity(tables: Table) {
    if (tables.curClients < tables.maxSeats) tables.curClients++;
    let c = tables.curClients;
    for (let i: number = 0; i < tables.maxSeats; i++) {
      tables.seatsEmpty[i] = false;
      c--;
      if (c <= 0) break
    }
    console.log(tables.seatsEmpty);
  }

  downQuantity(tables: Table) {
    if (tables.curClients != 0) tables.curClients--;
    let i: number = tables.curClients;
    if (!tables.seatsEmpty[i]) {
      tables.seatsEmpty[i] = true;
    }


    console.log(tables.seatsEmpty);

  }
  ngOnInit(){
    this.tables = this.dataService.getDataTables();
  }

}

