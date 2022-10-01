import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Contact } from './contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  contact: Contact[] = [
    {
       img: 'https://www.pngitem.com/pimgs/m/248-2483089_ubud-monkey-forest-flat-design-flat-icon-person.png',
      pid: 12389,
       pname: 'Prathusha',
       pemail: 'prathusha.1@gmail.com',
       pnum: 8987675412,
       pqueries:'Product related issues',
      
    },
    {
      img: 'https://www.pngitem.com/pimgs/m/662-6627316_person-icon-transparent-background-hd-png-download.png',
     pid: 45678,
      pname: 'Nikhil',
      pemail: 'nikhil23@gmail.com',
      pnum: 9857253423,
      pqueries:'Payment related issues',
     
   },
   {
    img: 'https://www.pngitem.com/pimgs/m/662-6627316_person-icon-transparent-background-hd-png-download.png',
   pid: 65432,
    pname: 'Karthik',
    pemail: 'karthik.1@gmail.com',
    pnum: 9900112037,
    pqueries:'Service related issues',
   
 }
    
  ];
  public getContactDetails(): any {
    const contactObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.contact);
      }, 1000);
    });
    return contactObservable;
  }

}
