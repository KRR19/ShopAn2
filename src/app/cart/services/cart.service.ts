import { CartModule } from './../cart.module';
import { CartModel } from './../Models/cart.model';
import { HttpClientService } from './../../core/services/http-client.service';
import { Injectable } from '@angular/core';

import { ProductModel } from '../../product/Models/product.model';

@Injectable({
  providedIn: 'any'
})
export class CartService {
  // private cartProductsValue: CartModel[] = [];

  constructor(private httpService: HttpClientService) {

  }

  public get cartProductsValue(): CartModel[] {
    let result: CartModel[] = [];
    this.httpService.getCard().subscribe(cart => result = cart);
    return result;
  }
  public set cartProductsValue(item: CartModel[]) {
    this.httpService.setCart(item);
  }
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

    const cart = this.cartProductsValue.map((x): CartModel => {
      if (x.title === item.name) {
        x.count++;
        isNew = false;
      }
      return x;
    });

    if (isNew) {
      this.addNewToCart(item);
    }
    else {
      this.cartProductsValue = cart;
    }
  }

  public removeProduct(id: number): void {
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
