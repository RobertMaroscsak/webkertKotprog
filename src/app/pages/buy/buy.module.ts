import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyComponent } from './buy.component';
import { ProductModule } from './product/product.module';
import { ProductListModule } from './product-list/product-list.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CartModule } from '../cart/cart.module';



@NgModule({
  declarations: [
    BuyComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    ProductListModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CartModule
  ],
  exports: [BuyComponent]
})
export class BuyModule { }
