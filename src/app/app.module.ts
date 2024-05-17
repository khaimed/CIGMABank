import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { ConfirmRegisterComponent } from './components/confirm-register/confirm-register.component';
import { MainComponent } from './components/dashboard/main/main.component';
import { MenuComponent } from './components/dashboard/menu/menu.component';
import { OverviewsComponent } from './components/dashboard/sections/admin/overviews/overviews.component';
import { ManagerUsersComponent } from './components/dashboard/sections/admin/manager-users/manager-users.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup' 
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent,
    AccessDeniedComponent,
    ConfirmRegisterComponent,
    MainComponent,
    MenuComponent,
    OverviewsComponent,
    ManagerUsersComponent,
    PagenotfoundComponent
  ],
  imports: [HttpClientModule,FormsModule,NgToastModule,NgChartsModule, 
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
