import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductShowComponent } from './product-show/product-show.component';

@NgModule({
  declarations: [
    ProductCreateComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductShowComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
