import { Injectable } from '@angular/core';

import { ProductModel } from '../../product/Models/product.model';
import { CartModel } from '../Models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cartList: CartModel[] = [];

  public get total(): number {
    return this._cartList.reduce((sum, item) => sum += item.price * item.count, 0);
  }

  public get cartList(): CartModel[] {
    return this._cartList;
  }

  addToCart(item: ProductModel): void {
    let isNew: boolean = true;

    this._cartList = this._cartList.map((x): CartModel => {
      if (x.title === item.name) {
        x.count++
        isNew = false;
      }
      return x;
    });

    if (isNew) {
      this.addNewToCart(item);
    }
  }

  private addNewToCart(item: ProductModel): void {
    const newItem: CartModel = {
      id: this.cartList.length,
      title: item.name,
      count: 1,
      price: item.price
    }

    this._cartList = [...this._cartList, newItem];
  }
}
