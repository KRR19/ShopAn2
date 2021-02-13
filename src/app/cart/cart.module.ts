import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartRoutingModule } from './cart-routing.module';



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
    FontAwesomeModule,
    SharedModule,
    CartRoutingModule,
    CoreModule
  ]
})
export class CartModule { }
