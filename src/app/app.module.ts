import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {DishesComponent}    from './dishes/dishes.component';
import {ClientNameComponent}    from './client-name/client-name.component';
import {SeatsComponent}    from './seats/seats.component';
import {ClientListComponent}    from './client-list/client-list.component';
import {PanelComponent}    from './panel/panel.component';


const appRoutes: Routes =[
  { path: '', component: PanelComponent},
  { path: 'clients', component: ClientListComponent}
];
@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent,
    DishesComponent,
    ClientNameComponent,
    SeatsComponent,
    ClientListComponent,
    PanelComponent],
  bootstrap: [AppComponent]
})
export class AppModule {


}
