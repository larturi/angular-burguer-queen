import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

const routes: Routes = [
  {path: 'list-categories', component: ListCategoriesComponent},
  {path: 'list-products', component: ListProductsComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'list-categories'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
