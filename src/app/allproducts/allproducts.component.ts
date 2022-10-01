import { Component, OnInit } from '@angular/core';
import * as allprod from "../data/products.json";
@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  all:any=(allprod as any).default;

}
