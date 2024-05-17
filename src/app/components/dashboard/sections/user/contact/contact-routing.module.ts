import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyContactListComponent } from './my-contact-list/my-contact-list.component'
import { NewContactComponent } from './new-contact/new-contact.component'

const routes: Routes = [
  {path:'',component:MyContactListComponent},
  {path:'new',component:NewContactComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
