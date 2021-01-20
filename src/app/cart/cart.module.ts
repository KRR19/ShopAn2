import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartItemComponent } from './cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    CartItemComponent,
    CartListComponent
  ],
  exports: [
    CartItemComponent,
    CartListComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class CartModule { }
