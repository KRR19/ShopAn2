import { ProductModel } from './../../product/Models/product.model';
import { ProductsService } from './../../product/services/products.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditResolver implements Resolve<ProductModel> {
  constructor(private productService: ProductsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductModel> {
    const id = route.paramMap.get('id') || -1;
    const result = this.productService.getProduct(+id);
    return of(result);
  }
}
