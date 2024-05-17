import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { newcontact } from 'src/app/components/models/newcontact';
import { ContactServiceService } from 'src/app/components/services/contact-service.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent {
  


  iban: string = '';
  idUserContact:string='';
  firstname:string='';
  lastname:string='';
  email:string='';

  addcntc = new newcontact();


  constructor(   private router: Router, private toast: NgToastService ,
    private contactService:ContactServiceService) {}


  addcontact(){

    this.contactService.checkibanexist(this.iban).subscribe({

      next:(res)=>{
        if(res.message==='true'){

          this.contactService.getidbyiban(this.iban).subscribe({
            next:(res)=>{

              this.addcntc.idUserContact=res;
              this.addcntc.iban=this.iban;
              this.addcntc.idUser=sessionStorage.getItem('id') || '';
              this.addcntc.firstname=this.firstname;
              this.addcntc.lastname=this.lastname;
              this.addcntc.email=this.email;


              this.contactService.addcontact(this.addcntc).subscribe({
                next:(res)=>{
                  this.toast.success({detail:"success",summary:"le contact a ete ajoute avec succes",duration:3000});

                  this.router.navigate(['/user/contact']);

                }

                , error:(err)=>{
                  console.log(err)
                }
              })

            },
            error:(err)=>{
              console.log(err)
            }

            
          })

        }
        else {
          this.toast.warning({detail:"warning",summary:"cette IBAN n'existe pas dans notre base de données",duration:3000});


        }
      },
      error:(err)=>{
        console.log(err)
      }


    })



  }


}
