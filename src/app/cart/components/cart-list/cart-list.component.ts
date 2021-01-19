import { CartService } from '../../services/cart.service';
import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../../../product/Models/product.model';

@Component({
  selector: 'app-cart-list-component',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  public cartList: ProductModel[] = [];

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getCartList();
  }

  trackByItems(index: number, item: ProductModel): number {
    return item.id;
  }

}
