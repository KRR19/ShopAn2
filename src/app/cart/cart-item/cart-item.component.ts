import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { CartModel } from './../Models/cart.model';
import { faMinusSquare, faPlusSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  @Input() item!: CartModel;
  @Output() changeItem = new EventEmitter();

  faTrashAlt = faTrashAlt;
  faPlusSquare = faPlusSquare;
  faMinusSquare = faMinusSquare;

  incrementCount(): void {
    this.change(++this.item.count);
  }

  decrementCount(): void {
    this.change(--this.item.count);
  }

  deleteItem(): void {
    this.change(0);
  }

  private change(count: number): void {
    this.item.count = count;
    this.changeItem.emit(this.item);
  }
}
