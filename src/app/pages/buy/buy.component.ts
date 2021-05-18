import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/shared/models/shoppingCart.model';
/* import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Category } from 'src/app/shared/models/category.model'; */

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
  /* categories: Observable<Category[]> | undefined;
 */
  constructor(/* private fs : FbBaseService<Category> */) {

  }
  favorites: ShoppingCart[] = [];

  ngOnInit(): void {
    /* this.categories = this.fs.get("categories");
    console.log(this.categories); */
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
