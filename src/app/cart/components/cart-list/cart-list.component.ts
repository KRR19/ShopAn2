import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { CartModel } from '../../Models/cart.model';

@Component({
  selector: 'app-cart-list-component',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {

  constructor(public cartService: CartService) { }

  trackByItems(index: number, item: CartModel): number {
    return item.id;
  }

}
