import { Injectable } from '@angular/core';
import { ShoppingCart } from '../shared/models/shoppingCart.model';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  carts: ShoppingCart[] = [];

  constructor() { }

  addCart(sc: ShoppingCart) {
    this.carts.push(sc);
  }

  /* deleteCarts(sc: ShoppingCart) {
    return this.carts.splice(sc);
  } */

  hasShoppingCart2(sc: ShoppingCart) {
    return this.carts.includes(sc);
  }

  getCarts() {
    return this.carts;
  }
}
