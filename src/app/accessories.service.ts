import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Accessories } from './accessories';
@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {

  constructor() { }
  accessor: Accessories[] = [
    {
      pid: 1,
      pname: 'Bracelets',
      pdescription: 'Customized bracelets with your names and with bright coating',
      price: 500,
      img: 'http://sc04.alicdn.com/kf/Hf4a51605325c47fe9f1111e6a63137d2W.jpg'
    },
    {
      pid: 2,
      pname: 'Speakers',
      pdescription: 'Give a new look to your speakers which gives pleasent look with sounds',
      price: 2500,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8p47uw9UbRWCCos4vJNJXsr5AXWAVxVzRA&usqp=CAU'
    },
    {
      pid: 3,
      pname: 'Bottles',
      pdescription: 'Its stunning to be hold in your hands',
      price: 500,
      img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1576017702-il_570xN.2075282350_cyw6.jpg?crop=0.635xw:0.714xh;0.174xw,0&resize=480:*'
    },
    {
      pid: 4,
      pname: 'PhoneCase',
      pdescription: 'Personalize your backcases to give eligant look to your phones',
      price: 500,
      img: 'https://5.imimg.com/data5/YI/RN/ZV/ANDROID-80124847/1-customized-name-4d-acrylic-mobile-covers-design-305-jpg-500x500.jpg'
    },
    {
      pid: 5,
      pname: 'Wallets',
      pdescription: 'Persnalize your wallets with your names to make it something different',
      price: 1000,
      img: 'https://cdn.shopify.com/s/files/1/0534/8566/6462/products/CustomizedMen_sWalletandPenCombo_GiftingStudio_Brown.jpg?v=1646155704&width=533'
    },
    {
      pid: 6,
      pname: 'HairClips',
      pdescription: 'Add on looks to your hair accessories',
      price: 500,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqK5pxFGip-_eFmEKrsRXPdthedULTpU8ufg&usqp=CAU'
    }
  ];

  public getAccessoriesDetails(): any {
    const accessorObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.accessor);
      }, 1000);
    });
    return accessorObservable;
  }
}
