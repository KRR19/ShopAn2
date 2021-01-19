import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
// Правильно типизировать
  @Input() product: any;
  @Output() buyEvent = new EventEmitter();
}
