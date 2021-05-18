import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { CartsService } from 'src/app/services/carts.service';
import { ShoppingCart } from 'src/app/shared/models/shoppingCart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  carts: ShoppingCart[] = [];
  
  constructor(private fs: CartsService, private firestore: AngularFirestore, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.carts = this.fs.getCarts();
    //console.log(this.carts);
  }

  /* onDelete(id: string) {
    if(confirm("Biztosan törölni szeretnéd a terméket?")) {
      this.firestore.doc("product/" + id).delete();
      this.toastr.warning("Törlés sikeres!");
    }
  } */

  /* onDeleteAll(product: ShoppingCart): void {
    this.carts = this.fs.deleteCarts(product)
  } */

  //Itt azt szimuláljuk, mint hogy ha a kosárba helyezett termékeinet sikeresen megvettük volna:
  onDeleteAll(): void {
    this.carts = [];
    alert("Vásárlás sikeres!")
  }
}
