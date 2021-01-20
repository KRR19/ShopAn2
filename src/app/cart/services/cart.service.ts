import { Injectable } from '@angular/core';

import { ProductModel } from '../../product/Models/product.model';
import { CartModel } from '../Models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartListValue: CartModel[] = [];

  public get total(): number {
    return this.cartListValue.reduce((sum, item) => sum += item.price * item.count, 0);
  }

  public get cartList(): CartModel[] {
    return this.cartListValue;
  }

  addToCart(item: ProductModel): void {
    let isNew = true;

    this.cartListValue = this.cartListValue.map((x): CartModel => {
      if (x.title === item.name) {
        x.count++;
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
      id: item.id,
      title: item.name,
      count: 1,
      price: item.price
    };

    this.cartListValue = [...this.cartListValue, newItem];
  }
}
