import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewsComponent } from './overviews/overviews.component'

const routes: Routes = [
  {path:'',component:OverviewsComponent},
  {path:'transactions',loadChildren:()=>import('./transactions/transactions.module').then(m=>m.TransactionsModule)},
  {path:'contact',loadChildren:()=>import('./contact/contact.module').then(m=>m.ContactModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
