import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component'

const routes: Routes = [
  {path:'', component:MainComponent,
    children:[
      { path:'',loadChildren:()=>import('./sections/sections.module').then(m=>m.SectionsModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

