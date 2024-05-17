import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private router: Router) { }


  ngOnInit(): void {






    if(sessionStorage.getItem('id')==null){

      // toast you have to login first 
      alert("you have to log in ")
       this.router.navigate(['']);

    } else {


      
      console.log(sessionStorage.getItem('id'))
    }



  }

}
