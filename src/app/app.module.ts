import { CustomerModule } from './customer/customer.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptInterceptor } from './shared/intercept.interceptor';
import { AdminProductModule } from './admin-product/admin-product.module';
import { ProfileModule } from './profile/profile.module';
import { SharedModule } from './shared/shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPipe } from './shared/pipe/main.pipe';
import { LoginModule } from './login/login.module';
import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  declarations: [AppComponent, MainPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    LayoutModule,
    SharedModule,
    LayoutModule,
    ProfileModule,
    AdminProductModule,
    HttpClientModule,
    NgToastModule,
    CustomerModule
   

  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass:InterceptInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
