import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LoginModule } from '../login/login.module';
import { RegistrationModule } from '../registration/registration.module';
import { NavModule } from '../nav/nav.module';
import { FormsModule } from '@angular/forms';
import { BuyModule } from '../buy/buy.module';
import { FavoriteModule } from '../favorite/favorite.module';
import { CartModule } from '../cart/cart.module';
import { UserModule } from '../user/user.module';
import { ProductModule } from '../buy/product/product.module';
import { ProductListModule } from '../buy/product-list/product-list.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginModule,
    RegistrationModule,
    NavModule, 
    UserModule,
    BuyModule,
    FavoriteModule,
    CartModule,
    ProductModule,
    ProductListModule,
    CartModule,
    MatCardModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
