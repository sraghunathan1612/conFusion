import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {FlexLayoutModule} from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatListModule} from '@angular/material';

import {MatLineModule} from '@angular/material';

import 'hammerjs';

import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
    ,BrowserAnimationsModule
    ,FlexLayoutModule
    ,MatToolbarModule
    ,MatListModule
    ,MatLineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
