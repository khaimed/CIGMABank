import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  

  private baseUrl:string="  https://localhost:7083/api/Auth/"

  constructor(private http:HttpClient, private router: Router ) {}




    signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}register`, userObj)
  }

  signIn(loginObj : any){
    return this.http.post<any>(`${this.baseUrl}authenticate/`,loginObj)
  }

  signOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }

  getToken(){
    return localStorage.getItem('token')
  }

  storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue)
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token')
  }


  isitverified(userid:any){

    return this.http.post<any>(`${this.baseUrl}isit_verified`, userid)
  }



  getid(userid:any){
    return this.http.post<any>(`${this.baseUrl}getuserid`, userid)
  }




  getrole(userid:any){
    return this.http.post<any>(`${this.baseUrl}checkrole`, userid)

  }



  


}
