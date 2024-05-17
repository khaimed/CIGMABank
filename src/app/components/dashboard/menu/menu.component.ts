import { Component , OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit{



  role :string ='';
  fullname:string='';
  


  constructor(  private  auth:AuthService ,private router: Router, private user:UserService,
    private fb:FormBuilder,
  private toast:NgToastService) {}



  ngOnInit(): void {



    // get username 


    this.user.fullname({id:sessionStorage.getItem('id')}).subscribe({
      next :(res=>{
        this.fullname=res.fullname

        // console.log(this.fullname)



      }),
      error:(err=>{
        console.log(err);
      })
      
    })


    // modify dashboard based if is it cllient or admin 


    if (sessionStorage.getItem('role')==='user'){

     this.role="user"

    }
    if (sessionStorage.getItem('role')==='admin'){

      this.role="admin"
 
     }










    const menu =document.querySelector('.menu');
    const navbar = document.querySelector('nav');
 
    menu!.addEventListener('click', ()=>{
        if(!menu!.classList.contains('active')){
          menu!.classList.add("active")
          navbar!.classList.add("open")
        }else{
          menu!.classList.remove("active")
          navbar!.classList.remove("open")
        }




    })




  
  }





}