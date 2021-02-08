import { AdminGuard } from './core/guards/admin.guard';
import { ProcessOrderGuard } from './orders/services/process-order.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'product-list', pathMatch: 'full' },
  {
    path: 'order',
    loadChildren: './orders/orders.module#OrdersModule',
    canLoad: [ProcessOrderGuard],
    canActivate: [ProcessOrderGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
