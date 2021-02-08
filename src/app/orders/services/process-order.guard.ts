import { CartService } from './../../cart/services/cart.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProcessOrderGuard implements CanLoad, CanActivate {
  constructor(private cartService: CartService) { }
  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canRoute();
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canRoute();
  }

  canRoute(): Observable<boolean> {
    if (this.cartService.isEmptyCart()) {
      alert('Your cart is empty');
      return of(false);
    }
    return of(true);
  }

}
