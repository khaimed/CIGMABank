import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewsComponent } from './components/dashboard/sections/admin/overviews/overviews.component';

const routes: Routes = [
 // {path:'adminnnnn',component:OverviewsComponent}, 
  {path:'',loadChildren:()=>import('./components/components.module').then(m=>m.ComponentsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
