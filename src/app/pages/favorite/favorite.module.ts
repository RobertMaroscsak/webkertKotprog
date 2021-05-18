import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite.component';
import { BuyModule } from '../buy/buy.module';
import { ProductModule } from '../buy/product/product.module';
import { ProductListModule } from '../buy/product-list/product-list.module';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    FavoriteComponent
  ],
  imports: [
    CommonModule, 
    BuyModule,
    ProductModule,
    ProductListModule,
    FormsModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [FavoriteComponent]
})
export class FavoriteModule { }
