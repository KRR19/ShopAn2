import { Observable } from 'rxjs';
import { CoreModule } from './../core.module';
import { CartModel } from './../../cart/Models/cart.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: CoreModule
})
export class HttpClientService {

  constructor(private http: HttpClient) { }

  public setCart(item: CartModel[]): void {
    this.http.post('http://localhost:3000/cart', item).subscribe();
  }

  public getCard(): Observable<CartModel[]> {
    return this.http.get<CartModel[]>('http://localhost:3000/cart');
  }

}
