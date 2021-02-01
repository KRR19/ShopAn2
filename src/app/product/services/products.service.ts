import { Injectable } from '@angular/core';
import { ProductModel } from '../Models/product.model';
import { products } from '../../shared/data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public getProducts(): Observable<ProductModel[]> {
    return of(products);
  }
}
