import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ContactServiceService } from 'src/app/components/services/contact-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-contact-list',
  templateUrl: './my-contact-list.component.html',
  styleUrls: ['./my-contact-list.component.css']
})


export class MyContactListComponent {

  constructor(private cantactService:ContactServiceService, 
    private toast: NgToastService) { }
 

  contactslist: any[] = [];

  // delete(id:any){


  //   this.cantactService.deleltecontact(id).subscribe({
  //     next:(res)=>{


  //       // refresh data here 
  //       this.cantactService.getcontact(sessionStorage.getItem('id')).subscribe({

  //         next:(res)=>{
    
  //           this.contactslist=res;
  //           console.log(this.contactslist)
          
  //         },
  //         error:(err)=>{
    
  //           console.log(err);
  //         }
  //       })
  //           this.toast.success({detail:"SUCCESS",summary:'your contact deleted successfully',duration:3000});


  //     },
  //     error:(err)=>{

  //       console.log(err);
  //     }
  //   })

  // }





  deletecontact(id:any){
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

        this.cantactService.deleltecontact(id).subscribe({
          next:(res)=>{
    
    
            // refresh data here 
            this.cantactService.getcontact(sessionStorage.getItem('id')).subscribe({
    
              next:(res)=>{
        
                this.contactslist=res;
                console.log(this.contactslist)
              
              },
              error:(err)=>{
        
                console.log(err);
              }
            })
                this.toast.success({detail:"SUCCESS",summary:'your contact deleted successfully',duration:3000});
    
    
          },
          error:(err)=>{
    
            console.log(err);
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





  modify(id:any){
    alert(id)
  }




  ngOnInit(): void {
    
    this.cantactService.getcontact(sessionStorage.getItem('id')).subscribe({

      next:(res)=>{

        this.contactslist=res;
        console.log(this.contactslist)
      
      },
      error:(err)=>{

        console.log(err);
      }
    })

  
  }




}