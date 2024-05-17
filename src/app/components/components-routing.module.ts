import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { ConfirmRegisterComponent } from './confirm-register/confirm-register.component'
import { RecoverPasswordComponent } from './recover-password/recover-password.component'
import { AccessDeniedComponent } from './access-denied/access-denied.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'

const routes: Routes = [
  { path: '',component:HomeComponent },
  { path: 'login',component:LoginComponent },
  { path: 'register',component:RegisterComponent },
  { path: 'confirm-register',component:ConfirmRegisterComponent },
  { path: 'recover-password',component:RecoverPasswordComponent },
  { path: 'access-denied',component:AccessDeniedComponent },
  { path: '',loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
  { path: '**',component:PagenotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
