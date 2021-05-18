import { Injectable } from '@angular/core';
import { ShoppingCart } from '../shared/models/shoppingCart.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favorites: ShoppingCart[] = [];


  constructor() { }

  addFavorite(sc: ShoppingCart) {
    this.favorites.push(sc);
  }

  hasShoppingCart(sc: ShoppingCart) {
    return this.favorites.includes(sc);
  }

  /* deleteFavorite(sc: ShoppingCart) {
    this.favorites.;
  } */

  getFavorites() {
    return this.favorites;
  }



  /* onFavorite(event: ShoppingCart): void {
    console.log(event);
    if (event?.heart) {
      this.favorites.push(event);
    }
    //Végig megy a favorites tömbön, és minden egyes item elemnek megnézi a heart-jét, ha igaz belerakja, különben nem
    this.favorites = this.favorites.filter(item => item.heart);
  } */

}
