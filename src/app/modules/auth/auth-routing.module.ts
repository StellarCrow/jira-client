import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegistrationComponent } from './components/form-registration/form-registration.component';
import { IntroComponent } from './components/intro/intro.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: IntroComponent, pathMatch: 'full' },
      { path: 'login', component: FormLoginComponent },
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
