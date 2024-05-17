import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { AuthService } from './services/auth.service';
import { HttpClient } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { registry } from 'chart.js/dist';
import { FormsModule } from '@angular/forms';


@NgModule({

  declarations: [],
  imports: [
    CommonModule,    

    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
