import { EditResolver } from './guards/edit.resolver';
import { EditComponent } from './component/edit/edit.component';
import { AddComponent } from './component/add/add.component';
import { ProductsComponent } from './component/products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditCanDeactivateGuard } from './guards/edit-can-deactivate.guard';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'product/add', component: AddComponent },
  {
    path: 'product/edit/:id',
    component: EditComponent,
    canDeactivate: [EditCanDeactivateGuard],
    resolve: { resolvedData: EditResolver }
  },
  { path: 'orders', component: AddComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
