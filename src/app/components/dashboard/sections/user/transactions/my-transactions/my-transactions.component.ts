import { Component } from '@angular/core';
import { UserService } from 'src/app/components/services/user.service';

@Component({
  selector: 'app-my-transactions',
  templateUrl: './my-transactions.component.html',
  styleUrls: ['./my-transactions.component.css']
})

export class MyTransactionsComponent {

  constructor(private userservice:UserService){

  }
  transactions : any[] = [];






  ngOnInit(): void {


    this.userservice.alltransaction(sessionStorage.getItem('id')).subscribe({

      next:(res)=>{

        this.transactions=res;
      },
      error:(err)=>{

        console.log(err)
      }
      
    })



  }

}
