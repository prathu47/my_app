import { Component, OnInit } from '@angular/core';
import * as alldeals from "../deals.json";
@Component({
  selector: 'app-paldeals',
  templateUrl: './paldeals.component.html',
  styleUrls: ['./paldeals.component.css']
})
export class PaldealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;

}
