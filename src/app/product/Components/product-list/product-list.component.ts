import { Component, OnInit } from '@angular/core';

import { CartService } from '../../../cart/services/cart.service';
import { ProductModel } from '../../Models/product-model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: ProductModel[] = [];

  constructor(private productsService: ProductsService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
  onBuy(product: ProductModel): void {
    this.cartService.addToCart(product);
  }
}
