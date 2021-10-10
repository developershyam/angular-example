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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
