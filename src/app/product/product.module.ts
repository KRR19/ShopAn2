import { SharedModule } from './../shared/shared.module';
import { ProductComponent } from './Components/product/product.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    SharedModule
  ],
  exports: [
    ProductComponent,
    ProductListComponent
  ]
})
export class ProductModule { }
