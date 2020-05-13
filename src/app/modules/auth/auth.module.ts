import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { HomeComponent } from './components/pages/home/home.component';
import { FormLoginComponent } from './components/form-login/form-login.component';


@NgModule({
  declarations: [HomeComponent, FormLoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
