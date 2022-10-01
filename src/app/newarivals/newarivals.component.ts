import { Component, OnInit } from '@angular/core';
import * as productdetails from '../data/accessories.json';
@Component({
  selector: 'app-newarivals',
  templateUrl: './newarivals.component.html',
  styleUrls: ['./newarivals.component.css']
})
export class NewarivalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product:any = (productdetails as any).default;
}
