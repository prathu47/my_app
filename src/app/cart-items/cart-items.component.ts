import { Component, OnInit } from '@angular/core';
import { Cartitem } from '../cartitem';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  constructor(private cartSvc: CartService, private router:Router) { }
  carts:Cartitem={
    pid:0,
    pname:'',
    pdescription:'',
    price:0,
    img:'',
    quantity:1,
    totalPrice:1    
  }
  // quanties:number=0;
  cartData: any = [];
  totalprice: number = 0;
  quantity = 1;
  //@Input() count?:number;

  // receivequantity($event: number) {
  //   this.quantity = $event;
  // }
  // totalPrices(data: any) {
  //   debugger
  //   this.totalprice = 0;
  //   this.cartData = data
  //   console.log(this.cartData);
  //   for (let j = 0; j < data.length; j++) {
  //     this.totalprice += (this.cartData[j].price + this.cartData[j].quantity)
  //     console.log(this.cartData[j].quantity)
  //   }
  //   return this.totalprice;
  // }
  totalPrice(data: any) {
    debugger
    const intialValue = 0;
    this.cartData = data
    const a = this.cartData.reduce((sum: any, item: any) => sum + (item.price * item.quantity), intialValue);
    return a;
  }
  cart: Cartitem[] = [];
  // updateToCart(cart: Cartitem) {
  //   console.log(this.quantity)
  //   this.carts.pid = cart.pid;
  //   this.carts.totalPrice=(cart.price * this.quantity);
  //   this.carts.quantity = this.quantity;
  //   this.cartSvc.updateCart(this.cart).subscribe(
  //     () => console.log("update successfully")
  //   )
  //   this.ngOnInit();
  // }
  delete(deleteItem: Cartitem) {
    this.cartSvc.removeItemFromCart(deleteItem).subscribe(
      () => console.log(deleteItem.pname)      
    );
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'error',
      title: 'Item deleted successfully'
    })
    this.ngOnInit();
  }
  onClick(){
    this.router.navigate(['deals'])
  }

  ngOnInit(): void {
    this.cartSvc.getCartItems().subscribe(
      (response) => {
        this.cart = response;
        console.log(this.cart);
      }
    )
  }

}
