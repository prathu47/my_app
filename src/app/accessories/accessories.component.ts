import { Component, OnInit } from '@angular/core';
import * as allprod from "../data/accessories.json";
//import accessories service and class
import { Accessories } from '../accessories';
import { AccessoriesService } from '../accessories.service';
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  accessories: Accessories[]=[];
  
  constructor(private accessoriesservice:AccessoriesService){}

  
  ngOnInit(): void {
    const accessoriesObservable= this.accessoriesservice.getAccessoriesDetails();
    accessoriesObservable.subscribe((accessoriesdata: Accessories[])=>{
      this.accessories=accessoriesdata;

    });
    
  }
  all:any=(allprod as any).default;

  productDetails=false;

  showproductDetailsToggle()
  {
    this.productDetails=!this.productDetails;
  }
  toggleContent(){
    var content='';
    if(this.productDetails){
      content='fa-solid fa-arrow-up';
    }
    else{
      content='fa-solid fa-arrow-down';
    }
    return content;
  }

}
