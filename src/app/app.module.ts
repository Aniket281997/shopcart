
import { CategoryModule } from './category/category.module';
import { CustomerModule } from './customer/customer.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptInterceptor } from './shared/intercept.interceptor';
import { AdminProductModule } from './admin-product/admin-product.module';
import { ProfileModule } from './profile/profile.module';
import { SharedModule } from './shared/shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPipe } from './shared/pipe/main.pipe';
import { LoginModule } from './login/login.module';
import { NgToastModule } from 'ng-angular-popup';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerProductModule } from './customer-product/customer-product.module';
import { CheckoutModule } from './checkout/checkout.module';



@NgModule({
  declarations: [AppComponent, MainPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    LayoutModule,
    SharedModule,
    ProfileModule,
    AdminProductModule,
    HttpClientModule,
    NgToastModule,
    CustomerModule,
    CategoryModule ,
    CustomerProductModule,
    CheckoutModule
  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass:InterceptInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
