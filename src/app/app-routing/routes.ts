import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
    {path: 'Home', component : HomeComponent}
    ,{path: 'Menu', component : MenuComponent}
    ,{path: 'About', component : AboutComponent}
    ,{path: 'Contact', component : ContactComponent}
    ,{path: '', redirectTo: '/Home', pathMatch:"full"}
];