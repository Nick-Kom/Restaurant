import {Injectable, Input} from '@angular/core';
import {Table} from './table';
import {TABLES} from './mocks';
import {DISHES} from './mocks';
import {Dish} from "./dish";

export class DataService {
  private data: Table[] = TABLES;
  private dataDishes: Dish[] = DISHES;


  getDataDishes(): Dish[] {

    return this.dataDishes;
  }

  getDataTables(): Table[] {

    return this.data;
  }


  addDataDishes(table: Table, dish: Dish) {

    table.order.push(dish);
    table.totalCheck = table.order.reduce((prev, cur) => prev + cur.price, 0);

  }

  addClient(tables: Table, newClient: string) {
    tables.clientName = newClient;

  }


}
