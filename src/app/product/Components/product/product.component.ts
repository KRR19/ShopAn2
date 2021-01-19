import { Component } from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  public onBuy(): void {
    console.log('You buy!');
  }
}
