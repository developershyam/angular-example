import { SemanticUIComponent } from './component/semantic-ui/semantic-ui.component';
import { ParentComponent } from './component/parent-child/parent.component';
import { ProductComponent } from './component/product/product.component';
import { ManageUsersComponent } from './component/manage-users/manage-users.component';
import { MatComponent } from './component/mat/mat.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';


const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'product', component: ProductComponent },
  { path: 'manage-users', component: ManageUsersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mat', component: MatComponent },
  { path: 'parent-child', component: ParentComponent },
  { path: 'semanctic-ui', component: SemanticUIComponent },
  { path: 'customers', loadChildren: () => import('./component/lazy-module/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', loadChildren: () => import('./component/lazy-module/orders/orders.module').then(m => m.OrdersModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
