import { Component, OnInit } from '@angular/core';
//error message -> Consider using '--resolveJsonModule' to import module with '.json' extension.
//To resolve the above error -> tsconfig.json -> include "resolveJsonModule": true, in line no 5
import * as productdetails from '../data/BestSellers.json';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //Fetch the data from products.json using the alias productdetails in line nnumber 4
  product:any = (productdetails as any).default;

}
