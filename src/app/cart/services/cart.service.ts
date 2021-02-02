import { Injectable } from '@angular/core';

import { ProductModel } from '../../product/Models/product.model';
import { CartModel } from '../Models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProductsValue: CartModel[] = [];

  public get totalQuantity(): number {
    return this.cartProductsValue.length;
  }

  public get totalSum(): number {
    return this.cartProductsValue.reduce((sum, item) => sum += item.price * item.count, 0);
  }

  public getProducts(): CartModel[] {
    return this.cartProductsValue;
  }

  public addProduct(item: ProductModel): void {
    let isNew = true;

    // чтобы не перебирать можно попробовать воспользоваться find(), findIndex()
    this.cartProductsValue = this.cartProductsValue.map((x): CartModel => {
      if (x.title === item.name) {
        // тут мутация
        x.count++;
        isNew = false;
      }
      return x;
    });

    if (isNew) {
      this.addNewToCart(item);
    }
  }

  public removeProduct(id: number): void {
    // а тут пересоздание, другой подход.
    this.cartProductsValue = this.cartProductsValue.filter(item => item.id !== id);
  }

  public replaceItem(item: CartModel): void {
    console.log(item);

    this.cartProductsValue = this.cartProductsValue.map(current => {
      if (current.id === item.id) {
        return item;
      }
      return current;
    });
  }

  public removeAllProducts(): void {
    this.cartProductsValue = [];
  }

  public isEmptyCart(): boolean {
    return this.totalSum === 0;
  }

  private addNewToCart(item: ProductModel): void {
    const newItem: CartModel = {
      id: item.id,
      title: item.name,
      count: 1,
      price: item.price
    };

    this.cartProductsValue = [...this.cartProductsValue, newItem];
  }
}
