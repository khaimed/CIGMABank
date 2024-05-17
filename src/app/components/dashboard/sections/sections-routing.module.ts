import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './profil/profil.component'

const routes: Routes = [
    { path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
    { path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
    // add role here bro
    { path:  'profile',component:ProfilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
