import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { CartsService } from 'src/app/services/carts.service';
import { FavoritesService } from 'src/app/services/favorites.service';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCart } from 'src/app/shared/models/shoppingCart.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges, OnDestroy {
  list?: ShoppingCart[];
  @Input() cart: ShoppingCart = {} as any;
  @Input() hasAction = true;
  @Output() callFav = new EventEmitter<ShoppingCart>();
  //Ez nem kell, mert ez Gráciánnál megjeleníti nagyban a kártyát nekünk ilyen nincs
  @Output() getMovie = new EventEmitter<ShoppingCart>();

  constructor(private service: ProductService, private firestore: AngularFirestore, private toastr: ToastrService,
    private fs: FavoritesService, private fs2: CartsService) { }

  //Lifecycle Hook-ok:
  ngOnInit(): void {
    this.service.getProduct().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...(item.payload.doc.data() as ShoppingCart)
        } as ShoppingCart
      })
    })
  }

  ngOnChanges(): void {
    this.cart = this.cart.currentValue;
  }

  ngOnDestroy(): void {
    delete this.list;
  }

  onEdit(product:ShoppingCart) {
    this.service.formData = Object.assign({},product);
  }

  onDelete(id: string) {
    if(confirm("Biztosan törölni szeretnéd a terméket?")) {
      this.firestore.doc("product/" + id).delete();
      this.toastr.warning("Törlés sikeres!");
    }
  }

  onHeart(product: ShoppingCart): void {
    if (!(this.fs.hasShoppingCart(product))) {
      this.fs.addFavorite(product);
    }
  }

  onCart(product: ShoppingCart): void {
    if (!(this.fs2.hasShoppingCart2(product))) {
      this.fs2.addCart(product);
    }
  }

}
