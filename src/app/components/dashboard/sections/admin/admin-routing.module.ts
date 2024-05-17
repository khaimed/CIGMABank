import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewsComponent } from './overviews/overviews.component'
 
import { ManagerUsersComponent } from './manager-users/manager-users.component'

const routes: Routes = [
  {path:'',component:OverviewsComponent},
  {path:'customers',component:ManagerUsersComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
