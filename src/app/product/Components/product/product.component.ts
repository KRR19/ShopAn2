import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
// Правильно типизировать
  @Input() product: any;
  @Output() buyEvent = new EventEmitter();

  constructor(private router: Router){}

  navigateItem(id: number): void{
    this.router.navigate(['/product', id]);
  }
}
