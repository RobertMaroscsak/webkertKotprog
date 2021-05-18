import { Injectable, Query } from '@angular/core';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { ShoppingCart } from '../shared/models/shoppingCart.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  formData!: ShoppingCart;
  unsubscribe: any;
  dispose: any;

  constructor(private firestore: AngularFirestore) { }

  getProduct() {
    return this.firestore.collection("product").snapshotChanges()
  }
}
