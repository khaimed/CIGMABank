import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { MyTransactionsComponent } from './my-transactions/my-transactions.component';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations:[
    MyTransactionsComponent,
    NewTransactionComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule, HttpClientModule,FormsModule,
  ]
})
export class TransactionsModule { }
