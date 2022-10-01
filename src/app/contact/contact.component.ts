import { Component, OnInit } from '@angular/core';
import * as allprod from "../data/contact.json";
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact[]=[];

  constructor(private contactservice:ContactService) { }

  ngOnInit(): void {
    const contactObservable= this.contactservice.getContactDetails();
    contactObservable.subscribe((contactdata: Contact[])=>{
      this.contact=contactdata;
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
      content='fa fa-plus';
    }
    else{
      content='fa fa-minus';
    }
    return content;
  }

}
