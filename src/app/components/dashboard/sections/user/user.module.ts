import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule, NgApexchartsModule
  ]
})
export class UserModule { }
