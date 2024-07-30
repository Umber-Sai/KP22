import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { ProductsComponent } from './views/products/products/products.component';
import { ProductComponent } from './views/products/product/product.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ShortTextPipe } from './shared/pipes/short-text.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainModule } from './views/main/main.module';
import { ProductsModule } from './views/products/products.module';
import { OrderModule } from './views/order/order.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    MainModule,
    ProductsModule,
    OrderModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
