import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegistrationComponent } from './components/form-registration/form-registration.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'login', component: FormLoginComponent, pathMatch: 'full' },
      { path: 'registration', component: FormRegistrationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
