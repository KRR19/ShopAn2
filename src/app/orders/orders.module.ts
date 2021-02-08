import { OrderRoutingModule } from './order-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessOrderComponent } from './components/process-order/process-order.component';

@NgModule({
  declarations: [
    ProcessOrderComponent
  ],
  exports: [ProcessOrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrdersModule {
}
