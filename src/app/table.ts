export class Table{
    id:number;
    tableName:string;
    clientName:string;
    maxSeats:number;
    featured:boolean;
    curClients:number;
    order: Array<any>;
    seatsEmpty:Array<boolean>;
    totalCheck:number;

}
