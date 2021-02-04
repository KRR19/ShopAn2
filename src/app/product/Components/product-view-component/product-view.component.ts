import { CartService } from './../../../cart/services/cart.service';
import { ProductModel } from './../../Models/product.model';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  product!: ProductModel;

  constructor(private route: ActivatedRoute,
              private productService: ProductsService,
              private cartService: CartService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.product = this.productService.getProduct(id);
  }

  AddCart(): void {
    this.cartService.addProduct(this.product);
  }
}
