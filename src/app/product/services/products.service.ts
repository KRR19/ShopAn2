import { Injectable } from '@angular/core';
import { ProductModel } from '../Models/product-model';
import { products } from '../../shared/data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public getProducts(): ProductModel[] {
    return products;
  }
}
