import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './feature/forgot-password/forgot-password.component';
import { DoubleAuthenticationComponent } from './feature/double-authentication/double-authentication.component';
import { ResetPasswordComponent } from './feature/reset-password/reset-password.component';
import { HomeComponent } from './feature/home/home.component';
import { CreateComponent } from './feature/user/create/create.component';

import { UserComponent } from './feature/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'double-authentication', component: DoubleAuthenticationComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'create-user', component: CreateComponent },
  { path: 'list-user', component: UserComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
