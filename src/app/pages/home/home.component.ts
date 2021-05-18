import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartsService } from 'src/app/services/carts.service';
import { FavoritesService } from 'src/app/services/favorites.service';
import { ShoppingCart } from 'src/app/shared/models/shoppingCart.model';
import { CATEGORIES } from './../../shared/database/category.database';


/* export interface Movie {
  id: number;
  title: string;
  description: string;
  imdb: number;
  lengthMin: number;
  img?: string;
}

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: 'Avengers: Endgame',
    description: 'Thanos',
    imdb: 7,
    lengthMin: 180,
    img: "https://static.posters.cz/image/750/plakatok/avengers-endgame-journey-s-end-i73600.jpg"
  },
  {
    id: 2,
    title: 'Spiderman',
    description: 'Pokcsávó',
    imdb: 6.3,
    lengthMin: 114,
    img: "https://imgix.bustle.com/uploads/image/2020/5/27/8afbad4b-f30b-47d7-b96e-207f9c2539e1-spider-man-cap.jpeg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
  },
  {
    id: 3,
    title: 'Matrix',
    description: 'Neo és barátai',
    imdb: 8.3,
    lengthMin: 140,
    img: "https://static.posters.cz/image/750/plakatok/avengers-endgame-journey-s-end-i73600.jpg"
  },
  {
    id: 4,
    title: 'Godzilla vs Kong',
    description: 'Kong vs Godzilla',
    imdb: 10,
    lengthMin: 120,
    img: "https://www.cnet.com/a/img/xtxGEK2Bl7SXd6G_tlPaofuf-gU=/940x0/2021/01/24/8c6453ea-8137-46ac-a4ae-5832e8272b6a/godzilla3.jpg"
  }
]; */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  categories = CATEGORIES;
  /* movies = MOVIES; */
  category ?= '';
  page = 'home';
  favorites: ShoppingCart[] = [];
  carts: ShoppingCart[] = [];

  constructor(private fs: FavoritesService, private fs2: CartsService) { }
  
  ngOnInit(): void {
    this.category = 'home';
    this.favorites = this.fs.getFavorites();
    this.carts = this.fs2.getCarts();
  }

  ngOnDestroy(): void {
    delete this.category;
  }

  onSelect(event: string): void {
    this.category = event;
  }

}

