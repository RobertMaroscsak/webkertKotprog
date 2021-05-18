import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { FavoritesService } from 'src/app/services/favorites.service';
import { ShoppingCart } from 'src/app/shared/models/shoppingCart.model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  @Input() favorite: ShoppingCart = {} as any;
  favorites: ShoppingCart[] = [];

  constructor(private fs: FavoritesService, private firestore: AngularFirestore, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.favorites = this.fs.getFavorites();
    //console.log(this.favorites);
  }

  /* onDelete(id: string) {
    if(confirm("Biztosan törölni szeretnéd a terméket?")) {
      this.firestore.doc("product/" + id).delete();
      this.toastr.warning("Törlés sikeres!");
    }
  } */

}
