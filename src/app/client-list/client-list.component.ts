import { OnInit, Input,Output ,EventEmitter,Component } from '@angular/core';
import {DataService} from '../data.service';
import {Table} from "../table";
import {Client} from "../client";
import { CLIENTS} from '../mocks'

@Component({
  moduleId: module.id,
  selector: 'client-list-comp',
  templateUrl: 'client-list.component.html',
  styleUrls: ['client-list.component.css'],
  providers: [DataService]
})
export class ClientListComponent implements OnInit  {
  @Input() table: Table;
  tables: Table[];
  clients: Client[] = CLIENTS;
  constructor(private dataService: DataService){}



clientCounter(){

  let sum=this.clients.length

  return sum;
}

  ngOnInit(){
    this.tables = this.dataService.getDataTables();
  }

}
