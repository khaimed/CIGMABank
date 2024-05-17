import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { MyContactListComponent } from './my-contact-list/my-contact-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MyContactListComponent,
    NewContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule, HttpClientModule,FormsModule,
    
    
  ]
})
export class ContactModule { }
