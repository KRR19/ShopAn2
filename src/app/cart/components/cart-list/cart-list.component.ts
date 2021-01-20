import { ChangeDetectionStrategy, Component} from '@angular/core';

import { CartService } from '../../services/cart.service';
import { CartModel } from '../../Models/cart.model';

@Component({
  selector: 'app-cart-list-component',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {

  constructor(public cartService: CartService) { }

  get products(): CartModel[] {
    return this.cartService.cartList;
  }

  changeItem(item: CartModel): void {
    if (item.count > 0){
      this.cartService.replaceItem(item);
    }
    else {
      this.cartService.deleteItem(item.id);
    }
  }

  trackByItems(index: number, item: CartModel): number {
    return item.id;
  }
}
