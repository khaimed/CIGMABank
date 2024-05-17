import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTransactionsComponent } from './my-transactions/my-transactions.component'
import { NewTransactionComponent } from './new-transaction/new-transaction.component'

const routes: Routes = [
  {path:'',component:MyTransactionsComponent},
  {path:'new',component:NewTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
