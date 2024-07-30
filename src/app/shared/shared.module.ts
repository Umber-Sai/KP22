import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortTextPipe } from './pipes/short-text.pipe';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ShortTextPipe,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ShortTextPipe,
    ProductCardComponent,
  ]

})
export class SharedModule { }
