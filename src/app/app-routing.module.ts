import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ProductListComponent },
  {
    path: 'list/:name',
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },
  { path: 'detail/:id', component: ProductDetailsComponent } //The colon (:) in the path indicates that :id is a placeholder for a specific product detail id.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
