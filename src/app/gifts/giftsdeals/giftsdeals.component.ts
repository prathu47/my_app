import { Component, OnInit } from '@angular/core';
import * as gd from "../gifts.json";
@Component({
  selector: 'app-giftsdeals',
  templateUrl: './giftsdeals.component.html',
  styleUrls: ['./giftsdeals.component.css']
})
export class GiftsdealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //Fetch the data from washingmachine.json using the alias washingmachine in line nnumber 4
  gifts:any=(gd as any).default;

  //Toggle effect to show and hide the pdescription and price
  //Property for toggle effect
  productDetail=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
  //function to toggle between the span content from + to - and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-arrow-up';
    }
    else{
      content='fa-solid fa-arrow-down';
    }
    return content;
  }
  

}
