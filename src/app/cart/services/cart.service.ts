import { Injectable } from '@angular/core';
import { ProductModel } from '../../product/Models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartList: ProductModel[] = [];

  addToCart(item: ProductModel): void {
    this.cartList.push(item);
  }

  getCartList(): ProductModel[] {
    return this.cartList;
  }
}
