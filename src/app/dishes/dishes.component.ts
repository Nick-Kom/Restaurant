import { OnInit, Input,Output ,EventEmitter,Component } from '@angular/core';
import {DataService} from '../data.service';
import {Table} from "../table";
import {Dish} from "../dish";
@Component({
  moduleId: module.id,
  selector: 'dishes-comp',
  templateUrl: 'dish.component.html',
  styleUrls: ['dish.component.css'],
  providers: [DataService]
})
export class DishesComponent implements OnInit  {
  @Input() table: Table;
  tables: Table[];
  dishes: Dish[];
  constructor(private dataService: DataService){}



  addDishes(table: Table, dish: Dish) {

    this.dataService.addDataDishes(table,dish);
  }


  ngOnInit(){
    this.dishes = this.dataService.getDataDishes();
  }

}
