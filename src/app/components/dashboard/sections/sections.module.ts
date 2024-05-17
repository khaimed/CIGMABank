import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { ProfilComponent } from './profil/profil.component';


@NgModule({
  declarations: [
    ProfilComponent
  ],
  imports: [
    // BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SectionsRoutingModule
  ]
})
export class SectionsModule { }
