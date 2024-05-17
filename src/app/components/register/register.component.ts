import { Component, Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { register } from '../models/register';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isConditionVisible = false;

  email: string = '';
  firstname:string='';
  lastname:string='';
  password: string = '';
  cnfpassword:string='';

  registerr = new register();

  constructor( private router: Router,private  auth:AuthService,private toast:NgToastService) {}

  toggleConditionVisibility() {
    this.isConditionVisible = !this.isConditionVisible;
  }
  closeCondition() {
    this.isConditionVisible = false;
  }



    register(){


    this.registerr.email=this.email;
    this.registerr.firstname=this.firstname;
    this.registerr.password=this.password;
    this.registerr.lastname=this.lastname;



    



    console.log(this.registerr)




    if(this.cnfpassword==this.password){

      this.auth.signUp(this.registerr).subscribe({
          next:(res=>{


            this.router.navigate(['/login']);


            this.toast.success({detail:"SUCCESS", summary:res.message, duration: 3000});

          }),
          error:(err=>{
            console.log("error");
            this.toast.error({detail:"ERROR",summary:err?.error.message,sticky:true});

          })
      })



    }
    else{

      this.toast.error({detail:"ERROR",summary:"password should be the same",sticky:true});

    }

  }

}