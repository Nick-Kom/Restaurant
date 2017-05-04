import {Component,Input} from '@angular/core'
import {Table} from '../table'
import {Dish} from '../dish'
import {Client} from '../client'
import {TABLES, DISHES, CLIENTS} from '../mocks'

@Component({
  moduleId: module.id,
  selector: 'panel-app',
  templateUrl: 'panel.component.html',
  styleUrls: ['panel.component.css']


})
export class PanelComponent {
  title = 'Ресторан';
  tables: Table[];
  dishes: Dish[];
  clients: Client[];
  ngOnInit() {
    this.tables = TABLES;
    this.dishes = DISHES;
    this.clients = CLIENTS;
  }



  deleteDish(dish: Dish, table: Table) {
    let indexToRemove = table.order.indexOf(dish);
    table.order.splice(indexToRemove, 1);

    table.totalCheck = table.order.reduce((prev, cur) => prev + cur.price, 0);

  }




  totalCheck(table: Table) {
    let obj = {
      name: table.clientName,
      tableName: table.tableName,
      order: table.order,
      orderedSeats: table.curClients,
      totalCheck: table.totalCheck
    };
    table.clientName='';
    table.order=[];
    table.seatsEmpty=[true,true];
    table.curClients=0;
    table.totalCheck=0;

    this.clients.push(obj);
    console.log(this.clients);

  }

}
