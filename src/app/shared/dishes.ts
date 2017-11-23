import { Dish } from './dish';

export const DISHES : Dish[] = 
    
    [
    {
      id:0,
      name:"Uthapizza"
    ,image : "/assets/images/uthappizza.png"
    ,category:"mains"
    ,label:"HOT"
    ,price:"4.99"
    ,featured:true
    ,description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola, olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."
    ,comments: 
      [
        {
          rating:5
          ,comment:"Imagine all the eatables, living in confusion!"
          ,author:"John Lemon"
          ,date:"2012-10-16T17:57:28"
        },
        {
          rating:4
          ,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it."
          ,author:"Paul McVites"
          ,date:"2014-09-05T17:57:28.556094Z"
        },
        {
          rating:3
          ,comment:"Eat it, just eat it!"
          ,author:"Michael Jaikishan"
          ,date:"2015-02-13T17:57:28.556094Z"
        },
        {
          rating:4
          ,comment:"Ultimate, Reaching for the stars!"
          ,author:"Ringo Starry"
          ,date:"2013-12-02T17:57:28.556094Z"
        },
        {
          rating:2
          ,comment:"It's your birthday, we're gonna party!"
          ,author:"25 cent"
          ,date:"2011-12-02T17:57:28.556094Z"
        }
      ]
    }
    ,{
      id:1,
        name:"Zucchipakoda",
        image : "/assets/images/zucchipakoda.png",
        category:"appetizer",
        label:"",
        price:"1.99",
        featured:false,
        description:"Deep fried Zucchini with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
    ,comments: 
      [
        {
          rating:5
          ,comment:"Z -- Imagine all the eatables, living in confusion!"
          ,author:"John Lemon"
          ,date:"2012-10-16T17:57:28"
        },
        {
          rating:4
          ,comment:"Z -- Sends anyone to heaven, I wish I could get my mother-in-law to eat it."
          ,author:"Paul McVites"
          ,date:"2014-09-05T17:57:28.556094Z"
        },
        {
          rating:3
          ,comment:"Z -- Eat it, just eat it!"
          ,author:"Michael Jaikishan"
          ,date:"2015-02-13T17:57:28.556094Z"
        },
        {
          rating:4
          ,comment:"Z -- Ultimate, Reaching for the stars!"
          ,author:"Ringo Starry"
          ,date:"2013-12-02T17:57:28.556094Z"
        },
        {
          rating:2
          ,comment:"Z -- It's your birthday, we're gonna party!"
          ,author:"25 cent"
          ,date:"2011-12-02T17:57:28.556094Z"
        }
      ]
    }
    ,{
      id:2,
        name:"Vadonut",
        image : "/assets/images/vadonut.png",
        category:"appetizer",
        label:"new",
        price:"1.99",
        featured:false,        
        description:"A quintessential conFusion expirience, is it a Vada or is it a donut?"
        ,comments: 
        [
          {
            rating:5
            ,comment:"V -- Imagine all the eatables, living in confusion!"
            ,author:"John Lemon"
            ,date:"2012-10-16T17:57:28"
          },
          {
            rating:4
            ,comment:"V -- Sends anyone to heaven, I wish I could get my mother-in-law to eat it."
            ,author:"Paul McVites"
            ,date:"2014-09-05T17:57:28.556094Z"
          },
          {
            rating:3
            ,comment:"V -- Eat it, just eat it!"
            ,author:"Michael Jaikishan"
            ,date:"2015-02-13T17:57:28.556094Z"
          },
          {
            rating:4
            ,comment:"V -- Ultimate, Reaching for the stars!"
            ,author:"Ringo Starry"
            ,date:"2013-12-02T17:57:28.556094Z"
          },
          {
            rating:2
            ,comment:"V -- It's your birthday, we're gonna party!"
            ,author:"25 cent"
            ,date:"2011-12-02T17:57:28.556094Z"
          }
        ]
      },
      {
        id:3,
        name:"ElaiCheese cake",
        image : "/assets/images/elaicheesecake.png",
        category:"dessert",
        label:"",
        price:"2.99",
        featured:false,        
        description:"A delectable, semi-sweet New York style Cheese Cake with graham Cracker crust and spiced with Indian cardamoms."
        ,comments: 
        [
          {
            rating:5
            ,comment:"E -- Imagine all the eatables, living in confusion!"
            ,author:"John Lemon"
            ,date:"2012-10-16T17:57:28"
          },
          {
            rating:4
            ,comment:"E -- Sends anyone to heaven, I wish I could get my mother-in-law to eat it."
            ,author:"Paul McVites"
            ,date:"2014-09-05T17:57:28.556094Z"
          },
          {
            rating:3
            ,comment:"E -- Eat it, just eat it!"
            ,author:"Michael Jaikishan"
            ,date:"2015-02-13T17:57:28.556094Z"
          },
          {
            rating:4
            ,comment:"E -- Ultimate, Reaching for the stars!"
            ,author:"Ringo Starry"
            ,date:"2013-12-02T17:57:28.556094Z"
          },
          {
            rating:2
            ,comment:"E -- It's your birthday, we're gonna party!"
            ,author:"25 cent"
            ,date:"2011-12-02T17:57:28.556094Z"
          }
        ]
      }
];