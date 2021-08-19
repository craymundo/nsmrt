import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MaterialModule } from './material.module';
import { LoginComponent } from './feature/login/login.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { ResetPasswordComponent } from './feature/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './feature/forgot-password/forgot-password.component';
import { DoubleAuthenticationComponent } from './feature/double-authentication/double-authentication.component';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './feature/home/home.component';
import { CreateComponent } from './feature/user/create/create.component';
import { EditComponent } from './feature/user/edit/edit.component';
import { LayaoutComponent } from './shared/components/layaout/layaout.component';
import { InterceptorService } from './core/services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    DoubleAuthenticationComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
    LayaoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
