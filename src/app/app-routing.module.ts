import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AdmincreateComponent } from './admincreate/admincreate.component';
const routes: Routes = [
  
  {path:'register',component:RegisterComponent},
  {path:'login', component:LoginSignupComponent},
  {path:'create', component:AdmincreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
