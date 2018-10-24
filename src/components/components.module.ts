import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product-component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ProductComponent
  ],
  entryComponents: [
    ProductComponent
  ]
})
export class ComponentsModule {}
