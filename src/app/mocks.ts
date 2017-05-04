import {Table} from "./table";
import {Dish} from "./dish";
import {Client} from "./client";

export const CLIENTS: Client[] = [];


export const DISHES: Dish[] = [
  {
    id: 1,
    dishName: 'Борщ',
    price: 30.45

  },  {
    id: 2,
    dishName: 'Вареники',
    price: 40.60

  },  {
    id: 3,
    dishName: 'Чай',
    price: 12.15

  }
];
export const TABLES: Table[] = [
  {
    id: 1,
    tableName: "Столик на 2 місця",
    clientName: '',
    maxSeats: 2,
    featured: false,
    curClients: 0,
    order:[],
    seatsEmpty: [true, true],
    totalCheck:0
  },
  {
    id: 2,
    tableName: "Столик на 2 місця",
    clientName: '',
    maxSeats: 2,
    featured: false,
    curClients: 0,
    order:[],
    seatsEmpty: [true, true],
    totalCheck:0
  },
  {
    id: 3,
    tableName: "Столик на 2 місця",
    clientName: '',
    maxSeats: 2,
    featured: false,
    curClients: 0,
    order:[],
    seatsEmpty: [true, true],
    totalCheck:0
  },
  {
    id: 4,
    tableName: "Столик на 4 місця",
    clientName: '',
    maxSeats: 4,
    featured: false,
    curClients: 0,
    order:[],
    seatsEmpty: [true, true, true, true],
    totalCheck:0
  },{
    id: 5,
    tableName: "Столик на 4 місця",
    clientName: '',
    maxSeats: 4,
    featured: false,
    curClients: 0,
    order:[],
    seatsEmpty: [true, true, true, true],
    totalCheck:0
  },{
    id: 6,
    tableName: "Столик на 4 місця",
    clientName: '',
    maxSeats: 4,
    featured: false,
    curClients: 0,
    order:[],
    seatsEmpty: [true, true, true, true],
    totalCheck:0
  },{
    id: 7,
    tableName: "Столик на 4 місця",
    clientName: '',
    maxSeats: 4,
    featured: false,
    curClients: 0,
    order:[],
    seatsEmpty: [true, true, true, true],
    totalCheck:0
  },
  {
    id: 8,
    tableName: "Столик на 8 місць",
    clientName: '',
    maxSeats: 8,
    featured: false,
    curClients: 0,
    order:[],
    seatsEmpty: [true, true, true, true, true, true, true, true],
    totalCheck:0
  }
];
