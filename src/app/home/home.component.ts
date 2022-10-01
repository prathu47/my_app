import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
   //TWO-WAY BINDING
   name="John"
  //theme for Navbar
  mycolor='Green';
   //Array - *ngFor
   //key:value
   Products:any[]=[
    {
      "productname":"Accessories"
    },
    {
      "productname":"Decors"
    },
    {
      "productname":"Gifts"
    },
    {
      "productname":"Office"
    },
    {
      "productname":"Stationary"
    },
    {
      "productname":"Aesthetic pieces"
    }
   ]
   //Event to hide Products
   isVisible:boolean=true;
   hide_products()
   {
    this.isVisible=!this.isVisible;
   }
   //*ngSwitch
   product = 'Laptop1'

   //property errorcolor for style binding using ternary operator
   errorcolor:string='Green'

   //Array for style binding with ternary operator with ngSwitch

   ProductDetails=[
    {
      "pid":"100",
      "pname":"Kids Toys",
      "status":"Active",
      "color":"green"
    },
    {
      "pid":"101",
      "pname":"Headphones",
      "status":"InActive",
      "color":"red"
    },
    {
      "pid":"102",
      "pname":"Kids Dress",
      "status":"Out of Stock",
      "color":"yellow"
    },
    {
      "pid":"103",
      "pname":"Kids Books",
      "status":"Active",
      "color":"green"
    },
    {
      "pid":"104",
      "pname":"Kids Crayons",
      "status":"InActive",
      "color":"red"
    },
    {
      "pid":"105",
      "pname":"Footwear",
      "status":"Active",
      "color":"green"
    },
    {
      "pid":"106",
      "pname":"Laptop",
      "status":"Out of Stock",
      "color":"yellow"
    }
   ]

      //Style Binding using a function
      getColor()
      {
        return 'blue';
      }
  ngOnInit(): void {
  }


}
class products{
  blue:boolean=true;
  shadow:boolean=true;
  size:boolean=true;
}
