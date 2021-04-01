import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MycartComponent } from './mycart/mycart.component';
import { ProductdisplyComponent } from './productdisply/productdisply.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { RegisterComponent } from './register/register.component';
import { AdmincreateComponent } from './admincreate/admincreate.component';

@NgModule({
  declarations: [
    AppComponent,
    MycartComponent,
    ProductdisplyComponent,
    ProfileComponent,
    LoginSignupComponent,
    RegisterComponent,
    AdmincreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
