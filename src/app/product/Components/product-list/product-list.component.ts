import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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

  constructor(private productsService: ProductsService,
              private cartService: CartService) { }
  onBuy(product: ProductModel): void {
    this.cartService.addProduct(product);
  }
}
