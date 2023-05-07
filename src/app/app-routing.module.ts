import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductShowComponent } from './product/product-show/product-show.component';

const routes: Routes = [
  { path: "produto/list",     component: ProductListComponent   },
  { path: "produto/create",   component: ProductCreateComponent },
  { path: "produto/edit/:id", component: ProductEditComponent   },
  { path: "produto/show/:id", component: ProductShowComponent   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
