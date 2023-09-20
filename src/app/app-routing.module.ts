import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListViewComponent } from './product-list/_smart-components/product-list-view.component';
import { NewProductComponent } from './product-add/_smart-components/new-product.component';

const routes: Routes = [
  { path: 'product', component: ProductListViewComponent },
  { path: 'product/add', component: NewProductComponent },
  { path: '**', component: ProductListViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
