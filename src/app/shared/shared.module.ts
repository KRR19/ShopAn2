import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './Directives/highlight.directive';

const sharedComp = [HighlightDirective];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...sharedComp],
  exports: [...sharedComp]
})
export class SharedModule { }
