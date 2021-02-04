import { ProductModel } from './../Models/product.model';
import { Injectable } from '@angular/core';
import { products } from '../../shared/data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public getProducts(): Observable<ProductModel[]> {
    return of(products);
  }

  public getProduct(id: number): any {
    return products.find(product => product.id === id);
  }
}
