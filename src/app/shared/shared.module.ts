import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './Directives/highlight.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

const sharedComp = [HighlightDirective, OrderByPipe];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [...sharedComp],
  exports: [...sharedComp,  CommonModule,
    FormsModule]
})
export class SharedModule { }
