import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from 'src/app/components/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manager-users',
  templateUrl: './manager-users.component.html',
  styleUrls: ['./manager-users.component.css']
})
export class ManagerUsersComponent {
  isChecked: boolean = false;

  constructor(private userservice:UserService,private toast: NgToastService, 
    private userService:UserService
    
    
    ) { }

inactive=false;

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }
  // managerUsers = [
   
  //   {
  //     firstname: 'Aftat',
  //     lastname: 'jemal',
  //     iban: 'CD34 5678 5678 5678 00',
  //     state:'Inactive'
  //   },
  //   // Add more sample transactions here
  // ];
  managerUsers : any[] = [];

  test(id:any){
    alert(id);
  }


  onCheckboxChange(id:any) {
    
    this.userservice.activeclient(id).subscribe({

      next:(res)=>{



        this.toast.success({detail:"SUCCESS",summary:res.msg,duration:3000});
      
  
      }, 
      error:(err)=>{
        console.log(err);
      }
  

    })


  }

  unactiveuser(){



    if(this.inactive){

      this.userservice.allclients().subscribe({

        next:(res)=>{
  
          this.managerUsers=res;
  
          console.log(res);
          this.inactive=!  this.inactive

        },
        error:(err)=>{
  
        }
  
      })
  
    }
    else {

      this.userservice.unactiveclients().subscribe({


        next:(res)=>{
  
  
          this.managerUsers=res;
          //this.toast.success({detail:"SUCCESS",summary:res.msg,duration:3000});
        
          this.inactive=!  this.inactive
    
        }, 
        error:(err)=>{
          console.log(err);
        }
  
      })
  
    }



  }

  alertConfirmation(id:any , resultMessage:any){
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
       
        this.userService.Deposite(id,resultMessage).subscribe({
          next:(res)=>{
    
            this.userService.depositeHistory(id,"DEPOSITE",resultMessage).subscribe({
  
              next:(res)=>{
                this.toast.success
                ({detail:"SUCCESS",summary:'Opération accomplie avec succès',duration:3000});
  
               // this.router.navigate(['/user/transactions']);
  
  
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

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annuler',
          'Action refuser',
          'error'
        )
      }
    })
  }


  ngOnInit(): void {



    this.userservice.allclients().subscribe({

      next:(res)=>{

        this.managerUsers=res;

        console.log(res);
      },
      error:(err)=>{

      }

    })

  }


  async emailNotification(id:any){
    const { value: text } = await Swal.fire({
        //position: 'bottom-end',
        title: 'entrez le sold ',
        input: 'text',
        confirmButtonColor: '#3085d6',

        inputPlaceholder: "entrez le sold", 
        confirmButtonText:"Déposer "
      })

      if (text) {
        const resultMessage = `${text}`;


        this.alertConfirmation(id , resultMessage);





        // this.userService.Deposite(id,resultMessage).subscribe({
        //   next:(res)=>{
    
        //     this.userService.depositeHistory(id,"DEPOSITE",resultMessage).subscribe({
  
        //       next:(res)=>{
        //         this.toast.success
        //         ({detail:"SUCCESS",summary:'le montant a été ajouté avec succès  ',duration:3000});
  
        //        // this.router.navigate(['/user/transactions']);
  
  
        //       },
        //       error:(err)=>{
        //         console.log(err);
        //       }
  
        //     })
            
        //     },
        //   error:(err)=>{
    
        //     //console.log(err);
        //   }
    
        // })
  

        // Swal.fire(

    
        //   resultMessage






          

          
        //   )


      }
  }  


  // deleteuser(id:any){

  //   this.userService.deleteuser(id).subscribe({
  //     next:(res)=>{



  //       this.toast.success
  //       ({detail:"SUCCESS",summary:'client supprimé avec succès',duration:3000});


  //       this.userservice.allclients().subscribe({

  //         next:(res)=>{
    
  //           this.managerUsers=res;
    
  //           console.log(res);
  //         },
  //         error:(err)=>{
    
  //         }
    
  //       })
    
  //     }, 
  //     error:(err)=>{

  //     }
  //   })
  // }



  deleteuser(id:any){
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

        this.userService.deleteuser(id).subscribe({
          next:(res)=>{
    
    
    
            this.toast.success
            ({detail:"SUCCESS",summary:'client supprimé avec succès',duration:3000});
    
    
            this.userservice.allclients().subscribe({
    
              next:(res)=>{
        
                this.managerUsers=res;
        
                console.log(res);
              },
              error:(err)=>{
        
              }
        
            })
        
          }, 
          error:(err)=>{
    
          }
        })
    

        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Item is safe.)',
          'error'
        )
      }
    })
  }

}
