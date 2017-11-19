import { Component, OnInit } from '@angular/core';

import {Dish} from '../shared/dish';

const DISHES : Dish[] = [
  {
    name:"Uthapizza",
    image : "/assets/images/uthappizza.png",
    category:"mains",
    label:"Hot",
    price:"4.99",
    description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola, olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."
  },
  {
    name:"Zucchipakoda",
    image : "/assets/images/zucchipakoda.png",
    category:"appetizer",
    label:"",
    price:"1.99",
    description:"Deep fried Zucchini with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
  },
  {
    name:"Vadonut",
    image : "/assets/images/vadonut.png",
    category:"appetizer",
    label:"new",
    price:"1.99",
    description:"A quintessential conFusion expirience, is it a Vada or is it a donut?"
  },
  {
    name:"ElaiCheese cake",
    image : "/assets/images/elaicheesecake.png",
    category:"dessert",
    label:"",
    price:"2.99",
    description:"A delectable, semi-sweet New York style Cheese Cake with graham Cracker crust and spiced with Indian cardamoms."
  }
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes : Dish[] = DISHES;
  selectedDish : Dish = DISHES[0];
  constructor() { }

  ngOnInit() {
  }

}
