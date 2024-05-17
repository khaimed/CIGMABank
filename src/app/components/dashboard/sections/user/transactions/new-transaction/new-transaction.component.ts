import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ContactServiceService } from 'src/app/components/services/contact-service.service';
import { UserService } from 'src/app/components/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})


export class NewTransactionComponent {
  
  selectedTransactionType: string = 'TRANSFERT'; // This property will hold the selected value
transactiontype:string='';
  constructor(private cantactService:ContactServiceService,private router: Router,  private toast: NgToastService ,
    private userService:UserService) { }
 

  contactslist: any[] = [];
  transactionAmount: number=0;
  ibaan:string="";

  



  ngOnInit(): void {
    this.cantactService.getcontact(sessionStorage.getItem('id')).subscribe({

      next:(res)=>{

        this.contactslist=res;
        console.log(this.contactslist)
      
      },
      error:(err)=>{

        //console.log(err);
      }
    })

  
  }



  onContactSelected(event: any) {
    const selectedValue = event.target.value;

    this.ibaan= selectedValue
  }





  save(){



    //id date userid trnsationtype amount 




  








    if(this.selectedTransactionType=="TRANSFERT"){

                // is it possible transfer 
   this.userService.isitpossibletransfer(  sessionStorage.getItem('id') ,this.transactionAmount)
   .subscribe({

    next:(res)=>{

      if(res.msg){

        this.userService.trasnfer(sessionStorage.getItem('id'), this.ibaan,this.transactionAmount ).subscribe({
          next:(res)=>{
        
  
            this.userService.TransferHistory(sessionStorage.getItem('id'),"TRANSFERT",this.transactionAmount).subscribe({
  
              next:(res)=>{




                this.toast.success
                ({detail:"SUCCESS",summary:'Your transfer has been completed successfully',duration:3000});
  
                this.router.navigate(['/user/transactions']);
  

              },
              error:(err)=>{
                console.log(err);
              }
  
            })
  
  
  
            },
          error:(err)=>{
            console.log(err);
          }
        })
  

      }
      else {
        this.toast.warning({detail:"WARN",summary:'sold not enough',duration:4000});

      }
    }, 
    error:(err)=>{

      console.log(err);
    }


   })





    }
    else{
      
      this.userService.Deposite(sessionStorage.getItem('id'),this.transactionAmount).subscribe({
        next:(res)=>{
  
          this.userService.depositeHistory(sessionStorage.getItem('id'),"DEPOSITE",this.transactionAmount).subscribe({

            next:(res)=>{
              this.toast.success
              ({detail:"SUCCESS",summary:'The money has been deposited successfully into your account',duration:3000});

              this.router.navigate(['/user/transactions']);


            },
            error:(err)=>{
              console.log(err);
            }

          })
          
          },
        error:(err)=>{
  
          //console.log(err);
        }
  
      })
  
      }




  }



  alertConfirmation(){
    Swal.fire({
      position: 'center',
      title: 'Êtes-vous sûr ?',
      text: 'Ce processus est irréversible.',
      icon: 'warning',

       customClass: {
        confirmButton: 'btn-primary',
      },
    
            showCancelButton: true,
      confirmButtonText: 'Oui, continuez.',
      cancelButtonText: 'Non, laissez-moi réfléchir'
    }).then((result) => {
      if (result.value) {
        if(this.selectedTransactionType=="TRANSFERT"){

          // is it possible transfer 
this.userService.isitpossibletransfer(  sessionStorage.getItem('id') ,this.transactionAmount)
.subscribe({

next:(res)=>{

if(res.msg){

  this.userService.trasnfer(sessionStorage.getItem('id'), this.ibaan,this.transactionAmount ).subscribe({
    next:(res)=>{
  

      //            this.userService.depositeHistory(sessionStorage.getItem('id'),"TRANSFERT",this.transactionAmount) .subscribe({

      this.userService.TransferHistory(sessionStorage.getItem('id'),"TRANSFERT",this.transactionAmount).subscribe({

        next:(res)=>{



          // this.toast.success
          // ({detail:"SUCCESS",summary:'Your transfer has been completed successfully',duration:3000});

          // this.router.navigate(['/user/transactions']);

          // get iban from user id 


          this.userService.ibantoid(this.ibaan).subscribe({
            next:(res)=>{

                        this.userService.depositeHistory(res,"DEPOSITE",this.transactionAmount) .subscribe({

            next:(res)=>{


              
          this.toast.success
          ({detail:"SUCCESS",summary:'Your transfer has been completed successfully',duration:3000});

          this.router.navigate(['/user/transactions']);
            },
            error:(err)=>{

            }


          })

            },
            error:(err)=>{

            }
          })





        },
        error:(err)=>{
          console.log(err);
        }

      })



      },
    error:(err)=>{
      console.log(err);
    }
  })


}
else {
  this.toast.warning({detail:"WARN",summary:'sold not enough',duration:4000});

}
}, 
error:(err)=>{

console.log(err);
}


})





}
else{

this.userService.Deposite(sessionStorage.getItem('id'),this.transactionAmount).subscribe({
  next:(res)=>{

    this.userService.depositeHistory(sessionStorage.getItem('id'),"DEPOSITE",this.transactionAmount).subscribe({

      next:(res)=>{
        this.toast.success
        ({detail:"SUCCESS",summary:'The money has been deposited successfully into your account',duration:3000});

        this.router.navigate(['/user/transactions']);


      },
      error:(err)=>{
        console.log(err);
      }

    })
    
    },
  error:(err)=>{

    //console.log(err);
  }

})

}


        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annuler',
          'Action refuser',
          'error'
        )
      }
    })
  }


}