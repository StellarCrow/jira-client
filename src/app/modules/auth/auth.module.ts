import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {HomeComponent} from './components/pages/home/home.component';
import {FormLoginComponent} from './components/form-login/form-login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import { FormRegistrationComponent } from './components/form-registration/form-registration.component';


@NgModule({
  declarations: [HomeComponent, FormLoginComponent, FormRegistrationComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {
}
