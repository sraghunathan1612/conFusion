import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {FlexLayoutModule} from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatListModule} from '@angular/material';

import {MatLineModule} from '@angular/material';

import {MatGridListModule} from '@angular/material';

import {MatCardModule} from '@angular/material';

import {MatButtonModule} from '@angular/material';

import 'hammerjs';

import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';

import { DishService } from './services/dish.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {ad} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
    ,BrowserAnimationsModule
    ,FlexLayoutModule
    ,MatToolbarModule
    ,MatListModule
    ,MatLineModule
    ,MatGridListModule
    ,MatCardModule
    ,MatButtonModule
  ],
  providers: [ DishService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
