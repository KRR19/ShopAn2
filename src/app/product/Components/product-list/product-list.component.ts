import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { CartService } from '../../../cart/services/cart.service';
import { ProductModel } from '../../Models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {

  public products$ = this.productsService.getProducts();
  isAsc = true;
  sortBy = 'name';

  constructor(private productsService: ProductsService,
              private cartService: CartService,
              private router: Router) { }
  onBuy(product: ProductModel): void {
    this.cartService.addProduct(product);
  }
  state(): void{
    console.log(`Sort By: ${this.sortBy}\nis ASC: ${this.isAsc}`);
  }
  navigateItem(id: number){
    this.router.navigate(['/product', id]);
  }
}
