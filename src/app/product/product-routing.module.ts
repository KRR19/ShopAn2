import { ProductViewComponent } from './Components/product-view-component/product-view.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'product-list', component: ProductListComponent},
  { path: 'product/:id', component: ProductViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
