import {OnInit, Input, Output, EventEmitter, Component} from '@angular/core';
import {DataService} from '../data.service';
import {Table} from "../table";
@Component({
  moduleId: module.id,
  selector: 'client-name-comp',
  templateUrl: 'client-name.component.html',
  styleUrls: ['client-name.component.css'],
  providers: [DataService]
})
export class ClientNameComponent implements OnInit {
  @Input() table: Table;
  tables: Table[];
  newClient: string = '';

  constructor(private dataService: DataService) {
  }

  addClientName(table: Table, newClient: string) {

    this.dataService.addClient(table, newClient);
    console.log(this.tables)
  }

  edit(tables: Table) {
    tables.clientName = '';
  }


  ngOnInit() {
    this.tables = this.dataService.getDataTables();
  }

}
