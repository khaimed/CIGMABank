import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { login } from '../models/login';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {





  email: string = '';
  password: string = '';


  loginn= new login();

    constructor(  private  auth:AuthService ,private router: Router, 
      private fb:FormBuilder, private user:UserService,
    private toast:NgToastService) {}


  onlogin(){


    this.loginn.email=this.email;
    this.loginn.password=this.password;

    // get id 
    

    this.user.checkemail(this.loginn.email).subscribe({
      next:(res)=>{
        if(res){

           this.user.isitactivated(this.loginn.email).subscribe({

      next:(res)=>{
        if(res.msg){
          this.auth.signIn(this.loginn).subscribe({
            next :(res=>{

        this.auth.storeToken(res.token);
        console.log(res.token);

        console.log(res.token)
        this.toast.success({detail:"SUCCESS", summary:res.message, duration: 5000});
        
        //this.router.navigate(['/dashboard']);




        // get id and store 

        this.auth.getid({email:this.loginn.email}).subscribe({
          next :(res=>{
            sessionStorage.setItem('id',res.id);
          
          // if the iduser verified go to dashboard else show message convermaton 
          // this.auth.isitverified({id:sessionStorage.getItem('id')}).subscribe({
          
          //   next:(res=>{
          //     if(res.Message===false){
          //       console.log("w rah false")
          //     }
          //     else {
          //       console.log(res.message)
          //     }
          //   })


          // })



          // check if is it admin or user 

          this.auth.getrole(      {  id: sessionStorage.getItem('id')}    ).subscribe({


            next :(res=>{

              

              if (res.role==="user"){

            this.router.navigate(['/user']);
            sessionStorage.setItem('role','user');

              }
              else{

                sessionStorage.setItem('role','admin');
                this.router.navigate(['/admin']);
              }
            })




          })


          })
        })




      }),
      error:(err=>{
         
        this.toast.error({detail:"ERROR",summary:err?.error.message,sticky:true});

      })

})
        } else {

          this.toast.warning({detail:"WARN",summary:'Attendez que ladministrateur active votre compte',duration:5000});

        }

      }, 
      error:(err)=>{
        console.log(err);
      }


    })

        }
        else {

          this.toast.error({detail:"ERROR",summary:'email not correct',duration:5000});
        }
      }
    })


   




    
  }

}
