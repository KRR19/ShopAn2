import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { CartModel } from '../../Models/cart.model';

@Component({
  selector: 'app-cart-list-component',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponent implements OnInit {

  products: CartModel[] = [];
  constructor(public cartService: CartService) { }
  ngOnInit(): void {
    this.products = this.cartService.getProducts();
  }

  changeItem(item: CartModel): void {
    if (item.count > 0) {
      this.cartService.replaceItem(item);
    }
    else {
      this.cartService.removeProduct(item.id);
    }
  }

  trackByItems(index: number, item: CartModel): number {
    return item.id;
  }
}
