import { CONSTANTS } from './services/constant.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: CONSTANTS, useValue: CONSTANTS}
  ]
})
export class CoreModule { }
