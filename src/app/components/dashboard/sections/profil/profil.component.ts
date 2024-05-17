import { Component , OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { adresse } from 'src/app/components/models/adresse';
import { updateprofile } from 'src/app/components/models/updateprofile';
import { ProfileService } from 'src/app/components/services/profile.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})

// export class ProfilComponent implements OnInit {
  
//   userDto: UserDto = {
//     email: '',
//     firstname: '',
//     lastname: '',
//     password: ''
//   };

//   successMsg = '';

//   constructor(
//     private userService: UserService,
//     private helperService: HelperService
//   ) { }

//   ngOnInit(): void {
//     this.userService.findById({
//       'user-id': this.helperService.userId
//     }).subscribe({
//       next: (data) => {
//         this.userDto = data;
//       }
//     });
//   }

//   save() {
//     this.successMsg = '';
//     this.userDto.id = this.helperService.userId;
//     this.userService.save({
//       body: this.userDto
//     }).subscribe({
//       next: () => {
//         this.successMsg = 'Your profile has been successfully updated';
//       }
//     });
//   }
// }



export class ProfilComponent implements OnInit {
  
  Addaddresse=new adresse();
  updateprofile=new updateprofile();

  adresseexist :boolean=false ;

  firstname:string="";
  lastname:string="";



  city:string="";
  zipcode:number=0;
  houseNumber:number=0;
  street:string="";

 // profileService: AuthService; // Declare profileService as a class property



 //why
  // userDto = {
  //   email: '',
  //   firstname: '',
  //   lastname: '',
  //   password: '',
  //   id: '' // You need to add the 'id' property if it's used in the component
  // };

  successMsg = '';

  // Declare the 'test' variable
  test: string = 'This is a test variable';

  constructor(  private toast: NgToastService, private profileService:ProfileService) {

   }

  ngOnInit(): void {



    // Since you don't have the UserService, you can set some default values for testing purposes.
    // this.userDto = {
    //   email: 'test@example.com',
    //   firstname: 'John',
    //   lastname: 'Doe',
    //   password: 'password123',
    //   id: 'some-user-id' // You need to provide some default value for the 'id'
    // };

    this.profileService.getinfo( {id:sessionStorage.getItem('id')} ).subscribe({

      next:(res)=>{
       this.firstname=res.firstname;
       this.lastname=res.lastname;

      }, 
      error:(err)=>{
        console.log(err);
      }
      



    })

  this.profileService.checkadresseexist({id:sessionStorage.getItem('id')}).subscribe({


      next:(res)=>{
          // console.log(res)

          if(res){
            
            this.adresseexist=true
            this.city=res.city,
            this.zipcode=res.zipcode
            this.houseNumber=res.housenumber;
            this.street=res.rue

          }
          else {

            this.toast.warning({detail:"WARN",summary:'Veuillez entrer vos informations dadresse',duration:3000});

          }
 
       }, 
       error:(err)=>{
         console.log(err);
       }
 

    })




  }






  save() {
    //this.successMsg = 'Your profile has been successfully updated';

    if(this.adresseexist==false){
      

      this.Addaddresse.city=this.city;
      this.Addaddresse.houseNumber=this.houseNumber ; 
      this.Addaddresse.idUser = sessionStorage.getItem('id') || '';
      this.Addaddresse.street=this.street;
      this.Addaddresse.zipCode=this.zipcode;
    
    this.profileService.addadresse(this.Addaddresse).subscribe({
      next:(res)=>{

        this.toast.success
        ({detail:"SUCCESS",summary:' successfully',duration:3000});

       }, 
       error:(err)=>{
         console.log(err);
       }
    })

    }
    else {

      this.updateprofile.firstname=this.firstname;
      this.updateprofile.lastname=this.lastname;


      this.updateprofile.city=this.city;
      this.updateprofile.houseNumber=this.houseNumber ; 
      this.updateprofile.idUser = sessionStorage.getItem('id') || '';
      this.updateprofile.street=this.street;
      this.updateprofile.zipCode=this.zipcode;
    
      this.profileService.updateinfo(this.updateprofile).subscribe({
        next:(res)=>{
  

          this.toast.success({detail:"SUCCESS",summary:'modified successfuly',duration:4000});


         }, 
         error:(err)=>{
           console.log(err);
         }
      })
  



    }


  }



}