import { ProcessOrderGuard } from './orders/services/process-order.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'product-list', pathMatch: 'full' },
  {
    path: 'order',
    loadChildren: './orders/orders.module#OrdersModule',
    canLoad: [ProcessOrderGuard],
    canActivate: [ProcessOrderGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
